import React, { useState } from "react";
import { saveSurveyResponse } from "./firebase/saveSurvey";

export default function SurveyForm() {
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    feedback: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await saveSurveyResponse(formData);
    setSubmitted(true);
  };

  return (
    <div>
      {submitted ? (
        <p>Thank you for submitting the survey!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            name="age"
            placeholder="Your age"
            value={formData.age}
            onChange={handleChange}
          />
          <input
            type="text"
            name="gender"
            placeholder="Gender"
            value={formData.gender}
            onChange={handleChange}
          />
          <textarea
            name="feedback"
            placeholder="Your feedback"
            value={formData.feedback}
            onChange={handleChange}
          />
          <button type="submit">Submit Survey</button>
        </form>
      )}
    </div>
  );
}
