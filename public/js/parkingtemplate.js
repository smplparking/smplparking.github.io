// js template to be copied for each parking lot added
// can probably also be imported which is probably the smarter way


//enum for LOTID, to easily distingusih
// e.g. LOTID.NOTPARKED (==0)
// 
const garage = document.getElementsByTagName("title")[0].id;
console.log(garage);

const GARAGECOORDS = {
    ASEC: [123, 123],
}

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
    firebase
        .firestore()
        .collection('Garages')
        .doc(garage)
        .onSnapshot(function (doc) {
            console.log("Current data: ", doc.data());
            currentCars.innerHTML = doc.data().currentCars;
            totalCars.innerHTML = doc.data().totalCars;
        });
    // // Create query for messages
    // firebase
    //     .firestore()
    //     .collection("Database")
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
//getParkedCars("ASEC")
// Initialize and add the map


function testAddCar() {
    const increment = firebase.firestore.FieldValue.increment(1);
    firebase
        .firestore()
        .collection('Garages')
        .doc(garage)
        .update({
            currentCars: increment
        })
}

function testDeleteCar() {
    const decrement = firebase.firestore.FieldValue.increment(-1);
    firebase
        .firestore()
        .collection('Garages')
        .doc(garage)
        .update({
            currentCars: decrement
        })
}