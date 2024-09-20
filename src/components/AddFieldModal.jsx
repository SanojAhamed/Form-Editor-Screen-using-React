import React from "react";  
import "./css/AddFieldModal.css";  
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome  

const AddFieldModal = ({ closeModal }) => {  
  return (  
    <div className="modal-overlay">  
      <div className="modal-content">  
        <div className="modal-header">  
          <h3>Add field</h3>  
          <button className="close-btn" onClick={closeModal}>  
            ✖  
          </button>  
        </div>  
        <div className="modal-body">  
          <button className="field-option">  
            <span className="icon"><i className="fas fa-check" style={{ color: 'rgba(0, 0, 0, 0.6)' }}></i></span> Multiple Choice  
          </button>  
          <button className="field-option">  
            <span className="icon"><i className="fas fa-pencil-alt" style={{ color: 'rgba(0, 0, 0, 0.6)' }}></i></span> Short Text  
          </button>  
          <button className="field-option">  
            <span className="icon"><i className="fas fa-envelope" style={{ color: 'rgba(0, 0, 0, 0.6)' }}></i></span> Email  
          </button>  
          <button className="field-option">  
            <span className="icon"><i className="fas fa-caret-down" style={{ color: 'rgba(0, 0, 0, 0.6)' }}></i></span> Dropdown  
          </button>  
          <button className="field-option">  
            <span className="icon"><i className="fas fa-phone" style={{ color: 'rgba(0, 0, 0, 0.6)' }}></i></span> Phone Number  
          </button>  
          <button className="field-option">  
            <span className="icon"><i className="fas fa-folder" style={{ color: 'rgba(0, 0, 0, 0.6)' }}></i></span> Section  
          </button>  
          <button className="field-option">  
            <span className="icon"><i className="fas fa-address-book" style={{ color: 'rgba(0, 0, 0, 0.6)' }}></i></span> Contact Information  
          </button>  
          <button className="field-option">  
            <span className="icon"><i className="fas fa-file" style={{ color: 'rgba(0, 0, 0, 0.6)' }}></i></span> Legal  
          </button>  
          <button className="field-option">  
            <span className="icon"><i className="fas fa-globe" style={{ color: 'rgba(0, 0, 0, 0.6)' }}></i></span> Country  
          </button>  
        </div>  
      </div>  
    </div>  
  );  
};  

export default AddFieldModal;