import React from 'react';
import {post} from 'axios';

const UploadFile = ({setImageUrl}) => {

    const uploadImage = (event) => {
        const image = event.target.files[0]
        const url = 'http://localhost:4000/api/internal/upload'
        const formData = new FormData();
        formData.append('image', image)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        console.log('changing')
        post(url, formData, config)
            .then(response => {
                if (response && response.data !== undefined) {
                    setImageUrl(response.data.file.filename);
                    console.log('Image url', response.data.file.filename)
                }
            })
    }

    return (
        <div>
            <input
                title="Choose file"
                type="file"
                onChange={(event) => uploadImage(event)}
            />
        </div>
    )
}

export default UploadFile