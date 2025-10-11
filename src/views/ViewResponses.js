import React, { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";

export default function ViewResponses() {
  const [responses, setResponses] = useState([]);
  const db = getFirestore();

  useEffect(() => {
    async function fetchResponses() {
      const snapshot = await getDocs(collection(db, "surveyResponses"));
      const data = snapshot.docs.map(doc => doc.data());
      setResponses(data);
    }

    fetchResponses();
  }, []);

  return (
    <div>
      <h2>Survey Responses</h2>
      {responses.map((res, index) => (
        <div key={index} style={{ marginBottom: "1rem", borderBottom: "1px solid #ccc" }}>
          <p><strong>Age:</strong> {res.age}</p>
          <p><strong>Gender:</strong> {res.gender}</p>
          <p><strong>Feedback:</strong> {res.feedback}</p>
          <p><strong>Submitted by UID:</strong> {res.uid}</p>
        </div>
      ))}
    </div>
  );
}
