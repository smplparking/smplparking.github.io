//JS for adding vehicles
//need auth (through gmail/uakron)
//add vehicle to database through fields
//store vehicle as LOTID.NOTPARKED
//for demo, assume COMMUTER
const form = document.getElementById("registerCar");
const firstNameTxt = document.getElementById("firstName");
const lastNameTxt = document.getElementById("lastName");
const studentIDTxt = document.getElementById("studentID");
const licensePlateTxt = document.getElementById("licensePlate");
const TagIDTxt = document.getElementById("TagID");



const LOTID = {
    NOTPARKED: 0,
    SCHRANK: 1,
    CHURCHST: 2,
    ADMIN: 3,
};

//enum for TAGCLASS to easily distinguish
const TAGCLASS = {
    UNDEFINED: 0,
    RESIDENT: 1,
    COMMUTER: 2,
    SERVICE: 3,
    FACULTY: 4,
};

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
    firebase.initializeApp(firebaseConfig);

    // // FirebaseUI config
    // const uiConfig = {
    //     credentialHelper: firebaseui.auth.CredentialHelper.NONE,
    //     signInOptions: [
    //         // Email / Password Provider.
    //         firebase.auth.EmailAuthProvider.PROVIDER_ID
    //     ],
    //     callbacks: {
    //         signInSuccessWithAuthResult: function (authResult, redirectUrl) {
    //             // Handle sign-in.
    //             // Return false to avoid redirect.
    //             return false;
    //         }
    //     }
    // };

    // const ui = new firebaseui.auth.AuthUI(firebase.auth());
    // // Listen to RSVP button clicks
    // // Called when the user clicks the RSVP button
    // startRsvpButton.addEventListener("click", () => {
    //     if (firebase.auth().currentUser) {
    //         // User is signed in; allows user to sign out
    //         firebase.auth().signOut();
    //     } else {
    //         // No user is signed in; allows user to sign in
    //         ui.start("#firebaseui-auth-container", uiConfig);
    //     }
    // });
    // Listen to the current Auth state
    // firebase.auth().onAuthStateChanged(user => {
    //     if (user) {
    //         startRsvpButton.textContent = "LOGOUT";
    //         // Show guestbook to logged-in users
    //         guestbookContainer.style.display = "block";
    //     } else {
    //         startRsvpButton.textContent = "RSVP";
    //         // Hide guestbook for non-logged-in users
    //         guestbookContainer.style.display = "none";
    //     }
    // });

    // Listen to the form submission
    form.addEventListener("submit", e => {
        // Prevent the default form redirect
        e.preventDefault();
        // Write a new message to the database collection "Database"
        firebase
            .firestore()
            .collection("Database")
            .add({
                firstName: firstName.value,
                lastName: lastName.value,
                licensePlate: licensePlate.value,
                lotID: LOTID.NOTPARKED,
                studentID: studentID.value,
                tagID: TagID.value,
                validity: true,
            });
        // clear message input field
        input.value = "";
        // Return false to avoid redirect
        return false;
    });
    // // Create query for messages
    // firebase
    //     .firestore()
    //     .collection("guestbook")
    //     .orderBy("timestamp", "desc")
    //     .onSnapshot(snaps => {
    //         // Reset page
    //         guestbook.innerHTML = "";
    //         // Loop through documents in database
    //         snaps.forEach(doc => {
    //             // Create an HTML entry for each document and add it to the chat
    //             const entry = document.createElement("p");
    //             entry.textContent = doc.data().name + ": " + doc.data().text;
    //             guestbook.appendChild(entry);
    //         });
    //     });
}
main();
//     firebase.initializeApp(firebaseConfig);

//     // FirebaseUI config
//     const uiConfig = {
//         credentialHelper: firebaseui.auth.CredentialHelper.NONE,
//         signInOptions: [
//             // Email / Password Provider.
//             firebase.auth.EmailAuthProvider.PROVIDER_ID
//         ],
//         callbacks: {
//             signInSuccessWithAuthResult: function (authResult, redirectUrl) {
//                 // Handle sign-in.
//                 // Return false to avoid redirect.
//                 return false;
//             }
//         }
//     };

//     const ui = new firebaseui.auth.AuthUI(firebase.auth());
//     // Listen to RSVP button clicks
//     // Called when the user clicks the RSVP button
//     startRsvpButton.addEventListener("click", () => {
//         if (firebase.auth().currentUser) {
//             // User is signed in; allows user to sign out
//             firebase.auth().signOut();
//         } else {
//             // No user is signed in; allows user to sign in
//             ui.start("#firebaseui-auth-container", uiConfig);
//         }
//     });
//     // Listen to the current Auth state
//     firebase.auth().onAuthStateChanged(user => {
//         if (user) {
//             startRsvpButton.textContent = "LOGOUT";
//             // Show guestbook to logged-in users
//             guestbookContainer.style.display = "block";
//         } else {
//             startRsvpButton.textContent = "RSVP";
//             // Hide guestbook for non-logged-in users
//             guestbookContainer.style.display = "none";
//         }
//     });
//     // Listen to the form submission


//     // Create query for messages
//     firebase
//         .firestore()
//         .collection("Database")
//         .orderBy("timestamp", "desc")
//         .onSnapshot(snaps => {
//             // Reset page
//             guestbook.innerHTML = "";
//             // Loop through documents in database
//             snaps.forEach(doc => {
//                 // Create an HTML entry for each document and add it to the chat
//                 const entry = document.createElement("p");
//                 entry.textContent = doc.data().name + ": " + doc.data().text;
//                 guestbook.appendChild(entry);
//             });
//         });
// }
// main();

// function writeUserData() {
//     // alert("TEST");

//     // clear message input field
//     firstNameTxt.value = "";
//     lastNameTxt.value = " ";
//     licensePlateTxt.value = " ";
//     studentIDTxt.value = " ";
// };