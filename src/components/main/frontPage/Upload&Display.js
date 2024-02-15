
// import React, {useState} from 'react';

// function UploadAndDisplayImage () {
//     const [selectedImage, setSelectedImage] = useState(null);
//     const [imageUrl, setImageUrl] = useState(null);

//     const handleImageUpload = async () => {
//         if (!selectedImage) return;

//         try {
//             // Send the image file to your server or cloud storage
//             const formData = new FormData();
//             formData.append('image', selectedImage);

//             const response = await fetch('/upload', {
//                 method: 'POST',
//                 body: formData,
//             });

//             if (response.ok) {
//                 const data = await response.json();
//                 setImageUrl(data.imageUrl); // Assuming your server responds with the URL of the uploaded image
//             } else {
//                 console.error('Failed to upload image');
//             }
//         } catch (error) {
//             console.error('Error uploading image:', error);
//         }
//     };

//     return (
//         <div>
//             <h3>Upload image</h3>

//             {selectedImage && (
//                 <div>
//                     <img alt="not found" src={URL.createObjectURL(selectedImage)} />
//                     <br />
//                     <button onClick={() => setSelectedImage(null)}>Remove</button>
//                 </div>
//             )}

//             <br />

//             <input type="file" name="myImage" 
//             onChange={(event) => {
//                 console.log(event.target.files[0]);
//                  setSelectedImage(event.target.files[0]);
//                  }} 
//             />

//             <button onClick={handleImageUpload}>Upload Image</button>

//             {imageUrl && (
//                 <div>
//                     <h4>Uploaded Image:</h4>
//                     <img src={imageUrl} alt="Uploaded" />
//                 </div>
//             )}


//         </div>
//     )
// }

// export default UploadAndDisplayImage;