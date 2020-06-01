import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';

// Hide in the future using environment variable
const CLOUDINARY_UPLOAD_PRESET = 'r1whlcfj';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/sichonky/image/upload';

class Upload extends Component {
    constructor() {
      super();
      this.state = {
        files: [],
        uploadedFileCloudinaryUrl: '',
      };
      this.onDrop = this.onDrop.bind(this);
      this.onUpload = this.onUpload.bind(this);
    }
  
    onDrop(files) {
        this.setState({
            uploadedFile: files[0],
        });
        // console.log(files[0]);
        this.onUpload(files[0]);
    }

    onUpload(file) {
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

        upload.end((err, response) => {
            if (err) {
                console.err(err);
            }

            if (response.body.secure_url !== '') {
                this.setState({
                    uploadedFileCloudinaryUrl: response.body.secure_url
                });
                // Will send to backend
                console.log('IMG URL:' + response.body.secure_url);
            }
        })
    }

    render() {
      const files = this.state.files.map(file => (
        <li key={file.name}>
          {file.name} - {file.size} bytes
        </li>
      ));
  
      return (
        <form>
            <Dropzone onDrop={this.onDrop}>
            {({getRootProps, getInputProps}) => (
                <section className="container">
                <div {...getRootProps({className: 'dropzone'})}>
                    <input {...getInputProps()} />
                    <p>Click to select files</p>
                </div>
                </section>
            )}
            </Dropzone>

            <div>
                {this.state.uploadedFileCloudinaryUrl === '' ? null : 
                <div>
                <p>{this.state.uploadedFileCloudinaryUrl}</p>
                <img src={this.state.uploadedFileCloudinaryUrl} width='500px'/>
                </div>}
            </div>
        </form>
      );
    }
  }

export default Upload;