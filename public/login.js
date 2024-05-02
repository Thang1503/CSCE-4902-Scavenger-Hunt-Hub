// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAN5-vaIFOwaz2ar8mFqfDeEGawJU_5OEo",
    authDomain: "team-17-scavenger-hunt-hub.firebaseapp.com",
    projectId: "team-17-scavenger-hunt-hub",
    storageBucket: "team-17-scavenger-hunt-hub.appspot.com",
    messagingSenderId: "313893582260",
    appId: "1:313893582260:web:141161df49a4b48e06aee1",
    measurementId: "G-7FMS2C0D22"
};

firebase.initializeApp(firebaseConfig);

// Get references to elements on the page
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// Function to register a new user
function register() {
    const email = emailInput.value;
    const password = passwordInput.value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log('User registered:', user);
            alert('Registration successful. Please sign in.');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Registration error:', errorMessage);
            alert(errorMessage);
        });
}

// Function to sign in an existing user
function login() {
    const email = emailInput.value;
    const password = passwordInput.value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log('User signed in:', user);
            alert('Login successful.');
            window.location.href = 'index.html';
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Login error:', errorMessage);
            alert(errorMessage);
        });
}
