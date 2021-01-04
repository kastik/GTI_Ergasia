function uploadToFirebase() {
    let form = document.getElementById("myForm");

    function handleForm(event) {
        event.preventDefault();
    }

    form.addEventListener('submit', handleForm);
    let firestore = Firebase.firestore();
    firestore.collection("formData").add({
        name: document.getElementById("nameInput").value,
        lastName: document.getElementById("lastNameInput").value,
        email: document.getElementById("emailInput").value,
        contactReason: document.getElementById("contactReason").value,
        text: document.getElementById("textInput").value
    })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
            window.alert("Η Υποβολή ήταν επιτυχής");
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
            window.alert("Κάτι πήγε στραβά")
        })
    document.getElementById("nameInput").value = "";
    document.getElementById("lastNameInput").value = ""
    document.getElementById("emailInput").value = ""
    document.getElementById("contactReason").value = ""
    document.getElementById("textInput").value = ""
}