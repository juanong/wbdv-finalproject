import React, {useState} from 'react';
import {post} from 'axios';

const UploadFile = ({setImageUrl, userProfile, setUserProfile}) => {

    const [imageUploaded, setImageUploaded] = useState(false)

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
        if (image !== "undefined" && typeof image !== "undefined") {
            post(url, formData, config)
                .then(response => {
                    if (response && response.data !== undefined) {
                        const imageUrl = response.data.file.filename
                        setImageUrl(imageUrl);
                        setImageUploaded(true)
                        setUserProfile && setUserProfile({
                            ...userProfile,
                            profilePic_url: "http://localhost:4000/api/internal/images/" + imageUrl
                        })
                    }
                })
        }
    }

    return (
        <div>
            <input
                className={imageUploaded ? "readOnly": ""}
                title="Choose file"
                type="file"
                onChange={(event) => uploadImage(event)
                }
            />
        </div>
    )
}

export default UploadFile