import React, { useRef, useState } from "react";
import "./css/SettingsSidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

const SettingsSidebar = ({
  closeSidebar,
  currentTitle,
  currentDescription,
  onTitleChange,
  onDescriptionChange,
  currentButtonText,
  onButtonTextChange = () => {}, 
  
}) => {
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
  };

  const handleSave = () => {
    onTitleChange(currentTitle);
    onDescriptionChange(currentDescription);
    onButtonTextChange(currentButtonText);
    closeSidebar();
  };

  return (
    <div className="settings-sidebar">
      <div className="sidebar-header">
        <h2>
          <span role="img" aria-label="settings">
            ⚙️
          </span>{" "}
          Settings
        </h2>
        <button className="close-btn" onClick={closeSidebar}>
          ✖
        </button>
      </div>
      <div className="sidebar-body">
        <label>Title</label>
        <input
          type="text"
          value={currentTitle}
          onChange={(e) => onTitleChange(e.target.value)}
        />
        <label>Description</label>
        <textarea
          value={currentDescription}
          onChange={(e) => onDescriptionChange(e.target.value)}
        ></textarea>
        <label>Button Text</label>
        <input
          type="text"
          value={currentButtonText}
          onChange={(e) => onButtonTextChange(e.target.value)}
        />

        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
        <button className="upload-btn" onClick={handleUploadClick}>
          <FontAwesomeIcon icon={faUpload} /> Upload
        </button>

        {selectedImage && (
          <div className="image-preview">
            <img src={selectedImage} alt="Selected" className="preview-image" />
            <button className="remove-image-btn" onClick={handleRemoveImage}>
              Remove Image
            </button>
          </div>
        )}

        <div className="actions">
          <button className="save-btn" onClick={handleSave}>
            Save
          </button>
          <button className="discard-btn" onClick={closeSidebar}>
            Discard
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsSidebar;
