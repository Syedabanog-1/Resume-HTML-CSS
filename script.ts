// Ensure you have TypeScript installed and configured in your project

document.getElementById('generate')?.addEventListener('click', () => {
    // Get input values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;

    // Create resume content
    const resumeContent = `
        <h3>${name}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h4>education</h4>
        <p>${education}</p>
        <h4>Skills</h4>
        <p>${skills}</p>
        <h4>Experience</h4>
        <p>${experience}</p>
    `;

    // Insert resume content into the resume section
    const resumeSection = document.getElementById('resume-content');
    if (resumeSection) {
        resumeSection.innerHTML = resumeContent;
    }
});
