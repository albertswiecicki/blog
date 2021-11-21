import React, { useState } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Button, TextField } from "@mui/material";

const AddImagesForm = () => {
  const [images, setImages] = useState([]);
  const [file, setFile] = useState(null);

  const onFileChange = async (e) => {
    setFile(e.target.files[0]);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;
    const storage = getStorage();
    // we might want to change name, to prevent overiding
    const fileRef = ref(storage, `images/${file.name}`);
    const uploadTask = await uploadBytes(fileRef, file);
    const url = await getDownloadURL(fileRef);

    const altname = e.target.altname.value;
    if (url) {
      setImages([...images, { url: url, alt: altname }]);
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <Button variant="contained" component="label">
          Upload File
          <input type="file" onChange={onFileChange} />
        </Button>
        <TextField
          id="outlined-basic"
          label="altname"
          variant="outlined"
          name="altname"
        />
        <Button type="submit" variant="contained">
          Add image
        </Button>
      </form>

      <ul>
        {images.map((image, idx) => {
          return (
            <li key={image.alt}>
              <img width="100" height="100" src={image.url} alt={image.alt} />
              alt: {image.alt} url: {image.url}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default AddImagesForm;
