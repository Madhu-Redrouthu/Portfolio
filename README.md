Madhu Redrouthu's Portfolio Website
Overview
This is a personal portfolio website showcasing the skills, projects, achievements, and contact information of Madhu Redrouthu, a Java Full Stack Developer, DevOps Engineer, and Test Engineer based in Guntur, India. The website is built with HTML, CSS, and JavaScript, featuring a responsive design, a contact form, and a mobile-friendly navigation menu.
Features

Responsive Design: Adapts to various screen sizes with a mobile-friendly hamburger menu.
Sections: Includes About, Education, Technical Skills, Projects, Achievements, Certifications, Hobbies, and Contact sections.
SEO Optimization: Meta tags for better search engine visibility.
Contact Form: Integrated with Formspree for sending messages (requires Formspree setup).
Interactive Elements: Hover effects on navigation and skill/certification cards, and basic form validation.
Accessibility: Uses ARIA attributes for improved accessibility.

Technologies Used

HTML5: Structure of the website.
CSS3: Styling with grid layouts and responsive design.
JavaScript: Handles hamburger menu toggle and basic form validation.
Google Fonts: Roboto font for typography.
Formspree: For contact form submissions.

Project Structure
portfolio/
├── index.html        # Main HTML file
├── favicon.png       # Favicon for the website
└── README.md         # This file

Setup and Installation

Clone the Repository:
git clone https://github.com/Madhu-Redrouthu/portfolio.git
cd portfolio


Run Locally:

Option 1: Open index.html directly in a browser.
Option 2: Use a local server for better testing:npm install -g live-server
live-server

This will open the website in your default browser at http://localhost:8080.


Set Up Contact Form:

Sign up at Formspree.
Create a new form and obtain your unique endpoint.
Replace [Your-Formspree-Endpoint] in the index.html form action with your endpoint:<form action="https://formspree.io/your-endpoint" method="POST" id="contact-form">




Add Favicon:

Ensure favicon.png exists in the project root or update the favicon path in index.html if using a different file.



Deployment
You can deploy this static website to platforms like Netlify, Vercel, or GitHub Pages. Below are steps for each:
Netlify

Push your code to a GitHub repository:git add .
git commit -m "Initial commit"
git push origin main


Sign up at Netlify and click "New site from Git."
Connect your GitHub repository, select the branch (e.g., main), and deploy.
(Optional) Add a custom domain in Netlify’s domain settings.

Vercel

Install the Vercel CLI:npm install -g vercel


Run vercel in the project directory and follow the prompts.
Deploy and get a URL like your-site.vercel.app.

GitHub Pages

Push your code to a GitHub repository.
Go to repository Settings > Pages, select the main branch, and save.
Access your site at https://<username>.github.io/portfolio.

Usage

Navigate through sections using the navigation menu or hamburger menu on mobile devices.
View projects, skills, and certifications in a grid layout.
Use the contact form to send messages (requires Formspree setup).
Links to GitHub, LinkedIn, and project repositories are provided.

Customization

Update Content: Modify index.html to update personal details, projects, or skills.
Styling: Edit the <style> section in index.html to change colors, fonts, or layouts.
Images: Replace favicon.png or add project images in a new images/ folder and update paths in index.html.
Formspree: Ensure the contact form endpoint is updated for functionality.

Contributing
Contributions are welcome! Please fork the repository, create a new branch, and submit a pull request with your changes.
License
© 2025 Madhu Redrouthu. All rights reserved.
Contact

Email: rmadhu1909@gmail.com
LinkedIn: linkedin.com/in/madhu-redrouthu-240468364
GitHub: github.com/Madhu-Redrouthu
