REACT TASK

JOB PORTAL
Background Story: Create a Mini Job Portal for recruiters and job seekers. Job seekers register profiles, while recruiters search for candidates.
Features
-Job seekers provide name, email, role, and skills. Recruiters search for candidates by skills.
Email addresses must be unique.
• Profiles displayed as cards.
Pages
This website should have three pages, namely the home page, candidate registration page, and candidate list page, each having a navbar. Below are the required specifications:
Home Page
- Route: /
- Navbar with "Job Portal" title.
-Buttons- "Candidate List" and "Candidate Registration" should direct the user to the corresponding page. The "Candidate List" button should also show the total candidate profiles in parenthesis.
Candidate Registration
Route: /candidate/registration
• A navbar with the heading "Job Portal" and two buttons - Candidate List and Home - should navigate the user to the corresponding pages.
✓ components
JS Candidate Lists
JS CandidateRegistration.js
JS Home.js
Navbarjs
JS ProfileCard.js



Render Navigation buttons on the neader with below conditions and Kender Header
Tille Job Portal on the home, list, and registration page.
1.1 Render Navigation buttons on the header with below conditions: Home Screen (7)-does not show any buttons on the header. Registration Screen (/candidate/registration) - has "Home" and "Candidate List" button on the header
•List Screen (/candidate/list")- has "Home" and "Candidate Registration" button on the header
1.2 Ensure that the header title is set to "Job Portal" on the home, list, and registration
page.
The Test case ID is missing (you get Testcase Id from ID table). The title must be Job Portal.
1.3 Check if the Registration form is rendered or not (name, role, email, skills, submit, reset, add).
•Ensure that the Test case ID is given to the fields.
. Check if name, email, role, and skill use input HTML elements.
. Check if submit, reset, and skill use button HTML elements.
Task 2
2.1 The "Add skill button must follow these conditions:
The "Add skill' button is disabled until the candidate enters at least one value in the skill input field.
• The "Add skill" button is enabled until the candidate has a maximum of 5 skills.
2.2 Validate the Form
All the fields on the form are required (Name, Role, Email, Skills).
Name: Should be a valid string, containing only letters, numbers, and spaces.
• Role: Should be a valid string, containing only letters, numbers, and spaces. Email: Should be a valid email address (e.g., example@email.com).
Skills: Should be a valid array of skills, separated by commas or spaces.
Create Express.js App
"
At least one skill is required to register successfully.



user adds a skill to the skill input and clicks on add skill button, a tag appears below the input box with the name of the skill the user typed. The form should have a submit button and a Reset button.
The submit button will be disabled until the name, role, and email fields are non- emply and no skills have been added.
If the user registers with an already existing email id, registration should fail, and
a registration status message should be displayed: "Email already exists". The maximum number of skills that can be added is 5.
Upon successful registration, a registration status message should be displayed below the form: "Candidate profile created".
Candidate List
• Route: /candidate/list
- A navbar with the heading "Job Portal" and two buttons - Candidate Registration and Home - should navigate the user to the corresponding pages.
It should contain a list of profile cards with the name of the candidate, the role they are interested in, email, and skills in the form of tags.
-A search bar that searches through the list of profile cards based on their skills. For example, if "react" is searched, all profiles with the skill tag "react" should appear. There should also be an All button beside the search button, showing all the available profile cards when clicked.
-A title that shows the number of profiles found after the search. For example, searching a skill result in 5 profile cards should show "5 profiles found" and 0 in case of zero profiles found. Initially, it should show the number of total available profile cards.