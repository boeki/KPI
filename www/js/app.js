ons.ready(function() {
  console.log("Onsen UI is ready!");
  firebase.auth().onAuthStateChanged(user => {
    if(user) {
      window.location.href = 'main.html';
    }
  });
});

var login = function() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  firebase.auth().signInWithEmailAndPassword(username, password)
  .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode + ' ' + errorMessage);
            // ...
          })
  .then(function(user) {
            self.currentUser = user;
            console.log(user.email);
            window.location.href = 'main.html';
          })
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  .then(function() {
          return firebase.auth().signInWithEmailAndPassword(username, password);
        })
  .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode + ' ' + errorMessage);
        });
};


    