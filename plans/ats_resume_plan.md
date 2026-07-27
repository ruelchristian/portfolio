# ATS Resume Conversion Plan

This document outlines the strategy and draft for converting the original CV (`Ruel_Christian_Umel_CV.docx`) into a high-performance, single-page, ATS-friendly format.

An Applicant Tracking System (ATS) reads resumes as plain text, moving from left to right and top to bottom. Complex formatting (like tables, columns, text boxes, headers, footers, graphics, or icons) causes parsers to scramble or omit crucial information.

---

## 1. Key Improvements Made for ATS Compatibility & Spacing

1. **Single-Page Constraint**: 
   - Reduced margins to **0.6 inches (top/bottom)** and **0.75 inches (left/right)** to optimize vertical layout space.
   - Condensed font size to **10pt (Arial)** for body text and bullets, which is highly readable but space-efficient.
   - Consolidated contact details from three paragraphs to a single centered paragraph, saving 2 full lines of spacing.
   - Merged technical skills from 5 separate categories into 3 multi-item lists, saving 4 lines of spacing.
   - Combined capstone project bullet points from 6 to 4 highly-impactful sentences.

2. **Single-Column Layout**: 
   - Restructured the document into a strict single-column format. Sidebars, double columns, and grid layouts have been removed.

3. **Standard Section Headings**:
   - Used standard terms like `Summary`, `Technical Skills`, `Academic Projects`, `Education`, `Certifications`, and `Additional Information` so the parser maps the information to the correct database fields.

4. **Borders & Line Decoration Removal**:
   - Section divider borders and rules were removed. Scientific research on ATS systems highlights that horizontal divider lines can sometimes be parsed as strange divider symbols or cause character confusion, so headers stand out strictly using bold capitalization.

5. **Contact Information Placement**:
   - Placed contact details directly at the top of the page. Avoided placing contact details in page headers or footers, as many ATS parsers completely ignore headers and footers.

6. **Bias Prevention & Privacy Removal**:
   - Removed personal metadata (Date of Birth, Place of Birth, Gender, Citizenship). ATS systems and modern tech companies prefer resumes without this info to avoid compliance/bias issues, and it saves valuable resume space.

7. **Date & Character Formatting**:
   - Standardized dates (e.g., `September 2025 - Present`) using standard ASCII hyphens `-` instead of en-dashes to avoid parsing character corruption.

---

## 2. Text Draft of the ATS Resume

```markdown
RUEL CHRISTIAN V. UMEL
Junior Web Developer
Pasig, Philippines  |  +63 994 536 9732  |  ruelchristianumel@gmail.com  |  linkedin.com/in/ruelchristianumel  |  github.com/ruelchristian

SUMMARY
Motivated and fast-learning Junior Web Developer pursuing a Bachelor of Science in Information Technology (3rd Year). Experienced in building responsive web applications using C#, ASP.NET Core MVC, HTML, CSS, JavaScript, and PostgreSQL. Skillful in database management, software testing, backend workflows, and leveraging AI-assisted development tools to optimize implementation speed. Seeking an internship or entry-level developer position to apply technical skills and contribute to web development projects.

TECHNICAL SKILLS
- Programming Languages & Databases: C#, SQL, JavaScript (ES6+), HTML5, CSS3, PostgreSQL, SQL Server (fundamentals)
- Frameworks, Tools & Platforms: ASP.NET Core MVC, Bootstrap 5, HTMX, Tailwind CSS (basic), Git, GitHub, Docker, Caddy, IIS Express
- Other Technical Competencies: Software Testing & Validation, System Architecture Design, AI-Assisted Engineering, Technical Documentation

ACADEMIC PROJECTS
PBV-III: Community Administration Web App | Lead Developer & Programmer
September 2025 - Present (Capstone Project for Pasig Bliss Village III Admin Office)
- Developed backend workflows, database models, user authentication, and system logic using C# and ASP.NET Core MVC.
- Designed responsive user interfaces using HTML5, CSS3, Bootstrap 5, and JavaScript, integrating HTMX for partial page updates.
- Conducted comprehensive integration testing and validation throughout development to diagnose and resolve bugs.
- Configured containerized local deployment using Docker and Caddy Reverse Proxy to host on the local network.

EDUCATION
ICCT Colleges Foundation, Inc. | Cainta, Rizal, Philippines
Bachelor of Science in Information Technology (BSIT)
Expected Graduation: 2027 (Currently in 3rd Year)
- Relevant Coursework: Database Management Systems, Web Development, Capstone Project & Research

CERTIFICATIONS
Foundational C# Certification - freeCodeCamp in partnership with Microsoft (2025)
- Verification: https://www.freecodecamp.org/certification/fcc1d991779-a61e-43ba-99c8-3879e7402023/foundational-c-sharp-with-microsoft

ADDITIONAL INFORMATION
- Languages: English (Professional working proficiency), Tagalog (Native)
```

---

## 3. Delivery Files

The single-page formatted document has been generated in two locations to avoid file lock locks:
- Principal Word Document: [Ruel_Christian_Umel_CV_ATS.docx](file:///E:/OJT/PORTFOLIO/Ruel_Christian_Umel_CV_ATS.docx)
- Fallback Version (for when the principal file is open in MS Word): [Ruel_Christian_Umel_CV_ATS_v2.docx](file:///E:/OJT/PORTFOLIO/Ruel_Christian_Umel_CV_ATS_v2.docx)
