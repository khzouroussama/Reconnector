import * as firebase from 'firebase/app';
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyD-x7vEZvBpkhn5G0U-Q8qq7ty87NalKRU",
    authDomain: "reconnector-76c51.firebaseapp.com",
    databaseURL: "https://reconnector-76c51.firebaseio.com",
    projectId: "reconnector-76c51",
    storageBucket: "reconnector-76c51.appspot.com",
    messagingSenderId: "384462804536",
    appId: "1:384462804536:web:818a2a4e1c14ac8dc478cd",
    measurementId: "G-G756B6MCN6"
};
// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);

export default app;