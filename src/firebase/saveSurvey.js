import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const db = getFirestore();
const auth = getAuth();

export async function saveSurveyResponse(responseData) {
  const user = auth.currentUser;
  if (!user) return;

  try {
    await addDoc(collection(db, "surveyResponses"), {
      uid: user.uid,
      timestamp: new Date(),
      ...responseData,
    });
    console.log("Survey response saved");
  } catch (error) {
    console.error("Error saving survey:", error);
  }
}
