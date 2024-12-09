document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resume-form') as HTMLFormElement;
    const resumeContent = document.getElementById('resume-content') as HTMLElement;

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      // Capture user input from the form
      const name = (document.getElementById('name') as HTMLInputElement).value;
      const email = (document.getElementById('email') as HTMLInputElement).value;
      const phone = (document.getElementById('phone') as HTMLInputElement).value;
      const education = (document.getElementById('education') as HTMLInputElement).value;
      const skills = (document.getElementById('skills') as HTMLInputElement).value;
      const experience = (document.getElementById('experience') as HTMLInputElement).value;

      // Generate the resume using the captured data
      resumeContent.innerHTML = `
        <h3>Personal Information</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
  
        <h3>Education</h3>
        <p>${education}</p>
  
        <h3>Skills</h3>
        <p>${skills}</p>
  
        <h3>Work Experience</h3>
        <p>${experience}</p>
        
      `;
    });
  });