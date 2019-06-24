function validateItems() {
  var name = document.forms["contactForm"]["Name"].value;
  var email = document.forms["contactForm"]["Email"].value;
  var phone = document.forms["contactForm"]["Phone"].value;

  if (name == "") {
      alert("Name must be filled out.");
      document.forms["contactForm"]["Name"].focus();
      return false;
    }
    if (email == "") {
        alert("Email must be filled out.");
        document.forms["contactForm"]["Email"].focus();
        return false;
    }
    if (phone== "" || isNaN(phone)) {
        alert("Phone must be filled out with numbers.");
        document.forms["contactForm"]["Phone"].focus();
        return false;
  }

  alert("Information givien is valid, thank you!")
  return false;
}
