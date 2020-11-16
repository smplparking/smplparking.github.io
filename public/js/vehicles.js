//JS for adding vehicles
//need auth (through gmail/uakron)
//add vehicle to database through fields
//store vehicle as LOTID.NOTPARKED
//for demo, assume COMMUTER
const form = document.getElementById("enterData");
const firstNameTxt = document.getElementById("firstName");
const lastNameTxt = document.getElementById("lastName");
const studentIDTxt = document.getElementById("studentID");
const licensePlateTxt = document.getElementById("licensePlate");
const TagIDTxt = document.getElementById("TagID");



const LOTID = {
    NOTPARKED: 0,
    SCHRANK: "Schrank",
    CHURCH: "Church",
    ADMIN: "Admin",
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
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    // Listen to the form submission
    form.addEventListener("submit", e => {
        // Prevent the default form redirect
        e.preventDefault();
        alert("Thank You For Registering Your Vehicle!");
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
        firebase
            .firestore()
            .collection("Garages")
            .doc("Total")
            .update("cars", firebase.firestore.FieldValue.increment(1));
        // clear message input field
        form.value = "";
        firstNameTxt.value = "";
        lastNameTxt.value = "";
        studentIDTxt.value = "";
        licensePlateTxt.value = "";
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