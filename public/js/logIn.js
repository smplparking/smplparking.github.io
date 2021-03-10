const form1= document.getElementById("inputLogIn");

async function main() {
    // Add Firebase project configuration object here
    const firebaseConfig = {
        apiKey: "AIzaSyBdKVHBk0nhbw1Day57hFO5omi_xfWxduc",
        authDomain: "smplparking.firebaseapp.com",
        databaseURL: "https://smplparking.firebaseio.com",
        projectId: "smplparking",
        storageBucket: "smplparking.appspot.com",
        messagingSenderId: "373649584144",
        appId: "1:373649584144:web:b8cff278ae8decee82da95",
        measurementId: "G-Q7SG8HK1KT"
    };
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    form1.addEventListener("submit", e => {
        e.preventDefault();

        firebase
        .auth()
        .signInWithEmailAndPassword(Email.value, Password.value)
        .then((userCredential) => {
            var user = userCredential.user
            alert("Thank you for Logging in, Enjoy!!")
            window.open('mainPage.htm','_self');return false;
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
        });

        return false;
    })
}
main();