import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const ALLOWED_IMAGE_TYPES = ["image/png", "image/jpg", "image/jpeg"];

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const changeHandler = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && ALLOWED_IMAGE_TYPES.includes(selectedFile.type)) {
      setFile(selectedFile);
      setError(null);
    } else {
      setFile(null);
      setError("Please select an image file (png, jpg or jpeg)");
    }
  };

  return (
    <form>
      <label>
        <input type="file" onChange={changeHandler} />
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
