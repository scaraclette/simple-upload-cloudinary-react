import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';

// Hide in the future using environment variable
const CLOUDINARY_UPLOAD_PRESET = process.env.REACT_APP_PRESET;
const CLOUDINARY_UPLOAD_URL = process.env.REACT_APP_API;

class Upload extends Component {
    constructor() {
      super();
      this.state = {
        isLoading: false,
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
        this.onUpload(files[0]);
    }

    onUpload(file) {
        this.setState({
            isLoading: true
        });
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
                this.setState({
                    isLoading: false
                });
                // The following URL can be sent to backend for database
                console.log('IMG URL:' + response.body.secure_url);
            }
        })
    }

    render() {
        console.log(CLOUDINARY_UPLOAD_PRESET);
      return (
        <form>
            <Dropzone onDrop={this.onDrop}>
            {({getRootProps, getInputProps}) => (
                <section className="container">
                <div {...getRootProps({className: 'dropzone'})}>
                    <input {...getInputProps()} />
                    <p>Click to select files (maximum of 10MB)</p>
                </div>
                </section>
            )}
            </Dropzone>

            {/* The following div shows the status of the upload and uploaded image with URL*/}
            <div>
                {this.state.isLoading === false ?
                    <div>
                        {this.state.uploadedFileCloudinaryUrl === '' ? null : 
                        <div>
                        <p>{this.state.uploadedFileCloudinaryUrl}</p>
                        <img src={this.state.uploadedFileCloudinaryUrl} width='500px'/>
                        </div>}
                    </div>
                 : <h3>Uploading...</h3>}
            </div>
        </form>
      );
    }
  }

export default Upload;