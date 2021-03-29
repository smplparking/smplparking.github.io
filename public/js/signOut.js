const form= document.getElementById("signOut");

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
        // Signing Out
        firebase
            .auth()
            .signOut()
            .then(() => {
                alert("You Have successfully Signed Out")
            })
            .catch((error) => {
                // An error Happened
            });

        })
    }
    main();
