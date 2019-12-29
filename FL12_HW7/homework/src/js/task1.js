let email = prompt('Enter your email');
let user = {
    mail: 'user@gmail.com',
    password: 'UserPass'
}
let admin = {
    mail: 'admin@gmail.com',
    password: 'AdminPass'
}
let minLengthMail = 5;
let minLenghtPassword = 6;
if (email === '' || typeof email === 'object') {
    alert('Canceled');
}
if (email.length < minLengthMail) {
    alert('I dont know any emails having name length less than 5 symbols');
}
if (email === user.mail || email === admin.mail) {
    let password = prompt('Enter your password');
    if (password === '' || typeof password === 'object') {
        alert('Canceled');
    }
    if (password === user.password && email === user.mail) {
        let changePass = confirm('Do you want to change the password?');
        if (changePass === true) {
            let oldPass = prompt('Please enter your old password ')
            if (oldPass === '' || typeof oldPass === 'object') {
                alert('Canceled');
            }
            if (oldPass === user.password) {
                let newUserPass = prompt('Enter your new password');
                if (newUserPass === '' || typeof newUserPass === 'object') {
                    alert('Canceled');
                }
                if (newUserPass.length < minLenghtPassword) {
                    alert('It’s too short password. Sorry');
                } else {
                    let repeatUserPass = prompt('Enter your new password again');
                    if (repeatUserPass === newUserPass) {
                        alert('You have successfully changed your password');
                    }
                }
            }
        } else {
            alert('You have failed the change');
        }
    } else if (password === admin.password && email === admin.mail) {
        let changePass = confirm('Do you want to change the password?');
        if (changePass === true) {
            let oldPass = prompt('Please enter your old password ')
            if (oldPass === '' || typeof oldPass === 'object') {
                alert('Canceled');
            }
            if (oldPass === admin.password) {
                let newAdminPass = prompt('Enter your new password');
                if (newAdminPass === '' || typeof newAdminPass === 'object') {
                    alert('Canceled');
                }
                if (newAdminPass.length < minLenghtPassword) {
                    alert('It’s too short password. Sorry');
                } else {
                    let repeatAdminPass = prompt('Enter your new password again');
                    if (repeatAdminPass === newAdminPass) {
                        alert('You have successfully changed your password');
                    }
                }
            }
        } else {
            alert('You have failed the change');
        }
    } else {
        alert('Wrong password');
    }
} else {
    alert('I don’t know you');
}