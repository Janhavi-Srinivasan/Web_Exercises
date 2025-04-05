function checkStudent() {
    let regNumber = prompt("Please enter your registration number:");
    let isStudent = confirm("Are you a student?");
    if (isStudent) {
        alert(`Your registration number is ${regNumber}. You are confirmed as a student.`);
    } else {
        alert(`Your registration number is ${regNumber}. You are not a student.`);
    }
}
