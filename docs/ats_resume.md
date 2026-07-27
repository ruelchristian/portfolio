# ATS Resume Feature Documentation

An Applicant Tracking System (ATS) friendly resume was created to replace or augment the traditional CV layout (`Ruel_Christian_Umel_CV.docx`). The new file is saved at `Ruel_Christian_Umel_CV_ATS.docx` (with a fallback at `Ruel_Christian_Umel_CV_ATS_v2.docx`).

## What It Does
This document is a standardized, single-column version of Ruel Christian Umel's CV. It is optimized for programmatic parsing by Applicant Tracking Systems (ATS) commonly used by tech companies, recruitment portals, and databases. It has been strictly designed to fit **exactly one page** under Microsoft Word default layouts.

## Why It Was Implemented This Way (Based on ATS Research)
1. **Single-Column Format**: ATS systems typically read left-to-right, top-to-bottom. Multi-column CV structures risk text scrambling during parsing. A strict single-column layout ensures all text is read in the intended sequence.
2. **Page Spacing Constraints**:
   - Margins were optimized to **0.6 inches (top/bottom)** and **0.75 inches (left/right)** to gain extra vertical printable height.
   - Body font was set to **10pt (Arial)** to ensure high text density while remaining clear.
   - Section spacing was minimized (`space_before=Pt(10)`, `space_after=Pt(3)` for headers; `space_after=Pt(2)` for bullets).
   - Skills lists were merged from 5 separate categories into 3 multi-item lists, and contact info was flattened to a single centered paragraph line, ensuring the entire document fits comfortably on one page.
3. **No Divider Lines or Tables**: Based on ATS layout research, horizontal lines (borders), graphics, tables, icons, and shading should be avoided, as some parser models treat borders as divider characters or skip text that borders on graphic boundaries. Headers stand out strictly using bold formatting and capitalization.
4. **Keyword Optimization**: Grouped skills into explicit categories (`Programming Languages & Databases`, `Frameworks, Tools & Platforms`, etc.) to match search index patterns.
5. **Action-Verb Anchored Bullets**: Rephrased achievements for the *PBV-III: Community Administration Web App* project with explicit action verbs (e.g., *Developed*, *Designed*, *Conducted*, *Configured*) to highlight competencies in 4 high-impact bullets.
6. **No Header/Footer Traps**: Contact details are placed at the top of the body page rather than in document headers/footers, preventing extraction issues.
7. **Removal of Non-Standard Personal Details**: Details like Birth Date, Place of Birth, Gender, and Citizenship were omitted. In modern recruitment, especially in tech and international environments, these are excluded to comply with anti-bias hiring guidelines and to save layout space for qualifications.
8. **ASCII Character Compliance**: Replaced all occurrences of complex symbols (like `–` en-dashes or `—` em-dashes) with standard ASCII hyphens (`-`). This prevents character corruption or replacement symbols (like `` or ``) in legacy parsing systems.

## File Locations
- Script used to generate docx: `C:\Users\ruelc\.gemini\antigravity-cli\brain\b4c86eae-3fbb-4358-911a-49e30ddc4e0f\scratch\generate_docx.py`
- Markdown Draft: [plans/ats_resume_plan.md](file:///E:/OJT/PORTFOLIO/plans/ats_resume_plan.md)
- Generated Word Document: [Ruel_Christian_Umel_CV_ATS.docx](file:///E:/OJT/PORTFOLIO/Ruel_Christian_Umel_CV_ATS.docx)
- Fallback Word Document (if locked): [Ruel_Christian_Umel_CV_ATS_v2.docx](file:///E:/OJT/PORTFOLIO/Ruel_Christian_Umel_CV_ATS_v2.docx)
