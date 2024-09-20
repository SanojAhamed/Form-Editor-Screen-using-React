import React, { useState } from "react";
import "./css/EmailSettingsSidebar.css";
import "./css/EmailSettingsSidebar.css";

const EmailSettingsSidebar = ({
  closeSidebar,
  currentEmailTitle,
  currentEmailDescription,
  isRequired,
  onEmailTitleChange,
  onEmailDescriptionChange,
  onEmailRequiredChange,
}) => {
  const [required, setRequired] = useState(isRequired);

  const handleSave = () => {
    onEmailRequiredChange(required);
    closeSidebar();
  };

  return (
    <div className="settings-sidebar">
      <div className="sidebar-header">
        <h2>
          {" "}
          ⚙️Settings <br />
        </h2>
        <button className="close-btn" onClick={closeSidebar}>
          ✖
        </button>
      </div>

      <div className="sidebar-body">
        <label>Title</label>
        <input
          type="text"
          value={currentEmailTitle}
          onChange={(e) => onEmailTitleChange(e.target.value)}
          placeholder="Enter your email"
        />
 <label>Description</label>
<input
          type="text"
          value={currentEmailDescription}
          onChange={(e) => onEmailDescriptionChange(e.target.value)}
          placeholder="Add Question Description (optional)"
        />

        <div className="required-container">
          <label htmlFor="required">Required</label>
          <label className="switch">
            <input
              type="checkbox"
              id="required"
              checked={required}
              onChange={() => setRequired(!required)}
            />
            <span className="slider round"></span>
          </label>
        </div>
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

export default EmailSettingsSidebar;
