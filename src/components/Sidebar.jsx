import React, { useState } from 'react';
import '../components/css/Sidebar.css';
import SettingsSidebar from './SettingsSidebar';
import EmailSettingsSidebar from './EmailSettingsSidebar'; 

const Sidebar = ({
  title,
  description,
  emailTitle,
  emailDescription,
  isEmailRequired,
  onTitleChange,
  onDescriptionChange,
  onEmailTitleChange,
  onEmailDescriptionChange,
  onEmailRequiredChange,
  onAddFieldClick,
  onShowQuestionForm, 
  onCloseEmailSettings 
}) => {
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);
  const [isEmailSettingsVisible, setIsEmailSettingsVisible] = useState(false);

  const handleShowSettings = () => {
    setIsSettingsVisible(true);
    setIsEmailSettingsVisible(false);
  };

  const handleShowEmailSettings = () => {
    setIsEmailSettingsVisible(true);
    setIsSettingsVisible(false);
    onShowQuestionForm(); 
  };

  const closeSidebar = () => {
    setIsSettingsVisible(false);
    setIsEmailSettingsVisible(false);
    onCloseEmailSettings(); 
  };

  return (
    <div>
      <div className="sidebar">
        <h2>Steps</h2>
        <ul>
          <li onClick={handleShowSettings}>Welcome screen</li>
          <li>Enter your name</li>
          <li onClick={handleShowEmailSettings}>Enter your email</li>
        </ul>
        <button className="add-field-btn" onClick={onAddFieldClick}>
          + Add Field
        </button>
        <ul>
          <br />
          <li>End Screen</li>
        </ul>
      </div>

      {isSettingsVisible && (
        <SettingsSidebar
          closeSidebar={closeSidebar}
          currentTitle={title}
          currentDescription={description}
          onTitleChange={onTitleChange}
          onDescriptionChange={onDescriptionChange}
        />
      )}

      {isEmailSettingsVisible && (
        <EmailSettingsSidebar
          closeSidebar={closeSidebar}
          currentEmailTitle={emailTitle}
          currentEmailDescription={emailDescription}
          isRequired={isEmailRequired}
          onEmailTitleChange={onEmailTitleChange}
          onEmailDescriptionChange={onEmailDescriptionChange}
          onEmailRequiredChange={onEmailRequiredChange}
        />
      )}
    </div>
  );
};

export default Sidebar;
