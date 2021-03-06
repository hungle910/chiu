const init = () =>{


var firebaseConfig = {
    apiKey: "AIzaSyDFHTZjmGGtZPEJmZB-dqv6iByA2BnjpjE",
    authDomain: "chatapps-97b36.firebaseapp.com",
    projectId: "chatapps-97b36",
    storageBucket: "chatapps-97b36.appspot.com",
    messagingSenderId: "676496891289",
    appId: "1:676496891289:web:ad90e61e133ad379510708"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.auth().onAuthStateChanged(function (user) {
    console.log(user);
    if (user && user.emailVerified) {
      model.currentUser = {
        displayName: user.displayName,
        email: user.email
      };
      view.setActiveScreen('chatScreen');
      // User is signed in.
    } else {
      view.setActiveScreen('loginScreen');
      // alert("Please check your email"); check cc
    }


  });

  

};

window.onload = init;