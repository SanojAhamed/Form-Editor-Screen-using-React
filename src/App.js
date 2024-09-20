import React, { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Form from "./components/Form";
import QuestionForm from "./components/QuestionForm";
import ColorBlocks from "./components/ColorBlocks";
import AddFieldModal from "./components/AddFieldModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isQuestionFormVisible, setIsQuestionFormVisible] = useState(false);
  const [isEmailSettingsVisible, setIsEmailSettingsVisible] = useState(false);
  const [title, setTitle] = useState("Welcome to our form");
  const [description, setDescription] = useState(
    "This is a description of the form"
  );
  const [emailTitle, setEmailTitle] = useState("Enter your email");
  const [emailDescription, setEmailDescription] = useState(
    "This will be used to contact you for the next steps."
  );
  const [isEmailRequired, setIsEmailRequired] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false); // Close modal

  const handleShowQuestionForm = () => {
    setIsQuestionFormVisible(true); 
    setIsEmailSettingsVisible(true); 
  };

  const handleCloseEmailSettings = () => {
    setIsQuestionFormVisible(false);
    setIsEmailSettingsVisible(false); 
  };

  return (
    <div className="app">
      <Sidebar
        title={title}
        description={description}
        emailTitle={emailTitle}
        emailDescription={emailDescription}
        isEmailRequired={isEmailRequired}
        onTitleChange={setTitle}
        onDescriptionChange={setDescription}
        onEmailTitleChange={setEmailTitle}
        onEmailDescriptionChange={setEmailDescription}
        onEmailRequiredChange={setIsEmailRequired}
        onAddFieldClick={openModal}
        onShowQuestionForm={handleShowQuestionForm}
        onCloseEmailSettings={handleCloseEmailSettings}
      />
      <div className="main-content">
        {isQuestionFormVisible ? (
          <QuestionForm />
        ) : (
          <>
            <Form title={title} description={description} />
            <ColorBlocks />
          </>
        )}
      </div>
      {isModalOpen && <AddFieldModal closeModal={closeModal} />}
    </div>
  );
}

export default App;
