
import React, {useState} from 'react';

function UploadAndDisplayImage () {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div>
            <h3>Upload image</h3>

            {selectedImage && (
                <div>
                    <img alt="not found" src={URL.createObjectURL(selectedImage)} />
                    <br />
                    <button onClick={() => setSelectedImage(null)}>Remove</button>
                </div>
            )}

            <br />

            <input type="file" name="myImage" 
            onChange={(event) => {
                console.log(event.target.files[0]);
                 setSelectedImage(event.target.files[0]);
                 }} 
            />
        </div>
    )
}

export default UploadAndDisplayImage;