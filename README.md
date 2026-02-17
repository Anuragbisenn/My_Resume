# Resume Builder

A modern, professional resume builder web application that allows you to create and download your resume in PDF format.

## Features

- **Easy Form Input**: Fill in your personal information, skills, experience, projects, education, and certificates
- **Live Preview**: See your resume in real-time as you fill in the form
- **PDF Download**: Download your resume as a professionally formatted PDF
- **Dynamic Sections**: Add multiple entries for experience, projects, education, skills, and certificates
- **Modern UI**: Beautiful, responsive design with gradient backgrounds and smooth interactions
- **Professional Format**: Resume output matches professional standards similar to the provided template

## How to Use

1. Open `index.html` in your web browser
2. Fill in the form with your information:
   - **Personal Information**: Name, title, email, phone, location, LinkedIn, GitHub
   - **Professional Summary**: Brief overview of your experience
   - **Technical Skills**: Add skill categories and details
   - **Experience**: Add job positions with responsibilities
   - **Projects**: Add project details with descriptions
   - **Education**: Add your educational background
   - **Certificates**: Add your certifications
3. Click "Preview Resume" to see your resume
4. Click "Download PDF" to download your resume

## Technologies Used

- HTML5
- CSS3 (with modern gradients and flexbox/grid)
- JavaScript (ES6+)
- jsPDF (for PDF generation)
- html2canvas (for rendering HTML to canvas)
- Font Awesome (for icons)

## Installation

No installation required! Simply open the `index.html` file in any modern web browser.

For local development:
```bash
# Navigate to the project directory
cd resume-builder

# Open with a local server (optional, but recommended)
python -m http.server 8000
# or
npx serve
```

Then open `http://localhost:8000` in your browser.

## Tips

- Fields marked with * are required
- Use one line per bullet point in experience and project descriptions
- Click the "+ Add" buttons to add multiple entries for any section
- Preview your resume before downloading to ensure everything looks correct
- The PDF will be named based on your full name

## Browser Compatibility

Works best in modern browsers:
- Chrome/Edge (recommended)
- Firefox
- Safari

## License

Free to use for personal and commercial purposes.
