var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var dobError = document.getElementById('dob-error');
var marksError10 = document.getElementById('marks-error10');
var marksError12 = document.getElementById('marks-error12');
var coursesError = document.getElementById('courses-error');
var durationError = document.getElementById('duration-error');
var paymentError = document.getElementById('payment-error');
var detailsError = document.getElementById('details-error');
var cvvError = document.getElementById('cvv-error');
var submitError = document.getElementById('submit-error');

function validateName() {
    var name = document.getElementById('contact-name').value;
    if (name.length == 0) {
        nameError.innerHTML = 'Name is required';
        nameError.style.color = 'red';
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Enter full name';
        nameError.style.color = 'red';
        return false;
    }
    nameError.innerHTML = 'Valid name';
    nameError.style.color = 'green';
    return true;
}

function validatePhone() {
    var phone = document.getElementById('contact-phone').value;
    const firstString = String(phone)[0];
    const first = Number(firstString);

    if (phone.length == 0) {
        phoneError.innerHTML = "Phone no is required";
        phoneError.style.color = 'red';
        return false;
    }
    if (phone.length !== 10) {
        phoneError.innerHTML = "Phone no must contain 10 digits";
        phoneError.style.color = 'red';
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = "Phone no must contain only digits";
        phoneError.style.color = 'red';
        return false;
    }
    if (first != 7 && first != 8 && first != 9) {
        phoneError.innerHTML = "Phone no should start with 7/8/9";
        phoneError.style.color = 'red';
        return false;
    }
    phoneError.innerHTML = 'Valid Phone no';
    phoneError.style.color = 'green';
    return true;
}

function validateEmail() {
    var email = document.getElementById('contact-email').value;
    if (email.length == 0) {
        emailError.innerHTML = "Email is required";
        emailError.style.color = "red";
        return false;
    }
    else {
        var emailID = email;
        atpos = emailID.indexOf("@");
        dotpos = emailID.lastIndexOf(".");

        if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailID.length) {
            emailError.innerHTML = "Please enter a valid e-mail ID";
            emailError.style.color = "red";
        }
        else {
            emailError.innerHTML = "Valid Email Entered";
            emailError.style.color = "green";
        }
    }
}

function validateMarks10() {
    var marks = document.getElementById('contact-marks10').value;
    if (marks.length == 0) {
        marksError10.innerHTML = "Percentage is required";
        marksError10.style.color = 'red';
        return false;
    }
    if (marks > 100 || marks < 0) {
        marksError10.innerHTML = "Enter valid percentage";
        marksError10.style.color = 'red';
        return false;
    }
    marksError10.innerHTML = "Valid percentage entered";
    marksError10.style.color = 'green';
    return true;
}

function validateMarks12() {
    var marks = document.getElementById('contact-marks12').value;
    if (marks.length == 0) {
        marksError12.innerHTML = "Percentage is required";
        marksError12.style.color = 'red';
        return false;
    }
    if (marks > 100 || marks < 0) {
        marksError12.innerHTML = "Enter valid percentage";
        marksError12.style.color = 'red';
        return false;
    }
    marksError12.innerHTML = "Valid percentage entered";
    marksError12.style.color = 'green';
    return true;
}

function validateCourse() {
    var course = document.getElementsByID('courses').value;
    var optionSelIndex = course.options[course.selectedIndex].value;
    if (optionSelIndex == NULL) {
        coursesError.innerHTML = "Please select an option";
        coursesError.style.color = "red";
        return false;
    }
    coursesError.innerHTML = "Selected!";
    coursesError.style.color = "green";
    return true;
}

function validateOption() {
    var getSelectedValue = document.querySelector('input[name="option"]:checked');
    if (getSelectedValue == null) {
        paymentError.innerHTML = "Please select an option";
        paymentError.style.color = "red";
        return false;
    }
    paymentError.innerHTML = "Selected!";
    paymentError.style.color = "green";
    return true;
}

function validateDetails() {
    var details = document.getElementById('contact-details').value;
    if (details.length == 0) {
        detailsError.innerHTML = "Card no. is required";
        detailsError.style.color = 'red';
        return false;
    }
    if (details.length !== 16) {
        detailsError.innerHTML = "Card no must contain 16 digits";
        detailsError.style.color = 'red';
        return false;
    }
    if (details.length == 16) {
        detailsError.innerHTML = "Valid card no";
        detailsError.style.color = 'green';
        return true;
    }
}

function validateCVV() {
    var cvv = document.getElementById('contact-cvv').value;
    if (cvv.length != 3) {
        cvvError.innerHTML = "Enter valid CVV";
        cvvError.style.color = "red";
        return false;
    }
    cvvError.innerHTML = "Valid CVV entered";
    cvvError.style.color = "green";
    return true;
}

function validateFormEducational() {
    if (!validateMarks12() || !validateMarks10()) {
        submitError.style.display = "block";
        submitError.innerHTML = "Please fix error to proceed";
        setTimeout(function () { submitError.style.display = "none"; }, 1000);
        return false;
    }
}

function validateFormPersonal() {
    if (!validateName() || !validatePhone() || !validateEmail() || !validateDOB()) {
        submitError.style.display = "block";
        // submitError.innerHTML = "Please fix error to proceed";
        setTimeout(function () { submitError.style.display = "none"; }, 1000);
        return false;
    }
}

function validateFormCourses() {
    if (!validateCourse()) {
        submitError.style.display = "block";
        submitError.innerHTML = "Please fix error to proceed";
        setTimeout(function () { submitError.style.display = "none"; }, 1000);
        return false;
    }
}

function validateFormPayment() {
    if (!validateOption() || !validateDetails() || !validateCVV()) {
        submitError.style.display = "block";
        submitError.innerHTML = "Please fix error to proceed";
        setTimeout(function () { submitError.style.display = "none"; }, 1000);
        return false;
    }
}


// let popup = document.getElementById("popup");

// function openPopup(){
//     popup.clsaaList.add("open-popup");
// }

// function closePopup(){
//     popup.clsaaList.remove("open-popup");
// }