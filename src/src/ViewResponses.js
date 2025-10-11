import React, { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";

export default function ViewResponses() {
  const [responses, setResponses] = useState([]);
  const db = getFirestore();

  useEffect(() => {
    async function fetchResponses() {
      try {
        const snapshot = await getDocs(collection(db, "surveyResponses"));
        const data = snapshot.docs.map(doc => doc.data());
        setResponses(data);
      } catch (error) {
        console.error("Error fetching responses:", error);
      }
    }

    fetchResponses();
  }, [db]); // ✅ ESLint fix: include 'db' in dependency array

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Survey Responses</h2>
      {responses.length === 0 ? (
        <p>No responses found.</p>
      ) : (
        responses.map((res, index) => (
          <div
            key={index}
            style={{
              marginBottom: "1rem",
              padding: "1rem",
              border: "1px solid #ccc",
              borderRadius: "6px",
              backgroundColor: "#f9f9f9"
            }}
          >
            <p><strong>Age:</strong> {res.age}</p>
            <p><strong>Gender:</strong> {res.gender}</p>
            <p><strong>Feedback:</strong> {res.feedback}</p>
            <p><strong>Submitted by UID:</strong> {res.uid}</p>
          </div>
        ))
      )}
    </div>
  );
}
