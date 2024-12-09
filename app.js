document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resume-form');
    var resumeContent = document.getElementById('resume-content');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        // Capture user input from the form
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var education = document.getElementById('education').value;
        var skills = document.getElementById('skills').value;
        var experience = document.getElementById('experience').value;
        // Generate the resume using the captured data
        resumeContent.innerHTML = "\n        <h3>Personal Information</h3>\n        <p><strong>Name:</strong> ".concat(name, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n  \n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n  \n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n  \n        <h3>Work Experience</h3>\n        <p>").concat(experience, "</p>\n      ");
    });
});
