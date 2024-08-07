import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";

import {
  getAuth,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

import {
  getFirestore,
  getDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAY8Q3L9-cbstf8WTZ_YgO5r6QRESNGiIk",
  authDomain: "authentication-2-f5e47.firebaseapp.com",
  projectId: "authentication-2-f5e47",
  storageBucket: "authentication-2-f5e47.appspot.com",
  messagingSenderId: "124072865716",
  appId: "1:124072865716:web:b9c619b1179511388f4ce1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

onAuthStateChanged(auth, (user) => {
  const loggedInUserId = localStorage.getItem("loggedInUserId");
  if (loggedInUserId) {
    const docRef = doc(db, "users", loggedInUserId);
    getDoc(docRef)
      .then((docSnap) => {
        if (docSnap.exists()) {
          const userData = docSnap.data();
          // document.getElementById("loggedUserFName").innerText =
          //   userData.firstName;
          // document.getElementById("loggedUserLName").innerText =
          //   userData.lastName;
          // document.getElementById("loggedUserEmail").innerText = userData.email;
        } else {
          console.log("Nothing found on server database");
        }
      })
      .catch((error) => {
        console.log("Error getting document from server");
      });
  } else {
    console.log("User Id not found in local storage");
  }
});

// For Logout

const logoutButton = document.getElementById("mainLogOut");
logoutButton.addEventListener("click", () => {
  localStorage.removeItem("loggedInUserId");
  signOut(auth)
    .then(() => {
      window.location.href = "index.html";
    })
    .catch((error) => {
      console.error("Error signing out", error);
    });
});
