import firebase from 'firebase/app';
import 'firebase/firestore';



const  firebaseConfig = {
    apiKey: "AIzaSyBXuOi-3xtmeOt2Lha72XbMLhvqzoGuEk4",
    authDomain: "todo-app-559c9.firebaseapp.com",
    projectId: "todo-app-559c9",
    storageBucket: "todo-app-559c9.appspot.com",
    messagingSenderId: "357823476549",
    appId: "1:357823476549:web:b9ed7e19651ab65e0b042c"
};


firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();


export {
    db,
    firebase
}