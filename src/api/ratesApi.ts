
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebaseConfig";
import type { Rates } from "../features/rates/types";

// Suscribirse a cambios en Firestore
export const subscribeRates = (
  callback: (data: Rates) => void,
  onError: (error: Error) => void
) => {
  const docRef = doc(db, "rates", "TDmXIypgLKKfNggHHSnw");

  return onSnapshot(
    docRef,
    (snapshot) => {
      if (snapshot.exists()) {
        callback(snapshot.data() as Rates);
      }
    },
    onError
  );
};
