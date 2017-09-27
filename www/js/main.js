ons.ready(function() {
      console.log("Onsen UI is ready!");
      firebase.auth().onAuthStateChanged(user => {
        if(user) {
          window.fn.load('home.html')
        } else {
          window.location.href = 'index.html';
        }
      });
    });

    window.fn = {};
    window.fn.open = function() {
      var menu = document.getElementById('menu');
      menu.open();
    };
    window.fn.load = function(page) {
      var content = document.getElementById('content');
      var menu = document.getElementById('menu');
      content
        .load(page)
        .then(menu.close.bind(menu));
    };


    var logout = function() {
      firebase.auth().signOut().then(function() {
        // Sign-out successful.
        window.fn.load('home.html')
      }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode + ' ' + errorMessage);
      });
    };
    
    