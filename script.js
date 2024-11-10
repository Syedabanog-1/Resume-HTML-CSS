// Ensure you have TypeScript installed and configured in your project
var _a;
(_a = document.getElementById('generate')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    // Get input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    // Create resume content
    var resumeContent = "\n        <h3>".concat(name, "</h3>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        <h4>education</h4>\n        <p>").concat(education, "</p>\n        <h4>Skills</h4>\n        <p>").concat(skills, "</p>\n        <h4>Experience</h4>\n        <p>").concat(experience, "</p>\n    ");
    // Insert resume content into the resume section
    var resumeSection = document.getElementById('resume-content');
    if (resumeSection) {
        resumeSection.innerHTML = resumeContent;
    }
});
