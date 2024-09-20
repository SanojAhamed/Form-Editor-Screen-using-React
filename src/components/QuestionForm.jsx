import React from "react";  
import "./css/QuestionForm.css";  

const QuestionForm = () => {  
  return (  
    <div className="form-container">  
      <input type="text" className="text-input-1" placeholder="1 > Add Question Title" required />
      <input type="text" placeholder="   Add Question Description (optional)" required className="text-input-2" />  
      <input type="text" placeholder="    Type here..." required className="text-input-3" />  
      <div className="underline"></div>   
    </div>  
  );  
};  

export default QuestionForm;