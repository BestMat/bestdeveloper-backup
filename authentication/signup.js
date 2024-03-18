// © 2024 - BestDeveloper - BestMat - All rights reserved.
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAYDLGd55vz0HONG_SyPRGddhHIXgAi6s0",
    authDomain: "bestdeveloper-nagapillaiyarsai.firebaseapp.com",
    projectId: "bestdeveloper-nagapillaiyarsai",
    storageBucket: "bestdeveloper-nagapillaiyarsai.appspot.com",
    messagingSenderId: "97420602954",
    appId: "1:97420602954:web:3ae85153f5e3aba82140b3",
    measurementId: "G-M3STWB0X6G"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

const signup = document.querySelector(".signup");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const repeat_password = document.querySelector(".repeat-password");

signup.addEventListener("click", function(){
    var user_email = email.value;
    var user_password = password.value;
    var user_repeat_password = repeat_password.value;

    console.log(`
        User Email: ${email}
        User Password: ${password}
    `);

    if (user_password != user_repeat_password) {
        alert("Your passwords are not matching. Please try again.");
    } else {
        createUserWithEmailAndPassword(auth, user_email, user_password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(`${errorCode}: ${errorMessage}`);
                alert(`${errorCode}: ${errorMessage}`);
            });
    }
});