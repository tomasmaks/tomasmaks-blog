
var db = firebase.firestore();
db.settings({
    timestampsInSnapshots: true
});

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function getNumberOfSubmittions() {
    var numberOfEmails = localStorage.getItem('noOfEmails') == null || localStorage.getItem('noOfEmails') == '' || localStorage.getItem('noOfEmails') == undefined ? 0 : localStorage.getItem('noOfEmails')
    return parseInt(numberOfEmails);
}

function increaseNumberOfSubmittions() {
    var newNumberOfEmails = getNumberOfSubmittions() + 1
    localStorage.setItem('noOfEmails', newNumberOfEmails);
}

function isAlreadySubmitted() {
    var numberOfEmails = getNumberOfSubmittions();
    if (numberOfEmails >= 2) {
        return true
    } else {
        return false
    }
}

function submitForm() {
    console.log(isAlreadySubmitted())
    if (isAlreadySubmitted()) {
        alert("You already submitted 2 different emails, please send me DM to become a friend.");
        return;
    }

    if (document.getElementById('semail').value === '' || document.getElementById('semail').value === null || document.getElementById('semail').value === undefined) {
        if (document.getElementById('semail').value === '' || document.getElementById('semail').value === null || document.getElementById('semail').value === undefined) {
            alert("Empty email");  
        }
      } else if (!this.validateEmail(document.getElementById('semail').value)) {
          alert("Email is not correct");
      } else {

          db.collection("friendEmails").where("email", "==", document.getElementById('semail').value)
          .get()
          .then(function(querySnapshot) {
              if (querySnapshot.size === 0) {
                  db.collection("friendEmails").add({
                      date: new Date(),
                      email: document.getElementById('semail').value
                  })
                  .then(function(docRef) {
                    alert("Thanks for becoming my friend. I will contact you as soon as possible.");
                    increaseNumberOfSubmittions()
                  })
                  .catch(function(error) {
                      console.error("Error adding document: ", error);
                  });
              } else {
                alert("We are already friends");
              }
          })
          .catch(function(error) {
              console.log("Error getting documents: ", error);
          });
          
      
      }

}  

