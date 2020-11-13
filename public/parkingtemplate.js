// js template to be copied for each parking lot added
// can probably also be imported which is probably the smarter way


//enum for LOTID, to easily distingusih
// e.g. LOTID.NOTPARKED (==0)
// 
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
    //<script src="https://www.gstatic.com/firebasejs/8.0.1/firebase-app.js" />;
    // Add Firebase project configuration object here
    const firebaseConfig = {
        apiKey: "AIzaSyCNtOf36nW9Q-u0f-UWXzJV0zgrGja_Xvo",
        authDomain: "sample-faafb.firebaseapp.com",
        databaseURL: "https://sample-faafb.firebaseio.com",
        projectId: "sample-faafb",
        storageBucket: "sample-faafb.appspot.com",
        messagingSenderId: "433378267664",
        appId: "1:433378267664:web:a9ab7ead17145eab543095"
    };


    firebase.initializeApp(firebaseConfig);

    // FirebaseUI config
    const uiConfig = {
        credentialHelper: firebaseui.auth.CredentialHelper.NONE,
        signInOptions: [
            // Email / Password Provider.
            firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccessWithAuthResult: function (authResult, redirectUrl) {
                // Handle sign-in.
                // Return false to avoid redirect.
                return false;
            }
        }
    };

    const ui = new firebaseui.auth.AuthUI(firebase.auth());
    // Listen to RSVP button clicks
    // Called when the user clicks the RSVP button
    startRsvpButton.addEventListener("click", () => {
        if (firebase.auth().currentUser) {
            // User is signed in; allows user to sign out
            firebase.auth().signOut();
        } else {
            // No user is signed in; allows user to sign in
            ui.start("#firebaseui-auth-container", uiConfig);
        }
    });
    // Listen to the current Auth state
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            startRsvpButton.textContent = "LOGOUT";
            // Show guestbook to logged-in users
            guestbookContainer.style.display = "block";
        } else {
            startRsvpButton.textContent = "RSVP";
            // Hide guestbook for non-logged-in users
            guestbookContainer.style.display = "none";
        }
    });
    // Listen to the form submission
    form.addEventListener("submit", e => {
        // Prevent the default form redirect
        e.preventDefault();
        // Write a new message to the database collection "guestbook"
        firebase
            .firestore()
            .collection("guestbook")
            .add({
                text: input.value,
                timestamp: Date.now(),
                name: firebase.auth().currentUser.displayName,
                userId: firebase.auth().currentUser.uid
            });
        // clear message input field
        input.value = "";
        // Return false to avoid redirect
        return false;
    });
    // Create query for messages
    firebase
        .firestore()
        .collection("guestbook")
        .orderBy("timestamp", "desc")
        .onSnapshot(snaps => {
            // Reset page
            guestbook.innerHTML = "";
            // Loop through documents in database
            snaps.forEach(doc => {
                // Create an HTML entry for each document and add it to the chat
                const entry = document.createElement("p");
                entry.textContent = doc.data().name + ": " + doc.data().text;
                guestbook.appendChild(entry);
            });
        });
}
// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.036 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}
main();
