document.addEventListener('DOMContentLoaded', init);

function init(_event) {
    regForm = document.forms['registration'];
    regForm['register'].onclick = validateForm;
}

function validateForm(_event) {
    // creating array to store errors
    let errorMessages = Array();

    // email pattern
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    // validate firstname
    if (regForm['firstname'].value) {
        if (regForm['firstname'].value.length < 2) {
            errorMessages.push('* Min length for firstname is 2');
        } else if (regForm['firstname'].value.length > 25) {
            errorMessages.push('* Max length for firstname is 25');
        }
    } else {
        errorMessages.push('* Please enter Firstname');
    }

    // validate lastname
    if (regForm['lastname'].value) {
        if (regForm['lastname'].value.length < 2) {
            errorMessages.push('* Min length for lastname is 2');
        } else if (regForm['lastname'].value.length > 25) {
            errorMessages.push('* Max length for lastname is 25');
        }
    } else {
        errorMessages.push('* Please enter Lastname');
    }

    // validate email
    if (regForm['email'].value) {
        if (!filter.test(regForm['email'].value)) {
            errorMessages.push('* Invalid Email')
        }
    } else {
        errorMessages.push('* Please enter Email');
    }

    // validate address
    if (!regForm['address'].value) {
        errorMessages.push('* Please enter Address');
    }

    // validate password
    if (regForm['password'].value) {
        if (regForm['password'].value.length < 5) {
            errorMessages.push('* Password min is 5');
        } else if (!regForm['confirmpass'].value) {
            // create error message if password is empty
            errorMessages.push('* Please confirm your password');
        }
    } else {
        errorMessages.push('* Please enter password');
    }

    // if (!regForm['confirmpass'].value) {
    //     errorMessages.push('* Enter Password Confirmation');
    // }

    // check password
    if (regForm['password'].value && regForm['confirmpass'].value) {
        if (regForm['password'].value != regForm['confirmpass'].value) {
            errorMessages.push('* Passwords do not match');
        }

    }

    // display errors
    displayErrors(errorMessages);
    if (errorMessages.length) {
        // to stop validation if there are errors found
        return false;
    }

}

function displayErrors(errors) {
    let errorBox = document.getElementById('errorMessages');
    //if no errors found
    if (!errors.length) {
        errorBox.innerHTML = '';
        return false;
    }

    var messageString = '<ul>';
    for (let i = 0; i < errors.length; i++) {
        messageString += '<li>' + errors[i] + '</li>';
    }
    messageString += '</ul>';
    errorBox.innerHTML = messageString;
}

function formSubmit(form) {
    document.getElementById('register').innerHTML = "Loading...";
    setTimeout(function () {
        form.submit();
        //delay 3 seconds after submit
    }, 3000);
    return false;
}

var pages = document.getElementsByClassName('page');
var inputs = document.querySelectorAll('input');
var errorBox = document.getElementById('errorMessages');

// delete error messages when focus
function deleteErrors() {
    if (!regForm['firstname'].value) {
        errorBox.innerHTML = '';
    } else if (!regForm['lastname'].value) {
        errorBox.innerHTML = '';
    } else if (!regForm['address'].value) {
        errorBox.innerHTML = '';
    } else if (!regForm['email'].value) {
        errorBox.innerHTML = ''
    } else if (!regForm['password'].value) {
        errorBox.innerHTML = '';
    } else if (!regForm['confirmpass'].value) {
        errorBox.innerHTML = '';
    }
}
// showing pages
function show(elementID) {
    const ele = document.getElementById(elementID);
    if (!ele) {
        return false;
    }

    for (let i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
        //delete errors when transfer to another page
        errorBox.innerHTML = '';
        //empty inputs when transfef to another page
        inputs.forEach(input => input.value = '');
    }
    ele.style.display = 'block';
}