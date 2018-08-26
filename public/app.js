angular.module('app', ['firebase']);

angular.module('app').config(function() {
    var config = {
        apiKey: "AIzaSyCq-9g0UM8hcWf6BLAuB1GcycKOLklR1Mk",
        authDomain: "cidades-do-espirito-santo.firebaseapp.com",
        databaseURL: "https://cidades-do-espirito-santo.firebaseio.com",
        projectId: "cidades-do-espirito-santo",
        storageBucket: "cidades-do-espirito-santo.appspot.com",
        messagingSenderId: "212780034321"
    };
    firebase.initializeApp(config);
});