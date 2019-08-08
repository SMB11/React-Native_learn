import Firebase from 'firebase';
let config = {
    apiKey: "AIzaSyCjZxOOzBBKmRp1nPQMkn-4cNBnBVVKYoo",
    authDomain: "geolocationfirebase-c6571.firebaseapp.com",
    databaseURL: "https://geolocationfirebase-c6571.firebaseio.com",
    projectId: "geolocationfirebase-c6571",
    storageBucket: "",
    messagingSenderId: "694743290847",
    appId: "1:694743290847:web:38ded024d319925a"
};
let app = Firebase.initializeApp(config);
export const db = app.database();