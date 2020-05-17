"use strict";

//Get reference to the form
var regForm = document.getElementById("contact");

//Add an event listener to the form's submit event
regForm.addEventListener("submit", validateForm);

//Define our validation function
function validateForm(event)
{
	//Get reference to error area display
	var errorArea = document.getElementById("error-area");

	//Clear previous error messages
	errorArea.innerHTML = "";

	//Get references to the form fields
	var firstName = document.getElementById("firstName");
	// var lastName = document.getElementById("lastName");
	var phone = document.getElementById("phone");
	var email = document.getElementById("email");
	var email2 = document.getElementById("email2");

	//Get the values from all the text fields
	var firstNameVal = firstName.value.trim();
	// var lastNameVal = lastName.value.trim();
	//comment
	var phoneVal = phone.value.trim();
	var emailVal = email.value.trim();
	var email2Val = email2.value.trim();

	//Check all required fields
	if (firstName.value == "" || email.value == "" || email2.value == "") {

		//Stop form submission
		event.preventDefault();

		//Display error message
		errorArea.innerHTML = "<p>Please fill in required fields.</p>";

		//Stop validation function
		return;
	}

	//check first name
	if (firstNameVal.length < 2) {
		event.preventDefault();
		errorArea.innerHTML += "<p>Name field requires at least 2 characters</p>"
	}

	// if (lastNameVal.length < 2) {
	// 	event.preventDefault();
	// 	errorArea.innerHTML += "<p>Last name field requires at least 2 characters</p>"
	// }

	//Define a regular expression (regexp) pattern for a valid postcode
	var phonePattern = /^[0-9]{8,12}$/;

	//Test the phone against the regexp pattern
	if (!phonePattern.test(phoneVal) && phoneVal != "") {
		event.preventDefault();
		errorArea.innerHTML += "<p>Phone must be 8 - 12 digits</p>";
	}

	//Check e-mail address

	//Define a regular expression (regexp) pattern for a valid e-mail address
	var emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

	//Test the email against the regexp pattern
	if (!emailPattern.test(emailVal)) {
		event.preventDefault();
		errorArea.innerHTML += "<p>E-mail address does not appear to be valid</p>";
	}

	if (emailVal != email2Val) {
		event.preventDefault();
		errorArea.innerHTML += "<p>E-mail addresses must match</p>";
	}
}