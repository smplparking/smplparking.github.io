const form= document.getElementById("inputCreateAccount");

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

    form.addEventListener("submit", e => {
        // Prevent the default form redirect
        e.preventDefault();
        // alert("Thank You For Registering Your Vehicle!");
        //Create a User Email/Password Combination
        firebase
            .auth()
            .createUserWithEmailAndPassword(createEmail.value, createPassword.value)
            .then((userCredential) =>{
                var user = userCredential.user
                alert("Thank you for creating an Account, You're now logged in!!");
                user
                    .sendEmailVerification()
                    .then(function() {
                    // Email sent.
                    })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
            });
            window.open('mainPage.htm','_self');return false;
        })
      }
    )}
    main();
