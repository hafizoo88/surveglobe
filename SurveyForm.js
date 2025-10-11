import React, { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

export default function SurveyForm() {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [feedback, setFeedback] = useState("");
  const db = getFirestore();
  const auth = getAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;

    if (!user) {
      alert("Please log in to submit the survey.");
      return;
    }

    try {
      await addDoc(collection(db, "surveyResponses"), {
        age,
        gender,
        feedback,
        uid: user.uid,
        timestamp: new Date().toISOString()
      });
      setAge("");
      setGender("");
      setFeedback("");
      alert("Survey submitted successfully!");
    } catch (error) {
      console.error("Error submitting survey:", error);
      alert("Failed to submit survey.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
      <label>
        Age:
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
      </label>
      <br />
      <label>
        Gender:
        <select value={gender} onChange={(e) => setGender(e.target.value)} required>
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </label>
      <br />
      <label>
        Feedback:
        <textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} required />
      </label>
      <br />
      <button type="submit">Submit Survey</button>
    </form>
  );
}
