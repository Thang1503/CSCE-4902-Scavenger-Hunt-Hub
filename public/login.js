const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAN5-vaIFOwaz2ar8mFqfDeEGawJU_5OEo",
    authDomain: "team-17-scavenger-hunt-hub.firebaseapp.com",
    projectId: "team-17-scavenger-hunt-hub",
    storageBucket: "team-17-scavenger-hunt-hub.appspot.com",
    messagingSenderId: "313893582260",
    appId: "1:313893582260:web:141161df49a4b48e06aee1",
    measurementId: "G-7FMS2C0D22"
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

const register = () => {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    auth.createUserWithEmailAndPassword(email, password)
    .then((res) => {
        alert("Registration success!")
        console.log(res.user)
    })
    .catch((err) => {
        alert(err.message)
        console.log(err.code)
        console.log(err.message)
    })
}

const login = () => {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    auth.signInWithEmailAndPassword(email, password)
    .then((res) => {
        alert("Login success!")
        console.log(res.user)
    })
    .catch((err) => {
        alert(err.message)
        console.log(err.code)
        console.log(err.message)
    })
}

const saveData = () => {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    db.collection('users')
    .add({
        email: email,
        password: password
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}

const readData = () => {
    db.collection('users')
    .get()
    .then((data) => {
        console.log(data.docs.map((item) => {
            return {...item.data(), id: item.id}
        }))
    })
}