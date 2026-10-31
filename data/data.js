// Generated from questions.json and glossary.json (unaltered) so the app runs from file:// without fetch().
window.CTFL_QUESTIONS = [
  {
    "id": "examA_1",
    "exam": "examA",
    "number": "1",
    "stem": "Which of the following statements describe a valid test objective?",
    "options": {
      "a": "To prove that there are no unfixed defects in the system under test",
      "b": "To prove that there will be no failures after the implementation of the system into production",
      "c": "To reduce the risk level of the test object and to build confidence in the quality level",
      "d": "To verify that there are no untested combinations of inputs"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "c"
    ],
    "lo": "FL-1.1.1",
    "k_level": "K1",
    "syllabus_section": "1.1.1",
    "syllabus_section_title": "Test Objectives",
    "syllabus_chapter": "1",
    "syllabus_chapter_title": "Fundamentals of Testing",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. It is impossible to prove that there are no defects anymore in the system under test. See testing principle 1",
      "b": "Is not correct. See testing principle 7",
      "c": "Is correct. Testing finds defects and failures which reduces the level of risk and at the same time gives more confidence in the quality level of the test object",
      "d": "Is not correct. It is impossible to test all combinations of inputs (see testing principle 2)"
    },
    "diagram": null
  },
  {
    "id": "examA_2",
    "exam": "examA",
    "number": "2",
    "stem": "Which of the following options shows an example of test activities that contribute to success?",
    "options": {
      "a": "Having testers involved during various software development lifecycle (SDLC) activities will help to detect defects in work products",
      "b": "Testers try not to disturb the developers while coding, so that the developers write better code",
      "c": "Testers collaborating with end users help to improve the quality of defect reports during component integration and system testing",
      "d": "Certified testers will design much better test cases than non-certified testers"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "a"
    ],
    "lo": "FL-1.2.1",
    "k_level": "K2",
    "syllabus_section": "1.2.1",
    "syllabus_section_title": "Testing's Contributions to Success",
    "syllabus_chapter": "1",
    "syllabus_chapter_title": "Fundamentals of Testing",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is correct. It is important that testers are involved from the beginning of the software development lifecycle (SDLC). It will increase understanding of design decisions and will detect defects early.",
      "b": "Is not correct. Both developers and testers will have more understanding of each other's work products and how to test the code",
      "c": "Is not correct. End users will not help the testers in increasing the quality of defect reports; also, users usually do not participate in low-level testing levels like integration testing",
      "d": "Is not correct. Being certified does not automatically mean that the tester will be better in test design"
    },
    "diagram": null
  },
  {
    "id": "examA_3",
    "exam": "examA",
    "number": "3",
    "stem": "You have been assigned as a tester to a team producing a new system incrementally. You have\nnoticed that no changes have been made to the existing regression test cases for several iterations\nand no new regression defects were identified. Your manager is happy, but you are not. Which\ntesting principle explains your skepticism?",
    "options": {
      "a": "Tests wear out",
      "b": "Absence-of-defects fallacy",
      "c": "Defects cluster together",
      "d": "Exhaustive testing is impossible"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "a"
    ],
    "lo": "FL-1.3.1",
    "k_level": "K2",
    "syllabus_section": "1.3.1",
    "syllabus_section_title": "Testing Principles",
    "syllabus_chapter": "1",
    "syllabus_chapter_title": "Fundamentals of Testing",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is correct. This principle means that if the same tests are repeated over and over again, eventually these tests no longer find any new defects. This is probably why the tests all passed in this release as well",
      "b": "Is not correct. This principle says about the mistaken belief that just finding and fixing a large number of defects will ensure the success of a system",
      "c": "Is not correct. This principle says that a small number of components usually contain most of the defects",
      "d": "Is not correct. This principle states that testing all combinations of inputs and preconditions is not feasible"
    },
    "diagram": null
  },
  {
    "id": "examA_4",
    "exam": "examA",
    "number": "4",
    "stem": "You work in a team that develops a mobile application for food ordering. In the current iteration the\nteam decided to implement the payment functionality.\n\nWhich of the following activities is a part of test analysis?",
    "options": {
      "a": "Estimating that testing the integration with the payment service will take 8 person-days",
      "b": "Deciding that the team should test if it is possible to properly share payment between many users",
      "c": "Using boundary value analysis (BVA) to derive the test data for the test cases that check the correct payment processing for the minimum allowed amount to be paid",
      "d": "Analyzing the discrepancy between the actual result and expected result after executing a test case that checks the process of payment with a credit card, and reporting a defect"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "b"
    ],
    "lo": "FL-1.4.1",
    "k_level": "K2",
    "syllabus_section": "1.4.1",
    "syllabus_section_title": "Test Activities and Tasks",
    "syllabus_chapter": "1",
    "syllabus_chapter_title": "Fundamentals of Testing",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. Estimating the test effort is part of test planning",
      "b": "Is correct. This is an example of defining test conditions which is a part of test analysis",
      "c": "Is not correct. Using test techniques to derive coverage items is a part of test design",
      "d": "Is not correct. Reporting defects found during dynamic testing is a part of test execution"
    },
    "diagram": null
  },
  {
    "id": "examA_5",
    "exam": "examA",
    "number": "5",
    "stem": "Which of the following factors have a SIGNIFICANT influence on the test approach?\n\n                i.       The SDLC\n               ii.       The number of defects detected in previous projects\n              iii.       The identified product risks\n              iv.        New regulatory requirements forcing formal white-box testing\n               v.        The test environment setup",
    "options": {
      "a": "i, ii have significant influence",
      "b": "i, iii, iv have significant influence",
      "c": "ii, iv, v have significant influence",
      "d": "iii, v have significant influence"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "b"
    ],
    "lo": "FL-1.4.2",
    "k_level": "K2",
    "syllabus_section": "1.4.2",
    "syllabus_section_title": "Test Process in Context",
    "syllabus_chapter": "1",
    "syllabus_chapter_title": "Fundamentals of Testing",
    "rationale_preamble": "i. Is true. The SDLC has an influence on the test approach ii. Is false. The number of defects detected in previous projects may have some influence, but this is not as significant as i, iii and iv iii. Is true. The identified product risks are one of the most important factors influencing the test approach iv. Is true. Regulatory requirements are important factors influencing the test approach v. Is false. The test environment has no significant influence on the test approach Thus:",
    "rationale_by_option": {
      "a": "Is not correct",
      "b": "Is correct",
      "c": "Is not correct",
      "d": "Is not correct"
    },
    "diagram": null
  },
  {
    "id": "examA_6",
    "exam": "examA",
    "number": "6",
    "stem": "Which TWO of the following tasks belong MAINLY to a testing role?",
    "options": {
      "a": "Configure test environments",
      "b": "Maintain the product backlog",
      "c": "Design solutions to new requirements",
      "d": "Create the test plan",
      "e": "Analyze the test basis"
    },
    "select_instruction": "Select TWO option",
    "points": 1,
    "correct": [
      "a",
      "e"
    ],
    "lo": "FL-1.4.5",
    "k_level": "K2",
    "syllabus_section": "1.4.5",
    "syllabus_section_title": "Roles in Testing",
    "syllabus_chapter": "1",
    "syllabus_chapter_title": "Fundamentals of Testing",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is correct. This is done by the testers",
      "b": "Is not correct. The product backlog is built and maintained by the product owner",
      "c": "Is not correct. This is done by the development team",
      "d": "Is not correct. This is a managerial role",
      "e": "Is correct. This is done by the testers since its technical task done as part of a test analysis."
    },
    "diagram": null
  },
  {
    "id": "examA_7",
    "exam": "examA",
    "number": "7",
    "stem": "Which of the following skills (i-v) are the MOST important skills of a tester?\n\n                i.       Having domain knowledge\n               ii.       Creating a product vision\n              iii.       Being a good team player\n              iv.        Planning and organizing the work of the team\n               v.        Critical thinking",
    "options": {
      "a": "ii and iv are important",
      "b": "i, iii and v are important",
      "c": "i, ii and v are important",
      "d": "iii and iv are important"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "b"
    ],
    "lo": "FL-1.5.1",
    "k_level": "K2",
    "syllabus_section": "1.5.1",
    "syllabus_section_title": "Generic Skills Required for Testing",
    "syllabus_chapter": "1",
    "syllabus_chapter_title": "Fundamentals of Testing",
    "rationale_preamble": "i. Is true. Having domain knowledge is an important tester skill ii. Is false. This is a task of the business analyst together with the business representative iii. Is true. Being a good team player is an important skill iv. Is false. Planning and organizing the work of the team is a task of the test manager or, mostly in an Agile software development project, the whole team and not just the tester v. Is true. Critical thinking is one of the most important skills of testers Thus:",
    "rationale_by_option": {
      "a": "Is not correct",
      "b": "Is correct",
      "c": "Is not correct",
      "d": "Is not correct"
    },
    "diagram": null
  },
  {
    "id": "examA_8",
    "exam": "examA",
    "number": "8",
    "stem": "How is the whole team approach present in the interactions between testers and business\nrepresentatives?",
    "options": {
      "a": "Business representatives decide on test automation approaches",
      "b": "Testers help business representatives to define a test strategy",
      "c": "Business representatives are not part of the whole team approach",
      "d": "Testers help business representatives to create suitable acceptance tests"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "d"
    ],
    "lo": "FL-1.5.2",
    "k_level": "K1",
    "syllabus_section": "1.5.2",
    "syllabus_section_title": "Whole Team Approach",
    "syllabus_chapter": "1",
    "syllabus_chapter_title": "Fundamentals of Testing",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. The test automation approach is defined by testers with the help of developers and business representatives",
      "b": "Is not correct. The test strategy is decided in collaboration with the developers",
      "c": "Is not correct. Testers, developers, and business representatives are part of the whole team approach",
      "d": "Is correct. Testers will work closely with business representatives to ensure that the desired quality levels are achieved. This includes supporting and collaborating with them to help them create suitable acceptance tests"
    },
    "diagram": null
  },
  {
    "id": "examA_9",
    "exam": "examA",
    "number": "9",
    "stem": "Consider the following rule: “for every SDLC activity there is a corresponding test activity”. In which\nSDLC models does this rule hold?",
    "options": {
      "a": "Only in sequential development models",
      "b": "Only in iterative development models",
      "c": "Only in iterative and incremental development models",
      "d": "In sequential, incremental, and iterative development models"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "d"
    ],
    "lo": "FL-2.1.2",
    "k_level": "K1",
    "syllabus_section": "2.1.2",
    "syllabus_section_title": "Software Development Lifecycle and Good Testing Practices",
    "syllabus_chapter": "2",
    "syllabus_chapter_title": "Testing Throughout the Software Development Lifecycle",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct",
      "b": "Is not correct",
      "c": "Is not correct",
      "d": "Is correct. This rule holds for all SDLC models"
    },
    "diagram": null
  },
  {
    "id": "examA_10",
    "exam": "examA",
    "number": "10",
    "stem": "Which of the following statements BEST describes the acceptance test-driven development (ATDD)\napproach?",
    "options": {
      "a": "In ATDD, acceptance criteria are typically created based on the given/when/then format",
      "b": "In ATDD, test cases are mainly created at component testing and are code-oriented",
      "c": "In ATDD, tests are created, based on acceptance criteria to drive the development of the related software",
      "d": "in ATDD, tests are based on the desired behavior of the software, which makes it easier for team members to understand them"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "c"
    ],
    "lo": "FL-2.1.3",
    "k_level": "K1",
    "syllabus_section": "2.1.3",
    "syllabus_section_title": "Testing as a Driver for Software Development",
    "syllabus_chapter": "2",
    "syllabus_chapter_title": "Testing Throughout the Software Development Lifecycle",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. It is more often used in behavior-driven development (BDD)",
      "b": "Is not correct. It is the description of test-driven development (TDD)",
      "c": "Is correct. In acceptance test-driven development (ATDD) tests are written from acceptance criteria as part of the design process",
      "d": "Is not correct. It is used in BDD"
    },
    "diagram": null
  },
  {
    "id": "examA_11",
    "exam": "examA",
    "number": "11",
    "stem": "Which of the following is NOT an example of the shift-left approach?",
    "options": {
      "a": "Reviewing the user requirements before they are formally accepted by the stakeholders",
      "b": "Writing a component test before the corresponding code is written",
      "c": "Executing a performance efficiency test for a component during component testing",
      "d": "Writing a test script before setting up the configuration management process"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "d"
    ],
    "lo": "FL-2.1.5",
    "k_level": "K2",
    "syllabus_section": "2.1.5",
    "syllabus_section_title": "Shift Left",
    "syllabus_chapter": "2",
    "syllabus_chapter_title": "Testing Throughout the Software Development Lifecycle",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. Early review is an example of the shift-left approach",
      "b": "Is not correct. TDD is an example of the shift-left approach",
      "c": "Is not correct. Early non-functional testing is an example of the shift-left approach",
      "d": "Is correct. Test scripts should be subject to configuration management, so it makes no sense to create the test scripts before this process is set up"
    },
    "diagram": null
  },
  {
    "id": "examA_12",
    "exam": "examA",
    "number": "12",
    "stem": "Which of the arguments below would you use to convince your manager to organize retrospectives\nat the end of each release cycle?",
    "options": {
      "a": "Retrospectives are very popular these days and clients would appreciate it if we added them to our processes",
      "b": "Organizing retrospectives will save the organization money because without them end user representatives do not provide immediate feedback about the product",
      "c": "Process weaknesses identified during the retrospective can be analyzed and serve as a to do list for the organization’s continuous process improvement program",
      "d": "Retrospectives embrace five values including courage and respect, which are crucial to maintain continuous improvement in the organization"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "c"
    ],
    "lo": "FL-2.1.6",
    "k_level": "K2",
    "syllabus_section": "2.1.6",
    "syllabus_section_title": "Retrospectives and Process Improvement",
    "syllabus_chapter": "2",
    "syllabus_chapter_title": "Testing Throughout the Software Development Lifecycle",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. Retrospectives are more useful for identifying improvement opportunities and have little importance for clients",
      "b": "Is not correct. Retrospectives are not aimed to collect feedback about the product, but about the process. Additionally, retrospectives are internal activity for the team and should not include end user representatives",
      "c": "Is correct. Regularly conducted retrospectives, when appropriate follow up activities occur, are critical to continual improvement of development and testing",
      "d": "Is not correct. Courage and respect are values of Extreme Programming and are not closely related to retrospectives"
    },
    "diagram": null
  },
  {
    "id": "examA_13",
    "exam": "examA",
    "number": "13",
    "stem": "Which types of failures (1-4) fit which test levels (A-D) BEST?\n\n                  1.     Failures in system behavior as it deviates from the user’s business needs\n                  2.     Failures in communication between components\n                  3.     Failures in logic in the code\n                  4.     Failures in not correctly implemented business rules\n\n                  A. Component testing\n                  B. Component integration testing\n                  C. System testing\n                  D. Acceptance testing",
    "options": {
      "a": "1D, 2B, 3A, 4C",
      "b": "1D, 2B, 3C, 4A",
      "c": "1B, 2A, 3D, 4C",
      "d": "1C, 2B, 3A, 4D"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "a"
    ],
    "lo": "FL-2.2.1",
    "k_level": "K2",
    "syllabus_section": "2.2.1",
    "syllabus_section_title": "Test Levels",
    "syllabus_chapter": "2",
    "syllabus_chapter_title": "Testing Throughout the Software Development Lifecycle",
    "rationale_preamble": "Considering: • The test basis for acceptance testing is the user’s business needs (1D) • Communication between components is tested during component integration testing (2B) • Failures in logic can be found during component testing (3A) • Business rules are the test basis for system testing (4C) Thus:",
    "rationale_by_option": {
      "a": "Is correct",
      "b": "Is not correct",
      "c": "Is not correct",
      "d": "Is not correct"
    },
    "diagram": null
  },
  {
    "id": "examA_14",
    "exam": "examA",
    "number": "14",
    "stem": "You are testing a user story with three acceptance criteria: AC1, AC2 and AC3. AC1 is covered by\ntest case TC1, AC2 by TC2, and AC3 by TC3. The test execution history had three test runs on three\nconsecutive versions of the software as follows:\n\n                                                         Execution 1    Execution 2    Execution 3\n                                       TC1                 (1) Failed    (4) Passed     (7) Passed\n                                       TC2                (2) Passed      (5) Failed    (8) Passed\n                                       TC3                 (3) Failed     (6) Failed    (9) Passed\n\nTests are repeated once you are informed that all defects found in the test run are corrected and\na new version of the software is available.\nWhich of the above tests are executed as regression tests?",
    "options": {
      "a": "Only 4, 7, 8, 9",
      "b": "Only 5, 7",
      "c": "Only 4, 6, 8, 9",
      "d": "Only 5, 6"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "b"
    ],
    "lo": "FL-2.2.3",
    "k_level": "K2",
    "syllabus_section": "2.2.3",
    "syllabus_section_title": "Confirmation Testing and Regression Testing",
    "syllabus_chapter": "2",
    "syllabus_chapter_title": "Testing Throughout the Software Development Lifecycle",
    "rationale_preamble": "Because TC1 and TC3 failed in Execution 1 (i.e., test (1) and test (3)), test (4) and test (6) are confirmation tests. Because TC2 and TC3 failed in Execution 2 (i.e., tests (5) and (6)), test (8) and test (9) are also confirmation tests. TC2 passed in Execution 1 (i.e., test (2)), so test (5) is a regression test. TC1 passed in the Execution 2 (i.e., test (4)), so test (7) is also a regression test. Thus:",
    "rationale_by_option": {
      "a": "Is not correct",
      "b": "Is correct",
      "c": "Is not correct",
      "d": "Is not correct"
    },
    "diagram": null
  },
  {
    "id": "examA_15",
    "exam": "examA",
    "number": "15",
    "stem": "Which of the following is NOT a benefit of static testing?",
    "options": {
      "a": "Having less expensive defect management due to the ease of detecting defects later in the SDLC",
      "b": "Fixing defects found during static testing is generally much less expensive than fixing defects found during dynamic testing",
      "c": "Finding coding defects that might not have been found by only performing dynamic testing",
      "d": "Detecting gaps and inconsistencies in requirements"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "a"
    ],
    "lo": "FL-3.1.2",
    "k_level": "K2",
    "syllabus_section": "3.1.2",
    "syllabus_section_title": "Value of Static Testing",
    "syllabus_chapter": "3",
    "syllabus_chapter_title": "Static Testing",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is correct. Defect management is no less expensive. Finding and fixing defects later in the SDLC is more costly",
      "b": "Is not correct. This is a benefit of static testing",
      "c": "Is not correct. This is a benefit of static testing",
      "d": "Is not correct. This is a benefit of static testing"
    },
    "diagram": null
  },
  {
    "id": "examA_16",
    "exam": "examA",
    "number": "16",
    "stem": "Which of the following is a benefit of early and frequent feedback?",
    "options": {
      "a": "It improves the test process for future projects",
      "b": "It forces customers to prioritize their requirements based on agreed risks",
      "c": "It provides a measure for the quality of changes",
      "d": "It helps avoid requirements misunderstandings"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "d"
    ],
    "lo": "FL-3.2.1",
    "k_level": "K1",
    "syllabus_section": "3.2.1",
    "syllabus_section_title": "Benefits of Early and Frequent Stakeholder Feedback",
    "syllabus_chapter": "3",
    "syllabus_chapter_title": "Static Testing",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. Feedback can improve the test process, but if one only wants to improve future projects, the feedback does not need to come early or frequently",
      "b": "Is not correct. Feedback is not used to prioritize requirements",
      "c": "Is not correct. There is no one, recommended way to measure quality of changes. Also, this is not one of the benefits of early feedback that are mentioned in section 3.2.1",
      "d": "Is correct. Early and frequent feedback can prevent misunderstandings about requirements"
    },
    "diagram": null
  },
  {
    "id": "examA_17",
    "exam": "examA",
    "number": "17",
    "stem": "The reviews being used in your organization have the following attributes:\n\n             •      There is the role of a scribe\n             •      The main purpose is to evaluate quality\n             •      The meeting is led by the author of the work product\n             •      There is individual preparation\n             •      A review report is produced\nWhich of the following review types is MOST likely being used?",
    "options": {
      "a": "Informal review",
      "b": "Walkthrough",
      "c": "Technical review",
      "d": "Inspection"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "b"
    ],
    "lo": "FL-3.2.4",
    "k_level": "K2",
    "syllabus_section": "3.2.4",
    "syllabus_section_title": "Review Types",
    "syllabus_chapter": "3",
    "syllabus_chapter_title": "Static Testing",
    "rationale_preamble": "Considering the attributes: • Specified for walkthroughs, technical reviews, and inspections; thus, the reviews being performed cannot be informal reviews • The purpose of evaluating quality is one of the most important objectives of a walkthrough • This is not allowed for inspections and is typically not done in technical reviews. A moderator is needed in walkthroughs and is allowed for informal reviews • All types of reviews can include individual preparation (even informal reviews) • All types of reviews can produce a review report, although informal reviews do not require documentation Thus:",
    "rationale_by_option": {
      "a": "Is not correct",
      "b": "Is correct",
      "c": "Is not correct",
      "d": "Is not correct"
    },
    "diagram": null
  },
  {
    "id": "examA_18",
    "exam": "examA",
    "number": "18",
    "stem": "Which of these statements is NOT a factor that contributes to successful reviews?",
    "options": {
      "a": "Participants should dedicate adequate time for the review",
      "b": "Splitting large work products into small parts to make the required effort less intense",
      "c": "Participants should avoid behaviors that might indicate boredom, exasperation, or hostility to other participants",
      "d": "Failures found should be acknowledged, appreciated, and handled objectively"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "d"
    ],
    "lo": "FL-3.2.5",
    "k_level": "K1",
    "syllabus_section": "3.2.5",
    "syllabus_section_title": "Success Factors for Reviews",
    "syllabus_chapter": "3",
    "syllabus_chapter_title": "Static Testing",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. Adequate time for individuals is a success factor",
      "b": "Is not correct. Splitting work products into small adequate parts is a success factor",
      "c": "Is not correct. Avoiding behaviors that might indicate boredom, exasperation, etc. is a success factor",
      "d": "Is correct. During reviews one can find defects, not failures"
    },
    "diagram": null
  },
  {
    "id": "examA_19",
    "exam": "examA",
    "number": "19",
    "stem": "Which of the following is a characteristic of experience-based test techniques?",
    "options": {
      "a": "Test cases are created based on detailed design information",
      "b": "Items tested within the interface code section are used to measure coverage",
      "c": "The test techniques heavily rely on the tester’s knowledge of the software and the business domain",
      "d": "The test cases are used to identify deviations from the requirements"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "c"
    ],
    "lo": "FL-4.1.1",
    "k_level": "K2",
    "syllabus_section": "4.1.1",
    "syllabus_section_title": "Test Techniques Overview",
    "syllabus_chapter": "4",
    "syllabus_chapter_title": "Test Analysis and Design",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. This is a common characteristic of white-box test techniques. Test conditions, test cases, and test data are derived from a test basis that may include code, software architecture, detailed design, or any other source of information regarding the structure of the software.",
      "b": "Is not correct. This is a common characteristic of white-box test techniques. Coverage is measured based on the items tested within a selected structure and the test technique applied to the test basis",
      "c": "Is correct. This is a common characteristic of experience-based test techniques. This knowledge and experience include expected use of the software, its environment, likely defects, and the distribution of those defects is used to define tests",
      "d": "Is not correct. This is a common characteristic of black-box test techniques. Test cases may be used to detect gaps within requirements and the implementation of the requirements, as well as deviations from the requirements"
    },
    "diagram": null
  },
  {
    "id": "examA_20",
    "exam": "examA",
    "number": "20",
    "stem": "You are testing a simplified apartment search form which has only two search criteria:\n\n             •      floor (with three possible options: ground floor; first floor; second or higher floor)\n             •      garden type (with three possible options: no garden; small garden; large garden)\n\nEach of the apartment on the ground floor has a garden, apartments on higher floors don’t. The form\nhas a built-in validation mechanism that will not allow you to use the search criteria which violate this\nrule.\n\nEach test has two input values: floor and garden type. You want to apply equivalence partitioning\n(EP) to cover each floor and each garden type in your tests.\n\nWhat is the minimal number of test cases to achieve 100% EP coverage for valid partitions?",
    "options": {
      "a": "3",
      "b": "4",
      "c": "5",
      "d": "6"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "b"
    ],
    "lo": "FL-4.2.1",
    "k_level": "K3",
    "syllabus_section": "4.2.1",
    "syllabus_section_title": "Equivalence Partitioning",
    "syllabus_chapter": "4",
    "syllabus_chapter_title": "Test Analysis and Design",
    "rationale_preamble": "The situation presented in the question is described in the syllabus as “each choice” coverage. “Small garden” and “large garden” can go only with “ground floor”, so we need two test cases with “ground floor” which cover these two “garden type” partitions. We need two more test cases to cover the two other “floor” partitions. The remaining ”garden type” partition of “no garden” is covered by these tests. We need a total of four test cases: TC1 (ground floor, small garden) TC2 (ground floor, large garden) TC3 (first floor, no garden) TC4 (second or higher floor, no garden) Thus:",
    "rationale_by_option": {
      "a": "Is not correct",
      "b": "Is correct",
      "c": "Is not correct",
      "d": "Is not correct"
    },
    "diagram": null
  },
  {
    "id": "examA_21",
    "exam": "examA",
    "number": "21",
    "stem": "You are testing a system that calculates the final course grade for a given student.\n\nThe final grade is assigned based on the final result, according to the following rules:\n\n             •      0 – 50 points: failed\n             •      51 – 60 points: fair\n             •      61 – 70 points: satisfactory\n             •      71 – 80 points: good\n             •      81 – 90 points: very good\n             •      91 – 100 points: excellent\n\nYou have prepared the following set of test cases:\n\n                                     Final                  Final\n                                    result                  grade\n                  TC1                 91                  excellent\n                  TC2                 50                    failed\n                  TC3                 81                  very good\n                  TC4                 60                      fair\n                  TC5                 70                 satisfactory\n                  TC6                 80                    good\n\nWhat is the 2-value boundary value analysis (BVA) coverage for the final result that is achieved with\nthe existing test cases?",
    "options": {
      "a": "50%",
      "b": "60%",
      "c": "33.3%",
      "d": "100%"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "a"
    ],
    "lo": "FL-4.2.2",
    "k_level": "K3",
    "syllabus_section": "4.2.2",
    "syllabus_section_title": "Boundary Value Analysis",
    "syllabus_chapter": "4",
    "syllabus_chapter_title": "Test Analysis and Design",
    "rationale_preamble": "There are 12 boundary values for the final result values: 0, 50, 51, 60, 61, 70, 71, 80, 81, 90, 91, and 100. The test cases cover six of them (TC1 – 91, TC2 – 50, TC3 – 81, TC4 – 60, TC5 – 70 and TC7 – 51). Therefore, the test cases cover 6/12 = 50%. Thus:",
    "rationale_by_option": {
      "a": "Is correct",
      "b": "Is not correct",
      "c": "Is not correct",
      "d": "Is not correct"
    },
    "diagram": null
  },
  {
    "id": "examA_22",
    "exam": "examA",
    "number": "22",
    "stem": "Your favorite bicycle daily rental store has just introduced a new Customer Relationship\nManagement system and asked you, one of their most loyal members, to test it.\n\nThe implemented features are as follows:\n\n             •      Anyone can rent a bicycle, but members receive a 20% discount\n             •      However, if the return deadline is missed, the discount is no longer available\n             •      After 15 rentals, members get a gift: a T-Shirt\nDecision table describing the implemented features looks as follows:\n\n                            Conditions                   R1   R2    R3   R4   R5   R6   R7    R8\n                             Being a member              T    T     T    T    F    F    F     F\n                             Missed deadline             T    F     T    F    T    F    F     T\n                                  15th rental            F    F     T    T    F    F    T     T\n                            Actions\n                                20% discount                   X          X\n                                  Gift T-Shirt                      X     X                    X\n\nBased ONLY on the feature description of the Customer Relationship Management system, which\nof the above rules describes an impossible situation?",
    "options": {
      "a": "R4",
      "b": "R2",
      "c": "R6",
      "d": "R8"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "d"
    ],
    "lo": "FL-4.2.3",
    "k_level": "K3",
    "syllabus_section": "4.2.3",
    "syllabus_section_title": "Decision Table Testing",
    "syllabus_chapter": "4",
    "syllabus_chapter_title": "Test Analysis and Design",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. A member without a missed deadline can get a discount and a gift T-Shirt after 15 bicycle rentals",
      "b": "Is not correct. A member without a missed deadline can get a discount but no gift T-Shirt until they rented a bicycle 15 times",
      "c": "Is not correct. Non-members cannot get a discount, even if they did not miss a deadline yet",
      "d": "Is correct. No discount as a non-member that has also missed a deadline, but only members can receive a gift T-Shirt. Hence, the action is not correct"
    },
    "diagram": null
  },
  {
    "id": "examA_23",
    "exam": "examA",
    "number": "23",
    "stem": "You test a system whose lifecycle is modeled by the state transition diagram shown below. The\nsystem starts in the INIT state and ends its operation in the OFF state.\n\nWhat is the MINIMAL number of test cases to achieve valid transitions coverage?",
    "options": {
      "a": "4",
      "b": "2",
      "c": "7",
      "d": "3"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "d"
    ],
    "lo": "FL-4.2.4",
    "k_level": "K3",
    "syllabus_section": "4.2.4",
    "syllabus_section_title": "State Transition Testing",
    "syllabus_chapter": "4",
    "syllabus_chapter_title": "Test Analysis and Design",
    "rationale_preamble": "“test” and “error” transitions cannot occur in one test case. Neither can both “done” transitions. This means we need at least three test cases to achieve transition coverage. For example: TC1: test, done TC2: run, error, done TC3: run, pause, resume, pause, done Thus:",
    "rationale_by_option": {
      "a": "Is not correct",
      "b": "Is not correct",
      "c": "Is not correct",
      "d": "Is correct"
    },
    "diagram": "diagram_examA_23.png"
  },
  {
    "id": "examA_24",
    "exam": "examA",
    "number": "24",
    "stem": "Your test suite achieved 100% statement coverage. What is the consequence of this fact?",
    "options": {
      "a": "Each instruction in the code that contains a defect has been executed at least once",
      "b": "Any test suite containing more test cases than your test suite will also achieve 100% statement coverage",
      "c": "Each path in the code has been executed at least once",
      "d": "Every combination of input values has been tested at least once"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "a"
    ],
    "lo": "FL-4.3.1",
    "k_level": "K2",
    "syllabus_section": "4.3.1",
    "syllabus_section_title": "Statement Testing and Statement Coverage",
    "syllabus_chapter": "4",
    "syllabus_chapter_title": "Test Analysis and Design",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is correct. Since 100% statement coverage is achieved, every statement, including the ones with defects, must have been executed and evaluated at least once",
      "b": "Is not correct. Coverage depends on what is tested, not on the number of test cases. For example, for code “if (x==0) y=1”, one test case (x=0) achieves 100% statement coverage, but two test cases (x=1) and (x=2) together achieve only 50% statement coverage",
      "c": "Is not correct. If there is a loop in the code there may be an infinite number of possible paths, so it is not possible to execute all the possible paths in the code",
      "d": "Is not correct. Exhaustive testing is not possible (see the seven testing principles section in the syllabus). For example, for code “input x; print x” any single test with arbitrary x achieves 100% statement coverage, but covers one input value"
    },
    "diagram": null
  },
  {
    "id": "examA_25",
    "exam": "examA",
    "number": "25",
    "stem": "Which of the following is NOT true for white-box testing?",
    "options": {
      "a": "During white-box testing the entire software implementation is considered",
      "b": "White-box coverage metrics can help identify additional tests to increase code coverage",
      "c": "White-box test techniques can be used in static testing",
      "d": "White-box testing can help identify gaps in requirements implementation"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "d"
    ],
    "lo": "FL-4.3.3",
    "k_level": "K2",
    "syllabus_section": "4.3.3",
    "syllabus_section_title": "The Value of White-box Testing",
    "syllabus_chapter": "4",
    "syllabus_chapter_title": "Test Analysis and Design",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. The fundamental strength of white-box test techniques is that the entire software implementation is taken into account during testing",
      "b": "Is not correct. White-box coverage measures provide an objective measure of coverage and provide the necessary information to allow additional tests to be generated to increase this coverage",
      "c": "Is not correct. White-box test techniques can be used to perform reviews (static testing)",
      "d": "Is correct. This is the weakness of the white-box test techniques. They are not able to identify the missing implementation, because they are based solely on the test object structure, not on the requirements specification"
    },
    "diagram": null
  },
  {
    "id": "examA_26",
    "exam": "examA",
    "number": "26",
    "stem": "Which of the following BEST describes the concept behind error guessing?",
    "options": {
      "a": "Error guessing involves using your knowledge and experience of defects found in the past and typical errors made by developers",
      "b": "Error guessing involves using your personal experience of development and the errors you made as a developer",
      "c": "Error guessing requires you to imagine that you are the user of the test object and to guess errors the user could make interacting with it",
      "d": "Error guessing requires you to rapidly duplicate the development task to identify the sort of errors a developer might make"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "a"
    ],
    "lo": "FL-4.4.1",
    "k_level": "K2",
    "syllabus_section": "4.4.1",
    "syllabus_section_title": "Error Guessing",
    "syllabus_chapter": "4",
    "syllabus_chapter_title": "Test Analysis and Design",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is correct. The basic concept behind error guessing is that the tester tries to guess what errors may have been made by the developer and what defects may be in the test object based on past experience (and sometimes checklists)",
      "b": "Is not correct. Although a tester who used to be a developer may use their personal experience to help them when performing error guessing, the test technique is not based on prior knowledge of development",
      "c": "Is not correct. Error guessing is not a usability technique for guessing how users may fail to interact with the test object",
      "d": "Is not correct. Duplicating the development task has several flaws that make it impractical, such as the tester having equivalent skills to the developer and the time involved to perform the development. It is not error guessing"
    },
    "diagram": null
  },
  {
    "id": "examA_27",
    "exam": "examA",
    "number": "27",
    "stem": "In your project there has been a delay in the release of a brand-new application and test execution\nstarted late, but you have very detailed domain knowledge and good analytical skills. The full list of\nrequirements has not yet been shared with the team, but management is asking for some test results\nto be presented.\n\nWhich test technique fits BEST in this situation?",
    "options": {
      "a": "Checklist-based testing",
      "b": "Error guessing",
      "c": "Exploratory testing",
      "d": "Branch testing"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "c"
    ],
    "lo": "FL-4.4.2",
    "k_level": "K2",
    "syllabus_section": "4.4.2",
    "syllabus_section_title": "Exploratory Testing",
    "syllabus_chapter": "4",
    "syllabus_chapter_title": "Test Analysis and Design",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. This is a new product. You probably do not have a checklist yet and test conditions might not be known due to missing requirements",
      "b": "Is not correct. This is a new product. You probably do not have enough information to make correct error guesses",
      "c": "Is correct. Exploratory testing is most useful when there are few known specifications and/or there is a pressing timeline for testing",
      "d": "Is not correct. Branch testing is time-consuming, and your management is asking about some test results now. Also, branch testing does not involve domain knowledge"
    },
    "diagram": null
  },
  {
    "id": "examA_28",
    "exam": "examA",
    "number": "28",
    "stem": "Which of the following BEST describes the way acceptance criteria can be documented?",
    "options": {
      "a": "Performing retrospectives to determine the actual needs of the stakeholders regarding a given user story",
      "b": "Using the given/when/then format to describe an example test condition related to a given user story",
      "c": "Using verbal communication to reduce the risk of misunderstanding the acceptance criteria by others",
      "d": "Documenting risks related to a given user story in a test plan to facilitate the risk-based testing of a given user story"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "b"
    ],
    "lo": "FL-4.5.2",
    "k_level": "K2",
    "syllabus_section": "4.5.2",
    "syllabus_section_title": "Acceptance Criteria",
    "syllabus_chapter": "4",
    "syllabus_chapter_title": "Test Analysis and Design",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. Retrospectives are used to capture lessons learned and to improve the development and testing process, not to document the acceptance criteria",
      "b": "Is correct. This is the standard way to document acceptance criteria",
      "c": "Is not correct. Verbal communication does not allow to physically document the acceptance criteria as part of a user story (”card” aspect in the 3C’s model)",
      "d": "Is not correct. Acceptance criteria are related to a user story, not a test plan. Also, acceptance criteria are the conditions that have to be fulfilled to decide if the user story is complete. Risks are not such conditions"
    },
    "diagram": null
  },
  {
    "id": "examA_29",
    "exam": "examA",
    "number": "29",
    "stem": "Consider the following user story:\n\n                    As an Editor\n                    I want to review content before it is published\n                    so that I can ensure the grammar is correct\n\nand its acceptance criteria:\n\n             •      The user can log in to the content management system with \"Editor\" role\n             •      The editor can view existing content pages\n             •      The editor can edit the page content\n             •      The editor can add markup comments\n             •      The editor can save changes\n             •      The editor can reassign to the \"content owner\" role to make updates\n\nWhich of the following is the BEST example of an ATDD test for this user story?",
    "options": {
      "a": "Test if the editor can save the document after edit the page content",
      "b": "Test if the content owner can log in and make updates to the content",
      "c": "Test if the editor can schedule the edited content for publication",
      "d": "Test if the editor can reassign to another editor to make updates"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "a"
    ],
    "lo": "FL-4.5.3",
    "k_level": "K3",
    "syllabus_section": "4.5.3",
    "syllabus_section_title": "Acceptance Test-driven Development (ATDD)",
    "syllabus_chapter": "4",
    "syllabus_chapter_title": "Test Analysis and Design",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is correct. This test covers two acceptance criteria: one about editing the document and one about saving changes",
      "b": "Is not correct. Acceptance criteria cover the editor activities, not the content owner activities",
      "c": "Is not correct. Scheduling the edited content for publication may be a nice feature, but it is not covered by the acceptance criteria",
      "d": "Is not correct. Acceptance criteria state about reassigning from an editor to the content owner, not to another editor"
    },
    "diagram": null
  },
  {
    "id": "examA_30",
    "exam": "examA",
    "number": "30",
    "stem": "How do testers add value to iteration and release planning?",
    "options": {
      "a": "Testers determine the priority of the user stories to be developed",
      "b": "Testers focus only on the functional aspects of the system to be tested",
      "c": "Testers participate in the detailed risk identification and risk assessment of user stories",
      "d": "Testers guarantee the release of high-quality software through early test design during the release planning"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "c"
    ],
    "lo": "FL-5.1.2",
    "k_level": "K1",
    "syllabus_section": "5.1.2",
    "syllabus_section_title": "Tester's Contribution to Iteration and Release Planning",
    "syllabus_chapter": "5",
    "syllabus_chapter_title": "Managing the Test Activities",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. Priorities for user stories are determined by the business representative together with the development team",
      "b": "Is not correct. Testers focus on both functional and non-functional aspects of the system to be tested",
      "c": "Is correct. According to the syllabus, this is one of the ways testers add value to iteration and release planning",
      "d": "Is not correct. Early test design is not part of release planning. Early test design does not automatically guarantee the release of quality software"
    },
    "diagram": null
  },
  {
    "id": "examA_31",
    "exam": "examA",
    "number": "31",
    "stem": "Which TWO of the following options are the exit criteria for testing a system?",
    "options": {
      "a": "Test environment readiness",
      "b": "The ability to log in to the test object by the tester",
      "c": "Estimated defect density is reached",
      "d": "Requirements are translated into given/when/then format",
      "e": "Regression tests are automated"
    },
    "select_instruction": "Select TWO option",
    "points": 1,
    "correct": [
      "c",
      "e"
    ],
    "lo": "FL-5.1.3",
    "k_level": "K2",
    "syllabus_section": "5.1.3",
    "syllabus_section_title": "Entry Criteria and Exit Criteria",
    "syllabus_chapter": "5",
    "syllabus_chapter_title": "Managing the Test Activities",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. Test environment readiness is a resource availability criterion; hence it belongs to the entry criteria",
      "b": "Is not correct. This is a resource availability criterion; hence it belongs to the entry criteria",
      "c": "Is correct. Estimated defect density is a measure of diligence; hence it belongs to the exit criteria.",
      "d": "Is not correct. Requirements translated into a given format result in testable requirements; hence it belongs to the entry criteria",
      "e": "Is correct. Automation of regression tests is a completion criterion; hence it belongs to the exit criteria"
    },
    "diagram": null
  },
  {
    "id": "examA_32",
    "exam": "examA",
    "number": "32",
    "stem": "Your team uses the three-point estimation technique to estimate the test effort for a new high-risk\nfeature. The following estimates were made:\n\n             •      Most optimistic estimation: 2 person-hours\n             •      Most likely estimation: 11 person-hours\n             •      Most pessimistic estimation: 14 person-hours\n\nWhat is the final estimate?",
    "options": {
      "a": "9 person-hours",
      "b": "14 person-hours",
      "c": "11 person-hours",
      "d": "10 person-hours"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "d"
    ],
    "lo": "FL-5.1.4",
    "k_level": "K3",
    "syllabus_section": "5.1.4",
    "syllabus_section_title": "Estimation Techniques",
    "syllabus_chapter": "5",
    "syllabus_chapter_title": "Managing the Test Activities",
    "rationale_preamble": "In the three-point estimation technique: E = (optimistic + 4*most likely + pessimistic)/6 E = (2+(4*11)+14)/6 = 10 Thus:",
    "rationale_by_option": {
      "a": "Is not correct",
      "b": "Is not correct",
      "c": "Is not correct",
      "d": "Is correct"
    },
    "diagram": null
  },
  {
    "id": "examA_33",
    "exam": "examA",
    "number": "33",
    "stem": "You are testing a mobile application that allows users to find a nearby restaurant based on the type\nof food they want to eat. Consider the following list of test cases, priorities (i.e., a smaller number\nmeans a higher priority), and dependencies:\n\n                          Test case                                                             Logical\n                                                    Test condition covered         Priority\n                           number                                                             dependency\n                           TC 001                        Select type of food          3          none\n                           TC 002                         Select restaurant           2         TC 001\n                           TC 003                           Get direction             1         TC 002\n                           TC 004                          Call restaurant            2         TC 002\n                           TC 005                        Make reservation             3         TC 002\n\nWhich of the following test cases should be executed as the third one?",
    "options": {
      "a": "TC 003",
      "b": "TC 005",
      "c": "TC 002",
      "d": "TC 001"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "a"
    ],
    "lo": "FL-5.1.5",
    "k_level": "K3",
    "syllabus_section": "5.1.5",
    "syllabus_section_title": "Test Case Prioritization",
    "syllabus_chapter": "5",
    "syllabus_chapter_title": "Managing the Test Activities",
    "rationale_preamble": "Test TC 001 must come first, followed by TC 002, to satisfy dependencies. Afterwards, TC 003 to satisfy priority and then TC 004, followed by TC 005. Thus:",
    "rationale_by_option": {
      "a": "Is correct",
      "b": "Is not correct",
      "c": "Is not correct",
      "d": "Is not correct"
    },
    "diagram": null
  },
  {
    "id": "examA_34",
    "exam": "examA",
    "number": "34",
    "stem": "Consider the following test categories (1-4) and agile testing quadrants (A-D):\n\n             1.     Usability testing\n             2.     Component testing\n             3.     Functional testing\n             4.     Reliability testing\n\n             A. Agile testing quadrant Q1: technology facing, supporting the development team\n             B. Agile testing quadrant Q2: business facing, supporting the development team\n             C. Agile testing quadrant Q3: business facing, critique the product\n             D. Agile testing quadrant Q4: technology facing, critique the product\n\nHow do the following test categories map onto the agile testing quadrants?",
    "options": {
      "a": "1C, 2A, 3B, 4D",
      "b": "1D, 2A, 3C, 4B",
      "c": "1C, 2B, 3D, 4A",
      "d": "1D, 2B, 3C, 4A"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "a"
    ],
    "lo": "FL-5.1.7",
    "k_level": "K2",
    "syllabus_section": "5.1.7",
    "syllabus_section_title": "Testing Quadrants",
    "syllabus_chapter": "5",
    "syllabus_chapter_title": "Managing the Test Activities",
    "rationale_preamble": "Considering: • Usability testing is in Q3 (1 – C) • Component testing is in Q1 (2 – A) • Functional testing is in Q2 (3 – B) • Reliability testing is in Q4 (4 – D) Thus:",
    "rationale_by_option": {
      "a": "Is correct",
      "b": "Is not correct",
      "c": "Is not correct",
      "d": "Is not correct"
    },
    "diagram": null
  },
  {
    "id": "examA_35",
    "exam": "examA",
    "number": "35",
    "stem": "During a risk analysis the following risk was identified and assessed:\n\n             •     Risk: Response time is too long to generate a report\n             •     Risk likelihood: medium; risk impact: high\n             •     Response to risk:\n                  o An independent test team performs performance efficiency testing during system\n                      testing\n                  o A selected sample of end users performs alpha testing and beta testing before the\n                      release\nWhat measure is proposed to be taken in response to this analyzed risk?",
    "options": {
      "a": "Risk acceptance",
      "b": "Contingency plan",
      "c": "Risk mitigation",
      "d": "Risk transfer"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "c"
    ],
    "lo": "FL-5.2.4",
    "k_level": "K2",
    "syllabus_section": "5.2.4",
    "syllabus_section_title": "Product Risk Control",
    "syllabus_chapter": "5",
    "syllabus_chapter_title": "Managing the Test Activities",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. We do not accept the risk; concrete actions are proposed",
      "b": "Is not correct. No contingency plans are proposed",
      "c": "Is correct. The proposed actions are related to testing, which is a form of risk mitigation",
      "d": "Is not correct. Risk is not transferred but mitigated"
    },
    "diagram": null
  },
  {
    "id": "examA_36",
    "exam": "examA",
    "number": "36",
    "stem": "Which work product can be used by an agile team to show the amount of work that has been\ncompleted and the amount of total work remaining for a given iteration?",
    "options": {
      "a": "Acceptance criteria",
      "b": "Defect report",
      "c": "Test completion report",
      "d": "Burndown chart"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "d"
    ],
    "lo": "FL-5.3.3",
    "k_level": "K2",
    "syllabus_section": "5.3.3",
    "syllabus_section_title": "Communicating the Status of Testing",
    "syllabus_chapter": "5",
    "syllabus_chapter_title": "Managing the Test Activities",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. Acceptance criteria are the conditions used to decide whether the user story is ready. They cannot show work progress",
      "b": "Is not correct. Defect reports inform about the defects. They do not show work progress",
      "c": "Is not correct. Test completion report can be created after the iteration is finished, so it will not show the progress continuously within an iteration",
      "d": "Is correct. Burndown charts are a graphical representation of work left to do versus time remaining. They are updated daily, so they can continuously show the work progress"
    },
    "diagram": null
  },
  {
    "id": "examA_37",
    "exam": "examA",
    "number": "37",
    "stem": "You need to update one of the automated test scripts to be in line with a new requirement. Which\nprocess indicates that you create a new version of the test script in the test repository?",
    "options": {
      "a": "Traceability management",
      "b": "Maintenance testing",
      "c": "Configuration management",
      "d": "Requirements engineering"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "c"
    ],
    "lo": "FL-5.4.1",
    "k_level": "K2",
    "syllabus_section": "5.4.1",
    "syllabus_section_title": "Configuration Management",
    "syllabus_chapter": "5",
    "syllabus_chapter_title": "Managing the Test Activities",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. Traceability is the relationship between two or more work products, not between different versions of the same work product",
      "b": "Is not correct. Maintenance testing is about testing changes; it is not related closely to versioning",
      "c": "Is correct. To support testing, configuration management may involve the version control of all test items",
      "d": "Is not correct. Requirements engineering is the elicitation, documentation, and management of requirements; it is not closely related to test script versioning"
    },
    "diagram": null
  },
  {
    "id": "examA_38",
    "exam": "examA",
    "number": "38",
    "stem": "You received the following defect report from the developers stating that the anomaly described in\nthis test report is not reproducible.\n\n                    Application hangs up\n\n                    2022-May-03 – John Doe – Rejected\n\n                    The application hangs up after entering “Test input: $ä” in the Name field on the new\n                    user creation screen. Tried to log off, log in with test_admin01 account, same issue. Tried\n                    with other test admin accounts, same issue. No error message received; log (see\n                    attached) contains fatal error notification. Based on the test case TC-1305, the\n                    application should accept the provided input and create the user. Please fix with high\n                    priority, this feature is related to REQ-0012, which is a critical new business requirement.\n\nWhat critical information is MISSING from this test report that would have been useful for the\ndevelopers?",
    "options": {
      "a": "Expected result and actual result",
      "b": "References and defect status",
      "c": "Test environment and test item",
      "d": "Priority and severity"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "c"
    ],
    "lo": "FL-5.5.1",
    "k_level": "K3",
    "syllabus_section": "5.5.1",
    "syllabus_section_title": "Defect Management",
    "syllabus_chapter": "5",
    "syllabus_chapter_title": "Managing the Test Activities",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. The expected result is “the application should accept the provided input and create the user”. The actual result is “The application hangs up after entering “Test input. $ä””.",
      "b": "Is not correct. There is a reference to the test case and to the related requirement and it states that the defect is rejected. Also, the defect status would not be very helpful for the developers",
      "c": "Is correct. We do not know in which test environment the anomaly was detected, and we also do not know which application (and its version) is affected",
      "d": "Is not correct. The defect report states that the anomaly is urgent, that it is a global issue (i.e., many, if not all, test administration accounts are affected) and states the impact is high for business stakeholders"
    },
    "diagram": null
  },
  {
    "id": "examA_39",
    "exam": "examA",
    "number": "39",
    "stem": "Which test activity does a data preparation tool support?",
    "options": {
      "a": "Test monitoring and test control",
      "b": "Test analysis",
      "c": "Test design and test implementation",
      "d": "Test completion"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "c"
    ],
    "lo": "FL-6.1.1",
    "k_level": "K2",
    "syllabus_section": "6.1.1",
    "syllabus_section_title": "Tool Support for Testing",
    "syllabus_chapter": "6",
    "syllabus_chapter_title": "Test Tools",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. Test monitoring involves the ongoing checking of all activities and comparison of actual progress against the test plan. Test control involves taking the actions necessary to meet the test objectives of the test plan. No test data are prepared during these activities.",
      "b": "Is not correct. Test analysis includes analysis of the test basis to identify test conditions and prioritize them. Test data are not prepared during this activity.",
      "c": "Is correct. Test design and implementation can both include the identification, creation or acquisition of the testware necessary for test execution (e.g., test data).",
      "d": "Is not correct. Test completion activities occur at project milestones (e.g., release, end of iteration, test level completion), so it is too late for preparing test data."
    },
    "diagram": null
  },
  {
    "id": "examA_40",
    "exam": "examA",
    "number": "40",
    "stem": "Which item correctly identifies a potential risk of performing test automation?",
    "options": {
      "a": "It may introduce unknown regressions in production",
      "b": "Sufficient efforts to maintain testware may not be properly allocated",
      "c": "Testing tools and associated testware may not be sufficiently relied upon",
      "d": "It may reduce the time allocated for manual testing"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "b"
    ],
    "lo": "FL-6.2.1",
    "k_level": "K1",
    "syllabus_section": "6.2.1",
    "syllabus_section_title": "Benefits and Risks of Test Automation",
    "syllabus_chapter": "6",
    "syllabus_chapter_title": "Test Tools",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. Test automation does not introduce unknown regressions in production",
      "b": "Is correct. Wrong allocation of effort to maintain testware is a risk",
      "c": "Is not correct. Test tools must be selected so that they and their testware can be relied upon",
      "d": "Is not correct. The primary goal of test automation is to reduce manual testing. So, this is a benefit, not a risk Appendix: Answer Key for Additional Sample Questions Question Correct Answer LO K-Level Points Question Correct Answer LO K-Level Points Number (#) Number (#)"
    },
    "diagram": null
  },
  {
    "id": "examA_A1",
    "exam": "examA",
    "number": "A1",
    "stem": "You were given a task to analyze and fix causes of failures in a new system to be released.\n\nWhich activity are you performing?",
    "options": {
      "a": "Debugging",
      "b": "Software testing",
      "c": "Requirement elicitation",
      "d": "Defect management"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "a"
    ],
    "lo": "FL-1.1.2",
    "k_level": "K2",
    "syllabus_section": "1.1.2",
    "syllabus_section_title": "Testing and Debugging",
    "syllabus_chapter": "1",
    "syllabus_chapter_title": "Fundamentals of Testing",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is correct. Debugging is the process of finding, analyzing, and removing the causes of failures in a component or system",
      "b": "Is not correct. Testing is the process concerned with planning, preparation and evaluation of a component or system and related work products to determine that they satisfy specified requirements, to demonstrate that they are fit for purpose and to detect defects. It is not related to fixing causes of failures",
      "c": "Is not correct. Requirement elicitation is the process of gathering, capturing, and consolidating requirements from available sources. It is not related to fixing causes of failures",
      "d": "Is not correct. Defect management is the process of recognizing, recording, classifying, investigating, resolving, and disposing of defects. It is not related to fixing causes of failures"
    },
    "diagram": null
  },
  {
    "id": "examA_A2",
    "exam": "examA",
    "number": "A2",
    "stem": "In many software organizations the test department is called the Quality Assurance (QA) department.\nIs this sentence correct or not and why?",
    "options": {
      "a": "It is correct. Testing and QA mean exactly the same thing",
      "b": "It is correct. These names can be used interchangeably because both testing and QA focus their activities on the same quality issues",
      "c": "It is not correct. Testing is something more; testing includes all activities with regard to quality. QA focuses on quality-related processes",
      "d": "It is not correct. QA is focused on quality-related processes while testing concentrates on demonstrating that a component or system is fit for purpose and to detect defects"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "d"
    ],
    "lo": "FL-1.2.2",
    "k_level": "K1",
    "syllabus_section": "1.2.2",
    "syllabus_section_title": "Testing and Quality Assurance (QA)",
    "syllabus_chapter": "1",
    "syllabus_chapter_title": "Fundamentals of Testing",
    "rationale_preamble": "Considering: Testing and quality assurance are not the same. Testing is the process consisting of all software development lifecycle (SDLC) activities, both static and dynamic, concerned with planning, preparation and evaluation of a component or system and related work products to determine that they satisfy specified requirements, to demonstrate that they are fit for purpose and to detect defects. Quality assurance is focused on establishing, introducing, monitoring, improving, and adhering to the quality-related processes. Thus:",
    "rationale_by_option": {
      "a": "Is not correct",
      "b": "Is not correct",
      "c": "Is not correct",
      "d": "Is correct"
    },
    "diagram": null
  },
  {
    "id": "examA_A3",
    "exam": "examA",
    "number": "A3",
    "stem": "A phone ringing in a neighboring cubicle distracts a programmer causing him to improperly program\nthe logic that checks the upper boundary of an input variable. Later, during system testing, a tester\nnotices that this input field accepts invalid input values.\n\nWhich of the following correctly describes an incorrectly coded upper bound?",
    "options": {
      "a": "The root cause",
      "b": "A failure",
      "c": "An error",
      "d": "A defect"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "d"
    ],
    "lo": "FL-1.2.3",
    "k_level": "K2",
    "syllabus_section": "1.2.3",
    "syllabus_section_title": "Errors, Defects, Failures, and Root Causes",
    "syllabus_chapter": "1",
    "syllabus_chapter_title": "Fundamentals of Testing",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. The root cause is the distraction that the programmer experienced while programming",
      "b": "Is not correct. Accepting invalid inputs is a failure",
      "c": "Is not correct. The error in thinking that put the defect in the code",
      "d": "Is correct. The problem in the code is a defect"
    },
    "diagram": null
  },
  {
    "id": "examA_A4",
    "exam": "examA",
    "number": "A4",
    "stem": "Consider the following testware.\n\n                  Test Charter #04.018                    Session time: 1h\n                  Explore:                     Registration page\n                  With:                        Different sets of incorrect input data\n                                               Defects related to accepting the registration process with the\n                  To discover:\n                                               incorrect input\n\nWhich test activity produces this testware as an output?",
    "options": {
      "a": "Test planning",
      "b": "Test monitoring and test control",
      "c": "Test analysis",
      "d": "Test design"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "d"
    ],
    "lo": "FL-1.4.3",
    "k_level": "K2",
    "syllabus_section": "1.4.3",
    "syllabus_section_title": "Testware",
    "syllabus_chapter": "1",
    "syllabus_chapter_title": "Fundamentals of Testing",
    "rationale_preamble": "The testware under consideration is a test charter Test charters are the output from test design Thus:",
    "rationale_by_option": {
      "a": "Is not correct",
      "b": "Is not correct",
      "c": "Is not correct",
      "d": "Is correct"
    },
    "diagram": null
  },
  {
    "id": "examA_A5",
    "exam": "examA",
    "number": "A5",
    "stem": "Which of the following is the BEST example of how traceability supports testing?",
    "options": {
      "a": "Performing the impact analysis of a change will give information about the completion of the tests",
      "b": "Analyzing the traceability between test cases and test results will give information about the estimated level of residual risk",
      "c": "Performing the impact analysis of a change will help selecting the right test cases for regression testing",
      "d": "Analyzing the traceability between the test basis, the test objects and the test cases will help in selecting test data to achieve the assumed coverage of the test object"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "c"
    ],
    "lo": "FL-1.4.4",
    "k_level": "K2",
    "syllabus_section": "1.4.4",
    "syllabus_section_title": "Traceability between the Test Basis and Testware",
    "syllabus_chapter": "1",
    "syllabus_chapter_title": "Fundamentals of Testing",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. Performing the impact analysis will not give information about completeness of tests. Analyzing the impact analysis of changes will help to select the right test cases for execution",
      "b": "Is not correct. Traceability does not give information about the estimated level of residual risk if the test cases are not traced back to risks",
      "c": "Is correct. Performing the impact analysis of the changes helps in selecting the test cases for the regression test",
      "d": "Is not correct. Analyzing the traceability between the test basis, test objects and test cases does not help in selecting test data to achieve the assumed coverage of the test object. Selecting test data is more related to test analysis and test implementation, not traceability"
    },
    "diagram": null
  },
  {
    "id": "examA_A6",
    "exam": "examA",
    "number": "A6",
    "stem": "Which of the following BEST explains a benefit of independence of testing?",
    "options": {
      "a": "The use of an independent test team allows project management to assign responsibility for the quality of the final deliverable to the test team",
      "b": "If a test team external to the organization can be afforded, then there are distinct benefits in terms of this external team not being so easily swayed by the delivery concerns of project management and the need to meet strict delivery deadlines",
      "c": "An independent test team can work separately from the developers, need not be distracted with project requirement changes, and can restrict communication with the developers to defect reporting through the defect management system",
      "d": "When specifications contain ambiguities and inconsistencies, assumptions are made on their interpretation, and an independent tester can be useful in questioning those assumptions and the interpretation made by the developer"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "d"
    ],
    "lo": "FL-1.5.3",
    "k_level": "K2",
    "syllabus_section": "1.5.3",
    "syllabus_section_title": "Independence of Testing",
    "syllabus_chapter": "1",
    "syllabus_chapter_title": "Fundamentals of Testing",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. Quality should be the responsibility of everyone working on the project and not the sole responsibility of the test team",
      "b": "Is not correct. First, it is not a benefit if an external test team does not meet delivery deadlines, and second, there is no reason to believe that external test teams will feel they do not have to meet strict delivery deadlines",
      "c": "Is not correct. It is bad practice for the test team to work in complete isolation, and we would expect an external test team to be concerned with changing project requirements and communicating well with developers",
      "d": "Is correct. Specifications are never perfect, meaning that assumptions will have to be made by the developer. An independent tester is useful in that they can challenge and verify the assumptions and subsequent interpretation made by the developer"
    },
    "diagram": null
  },
  {
    "id": "examA_A7",
    "exam": "examA",
    "number": "A7",
    "stem": "You are working as a tester in the team that follows the V-model. Which of the following activities\nCAN be performed in the initial phases of the SDLC?",
    "options": {
      "a": "Dynamic test execution",
      "b": "Static testing",
      "c": "Test planning",
      "d": "Acceptance test execution",
      "e": "Maintenance testing"
    },
    "select_instruction": "Select TWO option",
    "points": 1,
    "correct": [
      "b",
      "c"
    ],
    "lo": "FL-2.1.1",
    "k_level": "K2",
    "syllabus_section": "2.1.1",
    "syllabus_section_title": "Impact of the Software Development Lifecycle on Testing",
    "syllabus_chapter": "2",
    "syllabus_chapter_title": "Testing Throughout the Software Development Lifecycle",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. The executable code is usually created in the later phases, so dynamic test execution cannot be performed early in the SDLC",
      "b": "Is correct. In sequential development models, in the initial phases, testers participate in requirement reviews, which is a form of static testing.",
      "c": "Is correct. Test planning could be performed early in the SDLC before the test project begins together with test analysis and test design.",
      "d": "Is not correct. Acceptance test execution can be performed when there is a working product. In sequential SDLC models the working product is usually delivered later in the SDLC",
      "e": "Is not correct. Maintenance testing when there is a working and deployed product, which is not done in the early phases of any SDLC."
    },
    "diagram": null
  },
  {
    "id": "examA_A8",
    "exam": "examA",
    "number": "A8",
    "stem": "Which of the following are advantages of DevOps?\n\n                i.       Faster product release and faster time to market\n               ii.       Increases the need for repetitive manual testing\n              iii.       Constant availability of executable software\n              iv.        Reduction in the number of regression tests associated with code refactoring\n               v.        Setting up the test automation framework is inexpensive since everything is\n                         automated",
    "options": {
      "a": "i, ii, iv are advantages",
      "b": "iii, v are advantages",
      "c": "i, iii are advantages",
      "d": "ii, iv, v are advantages"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "c"
    ],
    "lo": "FL-2.1.4",
    "k_level": "K2",
    "syllabus_section": "2.1.4",
    "syllabus_section_title": "DevOps and Testing",
    "syllabus_chapter": "2",
    "syllabus_chapter_title": "Testing Throughout the Software Development Lifecycle",
    "rationale_preamble": "Consider: i. Is true. Faster product release and faster time to market is an advantage of DevOps ii. Is false. Typically, we need less effort for manual tests because of the use of test automation iii. Is true. Constant availability of executable software is an advantage iv. Is false. More regression tests are needed v. Is false. Not everything is automated and setting up a test automation framework is expensive Thus:",
    "rationale_by_option": {
      "a": "Is not correct",
      "b": "Is not correct",
      "c": "It is correct",
      "d": "Is not correct"
    },
    "diagram": null
  },
  {
    "id": "examA_A9",
    "exam": "examA",
    "number": "A9",
    "stem": "You work as a tester on a project on a mobile application for food ordering for one of your clients.\nThe client sent you a list of requirements. One of them, with high priority, says\n\n                     “The order must be processed in less than 10 seconds in 95% of the cases”.\n\nYou created a set of test cases in which a number of random orders were made, the processing time\nmeasured, and the test results were checked against the requirements.\n\nWhat test type did you perform?",
    "options": {
      "a": "Functional, because the test cases cover the user’s business requirement for the system",
      "b": "Non-functional, because they measure the system’s performance",
      "c": "Functional, because the test cases interact with the user interface",
      "d": "White-box, because we need to know the internal structure of the program to measure the order processing time"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "b"
    ],
    "lo": "FL-2.2.2",
    "k_level": "K2",
    "syllabus_section": "2.2.2",
    "syllabus_section_title": "Test Types",
    "syllabus_chapter": "2",
    "syllabus_chapter_title": "Testing Throughout the Software Development Lifecycle",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. The fact that the requirement about the system’s performance comes directly from the client and that the performance is important from the business point of view (i.e., high priority) does not make these tests functional, because they do not check “what” the system does, but “how” (i.e., how fast the orders are processed)",
      "b": "Is correct. This is an example of testing for performance efficiency, a type of non-functional testing",
      "c": "Is not correct. From the scenario, we do not know if interacting with the user interface is a part of the test conditions. But even if we did, the main test objective of these tests is to check the performance, not the usability",
      "d": "Is not correct. We do not need to know the internal structure of the code to perform the performance efficiency testing. One can execute performance efficiency tests without structural knowledge"
    },
    "diagram": null
  },
  {
    "id": "examA_A10",
    "exam": "examA",
    "number": "A10",
    "stem": "Your organization’s test strategy suggests that once a system is going to be retired, data migration\nshall be tested. As part of what test type is this testing MOST likely to be performed?",
    "options": {
      "a": "Maintenance testing",
      "b": "Regression testing",
      "c": "Reliability testing",
      "d": "Integration testing"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "a"
    ],
    "lo": "FL-2.3.1",
    "k_level": "K2",
    "syllabus_section": "2.3.1",
    "syllabus_section_title": "Maintenance Testing",
    "syllabus_chapter": "2",
    "syllabus_chapter_title": "Testing Throughout the Software Development Lifecycle",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is correct. When a system is retired, this can require testing of data migration, which is a form of maintenance testing",
      "b": "Is not correct. Regression testing verifies whether a fix accidentally affected the behavior of other parts of the code, but now we are talking about data migration to a new system",
      "c": "Is not correct. Portability testing focuses on transferring the system to another environment",
      "d": "Is not correct. Integration testing focuses on interactions between components and/or systems, not on data migration. Also, it is not a test type, but a test level."
    },
    "diagram": null
  },
  {
    "id": "examA_A11",
    "exam": "examA",
    "number": "A11",
    "stem": "The following is a list of the work products produced in the SDLC.\n\n                 i.       Business requirements\n                ii.       Schedule\n               iii.       Test budget\n               iv.        Third-party executable code\n                v.        User stories and their acceptance criteria\n\nWhich of them can be reviewed?",
    "options": {
      "a": "i and iv can be reviewed",
      "b": "i, ii, iii and iv can be reviewed",
      "c": "i, ii, iii, and v can be reviewed",
      "d": "iii, iv, v can be reviewed"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "c"
    ],
    "lo": "FL-3.1.1",
    "k_level": "K1",
    "syllabus_section": "3.1.1",
    "syllabus_section_title": "Work Products Examinable by Static Testing",
    "syllabus_chapter": "3",
    "syllabus_chapter_title": "Static Testing",
    "rationale_preamble": "Only third-party executable code cannot be reviewed. Thus:",
    "rationale_by_option": {
      "a": "Is not correct",
      "b": "Is not correct",
      "c": "It is correct",
      "d": "Is not correct"
    },
    "diagram": null
  },
  {
    "id": "examA_A12",
    "exam": "examA",
    "number": "A12",
    "stem": "Decide which of the following statements (i-v) are true for static testing.\n\n                i.       Abnormal external behaviors are easier to identify with this testing\n               ii.       Discrepancies from a coding standard are easier to find with this testing\n              iii.       It identifies failures caused by defects when the software is run\n              iv.        Its test objective is to identify defects as early as possible\n               v.        Missing coverage for critical security requirements is easier to find and fix",
    "options": {
      "a": "i, iv, v are true for static testing",
      "b": "i, iii, iv are true for static testing",
      "c": "ii, iii are true for static testing",
      "d": "ii, iv, v are true for static testing"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "d"
    ],
    "lo": "FL-3.1.3",
    "k_level": "K2",
    "syllabus_section": "3.1.3",
    "syllabus_section_title": "Differences between Static Testing and Dynamic Testing",
    "syllabus_chapter": "3",
    "syllabus_chapter_title": "Static Testing",
    "rationale_preamble": "Consider: i. These behaviors are easily detectable while the software is running. Hence, dynamic testing shall be used to identify them ii. This is an example of deviations from standards, which is a typical defect that is easier found with static testing iii. If the software is executed during the test, it is dynamic testing iv. Identifying defects as early as possible is the test objective of both static testing and dynamic testing v. This is an example of gaps in the test basis traceability or coverage, which is a typical defect that is easier found with static testing Thus:",
    "rationale_by_option": {
      "a": "Is not correct",
      "b": "Is not correct",
      "c": "Is not correct",
      "d": "Is correct"
    },
    "diagram": null
  },
  {
    "id": "examA_A13",
    "exam": "examA",
    "number": "A13",
    "stem": "Which of the following statements about formal reviews is TRUE?",
    "options": {
      "a": "Some reviews do not require more than one role",
      "b": "The review process has several activities",
      "c": "Documentation to be reviewed is not distributed before the review meeting, with the exception of the work product for specific review types",
      "d": "Defects found during the review are not reported since they are not found by dynamic testing"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "b"
    ],
    "lo": "FL-3.2.2",
    "k_level": "K2",
    "syllabus_section": "3.2.2",
    "syllabus_section_title": "Review Process Activities",
    "syllabus_chapter": "3",
    "syllabus_chapter_title": "Static Testing",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. In all types of reviews there is more than one role, even in informal ones",
      "b": "Is correct. There are several activities during the formal review process",
      "c": "Is not correct. Documentation to be reviewed should be distributed as early as possible",
      "d": "Is not correct. Defects found during the review should be reported"
    },
    "diagram": null
  },
  {
    "id": "examA_A14",
    "exam": "examA",
    "number": "A14",
    "stem": "What task may management take on during a formal review?",
    "options": {
      "a": "Taking overall responsibility for the review",
      "b": "Deciding what is to be reviewed",
      "c": "Ensuring the effective running of review meetings, and moderating, if necessary",
      "d": "Recording review information such as review decisions"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "b"
    ],
    "lo": "FL-3.2.3",
    "k_level": "K1",
    "syllabus_section": "3.2.3",
    "syllabus_section_title": "Roles and Responsibilities in Reviews",
    "syllabus_chapter": "3",
    "syllabus_chapter_title": "Static Testing",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. This is the task of the review leader",
      "b": "Is correct. This is the task of the management in a formal review",
      "c": "Is not correct. This is the task of the moderator",
      "d": "Is not correct. This is the task of the scribe"
    },
    "diagram": null
  },
  {
    "id": "examA_A15",
    "exam": "examA",
    "number": "A15",
    "stem": "A wine storage system uses a control device that measures the wine cell temperature T (measured\nin °C, rounded to the nearest degree) and alarms the user if it deviates from the optimal value of\n12, according to the following rules:\n\n                  •      if T = 12, the system says, “optimal temperature”\n                  •      if T < 12, the system says, “temperature is too low!”\n                  •      if T > 12, the system says, “temperature is too high!”\n\nYou want to use the 3-point boundary value analysis (BVA) to verify the behavior of the control\ndevice. A test input is a temperature in °C provided by the device.\n\nWhat is the MINIMAL set of test inputs that achieves 100% of the desired coverage?",
    "options": {
      "a": "11, 12, 13",
      "b": "10, 12, 14",
      "c": "10, 11, 12, 13, 14",
      "d": "10, 11, 13, 14"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "c"
    ],
    "lo": "FL-4.2.2",
    "k_level": "K3",
    "syllabus_section": "4.2.2",
    "syllabus_section_title": "Boundary Value Analysis",
    "syllabus_chapter": "4",
    "syllabus_chapter_title": "Test Analysis and Design",
    "rationale_preamble": "There are three equivalence partitions: {..., 10, 11}, {12}, and {13, 14, ...}. The boundary values are 11, 12 and 13. In the three-point boundary value analysis for each boundary, we need to test the boundary and both its neighbors, so: • for 11 we test 10, 11, 12 • for 12 we test 11, 12, 13 • for 13 we test 12, 13, 14 Altogether we need to test 10, 11, 12, 13, and 14 Thus:",
    "rationale_by_option": {
      "a": "Is not correct",
      "b": "Is not correct",
      "c": "Is correct",
      "d": "Is not correct"
    },
    "diagram": null
  },
  {
    "id": "examA_A16",
    "exam": "examA",
    "number": "A16",
    "stem": "Which of the following statements about branch testing is CORRECT?",
    "options": {
      "a": "If a program includes only unconditional branches, then 100% branch coverage can be achieved without executing any test cases",
      "b": "If the test cases exercise all unconditional branches in the code, then 100% branch coverage is achieved",
      "c": "If 100% statement coverage is achieved, then 100% branch coverage is also achieved",
      "d": "If 100% branch coverage is achieved, then all decision outcomes in each decision statement in the code are exercised"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "d"
    ],
    "lo": "FL-4.3.2",
    "k_level": "K2",
    "syllabus_section": "4.3.2",
    "syllabus_section_title": "Branch Testing and Branch Coverage",
    "syllabus_chapter": "4",
    "syllabus_chapter_title": "Test Analysis and Design",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. In this case one test case is still needed since there is at least one (unconditional) branch to be covered",
      "b": "Is not correct. Covering only unconditional branches does not imply covering all conditional branches",
      "c": "Is not correct. 100% branch coverage implies 100% statement coverage, not otherwise. For example, for an IF decision without the ELSE, one test is enough to achieve 100% statement coverage, but it only achieves 50% branch coverage",
      "d": "Is correct. Each decision outcome corresponds to a conditional branch, so 100% branch coverage implies 100% coverage of the decision outcomes"
    },
    "diagram": null
  },
  {
    "id": "examA_A17",
    "exam": "examA",
    "number": "A17",
    "stem": "You are testing a mobile application that allows customers to access and manage their bank\naccounts. You are running a test suite that involves evaluating each screen, and each field on each\nscreen, against a general list of user interface best practices derived from a popular book on the\ntopic that maximizes usability for such applications. Which of the following options BEST categorizes\nthe test technique you are using?",
    "options": {
      "a": "Black-box",
      "b": "Exploratory",
      "c": "Checklist-based",
      "d": "Error guessing"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "c"
    ],
    "lo": "FL-4.4.3",
    "k_level": "K2",
    "syllabus_section": "4.4.3",
    "syllabus_section_title": "Checklist-Based Testing",
    "syllabus_chapter": "4",
    "syllabus_chapter_title": "Test Analysis and Design",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. The book provides general guidance, and is not a formal requirements document, a specification, or a set of use cases, user stories, or business processes",
      "b": "Is not correct. While you could consider the list as a set of test charters, it more closely resembles the list of test conditions to be checked",
      "c": "Is correct. The list of user interface best practices is the list of test conditions to be systematically checked",
      "d": "Is not correct. The tests are not focused on failures that could occur, but rather on knowledge about what is important for the user, in terms of usability"
    },
    "diagram": null
  },
  {
    "id": "examA_A18",
    "exam": "examA",
    "number": "A18",
    "stem": "Which of the following BEST describe the collaborative approach to user story writing?",
    "options": {
      "a": "User stories are created by testers and developers and then accepted by business representatives",
      "b": "User stories are created by business representatives, developers, and testers together",
      "c": "User stories are created by business representatives and verified by developers and testers",
      "d": "User stories are created in a way that they are independent, negotiable, valuable, estimable, small, and testable"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "b"
    ],
    "lo": "FL-4.5.1",
    "k_level": "K2",
    "syllabus_section": "4.5.1",
    "syllabus_section_title": "Collaborative User Story Writing",
    "syllabus_chapter": "4",
    "syllabus_chapter_title": "Test Analysis and Design",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. Collaborative user story writing means that all stakeholders create the user stories collaboratively, to obtain the shared vision",
      "b": "Is correct. Collaborative user story writing means that all stakeholders create the user stories collaboratively, to obtain the shared vision",
      "c": "Is not correct. Collaborative user story writing means that all stakeholders create the user stories collaboratively, to obtain the shared vision",
      "d": "Is not correct. This is the list of properties that each user story should have, not the description of the collaboration-based approach"
    },
    "diagram": null
  },
  {
    "id": "examA_A19",
    "exam": "examA",
    "number": "A19",
    "stem": "Consider the following part of a test plan.\n\n                    Testing will be performed using component testing and component integration testing.\n                    The regulations require to demonstrate that 100% branch coverage is achieved for\n                    each component classified as critical.\n\nWhich part of the test plan does this part belong to?",
    "options": {
      "a": "Communication",
      "b": "Risk register",
      "c": "Context of testing",
      "d": "Test approach"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "d"
    ],
    "lo": "FL-5.1.1",
    "k_level": "K2",
    "syllabus_section": "5.1.1",
    "syllabus_section_title": "Purpose and Content of a Test Plan",
    "syllabus_chapter": "5",
    "syllabus_chapter_title": "Managing the Test Activities",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. The paragraph contains information on test levels and exit criteria, which are part of the test approach",
      "b": "Is not correct. The paragraph contains information on test levels and exit criteria, which are part of the test approach",
      "c": "Is not correct. The paragraph contains information on test levels and exit criteria, which are part of the test approach",
      "d": "Is correct. The paragraph contains information on test levels and exit criteria, which are part of the test approach"
    },
    "diagram": null
  },
  {
    "id": "examA_A20",
    "exam": "examA",
    "number": "A20",
    "stem": "Your team uses planning poker to estimate the test effort for a newly required feature. There is a\nrule in your team that if there is no time to reach full agreement and the variation in the results is\nsmall, rules like “accept the number with the most votes” can be applied.\n\nAfter two rounds, the consensus was not reached, so the third round was initiated. You can see the\ntest estimation results in the table below.\n\n                                                              Team members' estimations\n                                          Round 1        21    2    5  34     13     8    2\n                                          Round 2        13    8    8  34     13     8    5\n                                          Round 3        13    8   13  13     13    13    8\n\nWhich of the following is the BEST example of the next step?",
    "options": {
      "a": "The product owner has to step in and make a final decision",
      "b": "Accept 13 as the final test estimate as this has most of the votes",
      "c": "No further action is needed. Consensus has been reached",
      "d": "Remove the new feature from the current release because consensus has not been reached"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "b"
    ],
    "lo": "FL-5.1.4",
    "k_level": "K3",
    "syllabus_section": "5.1.4",
    "syllabus_section_title": "Estimation Techniques",
    "syllabus_chapter": "5",
    "syllabus_chapter_title": "Managing the Test Activities",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. This should be a team activity and not overruled by one team member",
      "b": "Is correct. If test estimates are not the same, but the variation in the results is small, applying rules like “accept the number with the most votes” can be applied",
      "c": "Is not correct. There is no consensus yet as some say 13, others say 8",
      "d": "Is not correct. A feature should not be removed only because the team cannot agree on the test estimates"
    },
    "diagram": null
  },
  {
    "id": "examA_A21",
    "exam": "examA",
    "number": "A21",
    "stem": "Which of the following is TRUE regarding the test pyramid?",
    "options": {
      "a": "It emphasizes having far more tests at the lower test levels",
      "b": "It suggests that each low-level test checks a large part of the functionality",
      "c": "It describes distribution of test types across the SDLC",
      "d": "It has no impact on the construction of automated tests"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "a"
    ],
    "lo": "FL-5.1.6",
    "k_level": "K1",
    "syllabus_section": "5.1.6",
    "syllabus_section_title": "Test Pyramid",
    "syllabus_chapter": "5",
    "syllabus_chapter_title": "Managing the Test Activities",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is correct. The test pyramid emphasizes having a larger number of tests at the lower test levels",
      "b": "Is not correct. It is not true that a test on a lower level tests a larger piece of functionality. Tests are more atomic and oriented on a specific logic, so it is the opposite",
      "c": "Is not correct. Test pyramid shows how the number of tests is distributed across test levels",
      "d": "Is not correct. The test pyramid model supports the team in test automation"
    },
    "diagram": null
  },
  {
    "id": "examA_A22",
    "exam": "examA",
    "number": "A22",
    "stem": "During risk analysis the team considered the following risk: “The system allows too high a discount\nfor a customer”. The team estimated the risk impact to be very high.\n\nWhat can one say about the risk likelihood?",
    "options": {
      "a": "It is also very high. High risk impact always implies high risk likelihood",
      "b": "It is very low. High risk impact always implies low risk likelihood",
      "c": "One cannot say anything about risk likelihood. Risk impact and risk likelihood are independent.",
      "d": "Risk likelihood is not important with such a high-risk impact. One does not need to define it."
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "c"
    ],
    "lo": "FL-5.2.1",
    "k_level": "K1",
    "syllabus_section": "5.2.1",
    "syllabus_section_title": "Risk Definition and Risk Attributes",
    "syllabus_chapter": "5",
    "syllabus_chapter_title": "Managing the Test Activities",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. Risk impact and risk likelihood are independent",
      "b": "Is not correct. Risk impact and risk likelihood are independent",
      "c": "Is correct. Risk impact and risk likelihood are independent",
      "d": "Is not correct. We need both factors to calculate risk level"
    },
    "diagram": null
  },
  {
    "id": "examA_A23",
    "exam": "examA",
    "number": "A23",
    "stem": "The following list contains risks that have been identified for a new software product to be developed:\n\n                i.       Management moves two experienced testers to another project\n               ii.       The system does not comply with security standards\n              iii.       System response time exceeds user requirements\n              iv.        Stakeholders have inaccurate expectations\n               v.        Disabled people have problems when using the system\n\nWhich of them are project risks?",
    "options": {
      "a": "i, iv are project risks",
      "b": "iv, v are project risks",
      "c": "i, iii are project risks",
      "d": "ii, v are project risks"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "a"
    ],
    "lo": "FL-5.2.2",
    "k_level": "K2",
    "syllabus_section": "5.2.2",
    "syllabus_section_title": "Project Risks and Product Risks",
    "syllabus_chapter": "5",
    "syllabus_chapter_title": "Managing the Test Activities",
    "rationale_preamble": "Consider: i. It is a Project risk ii. It is a Product risk iii. It is a Product risk iv. It is a Project risk v. It is a Product risk Thus:",
    "rationale_by_option": {
      "a": "Is correct",
      "b": "Is not correct",
      "c": "Is not correct",
      "d": "Is not correct"
    },
    "diagram": null
  },
  {
    "id": "examA_A24",
    "exam": "examA",
    "number": "A24",
    "stem": "Which of the following is an example of how product risk analysis influences thoroughness and scope\nof testing?",
    "options": {
      "a": "The test manager monitors and reports the level of all known risks on a daily basis so the stakeholders can make an informed decision on the release date",
      "b": "One of the identified risks was \"Lack of support of open-source databases\", so the team decided to integrate the system with an open-source database",
      "c": "During the quantitative risk analysis, the team estimated the total level of all identified risks and reported it as the total residual risk before testing",
      "d": "Risk assessment revealed a very high level of performance risks, so it was decided to perform detailed performance efficiency testing early in the SDLC"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "d"
    ],
    "lo": "FL-5.2.3",
    "k_level": "K2",
    "syllabus_section": "5.2.3",
    "syllabus_section_title": "Product Risk Analysis",
    "syllabus_chapter": "5",
    "syllabus_chapter_title": "Managing the Test Activities",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. This is an example of a risk monitoring activity, not risk analysis",
      "b": "Is not correct. This is an example of an architectural decision, not related with testing",
      "c": "Is not correct. This is an example of performing a quantitative risk analysis and is not related to thoroughness or scope of testing",
      "d": "Is correct. This shows how risk analysis impacts the thoroughness of testing (i.e., the level of detail)"
    },
    "diagram": null
  },
  {
    "id": "examA_A25",
    "exam": "examA",
    "number": "A25",
    "stem": "Which TWO of the following options are common metrics used for reporting on the quality level of\nthe test object?",
    "options": {
      "a": "Number of defects found during system testing",
      "b": "Total effort on test design divided by the number of designed test cases",
      "c": "Number of executed test procedures",
      "d": "Number of defects found divided by the size of a work product",
      "e": "Time needed to repair a defect"
    },
    "select_instruction": "Select TWO option",
    "points": 1,
    "correct": [
      "a",
      "d"
    ],
    "lo": "FL-5.3.1",
    "k_level": "K1",
    "syllabus_section": "5.3.1",
    "syllabus_section_title": "Metrics used in Testing",
    "syllabus_chapter": "5",
    "syllabus_chapter_title": "Managing the Test Activities",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is correct. The number of defects found is related to the test object quality",
      "b": "Is not correct. This is the measure of the test efficiency not the test object quality",
      "c": "Is not correct. The number of test cases executed does not tell us anything about the quality; test results might do",
      "d": "Is correct. defect density is related to the test object quality",
      "e": "Is not correct. Time to repair is a process metric. It does not tell us anything about the product quality"
    },
    "diagram": null
  },
  {
    "id": "examA_A26",
    "exam": "examA",
    "number": "A26",
    "stem": "Which of the following pieces of information contained in a test progress report is the LEAST useful\nfor business representatives?",
    "options": {
      "a": "Impediments to testing",
      "b": "Branch coverage achieved",
      "c": "Test progress",
      "d": "New risks within the test cycle"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "b"
    ],
    "lo": "FL-5.3.2",
    "k_level": "K2",
    "syllabus_section": "5.3.2",
    "syllabus_section_title": "Purpose, Content and Audience for Test Reports",
    "syllabus_chapter": "5",
    "syllabus_chapter_title": "Managing the Test Activities",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. Impediments to testing can be high-level and business- related, so this is an important piece of information for business stakeholders",
      "b": "Is correct. Branch testing is a technical metric used by developers and technical test analysts. This information is of no interest to business representatives",
      "c": "Is not correct. Test progress is project related, so it may be useful for business representatives",
      "d": "Is not correct. Risks impact product quality, so it may be useful for business representatives"
    },
    "diagram": null
  },
  {
    "id": "examB_1",
    "exam": "examB",
    "number": "1",
    "stem": "Which of the following is an example of why testing is necessary?",
    "options": {
      "a": "Dynamic testing increases quality by causing test objects to fail in ways that could never be achieved by the users",
      "b": "Static testing is used by developers to identify failures in their code earlier than can be achieved through dynamic testing",
      "c": "Static analysis provides evidence to customers that the elements of the system that provide no outputs are fit for release",
      "d": "Reviews increase the quality of requirements specifications and lead to fewer changes being needed in derived work products"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "d"
    ],
    "lo": "FL-1.2.1",
    "k_level": "K2",
    "syllabus_section": "1.2.1",
    "syllabus_section_title": "Testing's Contributions to Success",
    "syllabus_chapter": "1",
    "syllabus_chapter_title": "Fundamentals of Testing",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. It is often possible to use dynamic testing to cause a test object to fail in ways that could never be achieved by the users, such as by using fault injection. However, if the failure can never occur with real end users, then identifying it is not especially valuable as testing is ultimately aimed at improving the work product for the end users. Spending time testing for failures that cannot occur with real users is not an efficient use of a tester’s time",
      "b": "Is not correct. Static testing in the form of static analysis is used by developers to identify defects in their code earlier than can be achieved through dynamic testing. Note, however, that static testing (and static analysis) is used to detect defects, not failures, which are found by dynamic testing. Thus it is the use of the term ‘failures’ that makes this an incorrect option",
      "c": "Is not correct. Static analysis directly detects defects in code, and this is normally information for the developer, not the customer.",
      "d": "Is correct. Reviews are a form of static testing that can be applied from the very start of the software development lifecycle and are used to find defects that can be removed before subsequent development activities waste effort on faulty requirements. If the defects are not detected and removed early on, then when the defect is found in derived work products, such as the design and code, the requirements will need to be changed."
    },
    "diagram": null
  },
  {
    "id": "examB_2",
    "exam": "examB",
    "number": "2",
    "stem": "Which of the following statements about quality assurance (QA) and/or quality control (QC) is\ncorrect?",
    "options": {
      "a": "QA is performed as part of testing",
      "b": "Testing is performed as part of QC",
      "c": "Testing is another term for QC",
      "d": "Testing is performed as part of QA"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "b"
    ],
    "lo": "FL-1.2.2",
    "k_level": "K1",
    "syllabus_section": "1.2.2",
    "syllabus_section_title": "Testing and Quality Assurance (QA)",
    "syllabus_chapter": "1",
    "syllabus_chapter_title": "Fundamentals of Testing",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. QA concentrates on process improvement and implementation, using a preventive approach to avoid errors and defects, while testing is a form of QC that is used to detect defects",
      "b": "Is correct. QC aims to achieve appropriate levels of quality by focusing on identifying and correcting product defects. Testing is a significant part of QC and helps to uncover these defects",
      "c": "Is not correct. Although testing is a significant part of QC and helps to uncover defects, other (non-testing) techniques utilized in QC include formal methods like model checking and proof of correctness, as well as simulation and prototyping",
      "d": "Is not correct. QA concentrates on process improvement and implementation, using a preventive approach to avoid errors and defects, while testing is a form of QC that is used to detect defects"
    },
    "diagram": null
  },
  {
    "id": "examB_3",
    "exam": "examB",
    "number": "3",
    "stem": "One of the ‘principles of testing’ states that exhaustive testing is impossible. Which of the following\nis an example of addressing this principle in practice?",
    "options": {
      "a": "Creating test cases that cover every possible specified output",
      "b": "Documenting all possible test input variations and prioritizing these based on importance",
      "c": "Starting testing as early as possible with reviews and other static testing approaches",
      "d": "Using equivalence partitioning and boundary value analysis to generate test cases"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "d"
    ],
    "lo": "FL-1.3.1",
    "k_level": "K2",
    "syllabus_section": "1.3.1",
    "syllabus_section_title": "Testing Principles",
    "syllabus_chapter": "1",
    "syllabus_chapter_title": "Fundamentals of Testing",
    "rationale_preamble": "The ‘exhaustive testing is impossible’ principle is concerned with the fact that it is not feasible to test every possible variation of inputs in all different circumstances, except in trivial cases. Instead, testing utilizes test techniques, test case prioritization, and risk-based testing to sample from the set of possibilities and focus test efforts.",
    "rationale_by_option": {
      "a": "Is not correct. The principle states that it is not feasible to test everything except in trivial cases. Testing everything would require testing every possible variation of inputs in all different circumstances, which is generally infeasible as there will be a practically infinite number of possibilities. Testing every possible expected result will not address this problem as the relationship between inputs and expected results can be different for each test object. Sometimes there may be a practically infinite number of possible expected results (e.g., when there are several variables representing real numbers), whereas at other times there may be just two expected results, such as with a single variable that can be either true or false",
      "b": "Is not correct. The principle states that it is not feasible to test every possible variation of inputs in all different circumstances. This is because for non-trivial systems there is a practically infinite number. Therefore, in practice, documenting all possible input variations would be impractical as it would take an infinite length of time",
      "c": "Is not correct. Starting testing as early as possible with reviews and other static testing approaches will not address the problem of there being too many possible test cases. The ‘early testing saves time and money’ principle is concerned with fixing defects early on to prevent the occurrence of subsequent defects in derived work products, thereby reducing costs and the likelihood of failures",
      "d": "Is correct. The use of equivalence partitioning and boundary value analysis to generate test cases is one way to address the principle as these test techniques provide a systematic way to derive a finite subset of all possible test cases"
    },
    "diagram": null
  },
  {
    "id": "examB_4",
    "exam": "examB",
    "number": "4",
    "stem": "Which test activity involves working with test data requirements, test conditions, test environment\nrequirements and test cases?",
    "options": {
      "a": "Test design",
      "b": "Test execution",
      "c": "Test analysis",
      "d": "Test implementation"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "a"
    ],
    "lo": "FL-1.4.1",
    "k_level": "K2",
    "syllabus_section": "1.4.1",
    "syllabus_section_title": "Test Activities and Tasks",
    "syllabus_chapter": "1",
    "syllabus_chapter_title": "Fundamentals of Testing",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is correct. Test design involves using test conditions to create test cases and other necessary testware, such as test data requirements and test charters for exploratory testing. Test environment requirements are also specified, including the necessary infrastructure and tools",
      "b": "Is not correct. Test execution involves executing test cases (as part of test procedures), however it does not directly cover the other testware mentioned in the question, such as test data requirements, test environment requirements and test conditions",
      "c": "Is not correct. Test analysis is used to identify the features that require testing. The test basis is analyzed and defined as test conditions, which are then prioritized along with related risks. While this activity involves working with test conditions, it does not cover the other testware mentioned in the question, such as test data requirements, test environment requirements and test cases",
      "d": "Is not correct. Test implementation includes the generation of test procedures, such as manual and automated test scripts, which are created from test cases and may be assembled into test suites. Test procedures are prioritized and arranged in a test execution schedule. Test data is created, and the test environment built, and its set up verified. While this activity involves explicitly working with test cases, and may use test data requirements and test environment requirements to create test data and the test environment, it does not cover test conditions"
    },
    "diagram": null
  },
  {
    "id": "examB_5",
    "exam": "examB",
    "number": "5",
    "stem": "Which of the following is MOST likely to impact how testing is performed for a given test object?",
    "options": {
      "a": "The average level of experience of the organization’s marketing team",
      "b": "The knowledge of users that a new system is being developed for them",
      "c": "The number of years’ experience of the members of the test team",
      "d": "The end user’s organizational structure for a commercial music streaming application"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "c"
    ],
    "lo": "FL-1.4.2",
    "k_level": "K2",
    "syllabus_section": "1.4.2",
    "syllabus_section_title": "Test Process in Context",
    "syllabus_chapter": "1",
    "syllabus_chapter_title": "Fundamentals of Testing",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. The organization’s marketing team is unlikely to perform much testing (although in some organizations they may be involved with acceptance testing), so their average level of experience (most of which would be in marketing) is not likely to impact how testing is performed for a given test object",
      "b": "Is not correct. The level of knowledge of users that a new system is being built for them is unlikely to affect how testing is performed. Any user involvement that could affect how testing is performed is more likely to be as a result of decisions made by the testers, customer and project manager",
      "c": "Is correct. The number of years’ experience of the members of the performance efficiency testing team will help to determine the capabilities and knowledge (e.g., of different tools and defect types) that the team members will apply when they are testing",
      "d": "Is not correct. The organizational structure of the different end users (who may be varied) will change between users. So, it may not even be known when the application is being tested, and the end user’s organizational structure can thus have little effect on how the testing is performed"
    },
    "diagram": null
  },
  {
    "id": "examB_6",
    "exam": "examB",
    "number": "6",
    "stem": "Which of the following statements is a CORRECT example of the value of traceability?",
    "options": {
      "a": "Traceability between the mitigated risks and test cases that passed provides a means of determining the level of residual risk",
      "b": "Traceability between user requirements and test results provides a means of measuring project progress against business goals",
      "c": "Traceability between testers and test cases that failed provides a means of determining the skill level of the testers",
      "d": "Traceability between the identified risks and written test conditions provides a means of determining which risks are worth testing"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "b"
    ],
    "lo": "FL-1.4.4",
    "k_level": "K2",
    "syllabus_section": "1.4.4",
    "syllabus_section_title": "Traceability between the Test Basis and Testware",
    "syllabus_chapter": "1",
    "syllabus_chapter_title": "Fundamentals of Testing",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. Traceability between the mitigated risks and test cases that passed provides little information, because to be mitigated (by testing) the risks would need to have a corresponding test case that passed. To be able to assess residual risk, traceability between all risks and test results needs to be available, so that the risks that do not have a corresponding passing test can be identified as the residual risks",
      "b": "Is correct. Traceability between user requirements and test results provides an indication of which user requirements have been tested and so provides a means of measuring project progress (in the context of testing) against business goals",
      "c": "Is not correct. It is not clear that test cases that failed provide an indication of tester’s skills any more than test cases that passed. It would partly depend on the test objective (e.g., building confidence or causing failures). Also, such measurement of testers based on test cases that passed and failed can be counter-productive as it could cause the testers to optimize their testing based on that metric rather than the test objective",
      "d": "Is not correct. Traceability between the identified risks and written test conditions provides a means of determining which further test conditions need to be written. Determining which risks are worth testing is part of risk management, and risk mitigation in particular"
    },
    "diagram": null
  },
  {
    "id": "examB_7",
    "exam": "examB",
    "number": "7",
    "stem": "Which of the following is MOST likely to be an example of a tester using a generic skill when\ntesting?",
    "options": {
      "a": "The tester’s deep knowledge of a variety of computer games meant that they got on well with one of the developers who was also into gaming",
      "b": "The tester was a former pilot and was better able to understand the acceptance criteria for the helicopter control system",
      "c": "The tester previously worked as a programmer and used their skills in this area to better communicate with the business analysts",
      "d": "The tester was very careful not to make mistakes when they methodically generated test cases prior to starting their exploratory testing session"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "b"
    ],
    "lo": "FL-1.5.1",
    "k_level": "K2",
    "syllabus_section": "1.5.1",
    "syllabus_section_title": "Generic Skills Required for Testing",
    "syllabus_chapter": "1",
    "syllabus_chapter_title": "Fundamentals of Testing",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. Strong communication skills, active listening, and teamwork abilities enable a tester to interact effectively with all stakeholders, however a deep knowledge of a variety of computer games that allowed them to get on well with one developer is not an example of a generic skill useful to testers",
      "b": "Is correct. Domain knowledge that can be used to understand and communicate with end-users and business representatives is one of the generic skills required by testers. A tester with experience as a pilot would make them better able to appreciate the acceptance criteria for the helicopter control system",
      "c": "Is not correct. Although programming skills could be considered as technical knowledge which can increase efficiency when utilizing some test tools, it is unlikely that these skills would improve their communication with business analysts",
      "d": "Is not correct. Although thoroughness, attention to detail, curiosity, and a methodical approach to identifying hard-to-find defects are all useful generic skills for testers, it is doubtful they would be generating test cases prior to starting exploratory testing. This is because one of the main tenets of exploratory testing is that the test cases are generated during the testing, not scripted in advance"
    },
    "diagram": null
  },
  {
    "id": "examB_8",
    "exam": "examB",
    "number": "8",
    "stem": "Which of the following is an advantage of the whole-team approach?",
    "options": {
      "a": "It allows team members to take on any role at any time",
      "b": "It only needs a single team to support the complete development project",
      "c": "It embeds business representatives alongside developers in the same team",
      "d": "It generates a team synergy that benefits the entire project"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "d"
    ],
    "lo": "FL-1.5.2",
    "k_level": "K1",
    "syllabus_section": "1.5.2",
    "syllabus_section_title": "Whole Team Approach",
    "syllabus_chapter": "1",
    "syllabus_chapter_title": "Fundamentals of Testing",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. The whole-team approach allows any team member with the requisite skills and knowledge to undertake any task, however that does not mean that team members can take on any role at any time. Typically, they only take on roles in which they are competent, and there is no suggestion that every team member can do every role",
      "b": "Is not correct. The whole-team approach applies to how a single team (typically in Agile software development) works; it does not cover how multiple teams are supposed to work on larger projects, and it does not suggest that only one ‘whole’ team is needed for a complete project",
      "c": "Is not correct. The whole-team approach does not expect every team member to be involved in every important decision. For instance, there is no need for the business representative (i.e., the Product Owner) to be involved in every technical decision that does not affect the business outcome and implementing such an approach would unnecessarily slow down the team’s progress",
      "d": "Is correct. By leveraging the diverse skill sets of each team member most effectively, the whole-team approach fosters superior team dynamics, promotes robust communication and collaboration, and generates a team synergy that benefits the entire project"
    },
    "diagram": null
  },
  {
    "id": "examB_9",
    "exam": "examB",
    "number": "9",
    "stem": "Which of the following statements about the chosen software development lifecycle is CORRECT?",
    "options": {
      "a": "If agile software development is used, automation of system tests replaces the need for regression testing",
      "b": "If a sequential development model is used, then the dynamic testing is typically restricted to later in the lifecycle",
      "c": "If an iterative development model is used, then component testing is typically performed manually by developers",
      "d": "If an incremental development model is used, then static testing is done in early increments and dynamic testing in later increments"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "b"
    ],
    "lo": "FL-2.1.1",
    "k_level": "K2",
    "syllabus_section": "2.1.1",
    "syllabus_section_title": "Impact of the Software Development Lifecycle on Testing",
    "syllabus_chapter": "2",
    "syllabus_chapter_title": "Testing Throughout the Software Development Lifecycle",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. In agile software development, deliverables are produced in each iteration, and the frequent delivery of increments necessitates extensive regression testing. Although some (or all) of this regression testing may be automated, the regression testing (automated or not) cannot be replaced by automation of system tests",
      "b": "Is correct. If a sequential development model is used, then early in the software development lifecycle no code is available for execution, and so during this time static testing (e.g., reviews) is performed. Later in the lifecycle, when code is available for execution, dynamic testing is possible. Note, however, that preparation for dynamic testing will often occur early in any software development lifecycle",
      "c": "Is not correct. If an iterative development model, like agile software development, is used, then component tests may well be used for regression testing for each iteration. In which case, there is a strong argument for automating these component tests, which will have to be run frequently, and there is unlikely to be a strong argument for developers performing these component tests manually",
      "d": "Is not correct. In most incremental development models, deliverables are produced in each increment, requiring both static testing and dynamic testing at all test levels for each increment delivered"
    },
    "diagram": null
  },
  {
    "id": "examB_10",
    "exam": "examB",
    "number": "10",
    "stem": "Which of the following is a good testing practice that applies to all software development lifecycles?",
    "options": {
      "a": "Testers should review work products as part of the next development phase",
      "b": "Testers should review work products as soon as drafts are available",
      "c": "Testers should review work products before test analysis and test design begin",
      "d": "Testers should review work products immediately after they are published"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "b"
    ],
    "lo": "FL-2.1.2",
    "k_level": "K1",
    "syllabus_section": "2.1.2",
    "syllabus_section_title": "Software Development Lifecycle and Good Testing Practices",
    "syllabus_chapter": "2",
    "syllabus_chapter_title": "Testing Throughout the Software Development Lifecycle",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. Testers should review work products as soon as drafts are available to enable early testing as part of a shift-left approach. If they waited until the next development phase, then unnecessary development (and test) work could be started on unreviewed, flawed work products",
      "b": "Is correct. Testers should review work products as soon as drafts are available to enable early testing as part of a shift-left approach",
      "c": "Is not correct. Testers typically review work products that form the test basis as part of test analysis, not before test analysis and test design",
      "d": "Is not correct. Testers should review work products as soon as drafts are available to enable early testing as part of the shift-left approach. Waiting until they are published means that any defects that could be found by tester’s review will be in the published document"
    },
    "diagram": null
  },
  {
    "id": "examB_11",
    "exam": "examB",
    "number": "11",
    "stem": "Which of the following is an example of a test-first approach to development?",
    "options": {
      "a": "Test-Driven Development",
      "b": "Coverage-Driven Development",
      "c": "Quality-Driven Development",
      "d": "Feature-Driven Development"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "a"
    ],
    "lo": "FL-2.1.3",
    "k_level": "K1",
    "syllabus_section": "2.1.3",
    "syllabus_section_title": "Testing as a Driver for Software Development",
    "syllabus_chapter": "2",
    "syllabus_chapter_title": "Testing Throughout the Software Development Lifecycle",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is correct. Test-Driven Development (TDD) is a well-known example of a test-first approach to development",
      "b": "Is not correct. Coverage-Driven Development is not a correct example of a test-first approach to development",
      "c": "Is not correct. Quality-Driven Development is not a correct example of a test-first approach to development",
      "d": "Is not correct. Feature-Driven Development is not an example of a test- first approach to development, but is, instead, an agile software development methodology based around delivering features (as opposed to user stories in Scrum)"
    },
    "diagram": null
  },
  {
    "id": "examB_12",
    "exam": "examB",
    "number": "12",
    "stem": "Which of the following statements about DevOps is CORRECT?",
    "options": {
      "a": "To speed up releases, continuous integration is used to encourage developers to submit code quickly without the need to complete component testing",
      "b": "To be able to update and release systems on a more frequent basis, many automated regression tests are required to reduce the risk of regression",
      "c": "To treat both developers and operations equally, the testers will allocate more effort to release testing by operations using a shift-right approach",
      "d": "To create increased synergy between testers, developers and operations, the testing must become fully automated with no manual testing"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "b"
    ],
    "lo": "FL-2.1.4",
    "k_level": "K2",
    "syllabus_section": "2.1.4",
    "syllabus_section_title": "DevOps and Testing",
    "syllabus_chapter": "2",
    "syllabus_chapter_title": "Testing Throughout the Software Development Lifecycle",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. DevOps enhances testing in several ways, such as by providing fast feedback on code quality, automated regression testing that minimizes regression risk, and promoting a shift-left approach with high-quality code submission and component tests. This is largely provided through continuous integration, where the developers submit component (unit) tests with their new code, which must pass for the code to be admitted to the build. Therefore, developers do need to complete component testing",
      "b": "Is correct. DevOps enhances testing in several ways, such as by providing fast feedback on code quality, automated regression testing that minimizes regression risk, and promoting a shift-left approach with high-quality code submission and component tests",
      "c": "Is not correct. DevOps enhances testing in several ways, such as by providing fast feedback on code quality, automated regression testing that minimizes regression risk, and promoting a shift-left approach with high-quality code submission and component tests. Testers do not attempt to treat developers and operations equally by spending more time on release testing, although a shift-right approach to testing (testing in production) may well be used",
      "d": "Is not correct. Automated processes like continuous integration/continuous delivery (CI/CD) in DevOps facilitate stable test environments and reduce the need for manual testing, however, there is a risk of overlooking the importance of manual testing, especially from a user's perspective"
    },
    "diagram": null
  },
  {
    "id": "examB_13",
    "exam": "examB",
    "number": "13",
    "stem": "Which of the following is MOST likely to be performed as part of system testing?",
    "options": {
      "a": "Security testing of a credit management system by an independent test team",
      "b": "Testing the interface of a currency exchange system with an external banking system",
      "c": "Beta testing of a remote learning system by courseware developers",
      "d": "Testing interactions between the user interface and database of a human resources system"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "a"
    ],
    "lo": "FL-2.2.1",
    "k_level": "K2",
    "syllabus_section": "2.2.1",
    "syllabus_section_title": "Test Levels",
    "syllabus_chapter": "2",
    "syllabus_chapter_title": "Testing Throughout the Software Development Lifecycle",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is correct. System testing examines the behavior and capabilities of the complete system and covers non-functional testing of quality characteristics, which includes security testing. This type of testing is often performed by an independent test team based on system specifications",
      "b": "Is not correct. System integration testing examines the interfaces with other systems and external services",
      "c": "Is not correct. Beta testing is a type of acceptance testing performed at an external site by roles outside the development organization",
      "d": "Is not correct. Component integration testing involves testing the (interfaces and) interactions between components of a system, such as the user interface and database"
    },
    "diagram": null
  },
  {
    "id": "examB_14",
    "exam": "examB",
    "number": "14",
    "stem": "Which of the following statements is CORRECT?",
    "options": {
      "a": "Regression tests increase in number as the project progresses, whereas the number of confirmation tests decreases as the project progresses",
      "b": "Regression tests are created and run when the test object is fixed, whereas confirmation tests are run whenever the test object is enhanced",
      "c": "Regression testing is concerned with checking that the operational environment remains unchanged, whereas confirmation testing is concerned with testing changes to the test object",
      "d": "Regression testing is concerned with adverse effects in unchanged code, whereas confirmation testing is concerned with testing changed code"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "d"
    ],
    "lo": "FL-2.2.3",
    "k_level": "K2",
    "syllabus_section": "2.2.3",
    "syllabus_section_title": "Confirmation Testing and Regression Testing",
    "syllabus_chapter": "2",
    "syllabus_chapter_title": "Testing Throughout the Software Development Lifecycle",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. Regression tests increase in number as the project progresses, as new regression tests are typically required as changes are made to the system. Similarly, the number of confirmation tests also typically increases as the project progresses as new confirmation tests are needed for each fix made to a system",
      "b": "Is not correct. It is the other way round. Confirmation tests are created and run when the test object is fixed, and regression tests are (ideally) run whenever the test object is enhanced (changed)",
      "c": "Is not correct. Confirmation testing verifies that a defect has been fixed correctly and so is concerned with testing changes to the test object. However, regression testing ensures that changes (including changes to the operational environment) do not have negative effects on unchanged software and so does not check that the operational environment remains unchanged",
      "d": "Is correct. Regression testing ensures that changes do not have negative effects on unchanged software. Confirmation testing verifies that a defect has been fixed – and so is concerned with changed code"
    },
    "diagram": null
  },
  {
    "id": "examB_15",
    "exam": "examB",
    "number": "15",
    "stem": "Which of the following is an example of a defect that can be found by static testing but NOT by\ndynamic testing?",
    "options": {
      "a": "Lack of usability provided through the user interface",
      "b": "Code with no path that reaches it",
      "c": "Poor response times for most of the expected users",
      "d": "Required features that are not implemented in the code"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "b"
    ],
    "lo": "FL-3.1.3",
    "k_level": "K2",
    "syllabus_section": "3.1.3",
    "syllabus_section_title": "Differences between Static Testing and Dynamic Testing",
    "syllabus_chapter": "3",
    "syllabus_chapter_title": "Static Testing",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. A lack of usability provided through the user interface can be detected through a review using a suitable checklist, but the lack of usability can also be identified by getting several typical users to dynamically test the user interface and provide feedback on its usability",
      "b": "Is correct. A code review can detect code that cannot be reached by any path, however dynamic tests can only exercise reachable code and cannot determine that code cannot be reached without running every possible combination of inputs and input states, which is impractical for real code",
      "c": "Is not correct. Poor response times for most of the expected users are difficult to determine without executing the code (i.e., by static testing), so in this situation dynamic testing could find a defect, but static testing is unlikely to find it",
      "d": "Is not correct. A review of the code by someone who is aware of the required features could detect that the required features had not been implemented in the code, and dynamic testing could also be used to determine that these required features had not been implemented"
    },
    "diagram": null
  },
  {
    "id": "examB_16",
    "exam": "examB",
    "number": "16",
    "stem": "Which of the following is a benefit of early and frequent stakeholder feedback?",
    "options": {
      "a": "Managers are aware of which developers are less productive",
      "b": "It allows project managers to prioritize their stakeholder interactions",
      "c": "It facilitates early communication of potential quality issues",
      "d": "End users better understand why the delivery of the work product is delayed"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "c"
    ],
    "lo": "FL-3.2.1",
    "k_level": "K1",
    "syllabus_section": "3.2.1",
    "syllabus_section_title": "Benefits of Early and Frequent Stakeholder Feedback",
    "syllabus_chapter": "3",
    "syllabus_chapter_title": "Static Testing",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. The feedback is from stakeholders (e.g., business representatives and end users), not from developers, so this feedback is not likely to inform managers which developers are more or less productive",
      "b": "Is not correct. Early and frequent feedback from stakeholders is not used by project managers to prioritize how they interact with the different stakeholders",
      "c": "Is correct. Obtaining feedback from stakeholders early and often in the software development process can be highly beneficial as it facilitates early communication of potential quality issues, can prevent misunderstandings about requirements, and ensures that any changes in stakeholder requirements are understood and implemented sooner",
      "d": "Is not correct. Early and frequent feedback can prevent the development of a product that does not meet stakeholder needs, and results in costly rework and missed deadlines, so, ideally there should be no delay. Also, the feedback is from stakeholders (not to them), which includes the end users, so the end users providing feedback will not aid the end users’ understanding"
    },
    "diagram": null
  },
  {
    "id": "examB_17",
    "exam": "examB",
    "number": "17",
    "stem": "Given the following task descriptions:\n        1. The quality characteristics to be evaluated and the exit criteria are selected\n        2. Everyone has access to the work product\n        3. Anomalies are identified in the work product\n        4. Anomalies are discussed\n\nAnd the following review activities\n       A. Individual review\n       B. Review initiation\n       C. Planning\n       D. Communication and analysis\n\nWhich of the following BEST matches the task descriptions and activities?",
    "options": {
      "a": "1B, 2C, 3D, 4A",
      "b": "1B, 2D, 3C, 4A",
      "c": "1C, 2A, 3B, 4D",
      "d": "1C, 2B, 3A, 4D"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "d"
    ],
    "lo": "FL-3.2.2",
    "k_level": "K2",
    "syllabus_section": "3.2.2",
    "syllabus_section_title": "Review Process Activities",
    "syllabus_chapter": "3",
    "syllabus_chapter_title": "Static Testing",
    "rationale_preamble": "Considering each of the listed task descriptions: 1. The quality characteristics to be evaluated and the exit criteria are selected - (Planning (C): Defining the review scope, purpose, work product to be reviewed, quality characteristics to be evaluated, areas of focus, exit criteria, supporting information such as standards, effort, and timeframes.) 2. Everyone has access to the work product - (Review initiation (B): Ensuring all participants have access to the work product and necessary resources, and clarifying their roles and responsibilities.) 3. Anomalies are identified in the work product - (Individual review (A): Evaluating the work product's quality, identifying and logging anomalies, recommendations, and questions using review techniques like checklist-based reviewing and scenario-based reviewing.) 4. Anomalies are analyzed and discussed - (Communication and analysis (D): Analyzing and discussing each anomaly, determining its status, ownership, and required actions, and making review decisions, normally in a meeting. This could include determining the need for a follow-up review.) Thus:",
    "rationale_by_option": {
      "a": "Is not correct",
      "b": "Is not correct",
      "c": "Is not correct",
      "d": "Is correct. The correct match is: 1C, 2B, 3A, 4D"
    },
    "diagram": null
  },
  {
    "id": "examB_18",
    "exam": "examB",
    "number": "18",
    "stem": "Given the following roles in reviews:\n        1. Scribe\n        2. Review leader\n        3. Facilitator\n        4. Manager\n\nAnd the following responsibilities in reviews:\n       A. Ensures the effective running of review meetings and the setting up a safe review\n            environment\n       B. Records review information, such as decisions and new anomalies found during the\n            review meeting\n       C. Decides what is to be reviewed and provides resources, such as staff and time for the\n            review\n       D. Takes overall responsibility for the review such as organizing when and where the\n            review will take place\n\nWhich of the following BEST matches the roles and responsibilities?",
    "options": {
      "a": "1A, 2B, 3D, 4C",
      "b": "1A, 2C, 3B, 4D",
      "c": "1B, 2D, 3A, 4C",
      "d": "1B, 2D, 3C, 4A"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "c"
    ],
    "lo": "FL-3.2.3",
    "k_level": "K1",
    "syllabus_section": "3.2.3",
    "syllabus_section_title": "Roles and Responsibilities in Reviews",
    "syllabus_chapter": "3",
    "syllabus_chapter_title": "Static Testing",
    "rationale_preamble": "Considering each of the listed roles: 1. Scribe (or Recorder) - responsible for gathering feedback from reviewers and documenting review information, such as decisions made, and any new anomalies identified during the review meeting. (Records review information, such as decisions and new anomalies found during the review meeting - B) 2. Review Leader - responsible for overseeing the review process, such as selecting the review team members, scheduling review meetings, and ensuring that the review is completed successfully. (Takes overall responsibility for the review such as organizing when and where the review will take place - D) 3. Facilitator (or Moderator) - responsible for ensuring that the review meetings run effectively, including managing time, mediating discussions, and creating a safe environment where everyone can voice their opinions freely. (Ensures the effective running of review meetings and the setting up of a safe review environment - A) 4. Manager - responsible for deciding what needs to be reviewed and allocating resources, such as staff and time, for the review. (Decides what is to be reviewed and provides resources, such as staff and time for the review - C) Thus:",
    "rationale_by_option": {
      "a": "Is not correct",
      "b": "Is not correct",
      "c": "Is correct. The correct match is: 1B, 2D, 3A, 4C",
      "d": "Is not correct"
    },
    "diagram": null
  },
  {
    "id": "examB_19",
    "exam": "examB",
    "number": "19",
    "stem": "Which of the following statements BEST describes the difference between decision table testing\nand branch testing?",
    "options": {
      "a": "In decision table testing, the test cases are derived from the decision statements in the code. In branch testing, the test cases are derived from knowledge of the control flow of the test object.",
      "b": "In decision table testing, the test cases are derived from the specification that describes the business logic. In branch testing the test cases are based on anticipation of potential defects in the source code.",
      "c": "In decision table testing, the test cases are derived from knowledge of the control flow of the test object. In branch testing, test cases are derived from the specification that describes the business logic.",
      "d": "In decision table testing, the test cases are independent of how the software is implemented. In branch testing, test cases can be created only after the design or implementation of the code."
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "d"
    ],
    "lo": "FL-4.1.1",
    "k_level": "K2",
    "syllabus_section": "4.1.1",
    "syllabus_section_title": "Test Techniques Overview",
    "syllabus_chapter": "4",
    "syllabus_chapter_title": "Test Analysis and Design",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. Decision table testing is a black-box test technique, not a white-box test technique – the test cases are not based on the decisions in the source code. In branch testing, the test cases are derived from knowledge of the control flow of the test object",
      "b": "Is not correct. Anticipation of potential defects is used in error guessing (an experience-based test technique), not in branch testing (a white-box test technique). In decision table testing, the test cases are derived from the specification that describes the business logic",
      "c": "Is not correct. If a test case is based on the knowledge of the control flow of the test object, it is a white-box test technique. Decision table testing is typically based on an analysis of business logic, so it is a black-box test technique. In branch testing, test cases are not derived from the specification – this would make it a black-box test technique. Branch testing is a white-box test technique, where test cases are derived based on the source code structure",
      "d": "Is correct. Decision table testing is a black-box test technique, so it is based on an analysis of the specified behavior of the test object without reference to its internal structure. Therefore, the test cases are independent of how the software is implemented. Branch testing is a white-box test technique, so test cases are based on an analysis of the test object’s internal structure and processing. As the test cases are dependent on how the software is designed and coded, they can only be created after the design or implementation of the test object"
    },
    "diagram": null
  },
  {
    "id": "examB_20",
    "exam": "examB",
    "number": "20",
    "stem": "Customers of the TestWash car wash chain have cards with a record of the number of washes\nthey have bought so far. The initial value is 0. After entering the car wash, the system increases\nthe number on the card by one. This value represents the number of the current wash. Based on\nthis number the system decides what discount the customer is entitled to.\n\nFor every tenth wash the system gives a 10% discount, and for every twentieth wash, the system\ngives a further 40% discount (i.e., a 50% discount in total).\n\nWhich of the following sets of input data (understood as the numbers of the current wash) achieves\nthe highest equivalence partition coverage?",
    "options": {
      "a": "19, 20, 30",
      "b": "11, 12, 20",
      "c": "1, 10, 50",
      "d": "10, 29, 30, 31"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "a"
    ],
    "lo": "FL-4.2.1",
    "k_level": "K3",
    "syllabus_section": "4.2.1",
    "syllabus_section_title": "Equivalence Partitioning",
    "syllabus_chapter": "4",
    "syllabus_chapter_title": "Test Analysis and Design",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is correct. 19 covers the “no discount” partition, 20 covers the “50% discount” partition, and 30 covers the “10% discount” partition. These three values cover all three of the valid equivalence partitions",
      "b": "Is not correct. 11 and 12 cover the “no discount” partition, while 20 covers the “50% discount” partition, so covering two of the three valid equivalence partitions",
      "c": "Is not correct. 1 covers the “no discount” partition, while 10 and 50 cover the “10% discount” partition. The “50% discount” partition is not covered, so overall two of the three valid equivalence partitions are covered",
      "d": "Is not correct. 29 and 31 cover the “no discount” partition, while 10 and 30 cover the “10% discount” partition. The “50% discount” partition is not covered, so overall two of the three valid equivalence partitions are covered"
    },
    "diagram": null
  },
  {
    "id": "examB_21",
    "exam": "examB",
    "number": "21",
    "stem": "You are testing a form that verifies the correctness of the length of the password given as input.\nThe form accepts a password with the correct length and rejects a password that is too short or too\nlong. The password length is correct if it has between 6 and 12 characters inclusive. Otherwise, it\nis considered incorrect.\n\nAt first, the form is empty (password length = 0). You apply boundary value analysis to the\n“password length” variable.\n\nYour set of test cases achieves 100% 2-value boundary value coverage. The team decided that\ndue to the high risk of this component, test cases should be added to ensure 100% 3-value\nboundary value coverage.\n\nWhich additional password lengths should be tested to achieve this?",
    "options": {
      "a": "4, 5, 13, 14",
      "b": "7, 11",
      "c": "1, 5, 13",
      "d": "1, 4, 7, 11, 14"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "d"
    ],
    "lo": "FL-4.2.2",
    "k_level": "K3",
    "syllabus_section": "4.2.2",
    "syllabus_section_title": "Boundary Value Analysis",
    "syllabus_chapter": "4",
    "syllabus_chapter_title": "Test Analysis and Design",
    "rationale_preamble": "The domain for the password length has three equivalence partitions: • passwords too short {0, 1, …, 4, 5} • passwords OK {6, 7, …, 11, 12} • passwords too long {13, 14, …} To achieve full coverage for 3-value BVA we need to test the following values: 0, 1, 4, 5, 6, 7, 11, 12, 13, 14. Since 2-value BVA is already covered, this means that we have already tested the passwords of length: 0, 5, 6, 12 and 13. This means that the additional lengths that need to be covered to move from 2-value to 3-value are: 1, 4, 7, 11 and 14. Thus:",
    "rationale_by_option": {
      "a": "Is not correct",
      "b": "Is not correct",
      "c": "Is not correct",
      "d": "Is correct"
    },
    "diagram": null
  },
  {
    "id": "examB_22",
    "exam": "examB",
    "number": "22",
    "stem": "The following decision table contains the rules for determining the risk of atherosclerosis.\n\n                                                Rule 1    Rule 2    Rule 3    Rule 4    Rule 5\n Conditions\n       Cholesterol (mg/dl)                                          125 –     125 –\n                                                  ≤124    ≤ 124                         ≥ 201\n                                                                     200       200\n     Blood pressure (mm\n                                                 ≤ 140    > 140     ≤ 140     > 140       –\n                     Hg)\n Action\n                        Risk level             very low    low     medium      high    very high\n\nYou designed the test cases with the following input data:\n\n                    TC1:            Cholesterol = 125 mg/dl            Blood pressure = 141 mm Hg\n\n                    TC2:            Cholesterol = 200 mg/dl            Blood pressure = 201 mm Hg\n\n                    TC3:            Cholesterol = 124 mg/dl            Blood pressure = 201 mm Hg\n\n                    TC4:            Cholesterol = 109 mg/dl            Blood pressure = 200 mm Hg\n\n                    TC5:            Cholesterol = 201 mg/dl            Blood pressure = 140 mm Hg\n\nWhat is the decision table coverage achieved by these test cases?",
    "options": {
      "a": "40%",
      "b": "60%",
      "c": "80%",
      "d": "100%"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "b"
    ],
    "lo": "FL-4.2.3",
    "k_level": "K3",
    "syllabus_section": "4.2.3",
    "syllabus_section_title": "Decision Table Testing",
    "syllabus_chapter": "4",
    "syllabus_chapter_title": "Test Analysis and Design",
    "rationale_preamble": "There are five columns in the decision table. Each test case covers one of them. TC1 and TC2 both cover Rule 4 TC3 and TC4 both cover Rule 2 TC5 covers Rule 5 So, these five test cases cover three out of five columns, achieving a coverage of (3/5)*100% = 60%. Therefore, option b) is the CORRECT option. Thus:",
    "rationale_by_option": {
      "a": "Is not correct",
      "b": "Is correct",
      "c": "Is not correct",
      "d": "Is not correct"
    },
    "diagram": null
  },
  {
    "id": "examB_23",
    "exam": "examB",
    "number": "23",
    "stem": "A storage system can store up to three elements and is modeled by the following state transition\ndiagram. The variable N represents the number of currently stored elements.\n\nWhich of the following test cases, represented as sequences of events, achieves the highest level\nof valid transitions coverage?",
    "options": {
      "a": "Add, Remove, Add, Add, Add",
      "b": "Add, Add, Add, Add, Remove, Remove",
      "c": "Add, Add, Add, Remove, Remove",
      "d": "Add, Add, Add, Remove, Add"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "c"
    ],
    "lo": "FL-4.2.4",
    "k_level": "K3",
    "syllabus_section": "4.2.4",
    "syllabus_section_title": "State Transition Testing",
    "syllabus_chapter": "4",
    "syllabus_chapter_title": "Test Analysis and Design",
    "rationale_preamble": "Let us refer to the transitions with E1, …, E5 as in the picture. The variable N denotes the number of elements currently stored. Each “Add” event increases it by 1, and each “Remove” event decreases it by 1. Notice, that when the “Add” event occurs while being in the NOT FULL state, the state changes to FULL only if N=2. If N<2, the system stays in the NOT FULL state. If N=0, no “Remove” action is possible. Similarly, if N=3, no “Add” action is possible. Test a) can be written as E1, E3, E3, E2, E4 (so covers 4 out of 5 valid transitions, achieving 80% valid transitions coverage). Test b) is infeasible, because after the first three “Add” actions the system is in the FULL state and there is no valid transition going from FULL triggered by the “Add” event. After the first three transitions only 60% of valid transitions coverage is achieved. Test c) can be written as E1, E2, E4, E5, E3 (so covers 5 out of 5 valid transitions, achieving 100% valid transitions coverage). Test d) can be written as E1, E2, E4, E5, E4 (so covers 4 out of 5 valid transitions, achieving 80% valid transitions coverage). Thus:",
    "rationale_by_option": {
      "a": "Is not correct",
      "b": "Is not correct",
      "c": "Is correct",
      "d": "Is not correct"
    },
    "diagram": "diagram_examB_23.png"
  },
  {
    "id": "examB_24",
    "exam": "examB",
    "number": "24",
    "stem": "You run two test cases, T1 and T2, on the same code. Test T1 achieved 40% statement coverage\nand test T2 achieved 65% statement coverage.\n\nWhich of the following sentences must be necessarily true?",
    "options": {
      "a": "The test suite composed of tests T1 and T2 achieves 105% statement coverage",
      "b": "There exists at least one statement that must have been executed by both T1 and T2",
      "c": "At least 5% of the statements in the code that was tested are non-executable",
      "d": "The test suite composed of tests T1 and T2 achieves full branch coverage"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "b"
    ],
    "lo": "FL-4.3.1",
    "k_level": "K2",
    "syllabus_section": "4.3.1",
    "syllabus_section_title": "Statement Testing and Statement Coverage",
    "syllabus_chapter": "4",
    "syllabus_chapter_title": "Test Analysis and Design",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. Coverage is always defined as the percentage of the covered elements. Therefore, it cannot exceed 100%",
      "b": "Is correct. If the statements executed by T1 and T2 were disjoint, the coverage of the test suite {T1, T2} would be 105%, which is impossible (see answer a). Therefore, at least 5% of executable statements must have been executed by both T1 and T2",
      "c": "Is not correct. Statement coverage does not tell us anything about the number of non-executable statements in the code",
      "d": "Is not correct. Even if a test suite achieves full statement coverage, this does not imply achieving full branch coverage"
    },
    "diagram": null
  },
  {
    "id": "examB_25",
    "exam": "examB",
    "number": "25",
    "stem": "Let the branch coverage metric be defined as BCov = (X / Y) * 100%.\n\nWhat do X and Y represent in this formula?",
    "options": {
      "a": "X = number of decision outcomes exercised by the test cases Y = total number of decision outcomes in the code",
      "b": "X = number of conditional branches exercised by the test cases Y = total number of branches in the code",
      "c": "X = number of branches exercised by the test cases Y = total number of branches in the code",
      "d": "X = number of conditional branches exercised by the test cases Y = total number of decision outcomes in the code"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "c"
    ],
    "lo": "FL-4.3.2",
    "k_level": "K2",
    "syllabus_section": "4.3.2",
    "syllabus_section_title": "Branch Testing and Branch Coverage",
    "syllabus_chapter": "4",
    "syllabus_chapter_title": "Test Analysis and Design",
    "rationale_preamble": "Branch testing is a white-box test technique in which the coverage items are branches. A branch is a transfer of control between two nodes in the control flow graph, which shows the possible sequences in which source code statements are executed in the test object. Each transfer of control can be either unconditional (i.e., straight-line code) or conditional (i.e., a decision outcome). Coverage is measured as the number of branches exercised by the test cases divided by the total number of branches, and is expressed as a percentage. Thus:",
    "rationale_by_option": {
      "a": "Is not correct. A decision outcome is a conditional branch. For branch testing, X counts not only conditional, but also unconditional branches",
      "b": "Is not correct. Branch coverage counts not only conditional, but also unconditional branches",
      "c": "Is correct. Branch coverage is measured as the number of branches exercised by the test cases divided by the total number of branches, and is expressed as a percentage",
      "d": "Is not correct. Both X and Y count only conditional branches and do not take into account the unconditional branches"
    },
    "diagram": null
  },
  {
    "id": "examB_26",
    "exam": "examB",
    "number": "26",
    "stem": "Which TWO of the following statements provide the BEST rationale for using exploratory testing?",
    "options": {
      "a": "Testers have not been allocated enough time for test design and test execution",
      "b": "The existing test strategy requires that testers use formal, black-box test techniques",
      "c": "The specification is written in a formal language that can be processed by a tool",
      "d": "Testers are the members of an agile team and have good programming skills",
      "e": "Testers are experienced in the business domain and have good analytical skills"
    },
    "select_instruction": "Select TWO option",
    "points": 1,
    "correct": [
      "a",
      "e"
    ],
    "lo": "FL-4.4.2",
    "k_level": "K2",
    "syllabus_section": "4.4.2",
    "syllabus_section_title": "Exploratory Testing",
    "syllabus_chapter": "4",
    "syllabus_chapter_title": "Test Analysis and Design",
    "rationale_preamble": "Exploratory testing is useful when there are few or inadequate specifications or there is significant time pressure on the testing. Exploratory testing is also useful to complement other more formal test techniques. Exploratory testing will be more effective if the tester is experienced, has domain knowledge and has a high degree of essential skills, like analytical skills, curiosity and creativeness. Thus:",
    "rationale_by_option": {
      "a": "Is correct. Exploratory testing is useful when there are few or inadequate specifications or there is significant time pressure on the testing",
      "b": "Is not correct. Exploratory testing is not a black-box test technique",
      "c": "Is not correct. Exploratory testing is useful when the specifications are poorly written",
      "d": "Is not correct. Programming skills have nothing to do with exploratory testing in principle",
      "e": "Is correct. Exploratory testing will be more effective if the tester is experienced, has domain knowledge and has a high degree of essential skills, like analytical skills, curiosity and creativeness"
    },
    "diagram": null
  },
  {
    "id": "examB_27",
    "exam": "examB",
    "number": "27",
    "stem": "Which of the following BEST fits as an element of the checklist used in checklist-based testing?",
    "options": {
      "a": "“The developer made an error when implementing the code”",
      "b": "“The achieved statement coverage exceeds 85%”",
      "c": "“The program works correctly regarding functional and non-functional requirements”",
      "d": "“The error messages are written in language that the user can understand”"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "d"
    ],
    "lo": "FL-4.4.3",
    "k_level": "K2",
    "syllabus_section": "4.4.3",
    "syllabus_section_title": "Checklist-Based Testing",
    "syllabus_chapter": "4",
    "syllabus_chapter_title": "Test Analysis and Design",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. Checklists should contain test conditions to be verified. This is an example of an error, not a test condition; even if the tester was able to deduce some potential test conditions from the examples of errors, this error description is too general",
      "b": "Is not correct. Checklists should not contain items that are better suited as exit criteria. This is an example of an exit criterion",
      "c": "Is not correct. Checklists should not contain items that are too general. This is a very general item, which practically describes a test objective",
      "d": "Is correct. This is an example of a test condition that can be checked by a human"
    },
    "diagram": null
  },
  {
    "id": "examB_28",
    "exam": "examB",
    "number": "28",
    "stem": "Consider the following acceptance criteria for a user story written from the perspective of an online\nstore owner.\n\n                    Given that the user is logged in and on the homepage,\n                    When the user clicks on the \"Add Item\" button,\n                    Then the \"Create Item\" form should appear,\n                    And the user should be able to input a name and price for the new item.\nIn what format is this acceptance criteria written?",
    "options": {
      "a": "Rule-oriented",
      "b": "Scenario-oriented",
      "c": "Product-oriented",
      "d": "Process-oriented"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "b"
    ],
    "lo": "FL-4.5.2",
    "k_level": "K2",
    "syllabus_section": "4.5.2",
    "syllabus_section_title": "Acceptance Criteria",
    "syllabus_chapter": "4",
    "syllabus_chapter_title": "Test Analysis and Design",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. The rule-oriented format includes formats like bullet point verification lists or tabulated forms of input-output mappings, explicitly showing the rules to be followed. Given/When/Then is a scenario- oriented format because it describes a scenario to be verified",
      "b": "Is correct. This is a Given/When/Then format, which is scenario-oriented",
      "c": "Is not correct. There is no \"product-oriented\" format of acceptance criteria",
      "d": "Is not correct. There is no \"process-oriented\" format of acceptance criteria"
    },
    "diagram": null
  },
  {
    "id": "examB_29",
    "exam": "examB",
    "number": "29",
    "stem": "Your team analyzes the following user story in order to define the acceptance criteria:\n\n                    As a registered customer, I want to be able to view my previous orders on the\n                    company's website, so that I can keep track of my purchases.\n\nWhich of the following test cases will NOT be relevant for this user story?",
    "options": {
      "a": "Input: the customer logs into their account on the website and clicks the “see order history” button Expected result: the system shows a list of all the customer’s previous orders, including the date, order number, and total cost",
      "b": "Input: the customer clicks on an order from the order list Expected result: the system displays the individual items purchased, along with their prices and quantities",
      "c": "Input: the customer clicks “Sort ascending” button on the order history screen Expected result: the system shows the order history sorted by order number in ascending order",
      "d": "Input: an unregistered customer registers as a new customer with a valid e-mail address that does not already exist in the customer database Expected result: the system accepts the registration and creates the account"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "d"
    ],
    "lo": "FL-4.5.3",
    "k_level": "K3",
    "syllabus_section": "4.5.3",
    "syllabus_section_title": "Acceptance Test-driven Development (ATDD)",
    "syllabus_chapter": "4",
    "syllabus_chapter_title": "Test Analysis and Design",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. The test case is related to viewing previous orders in the order history",
      "b": "Is not correct. The test case is related to viewing previous orders",
      "c": "Is not correct. The test case is related to viewing previous orders in the order history",
      "d": "Is correct. The test case is related to the registration process, which is not discussed in the user story. The user story is about viewing previous orders"
    },
    "diagram": null
  },
  {
    "id": "examB_30",
    "exam": "examB",
    "number": "30",
    "stem": "Your team follows the process that uses the DevOps delivery pipeline. The first three steps of this\nprocess are:\n\n                  (1) Code development\n                  (2) Submit code into a version control system and merge it into the “test” branch\n                  (3) Perform component testing for the submitted code\nWhich of the following is BEST suited to be the entry criterion for step (2) of this pipeline?",
    "options": {
      "a": "Static analysis returns no high severity warnings for the submitted code",
      "b": "System version control reports no conflicts when merging code into the “test” branch",
      "c": "Component tests are compiled and ready to be executed",
      "d": "Statement coverage is at least 80%"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "a"
    ],
    "lo": "FL-5.1.3",
    "k_level": "K2",
    "syllabus_section": "5.1.3",
    "syllabus_section_title": "Entry Criteria and Exit Criteria",
    "syllabus_chapter": "5",
    "syllabus_chapter_title": "Managing the Test Activities",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is correct. This is something that can (and should) be checked before the code is submitted to version control",
      "b": "Is not correct. This is something that can be checked after step (2) is performed, because merge conflict reporting can be done after the code is submitted and merged",
      "c": "Is not correct. This fits better as the entry criterion for step (3)",
      "d": "Is not correct. This fits better as the exit criterion for step (3)"
    },
    "diagram": null
  },
  {
    "id": "examB_31",
    "exam": "examB",
    "number": "31",
    "stem": "You want to estimate the test effort for the new project using estimation based on ratios. You\ncalculate the test-to-development effort ratio using averaged data for both development effort and\ntest effort from four historical projects similar to the new one. The table shows this historical data.\n\n                                     Project             Development effort     Test effort\n                                                                ($)                ($)\n                                         P1                   800,000             40,000\n                                         P2                  1,200,000           130,000\n                                         P3                   600,000             70,000\n                                         P4                  1,000,000           120,000\n\nThe estimated development effort for the new project is $800,000. What is your estimate of the test\neffort in this project?",
    "options": {
      "a": "$40,000",
      "b": "$80,000",
      "c": "$81,250",
      "d": "$82,500"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "b"
    ],
    "lo": "FL-5.1.4",
    "k_level": "K3",
    "syllabus_section": "5.1.4",
    "syllabus_section_title": "Estimation Techniques",
    "syllabus_chapter": "5",
    "syllabus_chapter_title": "Managing the Test Activities",
    "rationale_preamble": "The average development effort is $900,000 and the average test effort is $90,000 (calculated from the four projects). The average test-to-development effort ratio is 1:10 ($90,000 : $900,000), which means that historically, on average, the test effort is 10% of the development effort. So if the development effort is estimated to be $800,000, the estimated test effort is estimated as: 10% * $800,000 = 0.1 * $800,000 = $80,000. Thus:",
    "rationale_by_option": {
      "a": "Is not correct",
      "b": "Is correct",
      "c": "Is not correct",
      "d": "Is not correct"
    },
    "diagram": null
  },
  {
    "id": "examB_32",
    "exam": "examB",
    "number": "32",
    "stem": "You are testing a web application that allows users to SEARCH for products, VIEW product details,\nADD products to a shopping cart, and place an ORDER.\nYou have prepared the following seven test cases, all of which you want to execute. The tests\nshould be executed in the best order, based on test priority.\n\n                                       Test                                  Priority (1 = higher priority)\n                     TC1               SEARCH for product A                  4\n                     TC2               SEARCH for product B                  4\n                     TC3               VIEW product A details                3\n                     TC4               VIEW product B details                2\n                     TC5               ADD product A to a shopping cart      3\n                     TC6               ADD product B to a shopping cart      1\n                     TC7               place an ORDER                        5\n\nYou also identified the following logical dependencies between test cases:\n           • SEARCH functionality must be tested before VIEW functionality can be tested.\n           • VIEW functionality must be tested before ADD functionality.\n           • ADD functionality must be tested before ORDER functionality.\nWhich test case should be executed as the fourth one?",
    "options": {
      "a": "TC3",
      "b": "TC1",
      "c": "TC7",
      "d": "TC2"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "b"
    ],
    "lo": "FL-5.1.5",
    "k_level": "K3",
    "syllabus_section": "5.1.5",
    "syllabus_section_title": "Test Case Prioritization",
    "syllabus_chapter": "5",
    "syllabus_chapter_title": "Managing the Test Activities",
    "rationale_preamble": "The logical dependencies mean that for each product you have to run SEARCH → VIEW → ADD before running ORDER. You can add more products (using the same flow), before you run ORDER. Based on this, TC1 or TC2 must be executed first, otherwise no progress can be made. The first priority should be given to VIEW and ADD product B, as its test cases (TC6, TC4) are assigned with higher priority. So, the first 3 tests to execute are TC2 -> TC4 -> TC6 Now we need to consider whether to run TC7 and then the entire flow for product A or run the TCs for product A first. If TC7 has lower priority than the other tests, they should be tested first. Therefore, the entire flow should be: TC2 -> TC4 -> TC6 -> TC1 -> TC3 -> TC5 -> TC7",
    "rationale_by_option": {
      "a": "Is not correct. TC1 must be executed before TC3",
      "b": "Is correct",
      "c": "Is not correct. As shown above, TC7 is the last to be executed.",
      "d": "Is not correct. Product B must be executed before product A"
    },
    "diagram": null
  },
  {
    "id": "examB_33",
    "exam": "examB",
    "number": "33",
    "stem": "According to the testing quadrants model, which of the following falls into quadrant Q1 (“technology\nfacing” and “support the team”)?",
    "options": {
      "a": "Usability testing",
      "b": "Functional testing",
      "c": "User acceptance testing",
      "d": "Component integration testing"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "d"
    ],
    "lo": "FL-5.1.7",
    "k_level": "K2",
    "syllabus_section": "5.1.7",
    "syllabus_section_title": "Testing Quadrants",
    "syllabus_chapter": "5",
    "syllabus_chapter_title": "Managing the Test Activities",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. Usability testing is business facing testing that critiques the product (Q3)",
      "b": "Is not correct. Functional testing is business facing testing (Q2)",
      "c": "Is not correct. User acceptance testing is business facing testing that critiques the product (Q3)",
      "d": "Is correct. Component integration testing is technology facing testing that supports the team (guides the development) (Q1)"
    },
    "diagram": null
  },
  {
    "id": "examB_34",
    "exam": "examB",
    "number": "34",
    "stem": "Given the following risks:\n           1. Ineffective loop implementation causes long system responses\n           2. Consumers change their preferences\n           3. Flooding of the server room\n           4. Patients above a certain age receive inaccurate reports\n\nAnd the following mitigation activities:\n           A. Risk acceptance\n           B. Testing for performance efficiency\n           C. Using boundary value analysis as the test technique\n           D. Risk transfer\n\nWhich of the following BEST matches the risks with the mitigation activities?",
    "options": {
      "a": "1C, 2D, 3A, 4B",
      "b": "1B, 2D, 3A, 4C",
      "c": "1B, 2A, 3D, 4C",
      "d": "1C, 2A, 3D, 4B"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "c"
    ],
    "lo": "FL-5.2.4",
    "k_level": "K2",
    "syllabus_section": "5.2.4",
    "syllabus_section_title": "Product Risk Control",
    "syllabus_chapter": "5",
    "syllabus_chapter_title": "Managing the Test Activities",
    "rationale_preamble": "Considering each of the listed risks and their mitigations: 1. Long system responses (1) can be tested in performance testing (B) 2. Changes in consumers’ preferences (2) are usually out of our control, so usually we accept this risk (A) 3. Flooding of the server room (3) can cause significant loss, so we should transfer the risk, e.g., by buying an insurance policy (D) 4. That patients above a certain age receive inaccurate reports (4) suggests a potential boundary problem, which can be effectively detected with test techniques like BVA (C) Thus:",
    "rationale_by_option": {
      "a": "Is not correct",
      "b": "Is not correct",
      "c": "Is correct. The correct combinations of risk and mitigation are: 1B, 2A, 3D and 4C",
      "d": "Is not correct"
    },
    "diagram": null
  },
  {
    "id": "examB_35",
    "exam": "examB",
    "number": "35",
    "stem": "Which of the following is a product quality metric?",
    "options": {
      "a": "Mean time to failure",
      "b": "Number of defects found",
      "c": "Requirements coverage",
      "d": "Defect detection percentage"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "a"
    ],
    "lo": "FL-5.3.1",
    "k_level": "K1",
    "syllabus_section": "5.3.1",
    "syllabus_section_title": "Metrics used in Testing",
    "syllabus_chapter": "5",
    "syllabus_chapter_title": "Managing the Test Activities",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is correct. Product quality metrics measure quality characteristics. Mean time to failure measures maturity, so it is a product quality metric",
      "b": "Is not correct. This is an example of a defect metric, not a product quality metric",
      "c": "Is not correct. This is an example of a coverage metric, not a product quality metric",
      "d": "Is not correct. This is an example of a defect metric, not a product quality metric"
    },
    "diagram": null
  },
  {
    "id": "examB_36",
    "exam": "examB",
    "number": "36",
    "stem": "You are a member of a test team located in North America, developing a product for a client\nlocated in Europe. The team is agile and follows the DevOps approach and uses a continuous\nintegration/continuous delivery pipeline.\n\nWhich of the following is the LEAST effective way to communicate test progress to the customer?",
    "options": {
      "a": "Face-to-face",
      "b": "Dashboards",
      "c": "Email",
      "d": "Video conferencing"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "a"
    ],
    "lo": "FL-5.3.3",
    "k_level": "K2",
    "syllabus_section": "5.3.3",
    "syllabus_section_title": "Communicating the Status of Testing",
    "syllabus_chapter": "5",
    "syllabus_chapter_title": "Managing the Test Activities",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is correct. The client is in a different location and time zone, so it may be difficult to communicate face-to-face",
      "b": "Is not correct. Dashboards are usually available to any user at any time, so the difference in time zones will not be as much of a hindrance to communication as verbal, face-to-face communication",
      "c": "Is not correct. Although the time difference between Europe and America is several hours, and this may cause some inconvenience, it's certainly not as great as with communicating face-to-face",
      "d": "Is not correct. Video conferencing tools are a convenient means of communication. Although communication between Europe and America during working hours usually requires one party to connect in the very early or very late hours, this is not as much of an inconvenience as verbal, face-to-face communication"
    },
    "diagram": null
  },
  {
    "id": "examB_37",
    "exam": "examB",
    "number": "37",
    "stem": "Which of the following BEST describes an example of how configuration management (CM)\nsupports testing?",
    "options": {
      "a": "Having the version number of the environment, the CM tool can retrieve the version numbers of libraries, stubs and drivers used in that environment",
      "b": "Having a record of the values of the inputs, the CM tool can execute the test cases for these configurations and calculate the coverage",
      "c": "Having data about the date of purchase of a software license, the CM tool automatically generates information about the fact that the product license is coming to an end",
      "d": "Having the version number of the test case, the CM tool can automatically generate test data for this test case"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "a"
    ],
    "lo": "FL-5.4.1",
    "k_level": "K2",
    "syllabus_section": "5.4.1",
    "syllabus_section_title": "Configuration Management",
    "syllabus_chapter": "5",
    "syllabus_chapter_title": "Managing the Test Activities",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is correct. For a complex configuration item (e.g., a test environment), configuration management (CM) records the items it consists of, their relationships, and versions",
      "b": "Is not correct. CM tools do not execute test cases and do not calculate coverage",
      "c": "Is not correct. A CM tool is not a licensed management tool",
      "d": "Is not correct. CM tools do not generate test data"
    },
    "diagram": null
  },
  {
    "id": "examB_38",
    "exam": "examB",
    "number": "38",
    "stem": "You are testing a sort function that gets a set of numbers as input and returns the same set of\nnumbers sorted in ascending order. The log from the test execution looks as follows.\n\nEnvironment configuration: sort function build 2.002.2182, test case set: TCS-3, # of TCs: 5\nTest run ID: 736\nStart 12:43:21.003\n12:43:21.003 Execution of TC1. Input: 3.              Output: 3.            Result: passed\n12:43:21.003 Execution of TC2. Input: 3 11 6 5.       Output: 3 5 6 11.     Result: passed\n12:43:21.004 Execution of TC3. Input: 8 7 3 7 1.      Output: 1 3 7 8.      Result: failed\n12:43:21.005 Execution of TC4. Input: -2 -2 -2 -3 -3. Output: -3 -2.        Result: failed\n12:43:21.005 Execution of TC5. Input: 0 -2 0 3 4 4. Output: -2 0 3 4.       Result: failed\nEnd 12:43:21.005\nTotal time of test cycle: 0:00:00.002\n\nWhich of the following provides the BEST description of the failure that can be used in a defect\nreport?",
    "options": {
      "a": "The system fails to sort several sets of numbers. Reference: TC3, TC4, TC5.",
      "b": "The system seems to disregard duplicates while sorting. Reference: TC3, TC4, TC5.",
      "c": "The system fails to sort negative numbers. Reference: TC4, TC5.",
      "d": "TC3, TC4 and TC5 have defects (duplicate input data) and should be corrected."
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "b"
    ],
    "lo": "FL-5.5.1",
    "k_level": "K3",
    "syllabus_section": "5.5.1",
    "syllabus_section_title": "Defect Management",
    "syllabus_chapter": "5",
    "syllabus_chapter_title": "Managing the Test Activities",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. While the sentence is true, it does not provide much value for the developer",
      "b": "Is correct. From the test results it seems that the system ignores duplicates and sorts the list disregarding the repetitions. This is probably the cause of failures in TC3, TC4, TC5. Such information may help the developer to find the defect and fix it more efficiently",
      "c": "Is not correct. The system does not fail in sorting negative numbers. The problem is rather in disregarding duplicates",
      "d": "Is not correct. The test cases TC3, TC4 and TC5 fail, but we aren’t aware that the test cases have any defects"
    },
    "diagram": null
  },
  {
    "id": "examB_39",
    "exam": "examB",
    "number": "39",
    "stem": "Given the following descriptions:\n           1. Support workflow tracking\n           2. Facilitate communication\n           3. Virtual machines\n           4. Support reviews\n\nAnd the following test tool categories:\n           A. Static testing tools\n           B. Tools supporting scalability and deployment standardization\n           C. DevOps tools\n           D. Collaboration tools\nWhich of the following BEST matches the descriptions and categories?",
    "options": {
      "a": "1A, 2B, 3C, 4D",
      "b": "1B, 2D, 3C, 4A",
      "c": "1C, 2D, 3B, 4A",
      "d": "1D, 2C, 3A, 4B"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "c"
    ],
    "lo": "FL-6.1.1",
    "k_level": "K2",
    "syllabus_section": "6.1.1",
    "syllabus_section_title": "Tool Support for Testing",
    "syllabus_chapter": "6",
    "syllabus_chapter_title": "Test Tools",
    "rationale_preamble": "Considering each of the listed tool categories and their descriptions: A. Static testing tools – support the tester in performing reviews and static analysis (4) B. Tools supporting scalability and deployment standardization – For example, virtual machines, containerization tools (3) C. DevOps tools – support the DevOps delivery pipeline, workflow tracking, automated build process(es), continuous integration/continuous delivery (CI/CD) (1) D. Collaboration tools – facilitate communication (2) Thus:",
    "rationale_by_option": {
      "a": "Is not correct",
      "b": "Is not correct",
      "c": "Is correct. The correct match is: 1C, 2D, 3B, 4A",
      "d": "Is not correct"
    },
    "diagram": null
  },
  {
    "id": "examB_40",
    "exam": "examB",
    "number": "40",
    "stem": "Which of the following is MOST likely to be a benefit of test automation?",
    "options": {
      "a": "It provides coverage measures that are too complicated for humans to derive",
      "b": "It shares responsibility for the testing with the tool vendor",
      "c": "It removes the need for critical thinking when analyzing test results",
      "d": "It generates test cases from an analysis of the program code"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "a"
    ],
    "lo": "FL-6.2.1",
    "k_level": "K1",
    "syllabus_section": "6.2.1",
    "syllabus_section_title": "Benefits and Risks of Test Automation",
    "syllabus_chapter": "6",
    "syllabus_chapter_title": "Test Tools",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is correct. Test automation can provide measures that are too complicated for humans to derive, such as white-box testing coverage measures for all but the most trivial code",
      "b": "Is not correct. By using test tools, the responsibility for the testing is NOT shared with the tool vendor as the vendor is not involved in the testing, and it is the tester’s responsibility. The only possible responsibility that could be assigned to the tool vendor is if the tool fails to work as expected and provides incorrect test results",
      "c": "Is not correct. Testers still need to apply critical thinking when analyzing anomalies in the test results to determine their likely cause",
      "d": "Is not correct. Neither testers nor tools can generate test cases simply from an analysis of the program code as the code is the implementation and provides no information on the expected results, which will need to come from another part of the test basis, such as the design specification"
    },
    "diagram": null
  },
  {
    "id": "examC_1",
    "exam": "examC",
    "number": "1",
    "stem": "Which of the following is a typical test objective?",
    "options": {
      "a": "Validating that documented requirements are met",
      "b": "Causing failures and identifying defects",
      "c": "Initiating errors and identifying root causes",
      "d": "Verifying the test object meets user expectations"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "b"
    ],
    "lo": "FL-1.1.1",
    "k_level": "K1",
    "syllabus_section": "1.1.1",
    "syllabus_section_title": "Test Objectives",
    "syllabus_chapter": "1",
    "syllabus_chapter_title": "Fundamentals of Testing",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. Validating that documented requirements are met is incorrect as validation is concerned with meeting user requirements and expectations, while verification is concerned with meeting specified requirements, so this would be correct if we replaced ‘validating’ with ‘verifying’",
      "b": "Is correct. Causing failures and identifying defects is probably the most common objective of dynamic testing",
      "c": "Is not correct. Initiating errors and identifying root causes is incorrect because testers do not initiate errors, they try to cause failures. Errors are typically made by developers (and cannot really be initiated) and result in defects, which testers attempt to identify either directly through static testing or indirectly through failures with dynamic testing. Identifying root causes is useful but is part of debugging, which is a separate activity from testing",
      "d": "Is not correct. Verifying the test object meets user expectations is incorrect as verification is concerned with checking specified (documented) requirements are met, while validation is concerned with meeting user requirements and expectations, so this would be correct if we replaced ‘verifying’ with ‘validating’"
    },
    "diagram": null
  },
  {
    "id": "examC_2",
    "exam": "examC",
    "number": "2",
    "stem": "Which of the following statements BEST describes the difference between testing and debugging?",
    "options": {
      "a": "Testing causes failures while debugging fixes failures",
      "b": "Testing is a negative activity while debugging is a positive activity",
      "c": "Testing determines that defects exist while debugging removes defects",
      "d": "Testing finds the cause of defects while debugging fixes the cause of defects"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "c"
    ],
    "lo": "FL-1.1.2",
    "k_level": "K2",
    "syllabus_section": "1.1.2",
    "syllabus_section_title": "Testing and Debugging",
    "syllabus_chapter": "1",
    "syllabus_chapter_title": "Fundamentals of Testing",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. Dynamic testing does cause failures (from which defects can then be located and fixed). However, debugging is concerned with locating defects and fixing these defects. Therefore, debugging does not fix failures",
      "b": "Is not correct. Both testing and debugging contribute to improving the quality of the test object, so both should be considered positively. Debugging is generally considered to be a positive activity as it is fixing something. Dynamic testing does involve intentionally causing the test object to fail, which is why some people consider it a negative activity, but that is a very narrow view (and not one typically held by testers). Both positive and negative test cases are possible. Positive test cases check that the test object correctly performs what it is supposed to do, while negative testing checks that the test object does not do what it is not supposed to do",
      "c": "Is correct. Testing determines that defects exist either directly through observation of the defect in reviews (or by a tool in static analysis), or indirectly by causing a failure in dynamic testing. Debugging is a separate activity from testing (normally performed by developers) and is concerned with locating defects (only for dynamic testing) and fixing the defects",
      "d": "Is not correct. The causes of defects are typically human errors. Testing finds defects either directly through static testing, or indirectly by causing failures in dynamic testing, and debugging fixes defects. So, testing does not find the cause of defects and debugging does not fix the causes of defects"
    },
    "diagram": null
  },
  {
    "id": "examC_3",
    "exam": "examC",
    "number": "3",
    "stem": "The ‘absence-of-defects fallacy’ is one of the principles of testing. Which of the following is an\nexample of addressing this principle in practice?",
    "options": {
      "a": "Explaining that it is not possible for testing to show the absence of defects",
      "b": "Supporting the end users to perform acceptance testing",
      "c": "Ensuring that no implementation defects remain in the delivered system",
      "d": "Modifying tests that cause no failures to ensure few defects remain"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "b"
    ],
    "lo": "FL-1.3.1",
    "k_level": "K2",
    "syllabus_section": "1.3.1",
    "syllabus_section_title": "Testing Principles",
    "syllabus_chapter": "1",
    "syllabus_chapter_title": "Fundamentals of Testing",
    "rationale_preamble": "The ‘absence-of-defects fallacy’ is concerned with the idea that ensuring correctness in accordance with the requirements (i.e., verifying the absence of implementation defects) does not guarantee user satisfaction with the system. To address this it is also necessary to validate that the system meets users' needs and expectations, fulfills business objectives, and outperforms competing systems.",
    "rationale_by_option": {
      "a": "Is not correct. The ‘testing shows the presence, not the absence of defects’ principle explains that while testing can detect the existence of defects in the test object, it is not possible to demonstrate that there are no defects and, therefore, guarantee its correctness. Therefore, explaining that it is not possible for testing to show the absence of defects would partially address this principle, not the ‘absence-of- defects’ fallacy",
      "b": "Is correct. By supporting the end user to perform acceptance testing it should be possible to validate that the system meets users' needs and expectations",
      "c": "Is not correct. It is not possible to ensure that no implementation defects remain in the delivered system as the ‘testing shows the presence, not the absence of defects’ principle explains that while testing can detect the existence of defects in the test object, it is not possible to demonstrate that there are no defects and, therefore, guarantee its correctness",
      "d": "Is not correct. Modifying tests that cause no failures to ensure few defects remain is one way to address the ‘tests wear out’ principle. This principle is concerned with the idea that repeating identical tests on unaltered code is unlikely to uncover novel defects and therefore, modifying tests may be essential. This will not validate that the system meets users' needs and expectations"
    },
    "diagram": null
  },
  {
    "id": "examC_4",
    "exam": "examC",
    "number": "4",
    "stem": "Which of the following test activities are MOST likely to involve the application of boundary value\nanalysis and equivalence partitioning?",
    "options": {
      "a": "Test implementation",
      "b": "Test design",
      "c": "Test execution",
      "d": "Test monitoring",
      "e": "Test analysis"
    },
    "select_instruction": "Select TWO option",
    "points": 1,
    "correct": [
      "b",
      "e"
    ],
    "lo": "FL-1.4.1",
    "k_level": "K2",
    "syllabus_section": "1.4.1",
    "syllabus_section_title": "Test Activities and Tasks",
    "syllabus_chapter": "1",
    "syllabus_chapter_title": "Fundamentals of Testing",
    "rationale_preamble": "Given the following description of test analysis: To identify the features that require testing, the test basis is analyzed and defined as test conditions, which are then prioritized along with related risks. The systematic identification of test conditions as coverage items often involves using test techniques both during test analysis and as part of the test design activity. From the above description, it can be seen that test techniques are often used in the test analysis and test design activities. Boundary value analysis and equivalence partitioning are test techniques.",
    "rationale_by_option": {
      "a": "Is not correct. Test implementation is not likely to involve the use of test techniques as it is mostly concerned with assembling test cases into test procedures, while test techniques create test cases",
      "b": "Is correct. Test design is likely to involve the use of test techniques to create test cases from test conditions and coverage items",
      "c": "Is not correct. Test execution is not likely to involve the use of test techniques as it is mostly concerned with executing test procedures (and so test cases), while test techniques create test cases",
      "d": "Is not correct. Test monitoring is not likely to involve the use of test techniques. Test monitoring is mostly concerned with ongoing checks to ensure the plan is being followed, while test techniques create test cases",
      "e": "Is correct. Test analysis is likely to involve the use of test techniques to identify test conditions"
    },
    "diagram": null
  },
  {
    "id": "examC_5",
    "exam": "examC",
    "number": "5",
    "stem": "Given the following testware:\n           1. Coverage items\n           2. Change requests\n           3. Test execution schedule\n           4. Prioritized test conditions\n\nAnd the following test activities\n           A. Test analysis\n           B. Test design\n           C. Test implementation\n           D. Test completion\n\nWhich of the following BEST shows the testware produced by the activities?",
    "options": {
      "a": "1B, 2D, 3C, 4A",
      "b": "1B, 2D, 3A, 4C",
      "c": "1D, 2C, 3A, 4B",
      "d": "1D, 2C, 3B, 4A"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "a"
    ],
    "lo": "FL-1.4.3",
    "k_level": "K2",
    "syllabus_section": "1.4.3",
    "syllabus_section_title": "Testware",
    "syllabus_chapter": "1",
    "syllabus_chapter_title": "Fundamentals of Testing",
    "rationale_preamble": "Considering each of the listed test activities and their output testware: A. Test analysis - prioritized test conditions (4) (e.g., acceptance criteria), and defect reports for defects identified in the test basis B. Test design - prioritized test cases, test charters, coverage items (1), test data requirements, and test environment requirements C. Test implementation - test procedures, automated test scripts, test suites, test data, test execution schedule (3), and test environment elements such as stubs, drivers, simulators, and service virtualizations D. Test completion - test completion report, documented lessons learned, action items for improvement, and change requests (2) (as product backlog items) Thus:",
    "rationale_by_option": {
      "a": "Is correct. The correct match is: 1B, 2D, 3C, 4A",
      "b": "Is not correct",
      "c": "Is not correct",
      "d": "Is not correct"
    },
    "diagram": null
  },
  {
    "id": "examC_6",
    "exam": "examC",
    "number": "6",
    "stem": "Which of the following statements about the different testing roles is MOST likely to be\nCORRECT?",
    "options": {
      "a": "In Agile software development, the test management role is the primary responsibility of the team, while the testing role is primarily the responsibility of a single individual from outside the team",
      "b": "The testing role is primarily responsible for test monitoring and test control, while the test management role is primarily responsible for test planning and test completion",
      "c": "In Agile software development, test management activities that span multiple teams are handled by a test manager outside the team, while some test management tasks are handled by the team itself",
      "d": "The test management role is primarily responsible for test analysis and test design, while the testing role is primarily responsible for test implementation and test execution"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "c"
    ],
    "lo": "FL-1.4.5",
    "k_level": "K2",
    "syllabus_section": "1.4.5",
    "syllabus_section_title": "Roles in Testing",
    "syllabus_chapter": "1",
    "syllabus_chapter_title": "Fundamentals of Testing",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. Although it is correct to say that in Agile software development, some of the test management tasks may be handled by the Agile team itself, the testing role is not primarily the responsibility of a single individual from outside the team. Instead the testing is more likely to be performed by various team members following the whole- team approach",
      "b": "Is not correct. The test management role primarily involves activities related to test planning, test monitoring and test control, and test completion. So, although this statement is partially correct, it is wrong to say that the testing role is primarily responsible for test monitoring and test control",
      "c": "Is correct. In Agile software development, some of the test management tasks may be handled by the Agile team itself. However, for test activities that span multiple teams within an organization, test managers outside of the development team may perform these tasks",
      "d": "Is not correct. The test management role primarily involves activities related to test planning, test monitoring and test control, and test completion, while the testing role is primarily responsible for the technical and engineering aspects of testing, such as test analysis, test design, test implementation, and test execution. Thus the test management role is not normally responsible for test analysis and test design, although it is correct to say that the testing role is primarily responsible for test implementation and test execution"
    },
    "diagram": null
  },
  {
    "id": "examC_7",
    "exam": "examC",
    "number": "7",
    "stem": "Which of the following is an advantage of the whole-team approach?",
    "options": {
      "a": "Teams with no testers",
      "b": "Improved team dynamics",
      "c": "Specialist team members",
      "d": "Larger team sizes"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "b"
    ],
    "lo": "FL-1.5.2",
    "k_level": "K1",
    "syllabus_section": "1.5.2",
    "syllabus_section_title": "Whole Team Approach",
    "syllabus_chapter": "1",
    "syllabus_chapter_title": "Fundamentals of Testing",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. In the whole-team approach, testers play a vital role by sharing their testing expertise with the team and guiding product development. They collaborate with other team members to achieve the desired quality levels and work with business representatives to create acceptance tests. Testers also partner with developers to determine the optimal test strategy and test automation approaches",
      "b": "Is correct. By leveraging the diverse skill sets of each team member most effectively, the whole-team approach fosters superior team dynamics, promotes robust communication and collaboration, and generates a synergistic effect that benefits the entire project",
      "c": "Is not correct. The whole-team approach allows any team member with the requisite skills and knowledge to undertake any task, thus specialist team members are not an advantage of this approach",
      "d": "Is not correct. There is no specific guidance on the optimum size of teams using the whole-team approach, and there is no suggestion that larger teams are better"
    },
    "diagram": null
  },
  {
    "id": "examC_8",
    "exam": "examC",
    "number": "8",
    "stem": "Which of the following statements about the independence of testing is CORRECT?",
    "options": {
      "a": "Independent testers will find defects due to their different technical perspective from developers, but their independence may lead to an adversarial relationship with the developers",
      "b": "Developers’ familiarity with their own code means they only find a few defects in it, however their shared software background with testers means these defects would also be found by the testers",
      "c": "Independent testing requires testers who are outside the developer’s team and ideally from outside the organization, however these testers find it difficult to understand the application domain",
      "d": "Testers from outside the developer’s team are more independent than testers from within the team, but the testers from within the team are more likely to be blamed for delays in product release"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "a"
    ],
    "lo": "FL-1.5.3",
    "k_level": "K2",
    "syllabus_section": "1.5.3",
    "syllabus_section_title": "Independence of Testing",
    "syllabus_chapter": "1",
    "syllabus_chapter_title": "Fundamentals of Testing",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is correct. The primary benefit of independence of testing is that testers are more likely to identify different types of failures and defects compared to developers, due to their varied backgrounds, technical viewpoints, and potential biases, including cognitive bias. However, the main disadvantage of independence of testing is that testers may become isolated from the development team, leading to communication problems, a lack of collaboration, and potentially an adversarial relationship, with testers being blamed for delays and bottlenecks in the release process",
      "b": "Is not correct. A developer’s familiarity with the code does not mean that they rarely find defects in it, instead this familiarity means they can efficiently find many defects in their own code. And, rather than developers and testers having a shared background, developers having a different background to testers is normally cited as the reason that testers and developers find different kinds of defects",
      "c": "Is not correct. Testing can be performed at different levels of independence, ranging from no independence for the author to very high independence for testers from outside the organization. In most projects, multiple levels of independence are utilized, with developers performing component testing and component integration testing, the test team performing system testing and system integration testing, and business representatives performing acceptance testing. So, testers can be in the developer’s team and do not need to come from outside the organization. Knowledge of the application domain will change from case to case and is not dependent on the level of independence",
      "d": "Is not correct. Testing can be performed at different levels of independence, ranging from no independence for the author to very high independence for testers from outside the organization, with testers from outside the developer’s team generally more independent than testers from within the team. However, there is more reason to believe that testers from outside the team are likely to be more isolated from the developers and so are more likely to be blamed for delays in product release"
    },
    "diagram": null
  },
  {
    "id": "examC_9",
    "exam": "examC",
    "number": "9",
    "stem": "Which of the following is a good testing practice that applies to all software development lifecycles?",
    "options": {
      "a": "For each test level, there is a corresponding development level",
      "b": "For each test objective, there is a corresponding development objective",
      "c": "For every test activity, there is a corresponding user activity",
      "d": "For every development activity, there is a corresponding test activity"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "d"
    ],
    "lo": "FL-2.1.2",
    "k_level": "K1",
    "syllabus_section": "2.1.2",
    "syllabus_section_title": "Software Development Lifecycle and Good Testing Practices",
    "syllabus_chapter": "2",
    "syllabus_chapter_title": "Testing Throughout the Software Development Lifecycle",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. Quality control applies to all development activities, meaning that every software development activity has a corresponding test activity. However, here we are attempting to equate test levels with development levels, and, although we know what is meant by ‘test levels’, there is no common understanding of the term ‘ development level’",
      "b": "Is not correct. Every software development activity has a corresponding test activity; however test objectives are quite different. For instance, there might be a test objective of ensuring that a test object adheres to a contractual requirement that a certain type of testing must be performed before delivery. In this case there is no reason for there to be a corresponding development objective",
      "c": "Is not correct. Quality control applies to all development activities, meaning that every software development activity has a corresponding test activity. However, the same symmetry does not apply to testing and user activities. For instance, for some systems it is difficult to even identify the end users. Also, some test activities are focused on developers (e.g., testing for ease of maintainability), which has no user aspect to it",
      "d": "Is correct. Quality control applies to all development activities, meaning that every software development activity has a corresponding test activity"
    },
    "diagram": null
  },
  {
    "id": "examC_10",
    "exam": "examC",
    "number": "10",
    "stem": "Which of the following is an example of a test-first approach to development?",
    "options": {
      "a": "Component Test-Driven Development",
      "b": "Integration Test-Driven Development",
      "c": "System Test-Driven Development",
      "d": "Acceptance Test-Driven Development"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "d"
    ],
    "lo": "FL-2.1.3",
    "k_level": "K1",
    "syllabus_section": "2.1.3",
    "syllabus_section_title": "Testing as a Driver for Software Development",
    "syllabus_chapter": "2",
    "syllabus_chapter_title": "Testing Throughout the Software Development Lifecycle",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. Component Test-Driven Development is not a correct example of a test-first approach to development",
      "b": "Is not correct. Integration Test-Driven Development is not a correct example of a test-first approach to development",
      "c": "Is not correct. System Test-Driven Development is not a correct example of a test-first approach to development",
      "d": "Is correct. Acceptance Test-Driven Development (ATDD) is a well- known example of a test-first approach to development"
    },
    "diagram": null
  },
  {
    "id": "examC_11",
    "exam": "examC",
    "number": "11",
    "stem": "Which of the following provides the BEST description of shift-left?",
    "options": {
      "a": "When agreed by the developers, manual activities on the left-hand side of the test process are automated to support the principle of ‘early testing saves time and money’",
      "b": "Where cost-effective, test activities are moved earlier in the software development lifecycle (SDLC) to reduce the total cost of quality by reducing the number of defects found later in the SDLC",
      "c": "When they have spare time available, testers are required to automate tests for regression testing, starting with component tests and component integration tests",
      "d": "When available, testers are trained to perform tasks early in the SDLC to allow more test activities to be automated later in the SDLC"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "b"
    ],
    "lo": "FL-2.1.5",
    "k_level": "K2",
    "syllabus_section": "2.1.5",
    "syllabus_section_title": "Shift Left",
    "syllabus_chapter": "2",
    "syllabus_chapter_title": "Testing Throughout the Software Development Lifecycle",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. Practices involved in shift left are aimed at implementing more test activities in the early phases of the software development life cycle (SDLC), portraying the SDLC as moving from left to right. There is no such thing as the left-hand side of the test process",
      "b": "Is correct. Shift left emphasizes the importance of starting testing earlier in the SDLC. Implementing shift left testing necessitates additional training, and increased effort and costs during the early phases of the SDLC, nevertheless, overall savings should be higher",
      "c": "Is not correct. Although automated component tests and component integration tests for regression testing are generally valuable, the creation of these tests is normally the responsibility of the developers, and if a continuous integration/continuous delivery (CI/CD) approach is followed, then these tests will have been submitted with the code. In some situations the tester may automate tests for regression testing, and sometimes even for component tests and component integration tests, however this is not part of shift left which moves testing earlier in the SDLC",
      "d": "Is not correct. Training testers to perform tasks early in the SDLC would support a shift left approach by emphasizing the importance of starting testing earlier in the SDLC. However, automating more test activities to be performed later in the SDLC is not part of shift-left"
    },
    "diagram": null
  },
  {
    "id": "examC_12",
    "exam": "examC",
    "number": "12",
    "stem": "Which of the following is LEAST likely to occur as a result of a retrospective?",
    "options": {
      "a": "The quality of future test objects improves by identifying improvements in development practices",
      "b": "Test efficiency improves by speeding up the configuration of test environments through automation",
      "c": "End users’ understanding of the development and test processes is improved",
      "d": "Automated test scripts are enhanced through feedback from developers"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "c"
    ],
    "lo": "FL-2.1.6",
    "k_level": "K2",
    "syllabus_section": "2.1.6",
    "syllabus_section_title": "Retrospectives and Process Improvement",
    "syllabus_chapter": "2",
    "syllabus_chapter_title": "Testing Throughout the Software Development Lifecycle",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. One of the purposes of retrospectives is to identify potential process improvements, which, if put into practice, should result in the quality of future outputs of the development process (test objects) being higher. So, this is likely to occur as a result of a retrospective",
      "b": "Is not correct. A benefit of retrospectives for testing includes increased test efficiency through process improvements. So, this is likely to occur as a result of a retrospective",
      "c": "Is correct. Participants at retrospectives typically include testers, developers, architects, product owners, and business analysts, but end users are rarely invited or attend these meetings – and they are also unlikely to receive any reports from these meetings. So, it is very unlikely that they will learn and understand more about the development and test processes through retrospectives",
      "d": "Is not correct. A benefit of retrospectives for testing includes improved quality of testware (including automated test scripts) through joint reviews with developers. So, this is likely to occur as a result of a retrospective"
    },
    "diagram": null
  },
  {
    "id": "examC_13",
    "exam": "examC",
    "number": "13",
    "stem": "Which of the following test levels is MOST likely being performed if the testing is focused on\nvalidation and is not being performed by testers?",
    "options": {
      "a": "Component testing",
      "b": "Component integration testing",
      "c": "System integration testing",
      "d": "Acceptance testing"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "d"
    ],
    "lo": "FL-2.2.1",
    "k_level": "K2",
    "syllabus_section": "2.2.1",
    "syllabus_section_title": "Test Levels",
    "syllabus_chapter": "2",
    "syllabus_chapter_title": "Testing Throughout the Software Development Lifecycle",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. Component testing (also called unit testing) involves testing individual components in isolation and is mostly verification against a specification, rather than validation against user needs. However, this testing is not normally performed by testers, as developers usually carry out this testing in their development environment",
      "b": "Is not correct. Component integration testing involves testing the interfaces and interactions between components and is mostly verification against a specification, rather than validation against user needs. However, this testing is not normally performed by testers, as developers usually carry out this testing",
      "c": "Is not correct. System integration testing examines the interfaces with other systems and external services and is mostly verification against a specification, rather than validation against user needs. This type of testing is also most often performed by testers",
      "d": "Is correct. Acceptance testing focuses on validating that the system meets the user's business needs and is ready for deployment. Ideally, this testing is carried out by the end users"
    },
    "diagram": null
  },
  {
    "id": "examC_14",
    "exam": "examC",
    "number": "14",
    "stem": "The navigation system software has been updated due to it suggesting routes that break traffic\nlaws, such as driving the wrong way down one-way streets. Which of the following BEST describes\nthe testing that will be performed?",
    "options": {
      "a": "Only confirmation testing",
      "b": "Confirmation testing then regression testing",
      "c": "Only regression testing",
      "d": "Regression testing then confirmation testing"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "b"
    ],
    "lo": "FL-2.2.3",
    "k_level": "K2",
    "syllabus_section": "2.2.3",
    "syllabus_section_title": "Confirmation Testing and Regression Testing",
    "syllabus_chapter": "2",
    "syllabus_chapter_title": "Testing Throughout the Software Development Lifecycle",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. Confirmation testing to check that the updates have resulted in a correct implementation is necessary, however, it would then be sensible to perform regression testing to ensure that no defects have been introduced or uncovered in unchanged areas of the system",
      "b": "Is correct. Confirmation testing will check that the updates have resulted in a correct implementation, and then regression testing will be used to ensure that no defects have been introduced or uncovered in unchanged areas of the system",
      "c": "Is not correct. Regression testing should be used to ensure that no defects have been introduced or uncovered in unchanged areas of the system when the update was made, however it is also necessary to perform confirmation testing that will check that the updates have resulted in a correct implementation",
      "d": "Is not correct. Confirmation testing will check that the updates have resulted in a correct implementation, and regression testing will be used to ensure that no defects have been introduced or uncovered in unchanged areas of the system. However, when performed (i.e., when an update needs to be tested), confirmation testing precedes regression testing"
    },
    "diagram": null
  },
  {
    "id": "examC_15",
    "exam": "examC",
    "number": "15",
    "stem": "Given the following example defects:\n          i.   Two different parts of the design specification disagree due to the complexity of the\n               design\n         ii.   A response time is too long and so makes users lose patience\n        iii.   A path in the code cannot be reached during execution\n        iv.    A variable is declared but never subsequently used in the program\n         v.    The amount of memory needed by the program to generate a report is too high\n\nWhich of the following BEST identifies example defects that could be found by static testing (rather\nthan dynamic testing)?",
    "options": {
      "a": "ii, v",
      "b": "iii, v",
      "c": "i, ii, iv",
      "d": "i, iii, iv"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "d"
    ],
    "lo": "FL-3.1.3",
    "k_level": "K2",
    "syllabus_section": "3.1.3",
    "syllabus_section_title": "Differences between Static Testing and Dynamic Testing",
    "syllabus_chapter": "3",
    "syllabus_chapter_title": "Static Testing",
    "rationale_preamble": "Considering each of the listed example defects: i. Two different parts of the design specification disagree due to the complexity of the design – this is an example of a specification defect, which includes inconsistencies, ambiguities, contradictions, omissions, inaccuracies, and duplications, which can most easily be found by static testing ii. A response time is too long and so makes users lose patience – this is an example of a response time defect, which can only be detected in practice by executing the program and measuring the response time, which can most easily be found by dynamic testing iii. A path in the code cannot be reached during execution - this is an example of a coding defect, which includes variables with undefined values, undeclared variables, duplicated or unreachable code, and excessive code complexity, which can most easily be found by static testing iv. A variable is declared but never subsequently used in the program - this is an example of a coding defect, which includes variables with undefined values, undeclared variables, duplicated or unreachable code, and excessive code complexity, which can most easily be found by static testing v. The amount of memory needed by the program to generate a report is too high – this is an example of a performance defect, which can only be detected in practice by executing the program and measuring the memory used, which can most easily be found by dynamic testing Thus:",
    "rationale_by_option": {
      "a": "Is not correct",
      "b": "Is not correct",
      "c": "Is not correct",
      "d": "Is correct. The correct match for static testing is i, iii, and iv"
    },
    "diagram": null
  },
  {
    "id": "examC_16",
    "exam": "examC",
    "number": "16",
    "stem": "Which of the following is a benefit of early and frequent stakeholder feedback?",
    "options": {
      "a": "Changes to requirements are understood and implemented earlier",
      "b": "It ensures business stakeholders understand user requirements",
      "c": "It allows product owners to change their requirements as often as they want",
      "d": "End users are told which requirements will not be implemented prior to release"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "a"
    ],
    "lo": "FL-3.2.1",
    "k_level": "K1",
    "syllabus_section": "3.2.1",
    "syllabus_section_title": "Benefits of Early and Frequent Stakeholder Feedback",
    "syllabus_chapter": "3",
    "syllabus_chapter_title": "Static Testing",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is correct. Obtaining feedback from stakeholders early and often in the software development process can be highly beneficial. It facilitates early communication of potential quality issues, can prevent misunderstandings about requirements, and ensures that any changes in stakeholder requirements are understood and implemented sooner",
      "b": "Is not correct. The feedback is from stakeholders, so providing feedback is unlikely to improve their understanding of their own user requirements",
      "c": "Is not correct. Obtaining feedback from stakeholders early and often in the software development process can be highly beneficial. It facilitates early communication of potential quality issues, can prevent misunderstandings about requirements, and ensures that any changes in stakeholder requirements are understood and implemented sooner. However, because changes in requirements can be understood and implemented sooner, it does not mean that unlimited changes to requirements are encouraged",
      "d": "Is not correct. The feedback is from stakeholders and does not cover communication to them. Communications with end users could include telling them about which requirements will not be implemented prior to release, but ideally this should not happen at all"
    },
    "diagram": null
  },
  {
    "id": "examC_17",
    "exam": "examC",
    "number": "17",
    "stem": "Given the following review types:\n           1. Technical review\n           2. Informal review\n           3. Inspection\n           4. Walkthrough\n\nAnd the following descriptions:\n           A. Includes objectives such as gaining consensus, generating new ideas, and\n               motivating authors to improve\n           B. Includes objectives such as educating reviewers, gaining consensus, generating\n               new ideas and detecting potential defects\n           C. The main objective is detecting potential defects and it requires metrics collection to\n               support process improvement\n           D. The main objective is detecting potential defects and it generates no formal\n               documented output\n\nWhich of the following BEST matches the review types and the descriptions?",
    "options": {
      "a": "1A, 2B, 3C, 4D",
      "b": "1A, 2D, 3C, 4B",
      "c": "1B, 2C, 3D, 4A",
      "d": "1C, 2D, 3A, 4B"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "b"
    ],
    "lo": "FL-3.2.4",
    "k_level": "K2",
    "syllabus_section": "3.2.4",
    "syllabus_section_title": "Review Types",
    "syllabus_chapter": "3",
    "syllabus_chapter_title": "Static Testing",
    "rationale_preamble": "Considering each of the listed review types: 1. Technical review - This type of review is performed by technically qualified reviewers and led by a moderator. The objectives are to gain consensus and make decisions on technical problems while also evaluating quality and building confidence in the work product, generating new ideas, motivating and enabling authors to improve, and detecting anomalies 2. Informal review - The main objective is to detect anomalies. The process is not defined and does not require formal documented output 3. Inspection - This is the most formal review type, and it follows the complete generic review process. The primary objective is to find the most anomalies, and other objectives include evaluating quality and building confidence in the work product, motivating and enabling authors to improve, and collecting metrics that can be used to enhance the software development lifecycle (SDLC), including the inspection process. The author cannot act as the review leader or scribe 4. Walkthrough - Led by the author, this type of review serves various objectives such as evaluating quality and building confidence in the work product, educating reviewers, gaining consensus, generating new ideas, motivating and enabling authors to improve, and detecting anomalies. Reviewers might perform an individual review before the walkthrough, but this is not mandatory A. Includes objectives such as gaining consensus, generating new ideas, and motivating authors to improve B. Includes objectives such as educating reviewers, gaining consensus, generating new ideas and detecting anomalies C. The main objective is detecting anomalies and it requires metrics collection to support process improvement D. The main objective is detecting anomalies and it generates no formal documented output Thus:",
    "rationale_by_option": {
      "a": "Is not correct",
      "b": "Is correct.",
      "c": "Is not correct",
      "d": "Is not correct"
    },
    "diagram": null
  },
  {
    "id": "examC_18",
    "exam": "examC",
    "number": "18",
    "stem": "Which of the following is a factor that contributes to a successful review?",
    "options": {
      "a": "Ensure management participate as reviewers",
      "b": "Split large work products into smaller parts",
      "c": "Set reviewer evaluation as an objective",
      "d": "Plan to cover one document per review"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "b"
    ],
    "lo": "FL-3.2.5",
    "k_level": "K1",
    "syllabus_section": "3.2.5",
    "syllabus_section_title": "Success Factors for Reviews",
    "syllabus_chapter": "3",
    "syllabus_chapter_title": "Static Testing",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. To ensure successful reviews, it is important to secure management's support for the review process. However that does not mean that they should participate as reviewers",
      "b": "Is correct. To ensure successful reviews, it's important to break the work product into parts that are small enough to be reviewed in a reasonable timescale to prevent reviewers from losing focus during individual reviews or review meetings",
      "c": "Is not correct. To ensure successful reviews, it's important to clearly define objectives and measurable exit criteria, without evaluating participants",
      "d": "Is not correct. To ensure successful reviews, it's important to break down the review into smaller chunks to prevent reviewers from losing focus during individual reviews or review meetings. So you should not plan to cover one document per review"
    },
    "diagram": null
  },
  {
    "id": "examC_19",
    "exam": "examC",
    "number": "19",
    "stem": "What is the MAIN difference between black-box test techniques and experience-based test\ntechniques?",
    "options": {
      "a": "The test object",
      "b": "The test level at which the test technique is used",
      "c": "The test basis",
      "d": "The software development lifecycle (SDLC) in which the test technique can be used"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "c"
    ],
    "lo": "FL-4.1.1",
    "k_level": "K2",
    "syllabus_section": "4.1.1",
    "syllabus_section_title": "Test Techniques Overview",
    "syllabus_chapter": "4",
    "syllabus_chapter_title": "Test Analysis and Design",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. In most cases both black-box test techniques and experience-based test techniques can be used for the same test objects",
      "b": "Is not correct. Both black-box test techniques and experience-based test techniques can be used at all test levels",
      "c": "Is correct. Black-box test techniques (also known as specification-based techniques) are based on an analysis of the specified behavior of the test object without reference to its internal structure. So, the test basis is usually a specification. Experience-based test techniques effectively use the knowledge and experience of testers for the design and implementation of test cases. This means that the tester, when designing tests, may not use the specification at all",
      "d": "Is not correct. Experience-based test techniques can detect defects that may be missed using black-box (and white-box) test techniques. Hence, experience-based test techniques are complementary to black-box test techniques and white-box test techniques and both black-box test techniques and experience-based test techniques can be used in all SDLCs"
    },
    "diagram": null
  },
  {
    "id": "examC_20",
    "exam": "examC",
    "number": "20",
    "stem": "You are testing a PIN validator, which accepts valid PINs and rejects invalid PINs. A PIN is a\nsequence of digits. A PIN is valid if it consists of four digits, which are not all the same digit. You\nhave identified the following valid equivalence partitions:\n\nVariable: PIN code length\n      • The partition “length correct”                       - four-digit PINs\n      • The partition “length incorrect”                     - PINs with length other than 4\nVariable: Number of different digits\n      • The partition “number of different digits correct”   - PINs with at least two different digits\n      • The partition “number of different digits incorrect” - PINs with all digits being the same\nWhich of the following is the BEST set of input test data to cover the identified equivalence\npartitions?",
    "options": {
      "a": "12, 1111, 1234, 12345",
      "b": "1, 123, 1111, 1234",
      "c": "11, 12, 1111, 12345",
      "d": "123, 1222, 12345"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "a"
    ],
    "lo": "FL-4.2.1",
    "k_level": "K3",
    "syllabus_section": "4.2.1",
    "syllabus_section_title": "Equivalence Partitioning",
    "syllabus_chapter": "4",
    "syllabus_chapter_title": "Test Analysis and Design",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is correct. • Value “12” covers “length incorrect, too few digits” • Value “1111” covers “length correct” and “number of different digits incorrect • Value “1234” again covers “length correct” and “number of different digits correct” • Value “12345” covers “length incorrect, too many digits”",
      "b": "Is not correct. All partitions are covered, however it only covers the lower side of “length incorrect”",
      "c": "Is not correct. There are no value covering “correct PIN”",
      "d": "Is not correct. There are no value covering “number of different digits”"
    },
    "diagram": null
  },
  {
    "id": "examC_21",
    "exam": "examC",
    "number": "21",
    "stem": "A developer was asked to implement the following business rule:\n\nINPUT: value (integer number)\n\nIF (value ≤ 100 OR value ≥ 200) THEN write “value incorrect”\n\nELSE write “value OK”\n\nYou design the test cases using 2-value boundary value analysis.\n\nWhich of the following sets of test inputs achieves the greatest coverage?",
    "options": {
      "a": "100, 150, 200, 201",
      "b": "99, 100, 200, 201",
      "c": "98, 99, 100, 101",
      "d": "101, 150, 199, 200"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "d"
    ],
    "lo": "FL-4.2.2",
    "k_level": "K3",
    "syllabus_section": "4.2.2",
    "syllabus_section_title": "Boundary Value Analysis",
    "syllabus_chapter": "4",
    "syllabus_chapter_title": "Test Analysis and Design",
    "rationale_preamble": "The equivalence partitions are: {…, 99, 100}, {101, 102, …, 198, 199}, {200, 201, …}. Thus, there are 4 boundary values, which are: 100, 101, 199 and 200. In 2-value BVA, for each boundary value there are two coverage items (the boundary value and its closest neighbor belonging to the adjacent partition). As the closest neighbors are also boundary values in the adjacent partition, then there are just four coverage items. Thus:",
    "rationale_by_option": {
      "a": "Is not correct. Only 100 and 200 are valid coverage items for 2-value BVA, so we achieve 50% coverage",
      "b": "Is not correct. Only 100 and 200 are valid coverage items for 2-value BVA, so we achieve 50% coverage",
      "c": "Is not correct. Only 100 and 101 are valid coverage items for 2-value BVA, so we achieve 50% coverage",
      "d": "Is correct. 101, 199 and 200 are valid coverage items for 2-value BVA, so we achieve 75% coverage"
    },
    "diagram": null
  },
  {
    "id": "examC_22",
    "exam": "examC",
    "number": "22",
    "stem": "You are working on a project to develop a system to analyze driving test results. You have been\nasked to design test cases based on the following decision table.\n\n                                                                   R1   R2      R3\n\n                           C1: First attempt at the exam?          -        -   F\n\n                           C2: Theoretical exam passed?            T        F   -\n\n                               C3: Practical exam passed?          T        -   F\n\n                                        Issue a driving license?   X\n\n                  Request additional driving lessons?                           X\n\n                      Request to take the exam again?                       X\n\nWhat test data will show that there are contradictory rules in the decision table?",
    "options": {
      "a": "C1 = T, C2 = T, C3 = F",
      "b": "C1 = T, C2 = F, C3 = T",
      "c": "C1 = T, C2 = T, C3 = T and C1 = F, C2 = T, C3 = T",
      "d": "C1 = F, C2 = F, C3 = F"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "d"
    ],
    "lo": "FL-4.2.3",
    "k_level": "K3",
    "syllabus_section": "4.2.3",
    "syllabus_section_title": "Decision Table Testing",
    "syllabus_chapter": "4",
    "syllabus_chapter_title": "Test Analysis and Design",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. The combination (T, T, F) does not match any rule. This is an example of omission, not a contradiction",
      "b": "Is not correct. The combination (T, F, T) matches only one column, R2, so there is no contradiction",
      "c": "Is not correct. Both combinations (T, T, T) and (F, T, T) match only one column, R1, so there is no contradiction",
      "d": "Is correct. The combination (F, F, F) matches both R2 and R3, but R2 and R3 have different actions, so this shows a contradiction between R2 and R3."
    },
    "diagram": null
  },
  {
    "id": "examC_23",
    "exam": "examC",
    "number": "23",
    "stem": "You are designing test cases based on the following state transition diagram:\n\nWhat is the MINIMUM number of test cases required to achieve 100% valid transitions coverage?",
    "options": {
      "a": "3",
      "b": "2",
      "c": "5",
      "d": "6"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "a"
    ],
    "lo": "FL-4.2.4",
    "k_level": "K3",
    "syllabus_section": "4.2.4",
    "syllabus_section_title": "State Transition Testing",
    "syllabus_chapter": "4",
    "syllabus_chapter_title": "Test Analysis and Design",
    "rationale_preamble": "The following three transitions: “REQUESTING -> CONFIRMED” “WAITING LIST -> CONFIRMED” “WAITING LIST -> END” cannot appear in the same test case, which suggests that at least three test cases are required. All the other transitions can appear in combination with one or more of these three transitions, so we need a minimum of three test cases. In fact, only three sequences are possible: TC1: START (Room request) → REQUESTING (Available) → CONFIRMED (Pay) → END TC2: START (Room request) → REQUESTING (Not available) → WAITING LIST (Available) → CONFIRMED (Pay) → END TC3: START (Room request) → REQUESTING (Not available) → WAITING LIST (Cancel) → END Thus:",
    "rationale_by_option": {
      "a": "Is correct",
      "b": "Is not correct",
      "c": "Is not correct",
      "d": "Is not correct"
    },
    "diagram": "diagram_examC_23.png"
  },
  {
    "id": "examC_24",
    "exam": "examC",
    "number": "24",
    "stem": "You want to apply branch testing to the code represented by the following control flow graph.\n\nHow many coverage items do you need to test?",
    "options": {
      "a": "2",
      "b": "4",
      "c": "8",
      "d": "7"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "c"
    ],
    "lo": "FL-4.3.2",
    "k_level": "K2",
    "syllabus_section": "4.3.2",
    "syllabus_section_title": "Branch Testing and Branch Coverage",
    "syllabus_chapter": "4",
    "syllabus_chapter_title": "Test Analysis and Design",
    "rationale_preamble": "In branch testing the coverage items are branches, which are represented by the edges of a control flow graph. There are 8 edges in the control flow graph. Thus:",
    "rationale_by_option": {
      "a": "Is not correct",
      "b": "Is not correct",
      "c": "Is correct",
      "d": "Is not correct"
    },
    "diagram": null
  },
  {
    "id": "examC_25",
    "exam": "examC",
    "number": "25",
    "stem": "How can white-box testing be useful in support of black-box testing?",
    "options": {
      "a": "White-box coverage measures can help testers evaluate black-box tests in terms of the code coverage achieved by these black-box tests",
      "b": "White-box coverage analysis can help testers identify unreachable fragments of the source code",
      "c": "Branch testing subsumes black-box test techniques, so achieving full branch coverage guarantees achieving full coverage of any black-box technique",
      "d": "White-box test techniques can provide coverage items for black-box techniques"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "a"
    ],
    "lo": "FL-4.3.3",
    "k_level": "K2",
    "syllabus_section": "4.3.3",
    "syllabus_section_title": "The Value of White-box Testing",
    "syllabus_chapter": "4",
    "syllabus_chapter_title": "Test Analysis and Design",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is correct. Performing only black-box testing does not provide a measure of actual code coverage. White-box coverage measures provide an objective measurement of coverage and provide the necessary information to allow additional tests to be generated to increase this coverage, and subsequently increase confidence in the code",
      "b": "Is not correct. This statement is correct, but it has nothing to do with black-box testing",
      "c": "Is not correct. In general there are no relationships between white-box test techniques and black-box test techniques",
      "d": "Is not correct. White-box test techniques are used to design tests based on the test object itself, while black-box test techniques are used to design tests based on the specification. Therefore, there is no relation between coverage items derived from these two types of test techniques"
    },
    "diagram": null
  },
  {
    "id": "examC_26",
    "exam": "examC",
    "number": "26",
    "stem": "Consider the following list:\n          • Correct input not accepted\n          • Incorrect input accepted\n          • Wrong output format\n          • Division by zero\n\nWhat test technique is MOST PROBABLY used by the tester who uses this list when performing\ntesting?",
    "options": {
      "a": "Exploratory testing",
      "b": "Fault attack",
      "c": "Checklist-based testing",
      "d": "Boundary value analysis"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "b"
    ],
    "lo": "FL-4.4.1",
    "k_level": "K2",
    "syllabus_section": "4.4.1",
    "syllabus_section_title": "Error Guessing",
    "syllabus_chapter": "4",
    "syllabus_chapter_title": "Test Analysis and Design",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. Exploratory testing uses test charters, not a list of possible defects/failures. Although exploratory testing can incorporate the use of other test techniques, in this case a fault attack is the most likely option",
      "b": "Is correct. This is a list of possible failures. Fault attacks are a methodical approach to the implementation of error guessing and require the tester to create or acquire a list of possible errors, defects and failures, and to design tests that will identify defects associated with the errors, expose the defects, or cause the failures",
      "c": "Is not correct. The tester is using a checklist of items to support their testing. Both error guessing and checklist-based testing use such lists, however, the list here is of possible failures, not test conditions, and so the MOST PROBABLE test technique is fault attack, which focuses on errors, defects and failures",
      "d": "Is not correct. BVA is based on an analysis of boundary values of equivalence partitions. The above list does not mention equivalence partitions or their boundaries"
    },
    "diagram": null
  },
  {
    "id": "examC_27",
    "exam": "examC",
    "number": "27",
    "stem": "Which of the following BEST describes how using checklist-based testing can result in increased\ncoverage?",
    "options": {
      "a": "Checklist items can be defined at a sufficiently low level of detail, so the tester can implement and execute detailed test cases based on these items",
      "b": "Checklists can be automated, so each time an automated test execution covers the checklist items, it results in additional coverage",
      "c": "Each checklist item should be tested separately and independently, so the elements cover different areas of the software",
      "d": "Two testers designing and executing tests based on the same high-level checklist items will typically perform the testing in slightly different ways"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "d"
    ],
    "lo": "FL-4.4.3",
    "k_level": "K2",
    "syllabus_section": "4.4.3",
    "syllabus_section_title": "Checklist-Based Testing",
    "syllabus_chapter": "4",
    "syllabus_chapter_title": "Test Analysis and Design",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. Although it is true that the tester can implement and execute detailed test cases based on the checklist, it does not explain how this would result in increased coverage",
      "b": "Is not correct. Checklist items should not be automated. But even if they are, the automated test scripts always execute the tests in the same way, which usually does not result in increased coverage",
      "c": "Is not correct. It is true that each checklist item should be tested separately and independently. But this impacts the test execution order and does not impact the achieved coverage, and so does not result in increased coverage",
      "d": "Is correct. If the checklists are high-level, some variability in the actual testing is likely to occur, resulting in potentially greater coverage but less repeatability. If two testers follow a checklist of high-level items, each of them may use different test data, test steps, etc. This way, one tester will probably cover some areas not covered by the other tester and this will result in increased coverage"
    },
    "diagram": null
  },
  {
    "id": "examC_28",
    "exam": "examC",
    "number": "28",
    "stem": "Which of the following provides the BEST example of a scenario-oriented acceptance criterion?",
    "options": {
      "a": "The application must allow users to delete their account and all associated data upon request",
      "b": "When a customer adds an item to their cart and proceeds to checkout, they should be prompted to log in or create an account if they haven’t already done so",
      "c": "IF (contain(product(23).Name, cart.products())) THEN return FALSE",
      "d": "The website must comply with the ICT Accessibility 508 Standards and ensure that all content is accessible to users with disabilities"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "b"
    ],
    "lo": "FL-4.5.2",
    "k_level": "K2",
    "syllabus_section": "4.5.2",
    "syllabus_section_title": "Acceptance Criteria",
    "syllabus_chapter": "4",
    "syllabus_chapter_title": "Test Analysis and Design",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. This acceptance criterion describes what rules or regulations the system must adhere to (in this case, the right to be forgotten). This is an example of a rule-oriented acceptance criterion",
      "b": "Is correct. This acceptance criterion describes an example scenario that must be realized by the system. This is an example of a scenario- oriented acceptance criterion",
      "c": "Is not correct. This sentence looks more like a line of code that implements some business rule. Acceptance criteria should be written in collaboration with business representatives, and therefore should be written in language they understand. This sentence will most likely be unintelligible to these stakeholders",
      "d": "Is not correct. This acceptance criterion describes what rules or regulations the system must adhere to and how compliance will be ensured. Therefore, this is an example of a rule-oriented acceptance criterion, not a scenario-based acceptance criterion"
    },
    "diagram": null
  },
  {
    "id": "examC_29",
    "exam": "examC",
    "number": "29",
    "stem": "You are using acceptance test-driven development and designing test cases based on the\nfollowing user story:\n\nAs a Regular or Special user, I want to be able to use my electronic floor card, to access specific\nfloors.\n\nAcceptance Criteria:\n\nAC1: Regular users have access to floors 1 to 3\nAC2: Floor 4 is only accessible to Special users\nAC3: Special users have all the access rights of Regular users\n\nWhich test case is the MOST reasonable one to test AC3?",
    "options": {
      "a": "Check that a Regular user can access floors 1 and 3",
      "b": "Check that a Regular user cannot access floor 4",
      "c": "Check that a Special user can access floor 5",
      "d": "Check that a Special user can access floors 1, 2 and 3"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "d"
    ],
    "lo": "FL-4.5.3",
    "k_level": "K3",
    "syllabus_section": "4.5.3",
    "syllabus_section_title": "Acceptance Test-driven Development (ATDD)",
    "syllabus_chapter": "4",
    "syllabus_chapter_title": "Test Analysis and Design",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. We want to check that Special users have the rights of Regular users, so we need to test access rights for a Special user, not for a Regular user",
      "b": "Is not correct. We want to check that Special users have the rights of Regular users, so we need to test access rights for a Special user, not for a Regular user",
      "c": "Is not correct. There is no floor 5 described in the acceptance criteria. The test cases should not extend the scope of the user story. But even if we would like to perform negative testing, this test is not directly related to AC3",
      "d": "Is correct. This is the way we can check if a Special user can access floors which are accessible to a Regular user"
    },
    "diagram": null
  },
  {
    "id": "examC_30",
    "exam": "examC",
    "number": "30",
    "stem": "Which of the following is NOT a purpose of a test plan?",
    "options": {
      "a": "To define test data and expected results for component tests and component integration tests",
      "b": "To define as exit criteria from the component test level that “100% statement coverage and 100% branch coverage must be achieved”",
      "c": "To describe what fields the test progress report shall contain and what should be the form of this report",
      "d": "To explain why system integration testing will be excluded from testing, although the test strategy requires this test level"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "a"
    ],
    "lo": "FL-5.1.1",
    "k_level": "K2",
    "syllabus_section": "5.1.1",
    "syllabus_section_title": "Purpose and Content of a Test Plan",
    "syllabus_chapter": "5",
    "syllabus_chapter_title": "Managing the Test Activities",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is correct. The test plan may include test data requirements (as part of the test approach), but not the detailed test data for test cases. Test data is part of the test cases, not the test plan. Also, it is usually impossible to define such data when the test plan is created, because it is not exactly known what the components will look like",
      "b": "Is not correct. One of the purposes of a test plan is to help ensure that test activities will meet the established criteria, by including entry criteria and exit criteria. The code coverage criteria are an example of such criteria for the component test level",
      "c": "Is not correct. Documentation templates are typical content of a test plan. This helps to facilitate communication between the stakeholders by defining a standard way of communicating or reporting",
      "d": "Is not correct. One of the purposes of a test plan is to demonstrate that testing will adhere to the existing test policy and test strategy, or to explain why the testing will deviate from them. This is an example of explaining the deviation, regarding the test levels that will be (or will not be) followed"
    },
    "diagram": null
  },
  {
    "id": "examC_31",
    "exam": "examC",
    "number": "31",
    "stem": "At the beginning of each iteration, the team estimates the amount of work (in person-days) they will\nneed to complete during the iteration. Let E(n) be the estimated amount of work for iteration n, and\nlet A(n) be the actual amount of work done in iteration n. From the third iteration, the team uses the\nfollowing estimation model based on extrapolation:\n\n                                                                  3 ∗ 𝐴(𝑛 − 1) + 𝐴(𝑛 − 2)\n                                                         𝐸(𝑛) =\n                                                                             4\n\nThe graph shows the estimated and actual amount of work for the first four iterations.\n\n                                          Estimated and actual effort (in person-days)\n                    13\n                    12\n                    11\n                    10\n                     9\n                     8\n                     7\n                     6\n                     5\n                     4\n                     3\n                     2\n                     1\n                     0\n                                   Iteration #1            Iteration #2          Iteration #3   Iteration #4\n\n                                                                   Estimated   Actual\n\nWhat is the estimated amount of work for iteration #5?",
    "options": {
      "a": "10.5 person-days",
      "b": "8.25 person-days",
      "c": "6.5 person-days",
      "d": "9.4 person-days"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "c"
    ],
    "lo": "FL-5.1.4",
    "k_level": "K3",
    "syllabus_section": "5.1.4",
    "syllabus_section_title": "Estimation Techniques",
    "syllabus_chapter": "5",
    "syllabus_chapter_title": "Managing the Test Activities",
    "rationale_preamble": "From the graph we have: A(4)=6 and A(3)=8 (the last two gray boxes). From the formula we obtain: E(5) = (3*A(4) + A(3)) / 4 = (3*6+8) / 4 = 26 / 4 = 6.5 person-days. Thus:",
    "rationale_by_option": {
      "a": "Is not correct",
      "b": "Is not correct",
      "c": "Is correct",
      "d": "Is not correct"
    },
    "diagram": "diagram_examC_31.png"
  },
  {
    "id": "examC_32",
    "exam": "examC",
    "number": "32",
    "stem": "You are preparing a test execution schedule for executing seven test cases TC 1 to TC 7.\n\nThe following figure includes the priorities of these test cases (1=highest priority, 3 = lowest\npriority).\n\nThe figure also shows the dependencies between test cases using arrows. For instance, the arrow\nfrom TC 4 to TC 5 means that TC 5 can only be executed if TC 4 was previously executed.\n\nWhich test case should be executed sixth?",
    "options": {
      "a": "TC 3",
      "b": "TC 5",
      "c": "TC 6",
      "d": "TC 2"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "a"
    ],
    "lo": "FL-5.1.5",
    "k_level": "K3",
    "syllabus_section": "5.1.5",
    "syllabus_section_title": "Test Case Prioritization",
    "syllabus_chapter": "5",
    "syllabus_chapter_title": "Managing the Test Activities",
    "rationale_preamble": "We want to run test cases according to their priorities, but we also need to consider the dependencies. If we only consider priorities, we want to first run TC 5 and TC 7 (highest priority), then TC 1, TC 3, and TC 4, and finally TC 2 and TC 6 (lowest priority). However, in order to run TC 7, we need to first run TC 4. In order to run TC 5, we need to run TC 4 and TC 2, but TC 2 is blocked by TC 1, which should be run prior to TC 2. So, in order to run priority 1 test cases as early as possible, the first five test cases should be: TC 4 - TC 7 - TC 1 - TC 2 - TC 5. Next, we need to run TC 3, because it has higher priority than TC 6. Thus the full schedule will be TC 4 – TC 7 – TC 1 – TC 2 – TC 5 – TC 3 – TC 6. So, the sixth test case will be TC 3. Thus:",
    "rationale_by_option": {
      "a": "Is correct",
      "b": "Is not correct",
      "c": "Is not correct",
      "d": "Is not correct"
    },
    "diagram": "diagram_examC_32.png"
  },
  {
    "id": "examC_33",
    "exam": "examC",
    "number": "33",
    "stem": "What does the test pyramid model show?",
    "options": {
      "a": "That tests may have different priorities",
      "b": "That tests may have different granularity",
      "c": "That tests may require different coverage criteria",
      "d": "That tests may depend on other tests"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "b"
    ],
    "lo": "FL-5.1.6",
    "k_level": "K1",
    "syllabus_section": "5.1.6",
    "syllabus_section_title": "Test Pyramid",
    "syllabus_chapter": "5",
    "syllabus_chapter_title": "Managing the Test Activities",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. The test pyramid model does not provide information about test priorities",
      "b": "Is correct. The test pyramid model shows that different tests have different levels of granularity",
      "c": "Is not correct. The test pyramid model is independent of coverage criteria",
      "d": "Is not correct. Test pyramid model does not show any relations between different tests"
    },
    "diagram": null
  },
  {
    "id": "examC_34",
    "exam": "examC",
    "number": "34",
    "stem": "What is the relationship between the testing quadrants, test levels and test types?",
    "options": {
      "a": "Testing quadrants represent particular combinations of test levels and test types, defining their location in the software development lifecycle",
      "b": "Testing quadrants describe the degree of granularity of individual test types performed at each test level",
      "c": "Testing quadrants assign the test types that can be performed to the test levels",
      "d": "Testing quadrants group test levels and test types by several criteria such as targeting specific stakeholders"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "d"
    ],
    "lo": "FL-5.1.7",
    "k_level": "K2",
    "syllabus_section": "5.1.7",
    "syllabus_section_title": "Testing Quadrants",
    "syllabus_chapter": "5",
    "syllabus_chapter_title": "Managing the Test Activities",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. Testing quadrants group test levels and test types separately according to several criteria. They do not represent any combinations of test levels and test types and they are not related to any location within a software development lifecycle. Both test levels and test types are treated separately in the testing quadrants model",
      "b": "Is not correct. Testing quadrants group test levels and test types according to several criteria. They do not describe the degree of granularity of individual test types performed at each test level. Such a model, regarding the test levels, is called the test pyramid",
      "c": "Is not correct. The statement is wrong, because in general any test type can be performed at any test level",
      "d": "Is correct. The testing quadrants group test levels, test types, test activities, test techniques and work products in Agile software development. In this model, tests can be business facing or technology facing. Tests can support the team (i.e., guide the development) or critique the product (i.e., measure its behavior against expectations). The combination of these two viewpoints determines the four quadrants"
    },
    "diagram": null
  },
  {
    "id": "examC_35",
    "exam": "examC",
    "number": "35",
    "stem": "Which of the following is an example of how product risk analysis may influence the thoroughness\nand scope of testing?",
    "options": {
      "a": "Continuous risk monitoring allows us to identify an emerging risk as soon as possible",
      "b": "Risk identification allows us to implement risk mitigation activities and reduce the risk level",
      "c": "The assessed risk level helps us to select the rigor of testing",
      "d": "Risk analysis allows us to derive coverage items"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "c"
    ],
    "lo": "FL-5.2.3",
    "k_level": "K2",
    "syllabus_section": "5.2.3",
    "syllabus_section_title": "Product Risk Analysis",
    "syllabus_chapter": "5",
    "syllabus_chapter_title": "Managing the Test Activities",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. Risk monitoring is part of risk control, not risk analysis",
      "b": "Is not correct. Risk identification itself does not allow us to implement risk mitigation activities. The mitigating actions are defined during the risk control phase",
      "c": "Is correct. This is an example of how risk analysis influences the thoroughness and scope of testing",
      "d": "Is not correct. Coverage items are derived using test techniques, not through risk analysis"
    },
    "diagram": null
  },
  {
    "id": "examC_36",
    "exam": "examC",
    "number": "36",
    "stem": "Which of the following activities in the test process makes the MOST use of test progress reports?",
    "options": {
      "a": "Test design",
      "b": "Test completion",
      "c": "Test analysis",
      "d": "Test planning"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "b"
    ],
    "lo": "FL-5.3.2",
    "k_level": "K2",
    "syllabus_section": "5.3.2",
    "syllabus_section_title": "Purpose, Content and Audience for Test Reports",
    "syllabus_chapter": "5",
    "syllabus_chapter_title": "Managing the Test Activities",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. Test progress reports are mostly used during test monitoring and test control, and test completion, not during test design",
      "b": "Is correct. A test completion report is prepared during test completion, when a project, test level, or test type is complete and when, ideally, its exit criteria have been met. This report uses information from test progress reports and other data",
      "c": "Is not correct. Test progress reports are mostly used during test monitoring and test control, and test completion, not during test analysis",
      "d": "Is not correct. Test progress reports are most used during test monitoring and test control, and test completion, not during test planning"
    },
    "diagram": null
  },
  {
    "id": "examC_37",
    "exam": "examC",
    "number": "37",
    "stem": "Which of the following is NOT an example of how configuration management supports testing?",
    "options": {
      "a": "All commits to the repository are uniquely identified and version controlled",
      "b": "All changes in the test environment elements are tracked",
      "c": "All requirement specifications are referenced unambiguously in test plans",
      "d": "All identified defects have an assigned status"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "d"
    ],
    "lo": "FL-5.4.1",
    "k_level": "K2",
    "syllabus_section": "5.4.1",
    "syllabus_section_title": "Configuration Management",
    "syllabus_chapter": "5",
    "syllabus_chapter_title": "Managing the Test Activities",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. When a user reports a software failure, thanks to the unique identification of commits, it is possible to reassemble the files from the software version which was used by the user (as well as the corresponding versions of the test scripts) and thus reproduce the failure and locate the defect faster",
      "b": "Is not correct. If a change to the test environment causes unexpected issues during testing, configuration management allows testers to roll back to a previous version of the environment. This ensures that testing can continue without being affected by the change",
      "c": "Is not correct. Configuration management ensures that all identified documentation (e.g., requirement specifications) and software items are referenced unambiguously in test documentation (e.g., test plans)",
      "d": "Is correct. This is ensured by defect management, not by the configuration management process"
    },
    "diagram": null
  },
  {
    "id": "examC_38",
    "exam": "examC",
    "number": "38",
    "stem": "Consider the following defect report for a web-based shopping application:\n\nApplication: WebShop v0.99\n\nDefect: Login button not working\n\nSteps to Reproduce:\n\nLaunch the website\nClick on the login button\n\nExpected result: The user should be redirected to the login page.\nActual result: The login button does not respond when clicked.\n\nSeverity: High\nPriority: Urgent\n\nWhat is the MOST important information that is missing from this defect report?",
    "options": {
      "a": "Name of the tester and date",
      "b": "Test environment elements and their version numbers",
      "c": "Identification of the test object",
      "d": "Impact on the interests of stakeholders"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "b"
    ],
    "lo": "FL-5.5.1",
    "k_level": "K3",
    "syllabus_section": "5.5.1",
    "syllabus_section_title": "Defect Management",
    "syllabus_chapter": "5",
    "syllabus_chapter_title": "Managing the Test Activities",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. This is important, but not as important as test environment elements",
      "b": "Is correct. The important thing that is missing is the identification of the browser and device used for the testing. The browser and device information are important because such a defect can be browser- or device-specific. For example, a login button may work fine on one browser (or one version of a specific browser) but not on another. Therefore, the browser and device information can help the developers to reproduce the issue and find the root cause of the problem more quickly",
      "c": "Is not correct. The test object is identified (WebShop v0.99)",
      "d": "Is not correct. The impact is included – this is severity (high)"
    },
    "diagram": null
  },
  {
    "id": "examC_39",
    "exam": "examC",
    "number": "39",
    "stem": "Tools from which of the following categories help with the organization of test cases, detected\ndefects and configuration management?",
    "options": {
      "a": "Test execution and coverage tools",
      "b": "Test design and implementation tools",
      "c": "Defect management tools",
      "d": "Test management tools"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "d"
    ],
    "lo": "FL-6.1.1",
    "k_level": "K2",
    "syllabus_section": "6.1.1",
    "syllabus_section_title": "Tool Support for Testing",
    "syllabus_chapter": "6",
    "syllabus_chapter_title": "Test Tools",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. Test execution and coverage tools facilitate the automated execution of test cases and the measurement of the coverage achieved by running those test cases. However, these tools do not help with the organization of defects and configuration management",
      "b": "Is not correct. Test design and test implementation tools facilitate the generation of test cases, test data and test procedures, but they do not help with the organization of defects and configuration management",
      "c": "Is not correct. Defect management tools are used to manage defects but are not testing tools and are not used to organize test cases or configuration management",
      "d": "Is correct. Test management tools increase the test process efficiency by facilitating the management of the software development lifecycle (SDLC), requirements, tests, defects, and configuration management"
    },
    "diagram": null
  },
  {
    "id": "examC_40",
    "exam": "examC",
    "number": "40",
    "stem": "Which of the following is MOST likely to be a benefit of test automation?",
    "options": {
      "a": "The capability of generating test cases without access to the test basis",
      "b": "The achievement of increased coverage through more objective assessment",
      "c": "The increase in test execution times available with higher processing power",
      "d": "The prevention of human errors through greater consistency and repeatability"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "d"
    ],
    "lo": "FL-6.2.1",
    "k_level": "K1",
    "syllabus_section": "6.2.1",
    "syllabus_section_title": "Benefits and Risks of Test Automation",
    "syllabus_chapter": "6",
    "syllabus_chapter_title": "Test Tools",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. ‘The capability of generating test cases without access to the test basis’ is not possible. The generation of test cases by either testers or tools requires access to the test basis",
      "b": "Is not correct. ‘The achievement of increased coverage through more objective assessment’ is not a direct benefit of test automation. Test automation will provide more objective assessment of coverage, however that objective assessment will not increase the coverage. Only by using the results of the coverage to write further test cases can the coverage possibly be increased",
      "c": "Is not correct. ‘The increase in test execution times available with higher processing power’ is a contradictory statement as higher processing power would normally reduce execution times, and increased execution times are not a benefit as the testing would take longer",
      "d": "Is correct. The prevention of human errors through greater consistency and repeatability is a benefit of test automation as test automation cannot suffer from human errors. For instance, it means that tests are consistently derived from requirements, test data is created in a systematic manner, and tests are executed by a tool in the same order with the same frequency"
    },
    "diagram": null
  },
  {
    "id": "examD_1",
    "exam": "examD",
    "number": "1",
    "stem": "Which of the following is a typical test objective?",
    "options": {
      "a": "Finding and fixing defects in the test object",
      "b": "Maintaining effective communications with developers",
      "c": "Validating that legal requirements have been met",
      "d": "Building confidence in the quality of the test object"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "d"
    ],
    "lo": "FL-1.1.1",
    "k_level": "K1",
    "syllabus_section": "1.1.1",
    "syllabus_section_title": "Test Objectives",
    "syllabus_chapter": "1",
    "syllabus_chapter_title": "Fundamentals of Testing",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. Finding and fixing defects in the test object is not a typical test objective as although identifying defects is an objective of testing, fixing defects is not a test activity",
      "b": "Is not correct. Maintaining effective communications with developers is not a typical test objective although it is useful in achieving other objectives of testing, such as providing stakeholders with information that enables them to make informed decisions. It is not a primary reason for performing testing",
      "c": "Is not correct. Validating that legal requirements have been met is not a typical test objective because validation is concerned with checking whether the system meets users’ and other stakeholders’ needs in its operational environment. Checking that legal requirements have been met is a form of verification",
      "d": "Is correct. Building confidence in the quality of the test object is achieved by executing tests that passed"
    },
    "diagram": null
  },
  {
    "id": "examD_2",
    "exam": "examD",
    "number": "2",
    "stem": "A designer documents a design for a user interface that does not suitably address disabled users\nbecause the designer is tired. The programmer implements the user interface in line with the\ndesign but as they are working under severe time pressure, they do not include suitable exception\nhandling in their program code for bonus calculations. When the operational system is used,\ncomplaints are made by some disabled users about the interface and the company is subsequently\nfined by the relevant regulatory authority. No one notices that bonus calculations are sometimes\nincorrect.\n\nWhich of the following statements is CORRECT?",
    "options": {
      "a": "The miscalculation of bonuses is a defect that occasionally occurs",
      "b": "The fine received for failing to address some disabled users is a failure",
      "c": "The programmer working under severe time pressure is a root cause",
      "d": "The design of the user interface includes a designer error"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "c"
    ],
    "lo": "FL-1.2.3",
    "k_level": "K2",
    "syllabus_section": "1.2.3",
    "syllabus_section_title": "Errors, Defects, Failures, and Root Causes",
    "syllabus_chapter": "1",
    "syllabus_chapter_title": "Fundamentals of Testing",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. The miscalculation of bonuses is a failure by the system, not a defect",
      "b": "Is not correct. The system not suitably supporting disabled users is a failure which eventually results in a fine, but the fine itself is not a failure (it appears to be the correct functioning of the regulatory system)",
      "c": "Is correct. The error is made by the programmer and this mistake is caused by them working under severe time pressure, which is the root cause of the subsequent defect",
      "d": "Is not correct. The poor design of the user interface, which does not suitably address disabled users, is a design defect caused by the designer error. Thus the design of the user interface includes a design defect not a designer error"
    },
    "diagram": null
  },
  {
    "id": "examD_3",
    "exam": "examD",
    "number": "3",
    "stem": "Test conditions are being used by testers to generate test cases and execute tests. Even though\nthe test conditions remain the same, the test cases are varied each time. Which of the following\n‘principles of testing’ is being addressed through the variation of test cases?",
    "options": {
      "a": "Tests wear out",
      "b": "Absence-of-defects fallacy",
      "c": "Early testing saves time and money",
      "d": "Defects cluster together"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "a"
    ],
    "lo": "FL-1.3.1",
    "k_level": "K2",
    "syllabus_section": "1.3.1",
    "syllabus_section_title": "Testing Principles",
    "syllabus_chapter": "1",
    "syllabus_chapter_title": "Fundamentals of Testing",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is correct. The ‘tests wear out’ principle is concerned with the idea that repeating identical tests on unaltered code is unlikely to uncover novel defects and therefore, modifying tests may be essential. By using test conditions to generate new tests each time, the tests will not be identical and the risk of the tests wearing out is reduced",
      "b": "Is not correct. The ‘absence-of-defects fallacy’ principle is concerned with ensuring that users’ needs are fulfilled even if lots of testing is done and no defects are found (i.e., validation is also necessary). The use of test conditions to generate test cases and execute tests does not directly address this concern",
      "c": "Is not correct. The ‘early testing saves time and money’ principle is concerned with fixing defects early on to prevent the occurrence of subsequent defects in derived work products, thereby reducing costs and the likelihood of failures. This is typically addressed by starting testing (both static and dynamic) as early as possible, but this is not addressed by using test conditions to generate test cases and execute tests",
      "d": "Is not correct. The ‘Defects cluster together’ principle is concerned with the distribution of defects in a system, which typically follows a Pareto distribution. The use of test conditions to generate test cases and execute tests does not address this concern, which is typically addressed by risk-based testing"
    },
    "diagram": null
  },
  {
    "id": "examD_4",
    "exam": "examD",
    "number": "4",
    "stem": "Given the following test tasks:\n           1. Derive test cases from test conditions\n           2. Identify reusable testware\n           3. Organize test cases into test procedures\n           4. Evaluate the test basis and the test object\n\nAnd the following test activities:\n           A. Test analysis\n           B. Test design\n           C. Test implementation\n           D. Test completion\n\nWhich of the following BEST matches the tasks with the activities?",
    "options": {
      "a": "1B, 2A, 3D, 4C",
      "b": "1B, 2D, 3C, 4A",
      "c": "1C, 2A, 3B, 4D",
      "d": "1C, 2D, 3A, 4B"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "b"
    ],
    "lo": "FL-1.4.1",
    "k_level": "K2",
    "syllabus_section": "1.4.1",
    "syllabus_section_title": "Test Activities and Tasks",
    "syllabus_chapter": "1",
    "syllabus_chapter_title": "Fundamentals of Testing",
    "rationale_preamble": "Considering each of the listed test activities and their tasks: A. Test analysis - To identify the features that require testing, the test basis is analyzed and defined as test conditions, which are then prioritized along with related risks. During this test analysis, defects in the test basis are typically uncovered, and the test object's testability may also be assessed. (Task 4) B. Test design - Involves using test conditions to create test cases and other necessary testware, such as test data requirements and test charters for exploratory testing. (Task 1) C. Test implementation - Test procedures, such as manual and automated test scripts, are created from test cases and may be assembled into test suites. Test procedures are prioritized and arranged in a test execution schedule. (Task 3) D. Test completion - Occurs at project milestones, such as release, end of iteration or end of test level. Testware is identified and archived or handed to the appropriate teams for reuse, the test environment is shut down, and the test activities are analyzed for lessons learned and future improvements. (Task 2) Thus:",
    "rationale_by_option": {
      "a": "Is not correct",
      "b": "Is correct. The CORRECT match is: 1B, 2D, 3C, 4A",
      "c": "Is not correct",
      "d": "Is not correct"
    },
    "diagram": null
  },
  {
    "id": "examD_5",
    "exam": "examD",
    "number": "5",
    "stem": "Given the following testware:\n          i.   Test completion report\n         ii.   Data held in a database used for test inputs and expected results\n        iii.   The list of elements needed to build the test environment\n        iv.    Documented sequences of test cases in execution order\n         v.    Test cases\n\nWhich of the following BEST shows the testware produced as a result of performing test\nimplementation?",
    "options": {
      "a": "ii, iv",
      "b": "iii, v",
      "c": "i, ii, v",
      "d": "i, iii, iv"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "a"
    ],
    "lo": "FL-1.4.3",
    "k_level": "K2",
    "syllabus_section": "1.4.3",
    "syllabus_section_title": "Testware",
    "syllabus_chapter": "1",
    "syllabus_chapter_title": "Fundamentals of Testing",
    "rationale_preamble": "Considering each of the listed testware, and the test activity that produces it: i. The test completion report is an output of test completion ii. Data held in a database used for inputs and expected results is the test data - output of test implementation iii. The list of elements needed to build the test environment is the test environment requirements - output of test design iv. Documented sequences of test cases in execution order are the test procedures - output of test implementation v. Test cases - output of test design Test implementation produces the following outputs: test procedures (iv), automated test scripts, test suites, test data (ii), test execution schedule, and test environment elements such as stubs, drivers, simulators, and service virtualizations. Thus:",
    "rationale_by_option": {
      "a": "Is correct. Items ii and iv in the list are produced as a result of test implementation",
      "b": "Is not correct",
      "c": "Is not correct",
      "d": "Is not correct"
    },
    "diagram": null
  },
  {
    "id": "examD_6",
    "exam": "examD",
    "number": "6",
    "stem": "Which of the following is MOST likely to describe a task performed by someone in a test\nmanagement role?",
    "options": {
      "a": "Evaluate the test basis and the test object",
      "b": "Define test environment requirements",
      "c": "Assess testability of the test object",
      "d": "Create the test completion report"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "d"
    ],
    "lo": "FL-1.4.5",
    "k_level": "K2",
    "syllabus_section": "1.4.5",
    "syllabus_section_title": "Roles in Testing",
    "syllabus_chapter": "1",
    "syllabus_chapter_title": "Fundamentals of Testing",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. The testing role is primarily responsible for the technical and engineering aspects of testing, such as test analysis, test design, test implementation, and test execution. Evaluating the test basis for defects and the test object for testability are tasks performed as part of test analysis, so it is likely they are tasks performed by the testing role",
      "b": "Is not correct. The testing role is primarily responsible for the technical and engineering aspects of testing, such as test analysis, test design, test implementation, and test execution. Defining the test environment requirements is a task performed as part of test design, so it is likely to be a task performed by the testing role",
      "c": "Is not correct. The testing role is primarily responsible for the technical and engineering aspects of testing, such as test analysis, test design, test implementation, and test execution. Assessing the testability of a test object is a task performed as part of test analysis, so it is likely to be a task performed by the testing role",
      "d": "Is correct. The test management role primarily involves activities related to test planning, test monitoring and test control, and test completion. Thus, creating the test completion report, which is the prime output from the test completion, is likely to be a task performed by the test management role"
    },
    "diagram": null
  },
  {
    "id": "examD_7",
    "exam": "examD",
    "number": "7",
    "stem": "Which of the following is an advantage of the whole team approach?",
    "options": {
      "a": "Improved communication between team members",
      "b": "Decreased individual accountability for quality",
      "c": "Faster deployment of deliverables to the end users",
      "d": "Reduced collaboration with external business users"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "a"
    ],
    "lo": "FL-1.5.2",
    "k_level": "K1",
    "syllabus_section": "1.5.2",
    "syllabus_section_title": "Whole Team Approach",
    "syllabus_chapter": "1",
    "syllabus_chapter_title": "Fundamentals of Testing",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is correct. The whole team approach promotes robust communication and collaboration between the team members",
      "b": "Is not correct. While the whole team approach prioritizes collective accountability for quality, each individual team member is still equally accountable for quality",
      "c": "Is not correct. The whole team approach is about how the team works together, with the aim of higher quality deliverables, but it does not necessarily result in faster deployment to end users",
      "d": "Is not correct. When using the whole team approach, testers work with business representatives to create acceptance tests. There is no suggestion that the approach will reduce collaboration with external business users"
    },
    "diagram": null
  },
  {
    "id": "examD_8",
    "exam": "examD",
    "number": "8",
    "stem": "Given the following benefits and drawbacks of the independence of testing:\n          i.   The testers work in a different location from the developers\n         ii.   Testers question the assumptions programmers make while writing code\n        iii.   A confrontational dynamic has been established between testers and developers\n        iv.    Developers have convinced themselves that testers are mostly accountable for\n               quality\n         v.    Testers have different biases than those held by the developers\n\nWhich are MOST likely to be considered benefits?",
    "options": {
      "a": "i, iv",
      "b": "ii, v",
      "c": "i, iii, iv",
      "d": "ii, iii, v"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "b"
    ],
    "lo": "FL-1.5.3",
    "k_level": "K2",
    "syllabus_section": "1.5.3",
    "syllabus_section_title": "Independence of Testing",
    "syllabus_chapter": "1",
    "syllabus_chapter_title": "Fundamentals of Testing",
    "rationale_preamble": "Considering each of the listed benefits and drawbacks of the independence of testing: i. Ideally, we want close collaboration between testers and developers, which is not increased by isolation. Thus, this is a disadvantage ii. Testers and developers have varied backgrounds, technical viewpoints, and potential biases, allowing testers to usefully challenge assumptions made by stakeholders during system specification and implementation. Thus, this is an advantage iii. The main disadvantage of independence of testing is that testers may become isolated from the development team, leading to communication problems, a lack of collaboration, and potentially an adversarial relationship, with testers being blamed for delays and bottlenecks in the release process. Thus, this is a disadvantage iv. One of the disadvantages of independence of testing is that testers may become isolated from the development team, leading to developers feeling less accountable for quality. Thus, this is a disadvantage v. The primary benefit of independence of testing is that testers are more likely to identify different types of failures and defects compared to developers, due to their varied backgrounds, technical viewpoints, and potential biases, including cognitive bias Thus:",
    "rationale_by_option": {
      "a": "Is not correct",
      "b": "Is correct. The list entries showing benefits are ii and v",
      "c": "Is not correct",
      "d": "Is not correct"
    },
    "diagram": null
  },
  {
    "id": "examD_9",
    "exam": "examD",
    "number": "9",
    "stem": "Which of the following is a good testing practice that applies to all software development lifecycles?",
    "options": {
      "a": "Each test level has specific and distinct test objectives",
      "b": "Test implementation and execution for a given test level should start during the corresponding development phase",
      "c": "Testers should start test design as soon as drafts of the relevant work products become available",
      "d": "Every dynamic testing activity has a corresponding static testing activity"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "a"
    ],
    "lo": "FL-2.1.2",
    "k_level": "K1",
    "syllabus_section": "2.1.2",
    "syllabus_section_title": "Software Development Lifecycle and Good Testing Practices",
    "syllabus_chapter": "2",
    "syllabus_chapter_title": "Testing Throughout the Software Development Lifecycle",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is correct. Each test level has specific and distinct test objectives as a different form of test object (e.g., single component and complete system) is tested at each test level and overlapping test objectives would lead to unnecessary duplication",
      "b": "Is not correct. Test analysis and test design for a given test level should start during the corresponding development phase to facilitate early testing (e.g., acceptance test analysis and test design should begin during requirements analysis). Test implementation will generally start later, and test execution will start during the test level",
      "c": "Is not correct. Test design for a given test level should start during the corresponding development phase to facilitate early testing, however test design (e.g., test case generation) needs to be based on an agreed test basis, not an early draft, otherwise significant test effort may be wasted on creating test cases for a design that later changes",
      "d": "Is not correct. Quality control applies to all development activities, meaning that every software development activity has a corresponding test activity. However, the same symmetry does not apply to dynamic testing and static testing. There are some static testing activities (e.g., static analysis) for which there is no obvious corresponding dynamic testing activity"
    },
    "diagram": null
  },
  {
    "id": "examD_10",
    "exam": "examD",
    "number": "10",
    "stem": "Which of the following is an example of a test-first approach to development?",
    "options": {
      "a": "Behavior-Driven Development",
      "b": "Test Level Driven Development",
      "c": "Function-Driven Development",
      "d": "Performance-Driven Development"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "a"
    ],
    "lo": "FL-2.1.3",
    "k_level": "K1",
    "syllabus_section": "2.1.3",
    "syllabus_section_title": "Testing as a Driver for Software Development",
    "syllabus_chapter": "2",
    "syllabus_chapter_title": "Testing Throughout the Software Development Lifecycle",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is correct. Behavior-Driven Development (BDD) is a well-known example of a test-first approach to development",
      "b": "Is not correct. Test Level Driven Development is not a correct example of a test-first approach to development",
      "c": "Is not correct. Function-Driven Development is not a correct example of a test-first approach to development",
      "d": "Is not correct. Performance-Driven Development is not a correct example of a test-first approach to development"
    },
    "diagram": null
  },
  {
    "id": "examD_11",
    "exam": "examD",
    "number": "11",
    "stem": "Which of the following is MOST likely to be a challenge encountered when implementing DevOps?",
    "options": {
      "a": "Making sure that non-functional quality characteristics are not overlooked",
      "b": "Managing continuously changing test environments",
      "c": "The need for more manual testers with suitable experience",
      "d": "Setting up the test automation as part of the delivery pipeline"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "d"
    ],
    "lo": "FL-2.1.4",
    "k_level": "K2",
    "syllabus_section": "2.1.4",
    "syllabus_section_title": "DevOps and Testing",
    "syllabus_chapter": "2",
    "syllabus_chapter_title": "Testing Throughout the Software Development Lifecycle",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. DevOps generally increases the visibility of non-functional quality characteristics, such as performance and reliability",
      "b": "Is not correct. Automated processes like continuous integration/continuous delivery (CI/CD) used in DevOps facilitate stable test environments",
      "c": "Is not correct. Automated processes like CI/CD used in DevOps generally reduce the need for manual testing",
      "d": "Is correct. DevOps implementation can pose several risks and challenges, including the need to define and set up the delivery pipeline, introduce and maintain CI/CD tools, and establish and maintain test automation"
    },
    "diagram": null
  },
  {
    "id": "examD_12",
    "exam": "examD",
    "number": "12",
    "stem": "Which of the following BEST describes retrospectives?",
    "options": {
      "a": "Retrospectives allow team members to identify other team members who did not fully contribute to achieving quality as required by the whole team approach",
      "b": "Retrospectives give testers an opportunity to identify activities that were successful so that these are retained when potential improvements are made in the future",
      "c": "Retrospectives are where agile team members are allowed to voice their concerns about management and customers in a blameless environment",
      "d": "Retrospectives give agile team members a forum where they focus on discussing the plan and technical decisions for the next iteration"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "b"
    ],
    "lo": "FL-2.1.6",
    "k_level": "K2",
    "syllabus_section": "2.1.6",
    "syllabus_section_title": "Retrospectives and Process Improvement",
    "syllabus_chapter": "2",
    "syllabus_chapter_title": "Testing Throughout the Software Development Lifecycle",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. The benefits of retrospectives include team bonding and learning from sharing issues, and better collaboration between developers and testers through reviewing and improving working practices. Calling out individuals who a team member may feel did not fully contribute to achieving quality as required by the whole team approach will not contribute to this team bonding and collaboration",
      "b": "Is correct. During the retrospective, the group discusses what aspects of the project were successful and should be retained, as well as areas that could be improved, and how to do so",
      "c": "Is not correct. The benefits of retrospectives are based on increased effectiveness and efficiency through process improvements; they are not an opportunity to let off steam and criticize management and customers. Also, the test results are recorded, usually in the test completion report, so anything said in the meeting could be read by other stakeholders",
      "d": "Is not correct. Retrospectives are meetings that are typically held at the end of an iteration where team members will focus on discussing quality-related issues that have occurred in the current iteration. They are not used for making plans or technical decisions for the next iteration; this would be done in the iteration planning meeting at the start of the next iteration"
    },
    "diagram": null
  },
  {
    "id": "examD_13",
    "exam": "examD",
    "number": "13",
    "stem": "Which of the following tests is MOST likely to be performed as part of functional testing?",
    "options": {
      "a": "The test checks that the sort function puts the elements of the list or array in ascending order",
      "b": "The test checks whether the sort function completes sorting within one second of starting",
      "c": "The test checks how easily the sort function can be changed from sorting ascending to sorting descending",
      "d": "The test checks that the sort function still functions correctly when moved from a 32-bit to a 64-bit architecture"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "a"
    ],
    "lo": "FL-2.2.2",
    "k_level": "K2",
    "syllabus_section": "2.2.2",
    "syllabus_section_title": "Test Types",
    "syllabus_chapter": "2",
    "syllabus_chapter_title": "Testing Throughout the Software Development Lifecycle",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is correct. Checking that the sort function puts the elements of the list or array in ascending order is evaluating the functional correctness of the sort function, which is part of functional testing",
      "b": "Is not correct. Assessing whether the sort function meets its non- functional requirement to complete within one second is part of testing its performance efficiency, which is part of non-functional testing",
      "c": "Is not correct. Evaluating the ease with which the sort function can be modified from sorting ascending to sorting descending is testing its modifiability, a form of non-functional maintainability testing, which is part of non-functional testing",
      "d": "Is not correct. Assessing that the sort function still functions correctly when moved from a 32-bit to a 64-bit architecture is testing its adaptability, a form of portability testing, which is part of non-functional testing"
    },
    "diagram": null
  },
  {
    "id": "examD_14",
    "exam": "examD",
    "number": "14",
    "stem": "Which of the following is MOST likely to be a trigger that leads to maintenance testing of a\ncurrency exchange system?",
    "options": {
      "a": "The developers reported that changing the currency exchange system was difficult and the testers decided to check if this was true",
      "b": "The refund option of the currency exchange system was removed as it did not always repay the correct amount to customers",
      "c": "The agile team has started developing a user story that adds a new customer loyalty feature to the currency exchange system",
      "d": "The language support option of the currency exchange system was used to enable both English and local language currency transactions"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "b"
    ],
    "lo": "FL-2.3.1",
    "k_level": "K2",
    "syllabus_section": "2.3.1",
    "syllabus_section_title": "Maintenance Testing",
    "syllabus_chapter": "2",
    "syllabus_chapter_title": "Testing Throughout the Software Development Lifecycle",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. Assuming that testers could check the ease of changing the currency exchange system then it would be done by maintainability testing rather than maintenance testing, so this is not a trigger for maintenance testing",
      "b": "Is correct. A system modification (such as a fix or enhancement) is an example of a trigger for maintenance testing. The removal of the refund option of the currency exchange system was a fix that would lead to maintenance testing",
      "c": "Is not correct. If the agile team has started developing a user story that adds a new customer loyalty feature to the currency exchange system, then this will result in them testing the new feature, and then they would perform regression testing. No maintenance testing is required in this situation",
      "d": "Is not correct. Reconfiguration of the currency exchange system to support both the local language and English currency transactions is not a system modification, a change to the operational environment, or a system retirement, which are the three triggers for maintenance testing"
    },
    "diagram": null
  },
  {
    "id": "examD_15",
    "exam": "examD",
    "number": "15",
    "stem": "Which of the following CANNOT be examined by static testing?",
    "options": {
      "a": "Contract",
      "b": "Test plan",
      "c": "Encrypted code",
      "d": "Test charter"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "c"
    ],
    "lo": "FL-3.1.1",
    "k_level": "K1",
    "syllabus_section": "3.1.1",
    "syllabus_section_title": "Work Products Examinable by Static Testing",
    "syllabus_chapter": "3",
    "syllabus_chapter_title": "Static Testing",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. Most work products can be examined using some form of static testing, and a contract must be interpretable by humans and so could be reviewed, which is a form of static testing",
      "b": "Is not correct. Most work products can be examined using some form of static testing, and a test plan must be interpretable by humans and so could be reviewed, which is a form of static testing",
      "c": "Is correct. Most work products can be examined using some form of static testing; however it is not suitable for work products that are too complex for human interpretation and should not be analyzed by tools, and encrypted code is too complex for humans and if it is properly encrypted it will not be analyzable by most tools",
      "d": "Is not correct. Most work products can be examined using some form of static testing, and a test charter must be interpretable by humans and so could be reviewed, which is a form of static testing"
    },
    "diagram": null
  },
  {
    "id": "examD_16",
    "exam": "examD",
    "number": "16",
    "stem": "Which of the following statements about the value of static testing is CORRECT?",
    "options": {
      "a": "The defect types found by static testing are different from the defect types that can be found by dynamic testing",
      "b": "Dynamic testing can detect the defect types that can be found by static testing plus some additional defect types",
      "c": "Dynamic testing can identify some of the defects that can be found by static testing but not all of them",
      "d": "Static testing can identify the defect types that can be found by dynamic testing as well as some extra defect types"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "c"
    ],
    "lo": "FL-3.1.2",
    "k_level": "K2",
    "syllabus_section": "3.1.2",
    "syllabus_section_title": "Value of Static Testing",
    "syllabus_chapter": "3",
    "syllabus_chapter_title": "Static Testing",
    "rationale_preamble": "Some defect types that can only be detected by static testing, such as unreachable code, design patterns not implemented as desired and defects in non-executable work products. Some defect types that can be found by both static testing and dynamic testing, such as a programming defect that can be observed by a reviewer in a code review and which causes an observable failure during dynamic testing. And some defect types that can only be detected by dynamic testing, such as performance issues or memory issues that can only be observed when executing the code or system. Thus:",
    "rationale_by_option": {
      "a": "Is not correct",
      "b": "Is not correct",
      "c": "Is correct",
      "d": "Is not correct"
    },
    "diagram": null
  },
  {
    "id": "examD_17",
    "exam": "examD",
    "number": "17",
    "stem": "Given the following descriptions of review activities:\n           1. Detected anomalies are deliberated upon, and determinations are reached\n               regarding their status, ownership, and any further steps needed\n           2. Defects are recorded, and any needed updates are addressed prior to the\n               acceptance of the work product\n           3. Reviewers employ techniques to come up with suggestions and questions about the\n               work product and to spot anomalies\n           4. The objective of the review and its schedule are established to ensure a focused\n               and efficient review\n           5. Participants are provided with access to the item being reviewed\nWhich of the following is the CORRECT sequence in the review process of the activities that\ncorrespond to the descriptions?",
    "options": {
      "a": "4–3–5–2–1",
      "b": "4–5–3–1–2",
      "c": "5–4–1–3–2",
      "d": "5–4–3–2–1"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "b"
    ],
    "lo": "FL-3.2.2",
    "k_level": "K2",
    "syllabus_section": "3.2.2",
    "syllabus_section_title": "Review Process Activities",
    "syllabus_chapter": "3",
    "syllabus_chapter_title": "Static Testing",
    "rationale_preamble": "The five listed descriptions and the corresponding review process activities are: 1. This describes part of the ‘communication and analysis’ activity 2. This describes part of the ‘fixing and reporting’ activity 3. This describes part of the ‘individual review’ activity 4. This describes part of the ‘planning’ activity 5. This describes part of the ‘review initiation’ activity The generic review process from ISO/IEC 20246, which is outlined in the syllabus, comprises the following activities in this logical order: • Planning (4) • Review initiation (5) • Individual review (3) • Communication and analysis (1) • Fixing and reporting (2) Thus:",
    "rationale_by_option": {
      "a": "Is not correct",
      "b": "Is correct. The correct sequence of activities is: 4 – 5 – 3 – 1 – 2",
      "c": "Is not correct",
      "d": "Is not correct"
    },
    "diagram": null
  },
  {
    "id": "examD_18",
    "exam": "examD",
    "number": "18",
    "stem": "Which participant in the review process is responsible for ensuring that the review meetings run\neffectively and that everyone at the meetings can voice their opinions freely?",
    "options": {
      "a": "Manager",
      "b": "Moderator",
      "c": "Chairperson",
      "d": "Review Leader"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "b"
    ],
    "lo": "FL-3.2.3",
    "k_level": "K1",
    "syllabus_section": "3.2.3",
    "syllabus_section_title": "Roles and Responsibilities in Reviews",
    "syllabus_chapter": "3",
    "syllabus_chapter_title": "Static Testing",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. The manager is responsible for deciding what needs to be reviewed and allocating resources, such as staff and time, for the review",
      "b": "Is correct. The moderator (or facilitator) is responsible for ensuring that the review meetings run effectively, including managing time, mediating discussions, and creating a safe environment where everyone can voice their opinions freely",
      "c": "Is not correct. The chairperson is not a recognized role in reviews",
      "d": "Is not correct. The review leader is responsible for overseeing the review process, such as selecting the review team members, scheduling review meetings, and ensuring that the review is completed successfully"
    },
    "diagram": null
  },
  {
    "id": "examD_19",
    "exam": "examD",
    "number": "19",
    "stem": "You perform system testing of an e-commerce web application and are provided with the following\nrequirement:\n           REQ 05-017. If the total cost of purchases exceeds $100, the customer gets a 5%\n           discount on subsequent purchases. Otherwise, the customer does not receive a\n           discount.\n\nWhich test techniques will be MOST helpful in designing test cases based on this requirement?",
    "options": {
      "a": "White-box test techniques",
      "b": "Black-box test techniques",
      "c": "Experience-based test techniques",
      "d": "Risk-based test techniques"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "b"
    ],
    "lo": "FL-4.1.1",
    "k_level": "K2",
    "syllabus_section": "4.1.1",
    "syllabus_section_title": "Test Techniques Overview",
    "syllabus_chapter": "4",
    "syllabus_chapter_title": "Test Analysis and Design",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. The document does not refer to the test object’s internal structure but specifies the desired behavior of the test object. Therefore, white-box test techniques will not be helpful in designing test cases",
      "b": "Is correct. The document is a requirement that specifies the desired behavior of the test object. Therefore, the most suitable test techniques in this case are the black-box test techniques (e.g., Boundary Value Analysis or Decision Table Testing)",
      "c": "Is not correct. Although experience-based test techniques can be used to design test cases based on this document, black-box test techniques will be more suitable. The document describes a precise business rule and, in addition, wording like \"exceeds $100\" suggests the existence of important equivalence partition boundaries that should be tested using black-box test techniques like Boundary Value Analysis",
      "d": "Is not correct. Risk-based test techniques are not a recognized type of test technique"
    },
    "diagram": null
  },
  {
    "id": "examD_20",
    "exam": "examD",
    "number": "20",
    "stem": "The system for selling cinema tickets calculates the discount type based on the client’s birth year\n(BY) and on the current year (CY) as follows:\n\nLet D be the difference between CY and BY, that is, D = CY – BY\n           • If D < 0            then print the error message “birth year cannot be greater than\n               current year”\n           • If 0 ≤ D < 18       then apply the student discount\n           • If 18 ≤ D < 65      then apply no discount\n           • If D ≥ 65           then apply the pensioner discount\nYour test suite already contains two test cases:\n           • BY = 1990, CY = 2020,            expected result: no discount\n           • BY = 2030, CY = 2029,            expected result: print the error message\nWhich of the following test data sets should be added to achieve full valid equivalence partitioning\ncoverage for the discount type?",
    "options": {
      "a": "BY = 2001, CY = 2065",
      "b": "BY = 1900, CY = 1965",
      "c": "BY = 1965, CY = 1900",
      "d": "BY = 2011, CY = 2029",
      "e": "BY = 2000, CY = 2000"
    },
    "select_instruction": "Select TWO option",
    "points": 1,
    "correct": [
      "b",
      "e"
    ],
    "lo": "FL-4.2.1",
    "k_level": "K3",
    "syllabus_section": "4.2.1",
    "syllabus_section_title": "Equivalence Partitioning",
    "syllabus_chapter": "4",
    "syllabus_chapter_title": "Test Analysis and Design",
    "rationale_preamble": "There are two equivalence partitions that are not yet covered, which correspond to “student discount” and “pensioner discount”.",
    "rationale_by_option": {
      "a": "Is not correct. CY – BY = 64, so these inputs correspond to the already covered “no discount” partition",
      "b": "Is correct. CY – BY = 65, so these inputs correspond to a partition that is not yet covered (“pensioner discount”)",
      "c": "Is not correct. CY – BY = –65, so these inputs correspond to the already covered “error message” partition",
      "d": "Is not correct. CY – BY = 18, so these inputs correspond to the already covered “no discount” partition",
      "e": "Is correct. CY – BY = 0, so these inputs correspond to a partition that is not yet covered (“student discount”)"
    },
    "diagram": null
  },
  {
    "id": "examD_21",
    "exam": "examD",
    "number": "21",
    "stem": "You are testing a temperature control system for a horticultural cold storage facility. The system\nreceives the temperature (in full degrees Celsius) as the input. If the temperature is between 0 and\n2 degrees inclusive, the system displays the message “temperature OK”. For lower temperatures,\nthe system displays the message \"temperature too low\" and for higher temperatures it displays the\nmessage “temperature too high”.\n\nUsing two-value boundary value analysis, which of the following sets of test inputs provides the\nhighest level of boundary value coverage?",
    "options": {
      "a": "–1, 3",
      "b": "0, 2",
      "c": "–1, 0, 2, 3",
      "d": "–2, 0, 2, 4"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "c"
    ],
    "lo": "FL-4.2.2",
    "k_level": "K3",
    "syllabus_section": "4.2.2",
    "syllabus_section_title": "Boundary Value Analysis",
    "syllabus_chapter": "4",
    "syllabus_chapter_title": "Test Analysis and Design",
    "rationale_preamble": "There are three equivalence partitions: {…, –2, –1}, {0, 1, 2}, {3, 4, …}. For 2-value BVA all the boundary values for all the equivalence partitions must be covered. The boundary values are –1 (for the “temperature too low” partition), 0, 2 (for the “temperature OK” partition) and 3 (for the “temperature too high” partition). Thus:",
    "rationale_by_option": {
      "a": "Is not correct",
      "b": "Is not correct",
      "c": "Is correct. The correct option is: –1, 0, 2, 3",
      "d": "Is not correct"
    },
    "diagram": null
  },
  {
    "id": "examD_22",
    "exam": "examD",
    "number": "22",
    "stem": "You are designing test cases based on the following decision table.\n\n                                                         R1      R2        R3          R4   R5      R6     R7\n                                  C1: Age                0-18   19-65     19-65    >65      0-18   19-65   >65\n                      C2: Experience                      -      0-4        >4         -     -       -      -\n                     C3: Registered?                     NO      NO        NO          NO   YES    YES     YES\n                                 Category                 A      A          B          B     B      D      C\n\nSo far you have designed the following test cases:\n           • TC1: 19-year-old, unregistered man with no experience;\n              expected result: category A\n           • TC2: 65-year-old, unregistered woman with 5 years of experience;\n              expected result: category B\n           • TC3: 66-year-old, registered man with no experience;\n              expected result: category C\n           • TC4: 65-year-old, registered woman with 4 years of experience;\n              expected result: category D\nWhich of the following test cases, when added to the existing set of test cases, will increase the\ndecision table coverage?",
    "options": {
      "a": "66-year-old, unregistered man with no experience; expected result: category B",
      "b": "55-year-old, unregistered woman with 2 years of experience; expected result: category A",
      "c": "19-year-old, registered woman with 5 years of experience; expected result: category D",
      "d": "No additional test case can increase the already achieved decision table coverage"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "a"
    ],
    "lo": "FL-4.2.3",
    "k_level": "K3",
    "syllabus_section": "4.2.3",
    "syllabus_section_title": "Decision Table Testing",
    "syllabus_chapter": "4",
    "syllabus_chapter_title": "Test Analysis and Design",
    "rationale_preamble": "Test cases TC1, TC2, TC3 and TC4 cover, respectively, rules R2, R3, R7 and R6 in the decision table.",
    "rationale_by_option": {
      "a": "Is correct. The conditions “66-year-old”, “unregistered” and “no experience” match rule R4, which is not covered by the existing test cases, so after adding this test case, the decision table coverage will increase",
      "b": "Is not correct. The conditions “55-year-old”, “unregistered” and “2 years of experience” match rule R2, already covered by TC1. So adding this test case will not increase the coverage",
      "c": "Is not correct. The conditions “19-year-old”, “registered” and “5 years of experience” match rule R6, already covered by TC4. So adding this test case will not increase the coverage",
      "d": "Is not correct. The existing test cases cover only 4 out of 7 columns of the decision table. The coverage can be increased by adding test cases that cover yet uncovered columns, that is, R1, R4 and R5"
    },
    "diagram": null
  },
  {
    "id": "examD_23",
    "exam": "examD",
    "number": "23",
    "stem": "You are applying state transition testing to the hotel room reservation system modeled by the\nfollowing state transition table, with 4 states and 5 different events:\n\n                                                                            Events\n           State                    Available            NotAvailable   ChangeRoom   Cancel   Pay\nS1: Requesting                            S2                 S3\nS2: Confirmed                                                                S1       S4      S4\nS3: Waiting list                          S2                                          S4\nS4: End\n\nAssuming all test cases start in the ‘Requesting’ state, which of the following test cases,\nrepresented as sequences of events, achieves the highest valid transitions coverage?",
    "options": {
      "a": "NotAvailable, Available, ChangeRoom, NotAvailable, Cancel",
      "b": "Available, ChangeRoom, NotAvailable, Available, Pay",
      "c": "Available, ChangeRoom, Available, ChangeRoom, NotAvailable",
      "d": "NotAvailable, Cancel, ChangeRoom, Available, Pay"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "b"
    ],
    "lo": "FL-4.2.4",
    "k_level": "K3",
    "syllabus_section": "4.2.4",
    "syllabus_section_title": "State Transition Testing",
    "syllabus_chapter": "4",
    "syllabus_chapter_title": "Test Analysis and Design",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. This sequence of five events covers 4 different valid transitions (both “NotAvailable” events correspond to the same transition between S1 and S3). This test case covers 4 out of 7 valid transitions",
      "b": "Is correct. This sequence of five events covers 5 different transitions (the first “Available” event corresponds to a transition between S1 and S2, and the second “Available” event corresponds to a transition between S3 and S2, so two different transitions are covered). This test case covers 5 out of 7 valid transitions and achieves the highest valid transitions coverage",
      "c": "Is not correct. This sequence of five events covers 3 different transitions (both “Available” events correspond to the same transition from S1 to S2; both “ChangeRoom” events correspond to the same transition from S2 to S1). This test case covers 3 out of 7 valid transitions",
      "d": "Is not correct. This sequence of five events does not represent a feasible test case, because after “Cancel” the system ends up in the End state and no further valid transitions can be executed"
    },
    "diagram": null
  },
  {
    "id": "examD_24",
    "exam": "examD",
    "number": "24",
    "stem": "Your test suite S for a program P achieves 100% statement coverage. It consists of three test\ncases, each of which achieves 50% statement coverage.\n\nWhich of the following statements is CORRECT?",
    "options": {
      "a": "Executing S will cause all possible failures in P",
      "b": "S achieves 100% branch coverage for P",
      "c": "Every executable statement in P containing a defect has been run at least once during the execution of S",
      "d": "After removing one test case from S, the remaining two test cases will still achieve 100% statement coverage"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "c"
    ],
    "lo": "FL-4.3.1",
    "k_level": "K2",
    "syllabus_section": "4.3.1",
    "syllabus_section_title": "Statement Testing and Statement Coverage",
    "syllabus_chapter": "4",
    "syllabus_chapter_title": "Test Analysis and Design",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. A statement with a defect, when executed, does not have to cause a failure. For example, a statement x := y / z will cause a failure only when z equals 0",
      "b": "Is not correct. 100% statement coverage does not guarantee 100% branch coverage. For example, a test case with x=0 for the code 1. IF (x=0) THEN 2. A; 3. ENDIF achieves 100% statement coverage but does not cover the branch from 1 to 3",
      "c": "Is correct. 100% statement coverage means that each executable statement was executed at least once",
      "d": "Is not correct. The removed test case may provide coverage of some statements that are not covered by either of the other two test cases, in which case the remaining two test cases together will not achieve 100% statement coverage"
    },
    "diagram": null
  },
  {
    "id": "examD_25",
    "exam": "examD",
    "number": "25",
    "stem": "Why does white-box testing facilitate defect detection even when the software specification is\nvague, outdated or incomplete?",
    "options": {
      "a": "Test cases are designed based on the structure of the test object rather than the specification",
      "b": "For each white-box test technique the coverage can be well-defined and easily measured",
      "c": "White-box test techniques are very well designed to detect omissions in the requirements",
      "d": "White-box test techniques can be used in both static testing and dynamic testing"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "a"
    ],
    "lo": "FL-4.3.3",
    "k_level": "K2",
    "syllabus_section": "4.3.3",
    "syllabus_section_title": "The Value of White-box Testing",
    "syllabus_chapter": "4",
    "syllabus_chapter_title": "Test Analysis and Design",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is correct. A fundamental strength that all white-box test techniques share is that the entire software implementation is taken into account during testing, which facilitates defect detection even when the software specification is vague, outdated or incomplete. This means white-box testing can find defects such as an extra feature added to the code (either accidentally or deliberately) that is not supposed to be there, which black-box testing cannot detect",
      "b": "Is not correct. The fact that the coverage can be precisely defined is not the right reason. The achieved level of coverage would have much more impact than the possibility to measure the coverage",
      "c": "Is not correct. If the software does not implement one or more requirements, white-box testing is unlikely to detect the resulting defects of omission",
      "d": "Is not correct. While this is true, this is not the right answer, because there is no connection between the capability to be used in both static testing and dynamic testing and the claim that white-box testing facilitates defect detection with poor specifications"
    },
    "diagram": null
  },
  {
    "id": "examD_26",
    "exam": "examD",
    "number": "26",
    "stem": "Which of the following is NOT anticipated by the tester while applying error guessing?",
    "options": {
      "a": "The developer misunderstood the formula in the user story for calculating the interest",
      "b": "The developer wrote “FA = A*(1+IR^N)” instead of “FA = A*(1+IR)^N” in the source code",
      "c": "The developer missed the seminar on new compound interest rate legislation",
      "d": "The accuracy of the interest calculated by the system is not precise enough"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "c"
    ],
    "lo": "FL-4.4.1",
    "k_level": "K2",
    "syllabus_section": "4.4.1",
    "syllabus_section_title": "Error Guessing",
    "syllabus_chapter": "4",
    "syllabus_chapter_title": "Test Analysis and Design",
    "rationale_preamble": "Error guessing is about anticipating the errors, defects and failures based on the tester’s knowledge.",
    "rationale_by_option": {
      "a": "Is not correct. This is an example of anticipating the developer’s error",
      "b": "Is not correct. This is an example of anticipating the defect",
      "c": "Is correct. This is an example of a potential root cause of a defect, which is neither an error, defect nor failure, and difficult for the tester to anticipate",
      "d": "Is not correct. This is an example of anticipating a failure, perhaps based on experience of previous systems in this application domain"
    },
    "diagram": null
  },
  {
    "id": "examD_27",
    "exam": "examD",
    "number": "27",
    "stem": "Which of the following is true about exploratory testing?",
    "options": {
      "a": "Test cases are designed before the exploratory testing session starts",
      "b": "The tester can perform test execution, but cannot perform test design",
      "c": "Exploratory testing results are good predictors of the number of remaining defects",
      "d": "During exploratory testing the tester may use black-box test techniques"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "d"
    ],
    "lo": "FL-4.4.2",
    "k_level": "K2",
    "syllabus_section": "4.4.2",
    "syllabus_section_title": "Exploratory Testing",
    "syllabus_chapter": "4",
    "syllabus_chapter_title": "Test Analysis and Design",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. In exploratory testing, test cases are usually created during the exploratory testing session, alongside test analysis, test implementation and test execution",
      "b": "Is not correct. In exploratory testing, tests are simultaneously designed, executed, and evaluated while the tester learns about the test object",
      "c": "Is not correct. Exploratory test results depend heavily on the tester’s experience. So, even if the test results of exploratory testing can be used as a predictor of risk and used to assess whether there will be fewer or more defects, compared to the previous exploratory testing session, they are not a good example of reliable defect prediction models that can predict the number of remaining defects",
      "d": "Is correct. During exploratory testing, the testers can use any test techniques that they find useful"
    },
    "diagram": null
  },
  {
    "id": "examD_28",
    "exam": "examD",
    "number": "28",
    "stem": "Which collaborative user story writing practice enables the team to achieve a collective\nunderstanding of what needs to be delivered?",
    "options": {
      "a": "Planning poker, so that a team can achieve consensus on the effort needed to implement a user story",
      "b": "Reviews, so that a team can detect inconsistencies and contradictions in a user story",
      "c": "Iteration planning, so that user stories with the highest business value for a customer can be prioritized for implementation",
      "d": "Conversation, so that team members can understand how the software will be used"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "d"
    ],
    "lo": "FL-4.5.1",
    "k_level": "K2",
    "syllabus_section": "4.5.1",
    "syllabus_section_title": "Collaborative User Story Writing",
    "syllabus_chapter": "4",
    "syllabus_chapter_title": "Test Analysis and Design",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. Planning poker can estimate effort for a user story that is already written. It does not help in understanding what should be delivered",
      "b": "Is not correct. Reviews are not a collaborative user story writing practice",
      "c": "Is not correct. Iteration planning is a project-related practice, used to plan the work, not to understand what needs to be delivered",
      "d": "Is correct. Conversation explains how the software will be used and often allows the team to define meaningful acceptance criteria, thus obtaining a shared vision of what should be delivered"
    },
    "diagram": null
  },
  {
    "id": "examD_29",
    "exam": "examD",
    "number": "29",
    "stem": "You have just started designing test cases for the following user story.\n\n As a customer,\n I want to be able to filter search results by price range, so that I can find products within my\n budget more easily.\n Acceptance criteria:\n             1. The filter should work for all versions of the application from version 3.0\n                upwards\n             2. The filter should allow the customer to set a price range with a minimum\n                and a maximum price\n             3. The search results should update dynamically as the customer adjusts the\n                price range filter\nIn all test cases the precondition is as follows: there are only two products available, products A\nand B. Product A costs $100 and product B costs $110.\n\nWhich of the following is the BEST example of a test case for this user story?",
    "options": {
      "a": "Enter webpage and set filter to show prices between $90 and $100. Expected result: results show product A only. Set maximum price to $110. Expected result: results now include both products A and B",
      "b": "Enter webpage. Expected result: the default minimum and maximum prices are $100 and $110 respectively. Add product C to stock, with price $120. Refresh the client’s webpage. Expected result: the default maximum price changes to $120",
      "c": "Enter webpage and set filter to show prices between $90 and $115. Expected result: results show both products A and B. Change currency from USD to EUR. Expected result: the filter range changes correctly to EUR values, according to the current exchange rate",
      "d": "Enter webpage with three different browsers: Edge, Chrome and Opera. In each browser set filter between $90 and $110. Expected result: results include both products A and B and the results layout is the same in all three browsers"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "a"
    ],
    "lo": "FL-4.5.3",
    "k_level": "K3",
    "syllabus_section": "4.5.3",
    "syllabus_section_title": "Acceptance Test-driven Development (ATDD)",
    "syllabus_chapter": "4",
    "syllabus_chapter_title": "Test Analysis and Design",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is correct. This test case is related to acceptance criteria 2 and 3, because we check if we can set price range (acceptance criterion 2) and if the results update dynamically after adjusting the price range filter (acceptance criterion 3)",
      "b": "Is not correct. This test case is not related to any of the acceptance criteria. It checks if the filter dynamically sets the default minimum and maximum price range, and not that a customer can do it",
      "c": "Is not correct. This test case is not related to any of the acceptance criteria. It checks the currency exchange feature, which is not discussed in this user story",
      "d": "Is not correct. This test case is not related to any of the acceptance criteria. It checks the application’s compatibility with different browsers, which is not discussed in this user story"
    },
    "diagram": null
  },
  {
    "id": "examD_30",
    "exam": "examD",
    "number": "30",
    "stem": "Which of the following BEST define EXIT criteria in a testing project?",
    "options": {
      "a": "Budget is approved",
      "b": "Budget runs out",
      "c": "Test basis is available",
      "d": "Test cases achieved at least 80% statement coverage",
      "e": "All test analysts are ISTQB certified at the Foundation Level"
    },
    "select_instruction": "Select TWO option",
    "points": 1,
    "correct": [
      "b",
      "d"
    ],
    "lo": "FL-5.1.3",
    "k_level": "K2",
    "syllabus_section": "5.1.3",
    "syllabus_section_title": "Entry Criteria and Exit Criteria",
    "syllabus_chapter": "5",
    "syllabus_chapter_title": "Managing the Test Activities",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. The approval of the budget is an example of an entry criterion. It would make no sense to approve the budget for some activity that has already been done",
      "b": "Is correct. Running out of budget can be viewed as a valid exit criterion",
      "c": "Is not correct. Availability of resources is an example of an entry criterion for testing",
      "d": "Correct. Coverage is a measure of thoroughness, so it is a typical exit criterion",
      "e": "Is not correct. This is an example of an entry criterion, checked before the project starts"
    },
    "diagram": null
  },
  {
    "id": "examD_31",
    "exam": "examD",
    "number": "31",
    "stem": "The team wants to estimate the time needed for one tester to execute four test cases for a\nsoftware component. The team has gathered the following measures of the effort used to execute\na single test case:\n           • Best-case scenario:       1 hour\n           • Worst-case scenario:      8 hours\n           • Most likely scenario:     3 hours\n\nGiven that the three-point estimation technique is being used, what is the final estimate of the time\nneeded to execute all four test cases?",
    "options": {
      "a": "14 hours",
      "b": "3.5 hours",
      "c": "16 hours",
      "d": "12 hours"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "a"
    ],
    "lo": "FL-5.1.4",
    "k_level": "K3",
    "syllabus_section": "5.1.4",
    "syllabus_section_title": "Estimation Techniques",
    "syllabus_chapter": "5",
    "syllabus_chapter_title": "Managing the Test Activities",
    "rationale_preamble": "Using the three-point estimation technique, the final estimate (E) is calculated as: E = (a + 4*m + b) / 6, where a is the most optimistic estimate, m is the most likely estimate, and b is the most pessimistic estimate. Thus:",
    "rationale_by_option": {
      "a": "Is correct. In this case, the estimate for executing a single test case is: E = (1h + 4*3h + 8h) / 6 = 3.5 hours So, the total time needed for the tester to execute 4 test cases is: 3.5h * 4 = 14 hours",
      "b": "Is not correct",
      "c": "Is not correct",
      "d": "Is not correct"
    },
    "diagram": null
  },
  {
    "id": "examD_32",
    "exam": "examD",
    "number": "32",
    "stem": "The table shows the traceability matrix from test cases to requirements. “X” means that a given test\ncase covers the corresponding requirement.\n\n                         Req1          Req2              Req3   Req4    Req5    Req6     Req7\n            TC1             X                             X      X                        X\n            TC2             X                                             X               X\n            TC3                                                           X          X\n            TC4                            X\nYou want to prioritize the test cases following the additional coverage prioritization technique.\n\nYou execute all four test cases.\n\nWhich test case should be executed as the LAST one?",
    "options": {
      "a": "TC1",
      "b": "TC2",
      "c": "TC3",
      "d": "TC4"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "b"
    ],
    "lo": "FL-5.1.5",
    "k_level": "K3",
    "syllabus_section": "5.1.5",
    "syllabus_section_title": "Test Case Prioritization",
    "syllabus_chapter": "5",
    "syllabus_chapter_title": "Managing the Test Activities",
    "rationale_preamble": "TC1 achieves the highest coverage (4/7 – Req1, Req3, Req4 and Req7), so should be executed first. Req2, Req5 and Req6 are still not covered. The next test case that achieves the highest additional coverage of the remaining requirements is TC3, covering 2 out of these 3 requirements (Req5 and Req6). So, TC3 should be executed as the second one. Now the only requirement still not covered is Req2, which is covered by TC4. Therefore, TC4 should be executed as the third test case. So, the last test case executed will be TC2. Thus:",
    "rationale_by_option": {
      "a": "Is not correct",
      "b": "Is correct",
      "c": "Is not correct",
      "d": "Is not correct"
    },
    "diagram": null
  },
  {
    "id": "examD_33",
    "exam": "examD",
    "number": "33",
    "stem": "How can the testing quadrants be beneficial for testing?",
    "options": {
      "a": "They help in test planning by dividing the test process into four phases, corresponding to the four basic test levels: component, integration, system, and acceptance testing",
      "b": "They help in assessing the high-level coverage (e.g., requirements coverage) based on low-level coverage (e.g., code coverage)",
      "c": "They help non-technical stakeholders to understand the different test types and that some test types are more relevant to certain test levels than others",
      "d": "They help agile teams to develop a communication strategy based on classifying people according to four basic psychological types, and on modelling the relations between them"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "c"
    ],
    "lo": "FL-5.1.7",
    "k_level": "K2",
    "syllabus_section": "5.1.7",
    "syllabus_section_title": "Testing Quadrants",
    "syllabus_chapter": "5",
    "syllabus_chapter_title": "Managing the Test Activities",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. Testing quadrants have nothing to do with describing the relationships between test levels",
      "b": "Is not correct. Testing quadrants cannot help in assessing any type of coverage",
      "c": "Is correct. Testing quadrants allow managers and other stakeholders to understand the relationships between test types, the activities they support (team support or product critique), and the viewpoint they are focused on (business- or technology-facing)",
      "d": "Is not correct. Testing quadrants is not a psychological model"
    },
    "diagram": null
  },
  {
    "id": "examD_34",
    "exam": "examD",
    "number": "34",
    "stem": "For a given risk, its risk level is $1,000 and its risk likelihood is estimated as 50%.\n\nWhat is the risk impact?",
    "options": {
      "a": "$500",
      "b": "$2,000",
      "c": "$50,000",
      "d": "$200"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "b"
    ],
    "lo": "FL-5.2.1",
    "k_level": "K1",
    "syllabus_section": "5.2.1",
    "syllabus_section_title": "Risk Definition and Risk Attributes",
    "syllabus_chapter": "5",
    "syllabus_chapter_title": "Managing the Test Activities",
    "rationale_preamble": "Risk assessment can use a quantitative or qualitative approach, or a mix of them. In the quantitative approach the risk level is calculated as the multiplication of risk likelihood and risk impact. So, Risk level = Risk likelihood * Risk impact Then, Risk impact = Risk level / Risk likelihood. In our case, Risk impact = $1,000 / 50% = $1,000 / 0.5 = $2,000. Thus:",
    "rationale_by_option": {
      "a": "Is not correct",
      "b": "Is correct",
      "c": "Is not correct",
      "d": "Is not correct"
    },
    "diagram": null
  },
  {
    "id": "examD_35",
    "exam": "examD",
    "number": "35",
    "stem": "Which of the following are product risks?",
    "options": {
      "a": "Scope creep",
      "b": "Poor architecture",
      "c": "Cost-cutting",
      "d": "Poor tool support",
      "e": "Too long response time"
    },
    "select_instruction": "Select TWO option",
    "points": 1,
    "correct": [
      "b",
      "e"
    ],
    "lo": "FL-5.2.2",
    "k_level": "K2",
    "syllabus_section": "5.2.2",
    "syllabus_section_title": "Project Risks and Product Risks",
    "syllabus_chapter": "5",
    "syllabus_chapter_title": "Managing the Test Activities",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. Scope creep is an example of a project risk related to technical issues",
      "b": "Is correct. Poor architecture is an example of a product risk since it refers to a product characteristic",
      "c": "Is not correct. Cost-cutting is an example of a project risk, related to organizational issues",
      "d": "Is not correct. Poor tool support is an example of a project risk related to technical issues",
      "e": "Is correct. Response time that is too long is an example of a product risk since it refers to a product characteristic"
    },
    "diagram": null
  },
  {
    "id": "examD_36",
    "exam": "examD",
    "number": "36",
    "stem": "Which of the following is NOT a valid purpose for a test report?",
    "options": {
      "a": "Tracking test progress and identifying areas that require further attention",
      "b": "Providing information on the tests executed, their results, and defects found",
      "c": "Providing information about each defect, such as the steps to reproduce it",
      "d": "Providing information on testing planned for the next period"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "c"
    ],
    "lo": "FL-5.3.2",
    "k_level": "K2",
    "syllabus_section": "5.3.2",
    "syllabus_section_title": "Purpose, Content and Audience for Test Reports",
    "syllabus_chapter": "5",
    "syllabus_chapter_title": "Managing the Test Activities",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. Tracking test progress and identifying areas that require further attention is an example of supporting the ongoing control of testing. This is one of the purposes of test reports",
      "b": "Is not correct. Providing information on the tests executed, their test results, and any defects found is an example of summarizing the test activities performed at a given test level. This is one of the purposes of test reports",
      "c": "Is correct. Providing information about defects is the purpose of a defect report, not a test report",
      "d": "Is not correct. Providing information on testing planned for the next period is one of the purposes of test reports"
    },
    "diagram": null
  },
  {
    "id": "examD_37",
    "exam": "examD",
    "number": "37",
    "stem": "The user reported a software failure. An engineer from the support team asked the user for the\nsoftware version number where the failure was observed. Based on the version number, the team\nreassembled all the files that made up the release. This later allowed a developer to perform\nanalysis, find the defect, and fix it.\n\nWhich of the following enabled the above activity to be performed by the team?",
    "options": {
      "a": "Risk management",
      "b": "Test monitoring and control",
      "c": "Whole team approach",
      "d": "Configuration management"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "d"
    ],
    "lo": "FL-5.4.1",
    "k_level": "K2",
    "syllabus_section": "5.4.1",
    "syllabus_section_title": "Configuration Management",
    "syllabus_chapter": "5",
    "syllabus_chapter_title": "Managing the Test Activities",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. Risk management consists of risk analysis and risk control. Neither of these activities supports the reassembly of the files that made up the release, because these activities deal with risks, not with configuration items",
      "b": "Is not correct. Test monitoring is concerned with gathering information about testing. This information is used to assess test progress and to measure whether the exit criteria or the test tasks associated with the exit criteria are satisfied, such as meeting the targets for coverage of product risks, requirements, or other acceptance criteria. Test control uses the information from test monitoring to provide, in the form of control directives, guidance and the necessary corrective actions to achieve the most effective and efficient testing. None of these activities deal with the management of configuration items",
      "c": "Is not correct. The whole team approach builds on the tester’s skill to work effectively in a team context and to contribute positively to the team goals. So, it focuses on team-related issues, not on configuration items",
      "d": "Is correct. Configuration management provides a discipline for identifying, controlling, and tracking work products. Configuration management keeps a record of changed configuration items when a new baseline is created. Using configuration management, it is possible to revert to a previous baseline in order to reproduce previous test results"
    },
    "diagram": null
  },
  {
    "id": "examD_38",
    "exam": "examD",
    "number": "38",
    "stem": "Consider the following defect report for a Book Lending System.\n\nDefect ID: 001 | Title: Unable to Return a Book                     |\nSeverity: High | Priority:                                          |\nEnvironment: Windows 10, Google Chrome\n\nDescription: When attempting to return a book using the Book Return feature, the system does\nnot register the return and the book remains checked out to the user.\n\nSteps to Reproduce:\nLogin to the Book Lending System as a user who has checked out a book.\nClick on the \"Book Return\" button for the book that has been checked out.\nSystem does not register the return and the book remains checked out.\n\nExpected Result: The book should be returned and no longer appear as checked out to the user.\nActual Result: The book remains checked out to the user and is not registered as returned in the\nsystem.\n\nAttachments: [empty list]\n\nWhich of the following is MOST likely to help the developer reproduce the failure quickly?",
    "options": {
      "a": "Adding information about which users and which books the failure affects to the “Description” section",
      "b": "Filling in the missing value for the “Priority” field",
      "c": "Adding memory dumps and database snapshots taken after each step described in the “Steps to Reproduce” section to the “Attachments” section.",
      "d": "Repeating the same test case for different environments and writing defect reports for each of them separately"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "a"
    ],
    "lo": "FL-5.5.1",
    "k_level": "K3",
    "syllabus_section": "5.5.1",
    "syllabus_section_title": "Defect Management",
    "syllabus_chapter": "5",
    "syllabus_chapter_title": "Managing the Test Activities",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is correct. Adding this information allows the developer to use the same input data, so it is more likely they will be able to reproduce the failure quickly and so identify the defect faster",
      "b": "Is not correct. Adding the value of Priority will not help in reproducing the defect itself",
      "c": "Is not correct. Although some of this information may be of value, adding the memory dumps and database snapshots after each step will be too much, because most of these artefacts will contain useless information for the developer, and make the defect report less readable. It will also require the developer to spend a lot of time analyzing this information, which will lengthen the repair process",
      "d": "Is not correct. The question was about helping the developer to reproduce the failure for a specific environment configuration"
    },
    "diagram": null
  },
  {
    "id": "examD_39",
    "exam": "examD",
    "number": "39",
    "stem": "Given the following test tool categories:\n          i.   Collaboration tools\n         ii.   DevOps tools\n        iii.   Management tools\n        iv.    Non-functional testing tools\n         v.    Test design and implementation tools\nTools from which of the categories are MOST likely to facilitate test execution?",
    "options": {
      "a": "i, v",
      "b": "ii, iv",
      "c": "i, iii, v",
      "d": "ii, iii, iv"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "b"
    ],
    "lo": "FL-6.1.1",
    "k_level": "K2",
    "syllabus_section": "6.1.1",
    "syllabus_section_title": "Tool Support for Testing",
    "syllabus_chapter": "6",
    "syllabus_chapter_title": "Test Tools",
    "rationale_preamble": "Considering each of the listed tool categories: i. Collaboration tools – facilitate communication. Communication does not include the facilitation of test execution ii. DevOps tools - support the DevOps delivery pipeline, workflow tracking, automated build process(es) and CI/CD. The delivery pipeline and CI/CD both include the facilitation of test execution, such as component testing for CI iii. Management tools – increase the test process efficiency by facilitating management of the SDLC, requirements, tests, defects and configuration. The management of these items does not include the facilitation of test execution iv. Non-functional testing tools – allow the tester to perform non- functional testing that is difficult or impossible to perform manually. Non-functional testing can include both static testing and dynamic testing, including test execution v. Test design and implementation tools – facilitate generation of test cases, test data and test procedures. The generation of this testware does not include the facilitation of test execution Thus:",
    "rationale_by_option": {
      "a": "Is not correct",
      "b": "Is correct. Both DevOps tools (ii) and Non-functional testing tools (iv) facilitate test execution",
      "c": "Is not correct",
      "d": "Is not correct"
    },
    "diagram": null
  },
  {
    "id": "examD_40",
    "exam": "examD",
    "number": "40",
    "stem": "Which of the following is MOST likely to be a risk of test automation?",
    "options": {
      "a": "The detection of additional high-severity defects",
      "b": "Providing measures that are too complicated for humans to derive",
      "c": "Incompatibility with the development platform",
      "d": "Substantially reduced test execution times"
    },
    "select_instruction": "Select ONE option",
    "points": 1,
    "correct": [
      "c"
    ],
    "lo": "FL-6.2.1",
    "k_level": "K1",
    "syllabus_section": "6.2.1",
    "syllabus_section_title": "Benefits and Risks of Test Automation",
    "syllabus_chapter": "6",
    "syllabus_chapter_title": "Test Tools",
    "rationale_preamble": "",
    "rationale_by_option": {
      "a": "Is not correct. The detection of additional high-severity defects would be a benefit of test automation, rather than a risk",
      "b": "Is not correct. The provision of measures that are too complicated for humans to derive themselves is normally considered to be a benefit of test automation",
      "c": "Is correct. If the test automation is incompatible with the development platform, then it will not be able to integrate them, and, for instance, pass test inputs to the test object and receive test results from the test object",
      "d": "Is not correct. Substantially reduced test execution times would normally be considered a benefit that is provided by test automation"
    },
    "diagram": null
  }
];
window.CTFL_GLOSSARY = [
  {
    "term": "A/B testing",
    "version": "2",
    "definition": "A test approach in which two variants of a test object are statistically evaluated to determine which performs better for specified characteristics.",
    "reference": "After ISO 29119-11",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "abnormal end",
    "version": "1",
    "definition": "The unintended termination of the execution of a component or system prior to completion.",
    "reference": "After ISO 24765",
    "synonyms": "abnormal termination",
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "abuse case",
    "version": "1",
    "definition": "A use case in which some actors with malicious intent are causing harm to the system or to other actors.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "acceptance criteria",
    "version": "3",
    "definition": "The criteria that a work product must satisfy to be accepted by the stakeholders.",
    "reference": "After IREB Glossary",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "acceptance test-driven development",
    "version": "1",
    "definition": "A collaboration-based test-first approach that defines acceptance tests in the stakeholders' domain language.",
    "reference": null,
    "synonyms": null,
    "abbreviation": "ATDD",
    "see_also": "specification by example"
  },
  {
    "term": "acceptance testing",
    "version": "2",
    "definition": "A test level that focuses on determining whether to accept the system.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": "user acceptance testing"
  },
  {
    "term": "accessibility",
    "version": "2",
    "definition": "The degree to which a component or system can be used by people with the widest range of characteristics and capabilities to achieve a specified goal in a specified context of use.",
    "reference": null,
    "synonyms": "user assistance",
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "account harvesting",
    "version": "1",
    "definition": "The process of obtaining user account information based on trial and error with the intention of using that information in a security attack.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "accountability",
    "version": "1",
    "definition": "The degree to which the actions of an entity can be traced uniquely to that entity.",
    "reference": "After ISO 25010",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "actual result",
    "version": "1",
    "definition": "The behavior produced/observed when a component or system is tested.",
    "reference": null,
    "synonyms": "actual outcome",
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "ad hoc reviewing",
    "version": "2",
    "definition": "A review technique performed informally without a structured process.",
    "reference": "ISO 20246",
    "synonyms": "ad hoc review",
    "abbreviation": null,
    "see_also": "review technique"
  },
  {
    "term": "ad hoc testing",
    "version": "2",
    "definition": "Informal testing performed without test analysis and test design.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "adaptability",
    "version": "3",
    "definition": "The degree to which a component or system can be adapted to various or evolving hardware, software, or other operational or usage environments.",
    "reference": "After ISO 25010",
    "synonyms": null,
    "abbreviation": null,
    "see_also": "portability"
  },
  {
    "term": "adversarial example",
    "version": "1",
    "definition": "An input to an ML model created by applying small perturbations to a working example that results in the model outputting an incorrect result with high confidence.",
    "reference": "ISO 29119-11",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "adversarial testing",
    "version": "2",
    "definition": "A test technique in which tests are designed based on adversarial examples.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "Agile Manifesto",
    "version": "1",
    "definition": "A statement on the values that underpin Agile software development. The values are: individuals and interactions over processes and tools, working software over comprehensive documentation, customer collaboration over contract negotiation, responding to change over following a plan.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "Agile software development",
    "version": "1",
    "definition": "A group of software development lifecycle models based on iterative incremental development, where requirements and solutions evolve through collaboration between self-organizing cross-functional teams.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": "feature-driven development"
  },
  {
    "term": "Agile test leader",
    "version": "1",
    "definition": "A leadership role that serves agile teams, championing testing and quality at the organizational level.",
    "reference": null,
    "synonyms": "quality coach, agile test manager, quality leader",
    "abbreviation": null,
    "see_also": "test manager, Agile test team leader"
  },
  {
    "term": "Agile test team leader",
    "version": "1",
    "definition": "A role that is responsible for maintaining solution quality within an agile delivery team.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": "Agile test leader"
  },
  {
    "term": "alpha testing",
    "version": "3",
    "definition": "A type of acceptance testing performed in the developer's test environment by roles outside the development organization.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "analytical test strategy",
    "version": "1",
    "definition": "A test strategy whereby the test team analyzes the test basis to identify the test conditions to cover.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "analyzability",
    "version": "2",
    "definition": "The degree to which an assessment can be made for a component or system of either the impact of one or more intended changes, the diagnosis of deficiencies or causes of failures, or the identification of parts to be modified.",
    "reference": "After ISO 25010",
    "synonyms": null,
    "abbreviation": null,
    "see_also": "maintainability"
  },
  {
    "term": "anomaly",
    "version": "1",
    "definition": "A condition that deviates from expectation.",
    "reference": "After ISO 24765",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "anonymization",
    "version": "1",
    "definition": "The irreversible process of removing or altering data so that individuals cannot be identified.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "anti-malware",
    "version": "1",
    "definition": "Software that is used to detect and inhibit malware.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": "malware"
  },
  {
    "term": "API testing",
    "version": "2",
    "definition": "A test approach performed by submitting requests to a test object using its application programming interface.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "application programming interface",
    "version": "1",
    "definition": "A type of interface in which the components or systems involved exchange information in a defined formal structure.",
    "reference": null,
    "synonyms": null,
    "abbreviation": "API",
    "see_also": null
  },
  {
    "term": "appraisal",
    "version": "1",
    "definition": "The activities of measuring and monitoring the quality of a system.",
    "reference": "After ASQ",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "appropriateness recognizability",
    "version": "2",
    "definition": "The degree to which users can recognize whether a component or system is appropriate for their needs.",
    "reference": "After ISO 25010",
    "synonyms": "understandability",
    "abbreviation": null,
    "see_also": "usability"
  },
  {
    "term": "assertion",
    "version": "1",
    "definition": "A Boolean expression that is expected to evaluate to true if and only if the software executes correctly.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "atomic condition",
    "version": "2",
    "definition": "A condition that does not contain logical operators.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "attack",
    "version": "1",
    "definition": "A test approach in which a set of deliberate actions are used to reveal a particular type of defect.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "attack vector",
    "version": "1",
    "definition": "A path or means by which an attacker can gain access to a system for malicious purposes.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "attacker",
    "version": "1",
    "definition": "A person or process that attempts to access data, functions or other restricted areas of the system without authorization, potentially with malicious intent.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": "hacker"
  },
  {
    "term": "audio testing",
    "version": "1",
    "definition": "Testing to determine if the game music and sound effects will engage the user in the game and enhance the game play.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "audit",
    "version": "2",
    "definition": "An independent examination performed by a third party on a work product or process to assess whether it complies with specified criteria.",
    "reference": "After ISO 24765",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "auditability",
    "version": "1",
    "definition": "The degree to which an audit can be performed on a work product or process.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "authentication",
    "version": "1",
    "definition": "A procedure determining whether a person or a process is, in fact, who or what it is declared to be.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": "authorization"
  },
  {
    "term": "authenticity",
    "version": "1",
    "definition": "The degree to which the identity of a subject or resource can be proved to be the one claimed.",
    "reference": "ISO 25010",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "authorization",
    "version": "1",
    "definition": "Permission given to a user or process to access resources.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": "authentication"
  },
  {
    "term": "automated testing",
    "version": "1",
    "definition": "The result of test automation.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "automotive safety integrity level",
    "version": "1",
    "definition": "One of four levels that specify the item's or element's necessary requirements of ISO 26262 and safety measures to avoid an unreasonable residual risk.",
    "reference": "ISO 26262",
    "synonyms": null,
    "abbreviation": "ASIL",
    "see_also": "safety integrity level"
  },
  {
    "term": "automotive SPICE",
    "version": "1",
    "definition": "A process reference model and an associated process assessment model in the automotive industry.",
    "reference": "ISO 33002",
    "synonyms": null,
    "abbreviation": "ASPICE",
    "see_also": null
  },
  {
    "term": "availability",
    "version": "2",
    "definition": "The degree to which a component or system is operational and accessible when required for use.",
    "reference": "After ISO 25010",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "back-to-back testing",
    "version": "2",
    "definition": "A test approach in which a pseudo-oracle is used.",
    "reference": "After ISO 29119-1",
    "synonyms": null,
    "abbreviation": null,
    "see_also": "pseudo-oracle"
  },
  {
    "term": "base choice coverage",
    "version": "1",
    "definition": "The coverage of parameter-value combinations in which each value of a parameter is combined with the base values of all other parameters, for a chosen base value per parameter.",
    "reference": "After Ammann and Offutt",
    "synonyms": null,
    "abbreviation": null,
    "see_also": "combinatorial testing, pairwise coverage, each choice coverage"
  },
  {
    "term": "behavior-based test technique",
    "version": "1",
    "definition": "A black-box test technique in which test conditions are model elements of the state-dependent behavior of a test object.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "behavior-driven development",
    "version": "1",
    "definition": "A collaborative approach to development in which the team is focusing on delivering expected behavior of a component or system for the customer, which forms the basis for testing.",
    "reference": null,
    "synonyms": null,
    "abbreviation": "BDD",
    "see_also": null
  },
  {
    "term": "beta testing",
    "version": "3",
    "definition": "A type of acceptance testing performed at an external site to the developer's test environment by roles outside the development organization.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "black-box test technique",
    "version": "3",
    "definition": "A test technique based on the specification of a component or system.",
    "reference": null,
    "synonyms": "black-box test design technique, specification-based test technique",
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "black-box testing",
    "version": "3",
    "definition": "A test approach based on the specification of a component or system.",
    "reference": null,
    "synonyms": "specification-based testing",
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "botnet",
    "version": "1",
    "definition": "A network of compromised computers, called bots or robots, which is controlled by a third party and used to transmit malware or spam, or to launch attacks.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "boundary value",
    "version": "2",
    "definition": "A minimum or maximum value of an ordered equivalence partition.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "boundary value analysis",
    "version": "3",
    "definition": "A black-box test technique in which the test conditions are boundary values.",
    "reference": null,
    "synonyms": null,
    "abbreviation": "BVA",
    "see_also": "domain testing"
  },
  {
    "term": "branch",
    "version": "2",
    "definition": "A transfer of control between two consecutive nodes in the control flow graph of a test item.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "branch coverage",
    "version": "2",
    "definition": "The coverage of branches in a control flow graph.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "branch testing",
    "version": "1",
    "definition": "A white-box test technique in which the test conditions are branches.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "bug bash",
    "version": "1",
    "definition": "An informal, collaborative cross-functional test session to identify defects.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "bug hunting",
    "version": "1",
    "definition": "A test approach in which gamification and awards for defects found are used as a motivator.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "build verification test",
    "version": "1",
    "definition": "An automated test that validates the integrity of each new build and verifies its key/core functionality, stability, and testability.",
    "reference": null,
    "synonyms": null,
    "abbreviation": "BVT",
    "see_also": null
  },
  {
    "term": "built-in quality",
    "version": "1",
    "definition": "A set of practices to verify that each solution meets quality standards throughout each increment of development, focusing on quality assurance as a shared responsibility.",
    "reference": "After SAFe",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "calculation testing",
    "version": "1",
    "definition": "A test type to determine the functional correctness of calculation formulas.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "canary release",
    "version": "1",
    "definition": "A release approach in which changes are released to a small subset of users allowing validation before rollout.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "Capability Maturity Model Integration",
    "version": "1",
    "definition": "A framework that describes the key elements of an effective product development and maintenance process. The Capability Maturity Model Integration covers best-practices for planning, engineering and managing product development and maintenance.",
    "reference": "CMMI",
    "synonyms": null,
    "abbreviation": "CMMI",
    "see_also": null
  },
  {
    "term": "capacity",
    "version": "1",
    "definition": "The degree to which the maximum limits of a component or system parameter meet requirements.",
    "reference": "After ISO 25010",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "capacity testing",
    "version": "1",
    "definition": "Testing to evaluate the capacity of a system.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "capture/playback",
    "version": "2",
    "definition": "A test automation approach in which inputs to a test object are recorded during manual testing to generate automated test scripts that can be executed later.",
    "reference": null,
    "synonyms": "capture/replay, record/playback",
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "causal loop diagram",
    "version": "1",
    "definition": "A graphical representation used to visualize cause-effect relationships and feedback loops in a system.",
    "reference": "After Sterman",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "cause-effect diagram",
    "version": "1",
    "definition": "A graphical representation used to organize and display the interrelationships of various possible root causes of a problem. Possible causes of a real or potential defect or failure are organized in categories and subcategories in a horizontal tree-structure, with the (potential) defect or failure as the root node.",
    "reference": "After Juran",
    "synonyms": "fishbone diagram, Ishikawa diagram",
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "cause-effect graph",
    "version": "1",
    "definition": "A graphical representation of logical relationships between inputs (causes) and their associated outputs (effects) of a test object.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "certification",
    "version": "1",
    "definition": "The process of confirming that a component, system or person complies with specified requirements.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "checklist-based reviewing",
    "version": "1",
    "definition": "A review technique guided by a list of questions or required attributes.",
    "reference": null,
    "synonyms": "checklist-based review",
    "abbreviation": null,
    "see_also": "review technique"
  },
  {
    "term": "checklist-based testing",
    "version": "3",
    "definition": "An experience-based test technique in which test cases are designed to exercise the items of a checklist.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "classification tree",
    "version": "2",
    "definition": "A tree diagram representing test data domains of a test object.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "classification tree technique",
    "version": "2",
    "definition": "A black-box test technique in which test conditions are derived from a classification tree.",
    "reference": "Grochtmann",
    "synonyms": "classification tree method",
    "abbreviation": null,
    "see_also": "combinatorial testing"
  },
  {
    "term": "closed-loop system",
    "version": "1",
    "definition": "A system in which the controlling action or input is dependent on the output or changes in output.",
    "reference": "Bakshi",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "code injection",
    "version": "1",
    "definition": "A type of security attack performed by inserting malicious code at an interface into an application to exploit poor handling of untrusted data.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "coding standard",
    "version": "2",
    "definition": "A quality standard that defines required characteristics of code.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "coexistence",
    "version": "2",
    "definition": "The degree to which a component or system can perform its required functions while sharing an environment and resources with other components or systems without a negative impact on any of them.",
    "reference": "After ISO 25010",
    "synonyms": "co-existence",
    "abbreviation": null,
    "see_also": "portability"
  },
  {
    "term": "collaboration-based test approach",
    "version": "1",
    "definition": "An approach to testing that focuses on defect avoidance by collaborating among stakeholders.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "combinatorial testing",
    "version": "3",
    "definition": "A black-box test technique in which test conditions are specific combinations of values of several parameters.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": "classification tree technique, pairwise coverage, base choice coverage"
  },
  {
    "term": "command-line interface",
    "version": "2",
    "definition": "A type of interface in which the information is passed in form of command lines.",
    "reference": null,
    "synonyms": null,
    "abbreviation": "CLI",
    "see_also": null
  },
  {
    "term": "Common Attack Pattern Enumeration and Classification",
    "version": "1",
    "definition": "A catalog of known cyber security attack patterns used to prevent attacks.",
    "reference": "MITRE-CAPEC",
    "synonyms": null,
    "abbreviation": "CAPEC",
    "see_also": null
  },
  {
    "term": "Common Vulnerabilities and Exposures",
    "version": "1",
    "definition": "A catalog of publicly disclosed vulnerabilities in released software packages.",
    "reference": "MITRE-CVE",
    "synonyms": null,
    "abbreviation": "CVE",
    "see_also": null
  },
  {
    "term": "Common Vulnerability Scoring System",
    "version": "1",
    "definition": "A free and open industry standard for assessing the severity of system security vulnerabilities based on the ease and impact of an attack.",
    "reference": "After FIRST-CVSS",
    "synonyms": null,
    "abbreviation": "CVSS",
    "see_also": null
  },
  {
    "term": "Common Weakness Enumeration",
    "version": "1",
    "definition": "A community-developed list of common software and hardware weaknesses.",
    "reference": "MITRE-CWE",
    "synonyms": null,
    "abbreviation": "CWE",
    "see_also": null
  },
  {
    "term": "Common Weakness Scoring System",
    "version": "1",
    "definition": "A standard for assessing software weaknesses and vulnerabilities in a consistent, flexible, and open manner.",
    "reference": "MITRE-CWE",
    "synonyms": null,
    "abbreviation": "CWSS",
    "see_also": null
  },
  {
    "term": "compatibility",
    "version": "1",
    "definition": "The degree to which a component or system can exchange information with other components or systems, and/or perform its required functions while sharing the same hardware or software environment.",
    "reference": "After ISO 25010",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "compliance",
    "version": "2",
    "definition": "Adherence of a work product to standards, conventions or regulations in laws and similar prescriptions.",
    "reference": "IREB Glossary",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "compliance testing",
    "version": "1",
    "definition": "Testing to determine the compliance of the component or system.",
    "reference": null,
    "synonyms": "conformance testing, regulation testing, standards testing",
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "component",
    "version": "2",
    "definition": "A part of a system that can be tested in isolation.",
    "reference": null,
    "synonyms": "module",
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "component integration testing",
    "version": "3",
    "definition": "The integration testing of components.",
    "reference": null,
    "synonyms": "module integration testing",
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "component testing",
    "version": "3",
    "definition": "A test level that focuses on individual hardware or software components.",
    "reference": null,
    "synonyms": "module testing",
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "computer forensics",
    "version": "1",
    "definition": "The practice of determining how a security attack has succeeded and assessing the damage caused.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "concept drift",
    "version": "1",
    "definition": "A change in user expectations, behavior or the operational environment over time that negatively impacts the ML functional performance of an operational ML model.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "concurrency",
    "version": "1",
    "definition": "The simultaneous execution of multiple independent threads by a component or system.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "concurrency testing",
    "version": "1",
    "definition": "Testing to evaluate if a component or system involving concurrency behaves as specified.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "condition coverage",
    "version": "1",
    "definition": "The coverage of condition outcomes.",
    "reference": null,
    "synonyms": "branch condition coverage",
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "condition testing",
    "version": "2",
    "definition": "A white-box test technique in which test conditions are outcomes of atomic conditions.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "confidence interval",
    "version": "1",
    "definition": "In managing project risks, the period of time within which a contingency action must be implemented in order to be effective in reducing the impact of the risk.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "confidentiality",
    "version": "1",
    "definition": "The degree to which a component or system only allows authorized accesses to data.",
    "reference": "After ISO 25010",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "confirmation testing",
    "version": "3",
    "definition": "A type of change-related testing performed after fixing a defect to confirm that a failure caused by that defect does not reoccur.",
    "reference": null,
    "synonyms": "retesting",
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "connectivity",
    "version": "1",
    "definition": "The degree to which a component or system can connect to other components or systems.",
    "reference": "After ISO 2382",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "consultative test strategy",
    "version": "1",
    "definition": "A test strategy whereby the test team relies on the input of one or more key stakeholders to determine the details of the strategy.",
    "reference": null,
    "synonyms": "directed test strategy",
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "context of use",
    "version": "1",
    "definition": "Users, tasks, equipment (hardware, software and materials), and the physical and social environments in which a software product is used.",
    "reference": "ISO 9241-11",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "continuous automated compliance validation",
    "version": "1",
    "definition": "The automated process of determining compliance throughout the lifecycle of a work product.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "continuous delivery",
    "version": "1",
    "definition": "An automated software development procedure in which code changes are automatically built, tested, and prepared for a release to production.",
    "reference": null,
    "synonyms": null,
    "abbreviation": "CD",
    "see_also": null
  },
  {
    "term": "continuous deployment",
    "version": "1",
    "definition": "An automated software release procedure in which all code changes are deployed to production after all specified tests have passed.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "continuous integration",
    "version": "1",
    "definition": "An automated software development procedure that merges, integrates and tests all changes as soon as they are committed.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "continuous testing",
    "version": "2",
    "definition": "A test approach that performs testing throughout the software development lifecycle, early and often, and automates tests to obtain feedback as quickly as possible on software release candidates.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "contract testing",
    "version": "1",
    "definition": "A type of integration testing that verifies that the interfaces are used as specified in their contracts.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "control chart",
    "version": "1",
    "definition": "A statistical process control tool used to monitor a process and determine whether it is statistically controlled. It graphically depicts the average value and the upper and lower control limits (the highest and lowest values) of a process.",
    "reference": null,
    "synonyms": "Shewhart chart",
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "control flow",
    "version": "3",
    "definition": "The sequence in which operations are performed by a business process, component or system.",
    "reference": "After ISO 29119-4",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "control flow analysis",
    "version": "3",
    "definition": "A type of static analysis based on a representation of unique paths for executing a component or system.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "control testing",
    "version": "1",
    "definition": "A test approach that evaluates whether internal controls are designed appropriately and operate effectively to be within compliance.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "convergence metric",
    "version": "1",
    "definition": "A metric that shows progress toward a defined criterion, e.g., convergence of the total number of tests executed to the total number of tests planned for execution.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "cost of quality",
    "version": "1",
    "definition": "The total costs incurred on quality activities and defects, often split into the costs of defect prevention, appraisal, internal failure, and external failure.",
    "reference": "After ASQ",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "coverage",
    "version": "3",
    "definition": "The degree to which specified coverage items are exercised by a test suite, expressed as a percentage.",
    "reference": null,
    "synonyms": "test coverage",
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "coverage criteria",
    "version": "1",
    "definition": "The criteria to define the coverage items required to reach a test objective.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": "coverage item"
  },
  {
    "term": "coverage item",
    "version": "2",
    "definition": "An attribute or combination of attributes derived from one or more test conditions by using a test technique.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": "coverage criteria"
  },
  {
    "term": "Critical Testing Processes",
    "version": "1",
    "definition": "A content-based model for test process improvement built around twelve critical processes. These include highly visible processes, by which peers and management judge competence and mission-critical processes in which performance affects the company's profits and reputation.",
    "reference": null,
    "synonyms": null,
    "abbreviation": "CTP",
    "see_also": null
  },
  {
    "term": "cross-browser compatibility",
    "version": "1",
    "definition": "The degree to which a website or web application can function across different browsers and degrade gracefully when browser features are absent or lacking.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "cross-device testing",
    "version": "1",
    "definition": "A test type to determine whether a component or system performs correctly across its intended range of devices.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "cross-prompt injection attack",
    "version": "1",
    "definition": "An attack in which malicious instructions in one prompt or context segment disrupt an AI model’s behavior in a different prompt, turn, or context segment.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "cross-site scripting",
    "version": "1",
    "definition": "A vulnerability that allows attackers to inject malicious code into an otherwise benign website.",
    "reference": "NIST.IR.7298",
    "synonyms": null,
    "abbreviation": "XSS",
    "see_also": "vulnerability"
  },
  {
    "term": "crowd testing",
    "version": "1",
    "definition": "A test approach in which testing is distributed to a large group of testers.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "CRUD testing",
    "version": "1",
    "definition": "A black-box test technique in which test conditions are operations of the types create, read, update, and delete for an entity.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "cyclomatic complexity",
    "version": "3",
    "definition": "The maximum number of linear, independent paths through a program.",
    "reference": "After McCabe",
    "synonyms": "cyclomatic number",
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "dashboard",
    "version": "1",
    "definition": "A representation of dynamic measurements of operational performance for some organization or activity, using metrics represented via metaphors such as visual dials, counters, and other devices resembling those on the dashboard of an automobile, so that the effects of events or activities can be easily understood and related to operational goals.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "data accuracy",
    "version": "1",
    "definition": "The degree to which data correctly represents the real-world values it is intended to model.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "data consistency",
    "version": "1",
    "definition": "The degree to which data has attributes that are free from contradiction and are coherent with other data in a specific context of use.",
    "reference": "After ISO 25012",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "data drift",
    "version": "1",
    "definition": "A change in the distribution of input data over time that negatively impacts the ML functional performance of an operational ML model.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "data flow analysis",
    "version": "2",
    "definition": "A type of static analysis based on the lifecycle of variables.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "data obfuscation",
    "version": "1",
    "definition": "Data transformation that makes it difficult for a human to recognize the original data.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "data pipeline testing",
    "version": "1",
    "definition": "A test type that covers the training and operational data pipelines of a machine learning system.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "data privacy",
    "version": "1",
    "definition": "The protection of personally identifiable information or otherwise sensitive information from undesired disclosure.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "data provenance testing",
    "version": "1",
    "definition": "A test type to determine if data is sourced, managed, protected, and used in accordance with an organization's policies, standards, and regulatry obligations.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "data reconciliation",
    "version": "1",
    "definition": "The process of comparing data from different sources to verify consistency and correctness and resolving if necessary.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "data representativeness testing",
    "version": "1",
    "definition": "A test type to determine if the datasets used for training an AI model are fair representations of the data expected to be encountered by the operational model.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "data-based test technique",
    "version": "1",
    "definition": "A test technique in which test conditions are model elements of the test object data.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "data-driven testing",
    "version": "3",
    "definition": "A test automation approach in which test data is separated from a test script to allow its repeated execution with various test data.",
    "reference": null,
    "synonyms": null,
    "abbreviation": "DDT",
    "see_also": "keyword-driven testing, data-driven testing"
  },
  {
    "term": "dataset constraint testing",
    "version": "1",
    "definition": "A type of static testing to determine if logical or specified constraints are followed on a dataset.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "debugging",
    "version": "2",
    "definition": "The process of finding, analyzing and removing the causes of failures in a component or system.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "decision coverage",
    "version": "2",
    "definition": "The coverage of decision outcomes.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "decision table testing",
    "version": "4",
    "definition": "A black-box test technique in which the test conditions are the combinations of conditions and the resulting actions shown in a decision table.",
    "reference": "After ISO 29119-4",
    "synonyms": null,
    "abbreviation": "DTT",
    "see_also": null
  },
  {
    "term": "decision testing",
    "version": "2",
    "definition": "A white-box test technique in which test cases are designed to execute decision outcomes.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "defect",
    "version": "3",
    "definition": "An imperfection or deficiency in a work product where it does not meet its requirements or specifications or impairs its intended use.",
    "reference": "After ISO 24765",
    "synonyms": "bug, fault, flaw",
    "abbreviation": null,
    "see_also": "error, failure"
  },
  {
    "term": "defect density",
    "version": "2",
    "definition": "The number of defects per unit size of a work product.",
    "reference": "After ISO 24765",
    "synonyms": "fault density",
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "defect detection percentage",
    "version": "1",
    "definition": "The number of defects found by a test level, divided by the number found by that test level and any other means afterwards.",
    "reference": null,
    "synonyms": "Fault Detection Percentage (FDP)",
    "abbreviation": "DDP",
    "see_also": "escaped defect"
  },
  {
    "term": "defect management",
    "version": "4",
    "definition": "The process of recognizing, recording, classifying, investigating, fixing and disposing of defects.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "defect management committee",
    "version": "2",
    "definition": "A cross-functional team of stakeholders who perform defect management.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "defect prevention",
    "version": "1",
    "definition": "The measures that reduce the likelihood of recurrence of defects in work products and limit the propagation of defects in subsequent work products.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "defect report",
    "version": "2",
    "definition": "Documentation of the occurrence, nature, and status of a defect.",
    "reference": null,
    "synonyms": "bug report",
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "defect taxonomy",
    "version": "2",
    "definition": "A list of categories designed to identify and classify defects.",
    "reference": null,
    "synonyms": "bug taxonomy",
    "abbreviation": null,
    "see_also": "defect-based test technique"
  },
  {
    "term": "defect workflow",
    "version": "1",
    "definition": "The state transition model of a defect lifecycle, including responsibilities.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "defect-based test technique",
    "version": "2",
    "definition": "A test technique in which test conditions are based on a specific defect type.",
    "reference": null,
    "synonyms": "defect-based test design technique, defect-based technique",
    "abbreviation": null,
    "see_also": "defect taxonomy"
  },
  {
    "term": "definition-use pair",
    "version": "2",
    "definition": "The association of a definition of a variable with the subsequent use of that variable.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "demilitarized zone",
    "version": "1",
    "definition": "A physical or logical subnetwork that contains and exposes an organization's external-facing services to an untrusted network, commonly the Internet.",
    "reference": null,
    "synonyms": null,
    "abbreviation": "DMZ",
    "see_also": "network zone"
  },
  {
    "term": "denial of service",
    "version": "1",
    "definition": "A security attack that is intended to overload the system with requests such that legitimate requests cannot be serviced.",
    "reference": null,
    "synonyms": null,
    "abbreviation": "DoS",
    "see_also": null
  },
  {
    "term": "destructive testing",
    "version": "1",
    "definition": "A test type that subjects a component or system to malicious inputs, abnormal conditions, or security exploits to induce persistent anomalous behavior.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "device-based testing",
    "version": "1",
    "definition": "A test type in which test suites are executed on physical or virtual devices.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "domain testing",
    "version": "1",
    "definition": "A black-box test technique in which test conditions are points on, near to, inside or outside the boundaries of different equivalence partitions of the input value domain.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": "equivalence partitioning, boundary value analysis"
  },
  {
    "term": "drift testing",
    "version": "1",
    "definition": "A type of maintenance testing that evaluates the degree to which data drift, concept drift or both occur.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "driver",
    "version": "2",
    "definition": "A component or tool that temporarily replaces another component and controls or calls a test item in isolation.",
    "reference": null,
    "synonyms": "test driver",
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "dynamic analysis",
    "version": "2",
    "definition": "The process of evaluating a component or system based on its behavior during execution.",
    "reference": "After ISO 24765",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "dynamic application security testing",
    "version": "1",
    "definition": "A test approach in which attacks are simulated and reactions are analyzed to determine the vulnerabilities of a component or system.",
    "reference": "After NIST.IR.7298",
    "synonyms": null,
    "abbreviation": "DAST",
    "see_also": "static application security testing, interactive application security testing, vulnerability"
  },
  {
    "term": "dynamic testing",
    "version": "2",
    "definition": "A test approach that involves test execution of a test item.",
    "reference": "After ISO 29119-1",
    "synonyms": null,
    "abbreviation": null,
    "see_also": "static testing"
  },
  {
    "term": "each choice coverage",
    "version": "2",
    "definition": "The coverage of equivalence partitions in multiple sets of partitions.",
    "reference": "After Ammann and Offutt",
    "synonyms": null,
    "abbreviation": "ECC",
    "see_also": "pairwise coverage, base choice coverage"
  },
  {
    "term": "edge case",
    "version": "1",
    "definition": "A test condition which is within the defined operational limits of a component or system but is uncommon, extreme, or atypical.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "effectiveness",
    "version": "2",
    "definition": "The extent to which correct and complete goals are achieved.",
    "reference": "ISO 9241-11",
    "synonyms": null,
    "abbreviation": null,
    "see_also": "efficiency"
  },
  {
    "term": "efficiency",
    "version": "3",
    "definition": "The degree to which resources are expended in relation to results achieved.",
    "reference": "IREB Glossary",
    "synonyms": null,
    "abbreviation": null,
    "see_also": "effectiveness, performance efficiency"
  },
  {
    "term": "EFQM model",
    "version": "2",
    "definition": "A management framework that supports organisations in managing change and improving performance.",
    "reference": "EFQM",
    "synonyms": "European Foundation for Quality Management excellence model, EFQM excellence model",
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "emulator",
    "version": "3",
    "definition": "A component used during testing that mimics the behavior of hardware.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": "simulator"
  },
  {
    "term": "encryption",
    "version": "1",
    "definition": "The process of encoding information so that only authorized parties can retrieve the original information, usually by means of a specific decryption key or process.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "end-of-line testing",
    "version": "1",
    "definition": "A test type performed at the end of a production line to evaluate if a manufactured product meets its requirements.",
    "reference": null,
    "synonyms": null,
    "abbreviation": "EOL testing",
    "see_also": null
  },
  {
    "term": "end-to-end testing",
    "version": "1",
    "definition": "A test type in which business processes are tested from start to finish under production-like circumstances.",
    "reference": null,
    "synonyms": "E2E testing",
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "endurance testing",
    "version": "1",
    "definition": "Testing to determine the stability of a system under a significant load over a significant period of time within the system's operational context.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "entry criteria",
    "version": "2",
    "definition": "The set of conditions for officially starting a defined task.",
    "reference": "Gilb and Graham",
    "synonyms": null,
    "abbreviation": null,
    "see_also": "exit criteria"
  },
  {
    "term": "environment model",
    "version": "1",
    "definition": "An abstraction of the real environment of a component or system including other components, processes, and environment conditions, in a real- time simulation.",
    "reference": "Wallentowitz",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "epic",
    "version": "2",
    "definition": "A description of a stakeholder need which is typically larger than what can be implemented in a single iteration.",
    "reference": "IREB Glossary",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "equivalence partition",
    "version": "4",
    "definition": "A subset of a value domain for which a component or system is expected to treat all values the same based on the specification.",
    "reference": "After ISO 29119-1",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "equivalence partitioning",
    "version": "3",
    "definition": "A black-box test technique in which test conditions are equivalence partitions exercised by one representative member of each partition.",
    "reference": "After ISO 29119-1",
    "synonyms": "partition testing",
    "abbreviation": "EP",
    "see_also": "domain testing"
  },
  {
    "term": "equivalent manual test effort",
    "version": "1",
    "definition": "Effort required for running tests manually.",
    "reference": null,
    "synonyms": null,
    "abbreviation": "EMTE",
    "see_also": null
  },
  {
    "term": "ergonomics testing",
    "version": "1",
    "definition": "Testing to determine whether a component or system and its input devices are being used properly with correct posture.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "error",
    "version": "1",
    "definition": "A human action that results in a defect.",
    "reference": "ISO 24765",
    "synonyms": "mistake",
    "abbreviation": null,
    "see_also": "defect"
  },
  {
    "term": "error guessing",
    "version": "3",
    "definition": "A test technique in which the tests conditions are based on the tester's knowledge of past failures or failure modes.",
    "reference": "ISO 29119-1",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "escaped defect",
    "version": "2",
    "definition": "A defect that is not detected by a test activity that is supposed to find it.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": "defect detection percentage"
  },
  {
    "term": "ethical hacker",
    "version": "2",
    "definition": "A security tester who follows the code of ethics of their organization.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "ethical system testing",
    "version": "1",
    "definition": "A test type that evaluates a system's design, interface, and potential societal and legal impacts against established ethical principles.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "exhaustive testing",
    "version": "1",
    "definition": "A test approach in which the test suite comprises all combinations of input values and preconditions.",
    "reference": null,
    "synonyms": "complete testing",
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "exit criteria",
    "version": "2",
    "definition": "The set of conditions for officially completing a defined task.",
    "reference": "After Gilb and Graham",
    "synonyms": "test completion criteria, completion criteria",
    "abbreviation": null,
    "see_also": "entry criteria"
  },
  {
    "term": "expected result",
    "version": "2",
    "definition": "The observable predicted behavior of a test item under specified conditions based on its test basis.",
    "reference": "After ISO 29119-1",
    "synonyms": "predicted outcome, expected outcome",
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "experience-based test technique",
    "version": "4",
    "definition": "A test technique based on the tester's experience, knowledge and intuition.",
    "reference": null,
    "synonyms": "experience-based test design technique, experience-based technique",
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "experience-based testing",
    "version": "1",
    "definition": "A test approach based on the tester's experience, knowledge and intuition.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "expert usability review",
    "version": "1",
    "definition": "An informal usability review in which the reviewers are experts. Experts can be usability experts or subject matter experts, or both.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "explainability",
    "version": "1",
    "definition": "The degree to which results from an AI-based system can be explained.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "exploratory testing",
    "version": "4",
    "definition": "A test approach in which tests are dynamically designed and executed based on tester's knowledge, exploration of a test item, and previous test results.",
    "reference": "After ISO 29119-1",
    "synonyms": null,
    "abbreviation": null,
    "see_also": "test charter"
  },
  {
    "term": "external failure",
    "version": "1",
    "definition": "A failure that occurs during the regular operation of a system after its delivery to the end users.",
    "reference": "After ASQ",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "failed",
    "version": "1",
    "definition": "A test result if the actual result does not match the expected result.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "failover",
    "version": "1",
    "definition": "The backup operational mode in which the functions of a system that becomes unavailable are assumed by a secondary system.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "failure",
    "version": "3",
    "definition": "An event in which a component or system does not meet its requirements within specified limits during its execution.",
    "reference": "After ISO 24765",
    "synonyms": "malfunction",
    "abbreviation": null,
    "see_also": "defect"
  },
  {
    "term": "failure mode",
    "version": "1",
    "definition": "The physical or functional manifestation of a failure.",
    "reference": "ISO 24765",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "failure mode and effect analysis",
    "version": "1",
    "definition": "A systematic approach to risk identification and analysis of identifying possible modes of failure and attempting to prevent their occurrence.",
    "reference": null,
    "synonyms": "Software Failure Mode and Effect Analysis",
    "abbreviation": "FMEA",
    "see_also": null
  },
  {
    "term": "failure rate",
    "version": "2",
    "definition": "The ratio of the number of failures of a given category to a given unit of measure.",
    "reference": "ISO 24765",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "false-negative result",
    "version": "1",
    "definition": "A test result which fails to identify a defect that is actually present in a test object.",
    "reference": null,
    "synonyms": "false-pass result",
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "false-positive result",
    "version": "1",
    "definition": "A test result in which a defect is reported although no such defect actually exists in the test object.",
    "reference": null,
    "synonyms": "false-fail result",
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "fault attack",
    "version": "1",
    "definition": "A test technique to evaluate a specific quality characteristic of a test object by attempting to trigger specific failures.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": "security attack"
  },
  {
    "term": "fault injection",
    "version": "2",
    "definition": "A technique for creating adverse conditions to evaluate whether a component or system can detect them and show reliable behavior.",
    "reference": null,
    "synonyms": "fault insertion",
    "abbreviation": null,
    "see_also": "fault seeding, fault tolerance"
  },
  {
    "term": "fault seeding",
    "version": "2",
    "definition": "The process of intentionally adding defects to a component or system to monitor the rate of detection and removal, and to estimate the number of defects remaining.",
    "reference": "After ISO 24765",
    "synonyms": "bebugging, error seeding, mutation testing",
    "abbreviation": null,
    "see_also": "fault injection"
  },
  {
    "term": "fault tolerance",
    "version": "2",
    "definition": "The degree to which a component or system operates as intended despite the presence of hardware or software defects.",
    "reference": "After ISO 25010",
    "synonyms": null,
    "abbreviation": null,
    "see_also": "fault injection"
  },
  {
    "term": "fault tree analysis",
    "version": "1",
    "definition": "A technique for analyzing the causes of failures that uses a hierarchical model of events and their logical relationships.",
    "reference": null,
    "synonyms": "Software Fault Tree Analysis",
    "abbreviation": "FTA",
    "see_also": null
  },
  {
    "term": "feature-driven development",
    "version": "1",
    "definition": "An iterative and incremental software development process driven from a client-valued functionality (feature) perspective. Feature-driven development is mostly used in Agile software development.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": "Agile software development"
  },
  {
    "term": "field testing",
    "version": "1",
    "definition": "A test level performed to evaluate the system behavior in an operational environment.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "finding",
    "version": "1",
    "definition": "A result of an evaluation that identifies some important issue, problem, or opportunity.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "firewall",
    "version": "1",
    "definition": "A component or set of components that controls incoming and outgoing network traffic based on predetermined security rules.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "flexibility",
    "version": "1",
    "definition": "The degree to which a component or system can be adapted to changes in its requirements, contexts of use, or system environment.",
    "reference": "After ISO 25010",
    "synonyms": null,
    "abbreviation": null,
    "see_also": "portability"
  },
  {
    "term": "follow-up test case",
    "version": "1",
    "definition": "A test case generated by applying a metamorphic relation to a source test case during metamorphic testing.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "formal review",
    "version": "2",
    "definition": "A review that follows a defined process with a formally documented output.",
    "reference": "After ISO 20246",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "formal testing",
    "version": "1",
    "definition": "A test approach that follows a defined process, is based on precise specifications, emphasizing documentation, traceability, and coverage.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "formative evaluation",
    "version": "1",
    "definition": "A type of evaluation designed and used to improve the quality of a component or system, especially when it is still being designed.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": "summative evaluation"
  },
  {
    "term": "functional adaptability",
    "version": "1",
    "definition": "The degree to which an AI-based system can acquire information from data or previous actions to make future predictions.",
    "reference": "ISO 25059",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "functional appropriateness",
    "version": "3",
    "definition": "The degree to which the functions facilitate the accomplishment of specified tasks and objectives.",
    "reference": "ISO 25010",
    "synonyms": "suitability",
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "functional completeness",
    "version": "1",
    "definition": "The degree to which the set of functions covers all the specified tasks and user objectives.",
    "reference": "ISO 25010",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "functional correctness",
    "version": "2",
    "definition": "The degree to which a component or system provides the correct results with the needed degree of precision.",
    "reference": null,
    "synonyms": "accuracy",
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "functional safety",
    "version": "1",
    "definition": "The absence of unreasonable risk due to hazards caused by malfunctioning behavior of electric/electronic systems.",
    "reference": "ISO 26262",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "functional suitability",
    "version": "2",
    "definition": "The degree to which a component or system provides functions that meet stated and implied needs when used under specified conditions.",
    "reference": "After ISO 25010",
    "synonyms": "functionality",
    "abbreviation": null,
    "see_also": "interoperability"
  },
  {
    "term": "functional testing",
    "version": "4",
    "definition": "A test type to determine the functional suitability of a test object.",
    "reference": "After ISO 24765",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "fuzz testing",
    "version": "2",
    "definition": "A test technique in which high volumes of random data are used to generate test inputs.",
    "reference": null,
    "synonyms": "fuzzing",
    "abbreviation": null,
    "see_also": "vulnerability"
  },
  {
    "term": "generic test automation architecture",
    "version": "2",
    "definition": "A representation of the layers, components, and interfaces that allows for a structured and modular approach to implement test automation.",
    "reference": null,
    "synonyms": null,
    "abbreviation": "gTAA",
    "see_also": null
  },
  {
    "term": "graphical user interface",
    "version": "1",
    "definition": "A type of interface that allows users to interact with a component or system through graphical icons and visual indicators.",
    "reference": null,
    "synonyms": null,
    "abbreviation": "GUI",
    "see_also": null
  },
  {
    "term": "grey-box testing",
    "version": "2",
    "definition": "A test approach that combines elements of black-box testing and white-box testing.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "GUI testing",
    "version": "2",
    "definition": "A test approach performed by interacting with a test object using a graphical user interface.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "hacker",
    "version": "1",
    "definition": "A person or organization who is actively involved in security attacks, usually with malicious intent.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": "attacker, script kiddie"
  },
  {
    "term": "hardware-in-the-loop",
    "version": "2",
    "definition": "A virtual test environment in which real hardware with integrated software is tested.",
    "reference": "Automotive SPICE",
    "synonyms": null,
    "abbreviation": "HiL",
    "see_also": null
  },
  {
    "term": "hashing",
    "version": "1",
    "definition": "Transformation of a variable length string of characters into a usually shorter fixed-length value or key. Hashed values, or hashes, are commonly used in table or database lookups. Cryptographic hash functions are used to secure data.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": "salting"
  },
  {
    "term": "heuristic",
    "version": "1",
    "definition": "A generally recognized rule of thumb that helps to achieve a goal.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "heuristic evaluation",
    "version": "2",
    "definition": "A usability review technique that evaluates a work product by using a set of heuristics.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "high-level test case",
    "version": "3",
    "definition": "A test case with abstract preconditions, input data, expected results, postconditions, and actions (where applicable).",
    "reference": null,
    "synonyms": "logical test case, abstract test case",
    "abbreviation": null,
    "see_also": "low-level test case"
  },
  {
    "term": "holistic testing",
    "version": "1",
    "definition": "A collaborative approach to quality assurance through system-wide continuous testing, learning and improvement.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "hotfix",
    "version": "1",
    "definition": "A software release to fix critical defects without waiting for a planned release.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "human-centered design",
    "version": "1",
    "definition": "An approach to design that aims to make software products more usable by focusing on the use of the software products and applying human factors, ergonomics, and usability knowledge and techniques.",
    "reference": "ISO 9241-210",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "hybrid software development model",
    "version": "1",
    "definition": "A type of software development lifecycle model that combines elements of different software development lifecycle models.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "hypothesis testing",
    "version": "1",
    "definition": "The validation of a theory and its assumptions using sample data",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "impact analysis",
    "version": "2",
    "definition": "The identification of all work products affected by a change, including an estimate of the resources needed to accomplish the change.",
    "reference": "After ISO 24765",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "incremental development model",
    "version": "2",
    "definition": "A type of software development lifecycle model in which the component or system is developed through a series of increments.",
    "reference": "After PMBOK",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "independence of testing",
    "version": "1",
    "definition": "Separation of responsibilities, which encourages the accomplishment of objective testing.",
    "reference": "After DO-178C",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "independent test lab",
    "version": "1",
    "definition": "An organization responsible to test and certify that the software, hardware, firmware, platform, and operating system follow all jurisdictional rules for each location where a component or system will be used.",
    "reference": null,
    "synonyms": null,
    "abbreviation": "ITL",
    "see_also": null
  },
  {
    "term": "informal review",
    "version": "3",
    "definition": "A type of review that does not follow a defined process and has no formally documented output.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "information assurance",
    "version": "1",
    "definition": "Measures that protect and defend information and information systems by ensuring their availability, integrity, authentication, confidentiality, and non-repudiation. These measures include providing for restoration of information systems by incorporating protection, detection, and reaction capabilities.",
    "reference": "NIST.IR.7298",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "information security",
    "version": "1",
    "definition": "The protection of information and information systems from unauthorized access, use, disclosure, disruption, modification, or destruction.",
    "reference": "After NIST.IR.7298",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "input data testing",
    "version": "1",
    "definition": "A test level that focuses on the quality of data used for training an ML model.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "insider threat",
    "version": "1",
    "definition": "A security threat originating from within the organization, often by an authorized system user.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "inspection",
    "version": "3",
    "definition": "A type of formal review that uses defined team roles and measurement to identify defects in a work product, and improve the review process and the software development process.",
    "reference": "After ISO 20246",
    "synonyms": null,
    "abbreviation": null,
    "see_also": "peer review"
  },
  {
    "term": "installability",
    "version": "2",
    "definition": "The degree to which a component or system can be successfully installed and/or uninstalled in a specified environment.",
    "reference": "After ISO 25010",
    "synonyms": null,
    "abbreviation": null,
    "see_also": "portability"
  },
  {
    "term": "integration testing",
    "version": "2",
    "definition": "A test level that focuses on interactions between components or systems.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "integrity",
    "version": "1",
    "definition": "The degree to which only authorized access and modification is allowed to a component, a system or data.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "interaction capability",
    "version": "1",
    "definition": "The degree to which a component or system can exchange information via the user interface with its specified users to complete an intended task.",
    "reference": "After ISO 25010",
    "synonyms": null,
    "abbreviation": null,
    "see_also": "usability"
  },
  {
    "term": "interactive application security testing",
    "version": "1",
    "definition": "A test approach that analyzes the code executed and pinpoints where a vulnerability exists by combining dynamic application security testing with static application security testing",
    "reference": null,
    "synonyms": null,
    "abbreviation": "IAST",
    "see_also": "dynamic application security testing, static application security testing"
  },
  {
    "term": "interface testing",
    "version": "1",
    "definition": "A type of integration testing performed to determine whether components or systems pass data and control correctly to one another.",
    "reference": "After ISO 24765",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "internal failure",
    "version": "1",
    "definition": "A failure that occurs during the operation of a system before its delivery to the end users.",
    "reference": "After ASQ",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "internationalization",
    "version": "1",
    "definition": "The process of making a system suitable for international user groups.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": "localization"
  },
  {
    "term": "interoperability",
    "version": "2",
    "definition": "The degree to which two or more components or systems can exchange information and use the information that has been exchanged.",
    "reference": "After ISO 25010",
    "synonyms": null,
    "abbreviation": null,
    "see_also": "functional suitability"
  },
  {
    "term": "intervenability",
    "version": "1",
    "definition": "The degree to which an operator can intervene in a system’s functioning in a timely manner to prevent harm or hazard.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "intrusion detection system",
    "version": "1",
    "definition": "A system which monitors activities to detect violations of the security policy.",
    "reference": null,
    "synonyms": null,
    "abbreviation": "IDS",
    "see_also": "malware scanning"
  },
  {
    "term": "iterative development model",
    "version": "1",
    "definition": "A type of software development lifecycle model in which the component or system is developed through a series of repeated cycles.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "k-multisection neuron coverage",
    "version": "1",
    "definition": "The coverage of sections of the output range of each neuron in a neural network, where the output range is divided into k sections.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "keyword",
    "version": "1",
    "definition": "A phrase that represents specific actions to be performed during test execution.",
    "reference": "After ISO 29119-1",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "keyword-driven testing",
    "version": "3",
    "definition": "A test automation approach in which test scripts contain keywords and supporting files that contain scripts that implement those keywords.",
    "reference": null,
    "synonyms": "action word-driven testing",
    "abbreviation": "KDT",
    "see_also": "data-driven testing"
  },
  {
    "term": "label correctness testing",
    "version": "1",
    "definition": "A test type to determine the accuracy and consistency of labels assigned to examples in a dataset.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "learnability",
    "version": "3",
    "definition": "The degree to which specified users can learn to use a component or system within a defined period.",
    "reference": "After ISO 25010",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "level of intrusion",
    "version": "1",
    "definition": "The level to which a test object is modified by adjusting it for testability.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "level test plan",
    "version": "1",
    "definition": "A test plan that typically addresses one test level.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": "test plan"
  },
  {
    "term": "linear scripting",
    "version": "1",
    "definition": "A simple scripting technique without any control structure in the test scripts.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "load generation",
    "version": "1",
    "definition": "The process of simulating a defined set of activities at a specified load to be submitted to a component or system.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "load generator",
    "version": "1",
    "definition": "A tool that generates a load for a system under test.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "load management",
    "version": "1",
    "definition": "The control and execution of load generation, and performance monitoring and reporting of the component or system.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "load profile",
    "version": "1",
    "definition": "Documentation defining a designated number of virtual users who process a defined set of transactions in a specified time period that a component or system being tested may experience in production.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "load testing",
    "version": "2",
    "definition": "A type of performance testing to evaluate the behavior of a component or system under varying loads, usually between anticipated conditions of low, typical, and peak usage.",
    "reference": "After ISO 29119-1",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "localization",
    "version": "1",
    "definition": "The process of making a system suitable for a specific user group.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": "internationalization"
  },
  {
    "term": "low-level test case",
    "version": "3",
    "definition": "A test case with concrete values for preconditions, input data, expected results, postconditions, and a detailed description of actions (where applicable).",
    "reference": null,
    "synonyms": "concrete test case, physical test case",
    "abbreviation": null,
    "see_also": "high-level test case"
  },
  {
    "term": "machine learning",
    "version": "1",
    "definition": "The process of using computational techniques to enable systems to learn from data or experience.",
    "reference": null,
    "synonyms": null,
    "abbreviation": "ML",
    "see_also": null
  },
  {
    "term": "maintainability",
    "version": "2",
    "definition": "The degree to which a component or system can be modified by the intended maintainers.",
    "reference": "After ISO 25010",
    "synonyms": null,
    "abbreviation": null,
    "see_also": "analyzability, modifiability, testability"
  },
  {
    "term": "maintenance",
    "version": "2",
    "definition": "The process of modifying a component or system after delivery to correct defects, improve quality characteristics, or adapt to a changed environment.",
    "reference": "After ISO 24765",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "maintenance testing",
    "version": "1",
    "definition": "A test type that evaluates the effect of changes made to an operational system or its environment.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "malware",
    "version": "1",
    "definition": "Software that is intended to harm a system or its components.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": "anti-malware"
  },
  {
    "term": "malware scanning",
    "version": "2",
    "definition": "Static analysis aiming to detect malicious code received at an interface.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": "intrusion detection system"
  },
  {
    "term": "manual testing",
    "version": "1",
    "definition": "A test activity performed manually.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "manufacturing-based quality",
    "version": "2",
    "definition": "A view of quality measured by the degree that a product or service conforms to its intended design and requirements based on the process used.",
    "reference": "After Garvin",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "master test plan",
    "version": "2",
    "definition": "A test plan that is used to coordinate multiple test levels or test types.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": "test plan"
  },
  {
    "term": "math testing",
    "version": "1",
    "definition": "A test type to determine the correctness of the pay table implementation, the random number generator results, and the return to player computations.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "maturity",
    "version": "2",
    "definition": "(1) The capability of an organization with respect to the effectiveness and efficiency of its processes and work practices. (2) The degree to which a component or system meets needs for reliability under normal operation.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "MBT model",
    "version": "1",
    "definition": "Any model used in model-based testing.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "mean time between failures",
    "version": "1",
    "definition": "The average time between consecutive failures of a component or system.",
    "reference": null,
    "synonyms": null,
    "abbreviation": "MTBF",
    "see_also": "mean time to failure"
  },
  {
    "term": "mean time to failure",
    "version": "1",
    "definition": "The average time from the start of operation to a failure for a component or system.",
    "reference": null,
    "synonyms": null,
    "abbreviation": "MTTF",
    "see_also": "mean time between failures"
  },
  {
    "term": "mean time to repair",
    "version": "1",
    "definition": "The average time a component or system will take to recover from a failure.",
    "reference": null,
    "synonyms": null,
    "abbreviation": "MTTR",
    "see_also": null
  },
  {
    "term": "measurement",
    "version": "1",
    "definition": "The process of assigning a number or category to an entity to describe an attribute of that entity.",
    "reference": "After ISO 24765",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "memory leak",
    "version": "2",
    "definition": "A memory access failure due to a defect in a program's dynamic store allocation logic that causes it to fail to release memory after it has finished using it.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "metamorphic relation",
    "version": "1",
    "definition": "A description of how a change to an input for a test case affects an expected result based on the required behavior of a test item.",
    "reference": "After ISO 29119-1",
    "synonyms": null,
    "abbreviation": "MR",
    "see_also": null
  },
  {
    "term": "metamorphic testing",
    "version": "2",
    "definition": "A test technique in which test conditions are metamorphic relations.",
    "reference": null,
    "synonyms": null,
    "abbreviation": "MT",
    "see_also": "property-based testing"
  },
  {
    "term": "method table",
    "version": "1",
    "definition": "A table containing different test approaches, test techniques and test types that are required depending on the automotive safety integrity level and on the context of a test object.",
    "reference": "ISO 26262",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "methodical test strategy",
    "version": "1",
    "definition": "A test strategy whereby the test team uses a pre-determined set of test conditions such as a quality standard, a checklist, or a collection of generalized, logical test conditions which may relate to a particular domain, application or type of testing.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "metric",
    "version": "1",
    "definition": "A measurement scale and the method used for measurement.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "ML functional performance",
    "version": "1",
    "definition": "The degree to which an ML model meets ML functional performance criteria.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "ML functional performance criteria",
    "version": "1",
    "definition": "Criteria based on ML functional performance metrics used as a basis for model evaluation, tuning and testing.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "ML functional performance metric",
    "version": "1",
    "definition": "A measure that relates to the functional correctness of an ML model.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "ML model",
    "version": "1",
    "definition": "An implementation of machine learning that generates a prediction, classification or recommendation based on input data.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "ML model testing",
    "version": "1",
    "definition": "A test level that focuses on the ability of an ML model to meet required ML functional performance criteria and non-functional criteria.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "mob testing",
    "version": "1",
    "definition": "A test approach in which a small group tests the same system together at the same time using a single user interface and computer, followed by a retrospective.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "mock",
    "version": "1",
    "definition": "A type of test double that simulates the expected behavior of the component during testing.",
    "reference": null,
    "synonyms": "mock object, mock-up",
    "abbreviation": null,
    "see_also": "test double, stub"
  },
  {
    "term": "model conversion testing",
    "version": "1",
    "definition": "A test type to determine whether an ML model converted for deployment retains acceptable predictive accuracy, consistent behavior, and operational efficiency.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "model coverage",
    "version": "2",
    "definition": "The coverage of model elements.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "model-based test strategy",
    "version": "1",
    "definition": "A test strategy whereby the test team derives testware from models.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "model-based testing",
    "version": "1",
    "definition": "Testing based on or involving models.",
    "reference": null,
    "synonyms": null,
    "abbreviation": "MBT",
    "see_also": null
  },
  {
    "term": "model-in-the-loop",
    "version": "2",
    "definition": "A virtual test environment in which a simulation model of the system is tested.",
    "reference": "Automotive SPICE",
    "synonyms": null,
    "abbreviation": "MiL",
    "see_also": null
  },
  {
    "term": "moderator",
    "version": "4",
    "definition": "(1) The person responsible for running review meetings. (2) The person who performs a usability test session.",
    "reference": null,
    "synonyms": "facilitator",
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "modifiability",
    "version": "2",
    "definition": "The degree to which a component or system can be modified without degrading its quality.",
    "reference": "After ISO 25010",
    "synonyms": "changeability",
    "abbreviation": null,
    "see_also": "maintainability"
  },
  {
    "term": "modified condition/decision coverage",
    "version": "2",
    "definition": "The coverage of all outcomes of the atomic conditions that independently affect the overall decision outcome.",
    "reference": null,
    "synonyms": "condition determination coverage, modified multiple condition coverage",
    "abbreviation": "MC/DC",
    "see_also": null
  },
  {
    "term": "modified condition/decision testing",
    "version": "1",
    "definition": "A white-box test technique in which test conditions are outcomes of atomic conditions that independently affect a decision outcome.",
    "reference": null,
    "synonyms": "condition determination testing, modified multiple condition testing, MC/DC testing",
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "modularity",
    "version": "1",
    "definition": "The degree to which a system is composed of discrete components such that a change to one component has minimal impact on other components.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "monitoring tool",
    "version": "2",
    "definition": "A software tool or hardware device that runs concurrently with a system under test and supervises, records and/or analyzes its behavior.",
    "reference": "ISO 24765",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "multiplayer testing",
    "version": "1",
    "definition": "A test type to determine if many players can simultaneously interact with the casino game world, with computer-controlled opponents, game servers, and with each other based on the game design.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "multiple condition coverage",
    "version": "1",
    "definition": "The coverage of all possible combinations of all single condition outcomes within one statement.",
    "reference": null,
    "synonyms": "branch condition combination coverage, condition combination coverage",
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "multiple condition testing",
    "version": "2",
    "definition": "A white-box test technique in which test conditions are outcome combinations of atomic conditions.",
    "reference": null,
    "synonyms": "branch condition combination testing, condition combination testing",
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "Myers-Briggs Type Indicator",
    "version": "1",
    "definition": "An indicator of psychological preference representing the different personalities and communication styles of people.",
    "reference": null,
    "synonyms": null,
    "abbreviation": "MBTI",
    "see_also": null
  },
  {
    "term": "N-switch coverage",
    "version": "1",
    "definition": "The coverage of sequences of N+1 transitions.",
    "reference": "Chow",
    "synonyms": "Chow's coverage metrics",
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "negative testing",
    "version": "1",
    "definition": "A test type in which a component or system is used in a way that it is not intended.",
    "reference": null,
    "synonyms": "invalid testing, dirty testing",
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "network zone",
    "version": "1",
    "definition": "A sub-network with a defined level of trust. For example, the Internet or a public zone would be considered to be untrusted.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": "demilitarized zone"
  },
  {
    "term": "neuron boundary coverage",
    "version": "1",
    "definition": "The coverage of neurons in a neural network where their output either exceeds the maximum achieved in training, or is less than the minimum achieved in training.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "neuron coverage",
    "version": "2",
    "definition": "The coverage of neurons in a neural network where their output exceeds a specified threshold.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "non-functional testing",
    "version": "3",
    "definition": "A test type to evaluate that a component or system complies with non-functional requirements.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "non-repudiation",
    "version": "1",
    "definition": "The degree to which actions or events can be proven to have taken place, so that the actions or events cannot be repudiated later.",
    "reference": "After ISO 25010",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "offline MBT",
    "version": "1",
    "definition": "Model-based test approach in which test cases are generated into a repository for future execution.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "online MBT",
    "version": "1",
    "definition": "Model-based test approach in which test cases are generated and executed simultaneously.",
    "reference": null,
    "synonyms": "on-the-fly MBT",
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "open-loop system",
    "version": "1",
    "definition": "A system in which the controlling action or input is independent of the output or changes in output.",
    "reference": "Bakshi",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "operability",
    "version": "2",
    "definition": "The degree to which a component or system has attributes that make it easy to operate and control.",
    "reference": "After ISO 25010",
    "synonyms": null,
    "abbreviation": null,
    "see_also": "usability"
  },
  {
    "term": "operational acceptance testing",
    "version": "3",
    "definition": "A type of acceptance testing performed to determine whether the organization responsible for operating the system can accept it.",
    "reference": null,
    "synonyms": "production acceptance testing",
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "operational profile",
    "version": "2",
    "definition": "An actual or predicted pattern of use of the component or system.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "operational profiling",
    "version": "1",
    "definition": "The process of developing and implementing an operational profile.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "organizational test strategy",
    "version": "1",
    "definition": "A strategy that describes the generic requirements for testing and how to perform testing within an organization.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "pair testing",
    "version": "1",
    "definition": "A test approach in which two team members simultaneously collaborate on testing a work product.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "pairwise coverage",
    "version": "1",
    "definition": "The coverage of pairs of parameter-value pairs.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": "combinatorial testing, base choice coverage, each choice coverage"
  },
  {
    "term": "pairwise testing",
    "version": "2",
    "definition": "A black-box test technique in which test conditions are pairs of parameter-value pairs.",
    "reference": "After ISO 29119-4",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "par sheet testing",
    "version": "1",
    "definition": "A test type to determine that a game returns the correct mathematical results to the screen, to the players' accounts, and to the casino account.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "pass/fail criteria",
    "version": "1",
    "definition": "Decision rules used to determine whether a test item has passed or failed.",
    "reference": "After ISO 29119-1",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "passed",
    "version": "1",
    "definition": "A test result if the actual result matches the expected result.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "password cracking",
    "version": "1",
    "definition": "A security attack recovering secret passwords stored in a computer system or transmitted over a network.",
    "reference": "After NIST.IR.7298",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "peer review",
    "version": "2",
    "definition": "A type of review performed on a work product by persons that have the abilities required to create it.",
    "reference": "After ISO 20246",
    "synonyms": null,
    "abbreviation": null,
    "see_also": "technical review, inspection, walkthrough"
  },
  {
    "term": "penetration testing",
    "version": "2",
    "definition": "A type of dynamic application security testing to assess weaknesses and vulnerabilities without causing harm by mimicking an attacker.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": "vulnerability"
  },
  {
    "term": "performance efficiency",
    "version": "2",
    "definition": "The degree to which a component or system uses time, resources, and capacity to perform its functions under specified conditions.",
    "reference": "After ISO 25010",
    "synonyms": null,
    "abbreviation": null,
    "see_also": "efficiency"
  },
  {
    "term": "performance testing",
    "version": "2",
    "definition": "A test type to determine the performance efficiency of a component or system.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "performance testing tool",
    "version": "1",
    "definition": "A test tool that generates load for a designated test item and that measures and records its performance during test execution.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "perspective-based reading",
    "version": "2",
    "definition": "A type of role-based reviewing that uses checklists and involves the creation of prototype deliverables.",
    "reference": "After ISO 20246",
    "synonyms": "perspective-based reviewing",
    "abbreviation": null,
    "see_also": "review technique"
  },
  {
    "term": "pharming",
    "version": "1",
    "definition": "A security attack intended to redirect a website's traffic to a fraudulent website without the user's knowledge or consent.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "phase containment",
    "version": "2",
    "definition": "The policy of removing defects in the same phase of the software development lifecycle in which they were introduced.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "phishing",
    "version": "1",
    "definition": "An attempt to acquire personal or sensitive information by masquerading as a trustworthy entity in an electronic communication.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "planning poker",
    "version": "1",
    "definition": "A consensus-based estimation technique, mostly used to estimate effort or relative size of user stories in Agile software development. It is a variation of the Wideband Delphi method using a deck of cards with values representing the units in which the team estimates.",
    "reference": "Mountain Goat Software",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "player perspective testing",
    "version": "1",
    "definition": "Testing done by testers from a player's perspective to validate player satisfaction.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "playtest",
    "version": "1",
    "definition": "Ad hoc testing of a game by players to identify failures and gather feedback.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "portability",
    "version": "2",
    "definition": "The degree to which a component or system can be transferred from one hardware, software or other operational or usage environment to another.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": "adaptability, coexistence, installability, replaceability, flexibility"
  },
  {
    "term": "post-release testing",
    "version": "1",
    "definition": "A test level performed after the release of a system to validate that it can be deployed in operational environments.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": "testing in production"
  },
  {
    "term": "postcondition",
    "version": "2",
    "definition": "The expected state of a test item and its test environment at the end of test execution.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "precondition",
    "version": "2",
    "definition": "The required state of a test item and its test environment prior to test execution.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "priority",
    "version": "1",
    "definition": "The level of (business) importance assigned to an item, e.g., defect.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "PRISMA",
    "version": "1",
    "definition": "A technique used in risk-based testing that creates a product risk matrix.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "process assessment",
    "version": "1",
    "definition": "A disciplined evaluation of an organization's software processes against a reference model.",
    "reference": "After ISO 15504",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "process-compliant test strategy",
    "version": "1",
    "definition": "A test strategy whereby the test team follows a set of predefined processes, whereby the processes address such items as documentation, the proper identification and use of the test basis and test oracle(s), and the organization of the test team.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "product risk",
    "version": "2",
    "definition": "A risk that impacts the quality of a product.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": "risk"
  },
  {
    "term": "product-based quality",
    "version": "3",
    "definition": "A view of quality measured by the degree that well-defined quality characteristics are met.",
    "reference": "After Garvin",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "project risk",
    "version": "2",
    "definition": "A risk that impacts project success.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": "risk"
  },
  {
    "term": "property-based testing",
    "version": "1",
    "definition": "A test approach in which test results are verified using specified relations between inputs and expected results of a test case.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": "metamorphic testing"
  },
  {
    "term": "proximity-based testing",
    "version": "1",
    "definition": "A test type to confirm that sensors can detect nearby objects without physical contact.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "pseudo-oracle",
    "version": "1",
    "definition": "An independently derived variant of the test item used to generate results, which are compared with the results of the original test item based on the same test inputs.",
    "reference": "ISO 29119-11",
    "synonyms": null,
    "abbreviation": null,
    "see_also": "back-to-back testing"
  },
  {
    "term": "pseudonymization",
    "version": "1",
    "definition": "The reversible process of replacing identifiers with artificial data so that individuals cannot be identified.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "quality",
    "version": "4",
    "definition": "The degree to which a work product satisfies stated and implied requirements.",
    "reference": "After IREB Glossary",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "quality assistance",
    "version": "1",
    "definition": "An approach to quality management that focuses on a quality culture throughout an organization.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "quality assurance",
    "version": "2",
    "definition": "Activities focused on providing confidence that quality requirements will be fulfilled.",
    "reference": "After ISO 24765",
    "synonyms": null,
    "abbreviation": "QA",
    "see_also": "quality management"
  },
  {
    "term": "quality capability",
    "version": "1",
    "definition": "The abilities an organization needs to accomplish its quality goals.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": "testing capability"
  },
  {
    "term": "quality characteristic",
    "version": "3",
    "definition": "A category of quality attributes that bears on work product quality.",
    "reference": "ISO 24765",
    "synonyms": "quality attribute, software quality characteristic, software product characteristic",
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "quality coaching",
    "version": "1",
    "definition": "The activities focused on helping an agile organization identify, understand, and deal with quality management, business value, flow of work, and customer collaboration.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "quality control",
    "version": "1",
    "definition": "Activities designed to evaluate the quality of a component or system.",
    "reference": "After ISO 24765",
    "synonyms": null,
    "abbreviation": "QC",
    "see_also": "testing"
  },
  {
    "term": "quality culture",
    "version": "1",
    "definition": "An organizational value system that results in an environment to establish and continually improve quality.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "quality debt",
    "version": "1",
    "definition": "The implied cost of deferred quality assurance activities.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "quality engineering",
    "version": "1",
    "definition": "A set of engineering practices in which stakeholders share joint responsibility for applying quality measures to deliver a work product which fulfills requirements with the right level of quality at the proper time.​​",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "quality gate",
    "version": "1",
    "definition": "A milestone at which a decision about proceeding to the next phase is taken based on predefined quality criteria.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "quality hunting",
    "version": "1",
    "definition": "A test approach in which gamification and awards for the most valuable information about the quality of the test object are used as a motivator.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "quality management",
    "version": "1",
    "definition": "The process of establishing and directing a quality policy, quality objectives, quality planning, quality control, quality assurance, and quality improvement for an organization.",
    "reference": "After ISO 24765",
    "synonyms": null,
    "abbreviation": null,
    "see_also": "quality assurance"
  },
  {
    "term": "quality measure",
    "version": "1",
    "definition": "A group of preventive, detective or corrective activities to achieve a required quality level.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "quality policy",
    "version": "1",
    "definition": "High-level documentation describing the principles, approaches and major objectives of the organization regarding quality.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "quality report",
    "version": "1",
    "definition": "Documentation summarizing the quality level and the associated quality risks.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "quality reporting",
    "version": "1",
    "definition": "The activity that collects and analyzes data from quality engineering activities and consolidates it to inform stakeholders.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "quality risk",
    "version": "2",
    "definition": "A product risk or a project risk impacting quality management.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "RACI matrix",
    "version": "1",
    "definition": "A matrix describing the participation by various roles in completing tasks or deliverables for a project or process. It is especially useful in clarifying roles and responsibilities. RACI is an acronym derived from the four key responsibilities most typically used: Responsible, Accountable, Consulted, and Informed.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "ramp-down",
    "version": "1",
    "definition": "A technique for decreasing the load on a system in a measurable and controlled way.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "ramp-up",
    "version": "1",
    "definition": "A technique for increasing the load on a system in a measurable and controlled way.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "random testing",
    "version": "1",
    "definition": "A black-box test technique in which input values are randomly generated.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "reactive test strategy",
    "version": "1",
    "definition": "A test strategy whereby the test team waits to design and implement tests until the software is received, reacting to the actual system under test.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "reactive testing",
    "version": "1",
    "definition": "A test approach that dynamically responds to the behavior of a test object and to test results being obtained.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "reconnaissance",
    "version": "1",
    "definition": "The exploration of a target area aiming to gain information that can be useful for an attack.",
    "reference": null,
    "synonyms": "footprinting",
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "recoverability",
    "version": "2",
    "definition": "The degree to which a component or system can recover the data directly affected by an interruption or a failure and re-establish the desired state of the component or system.",
    "reference": "After ISO 25010",
    "synonyms": null,
    "abbreviation": null,
    "see_also": "reliability"
  },
  {
    "term": "red teaming",
    "version": "1",
    "definition": "A test approach that involves attacking a system to deliberately cause it to produce harmful or undesirable results.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "regression testing",
    "version": "3",
    "definition": "A type of change-related testing to detect whether defects have been introduced or uncovered in unchanged areas of the software.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "regression-averse test strategy",
    "version": "1",
    "definition": "A test strategy whereby the test team applies various techniques to manage the risk of regression such as functional and/or non-functional regression test automation at one or more levels.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "regulatory acceptance testing",
    "version": "3",
    "definition": "A type of acceptance testing performed to determine the compliance of a test object.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "reliability",
    "version": "2",
    "definition": "The degree to which a component or system performs specified functions under specified conditions for a specified period of time.",
    "reference": "After ISO 25010",
    "synonyms": null,
    "abbreviation": null,
    "see_also": "recoverability"
  },
  {
    "term": "reliability growth model",
    "version": "2",
    "definition": "A model that shows the growth in reliability over time of a component or system as a result of the defect removal.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "remote test lab",
    "version": "1",
    "definition": "A facility that provides remote access to a test environment.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "replaceability",
    "version": "2",
    "definition": "The degree to which a component or system can replace another specified component or system for the same purpose in the same environment.",
    "reference": "After ISO 25010",
    "synonyms": null,
    "abbreviation": null,
    "see_also": "portability"
  },
  {
    "term": "requirement",
    "version": "2",
    "definition": "A provision that contains criteria to be fulfilled.",
    "reference": "ISO 24765",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "requirements-based testing",
    "version": "2",
    "definition": "A black-box test technique in which test conditions are derived from atomic requirements.",
    "reference": "After ISO 29119-1",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "resilience",
    "version": "1",
    "definition": "The ability of a component or system to recover from disruptions and adapt to changing conditions to maintain operations.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "resource utilization",
    "version": "2",
    "definition": "The degree to which a component or system uses no more than the specified number of resources to perform its function under specified conditions.",
    "reference": null,
    "synonyms": "storage",
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "retrospective",
    "version": "2",
    "definition": "A regular event in which team members discuss results, review their practices, and identify ways to improve.",
    "reference": "After SAFe",
    "synonyms": "project retrospective, retrospective meeting, post-project meeting",
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "reusability",
    "version": "1",
    "definition": "The degree to which a work product can be used in more than one system, or in building other work products.",
    "reference": "After ISO 25010",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "review",
    "version": "4",
    "definition": "A type of static testing in which the quality of a work product or process is evaluated by individuals.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": "static testing"
  },
  {
    "term": "review technique",
    "version": "1",
    "definition": "A procedure used to perform a review.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": "checklist-based reviewing, perspective-based reading, role-based reviewing, scenario-based reviewing, ad hoc reviewing"
  },
  {
    "term": "reviewer",
    "version": "2",
    "definition": "A participant in a review who identifies defects in the work product.",
    "reference": "After ISO 20246",
    "synonyms": "checker, inspector",
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "risk",
    "version": "1",
    "definition": "A factor that could result in future negative consequences.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": "product risk, project risk"
  },
  {
    "term": "risk analysis",
    "version": "2",
    "definition": "The overall process of risk identification and risk assessment.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "risk appetite",
    "version": "1",
    "definition": "The amount and type of risk an organization is willing to pursue or retain.",
    "reference": "After NIST.IR.7298",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "risk assessment",
    "version": "2",
    "definition": "The process to examine identified risks and determine the risk level.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "risk control",
    "version": "1",
    "definition": "The overall process of risk mitigation and risk monitoring.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "risk identification",
    "version": "2",
    "definition": "The process of finding, recognizing and describing risks.",
    "reference": "ISO 31000",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "risk impact",
    "version": "1",
    "definition": "The damage that will be caused if a risk becomes an actual outcome or event.",
    "reference": null,
    "synonyms": "impact",
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "risk level",
    "version": "2",
    "definition": "The measure of a risk defined by risk impact and risk likelihood.",
    "reference": null,
    "synonyms": "risk exposure",
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "risk likelihood",
    "version": "1",
    "definition": "The probability that a risk will become an actual outcome or event.",
    "reference": null,
    "synonyms": "likelihood",
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "risk management",
    "version": "3",
    "definition": "The process for handling risks.",
    "reference": "After ISO 24765",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "risk mitigation",
    "version": "2",
    "definition": "The process through which decisions are reached and protective measures are implemented for reducing or maintaining risks to specified levels.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "risk monitoring",
    "version": "1",
    "definition": "The activity that checks and reports the status of known risks to stakeholders.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "risk-based testing",
    "version": "3",
    "definition": "A test approach in which the management, selection, prioritization, and use of test activities and resources are based on corresponding risk types and risk levels.",
    "reference": "After ISO 29119-1",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "robustness",
    "version": "2",
    "definition": "The degree to which a component or system maintains its level of performance under any circumstances.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "role-based reviewing",
    "version": "2",
    "definition": "A review technique in which a work product is evaluated from the perspective of different stakeholder roles.",
    "reference": "After ISO 20246",
    "synonyms": "role-based review",
    "abbreviation": null,
    "see_also": "review technique"
  },
  {
    "term": "root cause",
    "version": "1",
    "definition": "A source of a defect such that if it is removed, the occurrence of the defect type is decreased or removed.",
    "reference": "CMMI",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "root cause analysis",
    "version": "2",
    "definition": "An analysis technique aimed at identifying the root causes of defects.",
    "reference": null,
    "synonyms": "causal analysis",
    "abbreviation": "RCA",
    "see_also": null
  },
  {
    "term": "rule-based test technique",
    "version": "1",
    "definition": "A black-box test technique in which test conditions are model elements of the state-independent behavior rules of a test object.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "S.M.A.R.T. goal methodology",
    "version": "1",
    "definition": "A framework for the clear formulation of management objectives by requiring goals to be specific, measurable, attainable, relevant, and timely.",
    "reference": null,
    "synonyms": null,
    "abbreviation": "SMART",
    "see_also": null
  },
  {
    "term": "safety",
    "version": "2",
    "definition": "The degree to which a component or system under defined conditions can avoid endangering human life, health, property, or the environment.",
    "reference": "After ISO 25010",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "safety integrity level",
    "version": "1",
    "definition": "The level of risk reduction provided by a safety function, related to the frequency and severity of perceived hazards.",
    "reference": "After IEC 61508",
    "synonyms": null,
    "abbreviation": "SIL",
    "see_also": "automotive safety integrity level"
  },
  {
    "term": "salting",
    "version": "1",
    "definition": "A cryptographic technique that adds random data (salt) to the user data prior to hashing.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": "hashing"
  },
  {
    "term": "scalability",
    "version": "1",
    "definition": "The degree to which a component or system can be adjusted for changing capacity.",
    "reference": "After Gerrard",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "scalability testing",
    "version": "1",
    "definition": "Testing to determine the scalability of the software product.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "scenario-based reviewing",
    "version": "2",
    "definition": "A review technique in which a work product is evaluated to determine its ability to address specific scenarios.",
    "reference": "After ISO 20246",
    "synonyms": "scenario-based review",
    "abbreviation": null,
    "see_also": "review technique"
  },
  {
    "term": "scenario-based testing",
    "version": "1",
    "definition": "A black-box test technique in which test conditions are sequences of interactions between external actors and the test item.",
    "reference": "After ISO 29119-1",
    "synonyms": "scenario testing",
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "schema validation",
    "version": "1",
    "definition": "A type of static testing to verify that data conforms to a predefined format, structure, data types and value constraints.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "scribe",
    "version": "2",
    "definition": "A person who records information at a review meeting.",
    "reference": "After ISO 24765",
    "synonyms": "recorder",
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "script kiddie",
    "version": "1",
    "definition": "A person who executes security attacks that have been created by other hackers rather than creating one's own attacks.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": "hacker"
  },
  {
    "term": "scripted testing",
    "version": "1",
    "definition": "A test approach that involves the creation and use of a test script.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "security",
    "version": "4",
    "definition": "The degree to which a component or system defends against security attacks and provides access appropriate to types and levels of authorization.",
    "reference": "After ISO 25010",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "security attack",
    "version": "1",
    "definition": "An attempt to gain unauthorized access to a component or system, resources, information, or an attempt to compromise system integrity.",
    "reference": "After NIST.IR.7298",
    "synonyms": null,
    "abbreviation": null,
    "see_also": "fault attack"
  },
  {
    "term": "security audit",
    "version": "1",
    "definition": "An audit evaluating an organization's security processes and infrastructure.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "security policy",
    "version": "1",
    "definition": "A high-level document describing the principles, approach and major objectives of the organization regarding security.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "security procedure",
    "version": "1",
    "definition": "A set of steps required to implement the security policy and the steps to be taken in response to a security incident.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "security risk",
    "version": "1",
    "definition": "A quality risk related to security.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "security testing",
    "version": "1",
    "definition": "A test type to determine the security of a component or system.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "sequential development model",
    "version": "2",
    "definition": "A type of software development lifecycle model in which a complete system is developed in a linear way of several discrete and successive phases with no overlap between them.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "service virtualization",
    "version": "1",
    "definition": "A technique to enable the delivery of virtual services which are deployed, accessed and managed remotely.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "session-based test management",
    "version": "1",
    "definition": "A method for measuring and managing session-based testing.",
    "reference": null,
    "synonyms": null,
    "abbreviation": "SBTM",
    "see_also": null
  },
  {
    "term": "session-based testing",
    "version": "1",
    "definition": "A test approach in which test activities are planned as test sessions.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "severity",
    "version": "1",
    "definition": "The degree of impact that a defect has on the development or operation of a component or system.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "shadow testing",
    "version": "1",
    "definition": "A test type used to compare a new version of a component or system with the current version by running the former in the background.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "shift left",
    "version": "1",
    "definition": "A test approach to perform testing and quality assurance activities as early as possible in the software development lifecycle.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": "shift right"
  },
  {
    "term": "shift right",
    "version": "1",
    "definition": "A test approach to test a system continuously in production.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": "shift left, testing in production"
  },
  {
    "term": "side-effects testing",
    "version": "1",
    "definition": "A test type to determine if executing a test object leads to unforeseen consequences.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "sign change coverage",
    "version": "1",
    "definition": "The coverage of neurons activated with both positive and negative activation values in a neural network for a set of tests.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "sign-sign coverage",
    "version": "1",
    "definition": "The coverage achieved if by changing the sign of each neuron it can be shown to individually cause one neuron in the next layer to change sign while all other neurons in the next layer do not change sign for a set of tests.",
    "reference": "After ISO 29119-11",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "simulator",
    "version": "2",
    "definition": "A component or system used during testing which behaves or operates like a given component or system.",
    "reference": "After ISO 24765",
    "synonyms": null,
    "abbreviation": null,
    "see_also": "emulator"
  },
  {
    "term": "smoke test",
    "version": "1",
    "definition": "A test suite that covers the main functionality of a component or system to determine whether it works properly before planned testing begins.",
    "reference": null,
    "synonyms": "sanity test, intake test, confidence test",
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "smoke testing",
    "version": "1",
    "definition": "A test type to gain sufficient confidence that a test object is ready for more detailed and comprehensive testing.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "social engineering",
    "version": "1",
    "definition": "An attempt to trick someone into revealing information (e.g., a password) that can be used to attack systems or networks.",
    "reference": "NIST.IR.7298",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "societal and ethical risk mitigation",
    "version": "1",
    "definition": "The degree to which an AI-based system mitigates potential risk to society.",
    "reference": "After ISO 25059",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "software development lifecycle",
    "version": "1",
    "definition": "The activities performed at each phase in software development, and how they relate to one another logically and chronologically.",
    "reference": null,
    "synonyms": "lifecycle model",
    "abbreviation": "SDLC",
    "see_also": null
  },
  {
    "term": "software lifecycle",
    "version": "1",
    "definition": "The period of time that begins when a software product is conceived and ends when the software is no longer available for use. The software lifecycle typically includes a concept phase, requirements phase, design phase, implementation phase, test phase, installation and checkout phase, operation and maintenance phase, and sometimes, retirement phase. Note these phases may overlap or be performed iteratively.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "software process improvement",
    "version": "1",
    "definition": "A program of activities designed to improve the performance and maturity of the organization's software processes and the results of such a program.",
    "reference": "After CMMI",
    "synonyms": null,
    "abbreviation": "SPI",
    "see_also": null
  },
  {
    "term": "software qualification test",
    "version": "1",
    "definition": "Testing performed on completed, integrated software to provide evidence for compliance with software requirements.",
    "reference": "Automotive SPICE",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "Software Usability Measurement Inventory",
    "version": "2",
    "definition": "A questionnaire-based usability testing tool that measures and benchmarks user experience.",
    "reference": "Kirakowski93",
    "synonyms": null,
    "abbreviation": "SUMI",
    "see_also": "Website Analysis and Measurement Inventory"
  },
  {
    "term": "software-in-the-loop",
    "version": "2",
    "definition": "A virtual test environment in which real software is tested.",
    "reference": "Automotive SPICE",
    "synonyms": null,
    "abbreviation": "SiL",
    "see_also": null
  },
  {
    "term": "source test case",
    "version": "1",
    "definition": "A test case that passed and is used as the basis of follow-up test cases in metamorphic testing.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "specification by example",
    "version": "1",
    "definition": "A development technique in which the specification is defined by examples.",
    "reference": null,
    "synonyms": null,
    "abbreviation": "SBE",
    "see_also": "acceptance test-driven development"
  },
  {
    "term": "spike testing",
    "version": "1",
    "definition": "Testing to determine the ability of a system to recover from sudden bursts of peak loads and return to a steady state.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "standard-compliant test strategy",
    "version": "1",
    "definition": "A test strategy whereby the test team follows a standard. Standards followed may be valid e.g., for a country (legislation standards), a business domain (domain standards), or internally (organizational standards).",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "state transition testing",
    "version": "3",
    "definition": "A black-box test technique in which test conditions are state transitions or sequences of them.",
    "reference": "After ISO 29119-4",
    "synonyms": "finite state testing",
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "statement coverage",
    "version": "3",
    "definition": "The coverage of executable source statements.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "statement testing",
    "version": "2",
    "definition": "A white-box test technique in which test conditions are based on executable source statements.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "static analysis",
    "version": "2",
    "definition": "The automated process of evaluating a component or system without executing it, based on its form, structure, content, or documentation.",
    "reference": "After ISO 24765",
    "synonyms": null,
    "abbreviation": null,
    "see_also": "static testing"
  },
  {
    "term": "static application security testing",
    "version": "1",
    "definition": "A type of static analysis that focuses on detecting vulnerabilities.",
    "reference": "After NIST.IR.7298",
    "synonyms": null,
    "abbreviation": "SAST",
    "see_also": "dynamic application security testing, interactive application security testing, vulnerability"
  },
  {
    "term": "static testing",
    "version": "4",
    "definition": "A test approach that does not involve the execution of a test item.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": "dynamic testing, static analysis, review"
  },
  {
    "term": "stress testing",
    "version": "1",
    "definition": "A type of performance testing to evaluate a system or component at or beyond the limits of its anticipated or specified workloads, or with reduced availability of resources such as access to memory or servers.",
    "reference": "ISO 24765",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "structural coverage",
    "version": "1",
    "definition": "Coverage measures based on the internal structure of a component or system.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "structured scripting",
    "version": "1",
    "definition": "A scripting technique that builds and utilizes a library of reusable (parts of) scripts.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "stub",
    "version": "2",
    "definition": "A type of test double providing predefined responses.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": "mock"
  },
  {
    "term": "substantive testing",
    "version": "1",
    "definition": "A test approach that evaluates if the actual outcomes or data produced by a system or process are within compliance.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "summative evaluation",
    "version": "1",
    "definition": "A type of evaluation designed and used to gather conclusions about the quality of a component or system, especially when a substantial part of it has completed design.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": "formative evaluation"
  },
  {
    "term": "synthetic test data",
    "version": "1",
    "definition": "Test data created or generated without using production data.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "system hardening",
    "version": "1",
    "definition": "The step-by-step process of reducing the vulnerabilities of a system by applying a security policy and different layers of protection.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "system integration testing",
    "version": "4",
    "definition": "A test level that focuses on the integration of systems.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "system of systems",
    "version": "1",
    "definition": "Multiple heterogeneous, distributed systems that are embedded in networks at multiple levels and in multiple interconnected domains, addressing large-scale inter-disciplinary common problems and purposes, usually without a common management structure.",
    "reference": null,
    "synonyms": "multi-system",
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "system qualification test",
    "version": "1",
    "definition": "Testing performed on the completed, integrated system of software components, hardware components, and mechanics to provide evidence for compliance with system requirements and that the complete system is ready for delivery.",
    "reference": "Automotive SPICE",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "system testing",
    "version": "2",
    "definition": "A test level that focuses on verifying that a system as a whole meets specified requirements.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "system throughput",
    "version": "1",
    "definition": "The amount of data passing through a component or system in a given time period.",
    "reference": "After ISO 24765",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "system under test",
    "version": "2",
    "definition": "A type of test object that is a system.",
    "reference": null,
    "synonyms": null,
    "abbreviation": "SUT",
    "see_also": null
  },
  {
    "term": "System Usability Scale",
    "version": "1",
    "definition": "A simple, ten-item attitude scale giving a global view of subjective assessments of usability.",
    "reference": null,
    "synonyms": null,
    "abbreviation": "SUS",
    "see_also": null
  },
  {
    "term": "Systematic Test and Evaluation Process",
    "version": "2",
    "definition": "A structured testing methodology also used as a content-based model for improving the testing process. It does not require that improvements occur in a specific order.",
    "reference": null,
    "synonyms": null,
    "abbreviation": "STEP",
    "see_also": null
  },
  {
    "term": "technical review",
    "version": "3",
    "definition": "A formal review by technical experts that examine the quality of a work product and identify discrepancies from specifications and standards.",
    "reference": "After IEEE 1028",
    "synonyms": null,
    "abbreviation": null,
    "see_also": "peer review"
  },
  {
    "term": "test",
    "version": "1",
    "definition": "A set of one or more test cases.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "test adaptation layer",
    "version": "1",
    "definition": "The layer in a test automation architecture which provides the necessary code to adapt test scripts on an abstract level to the various components, configuration or interfaces of the SUT.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "test analysis",
    "version": "2",
    "definition": "The activity that identifies test conditions by analyzing the test basis.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "test analyst",
    "version": "1",
    "definition": "A person responsible for test analysis, test design, test implementation, and test execution, focusing on non-technical aspects of software.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "test approach",
    "version": "3",
    "definition": "The manner of implementing test tasks.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": "test practice"
  },
  {
    "term": "test architect",
    "version": "1",
    "definition": "(1) A person who provides guidance and strategic direction for a test organization and for its relationship with other disciplines. (2) A person who defines the way testing is structured for a given system, including topics such as test tools and test data management.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "test automation",
    "version": "3",
    "definition": "The conversion of test activities to automated operation.",
    "reference": "After ISO 2382",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "test automation approach",
    "version": "1",
    "definition": "A test approach to automate test activities.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "test automation architecture",
    "version": "2",
    "definition": "An instantiation of the generic test automation architecture for a system.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "test automation engineer",
    "version": "1",
    "definition": "A person who is responsible for the design, implementation and maintenance of a test automation architecture as well as the technical evolution of the resulting test automation solution.",
    "reference": null,
    "synonyms": null,
    "abbreviation": "TAE",
    "see_also": null
  },
  {
    "term": "test automation framework",
    "version": "2",
    "definition": "A set of test harnesses and test libraries for test automation.",
    "reference": null,
    "synonyms": null,
    "abbreviation": "TAF",
    "see_also": null
  },
  {
    "term": "test automation manager",
    "version": "1",
    "definition": "A person who is responsible for the planning and supervision of the development and evolution of a test automation solution.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "test automation solution",
    "version": "2",
    "definition": "The implementation of a test automation architecture for a test automation assignment.",
    "reference": null,
    "synonyms": null,
    "abbreviation": "TAS",
    "see_also": null
  },
  {
    "term": "test automation strategy",
    "version": "2",
    "definition": "A high-level description how to achieve long-term objectives of test automation under given technological, organizational and economic conditions.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "test basis",
    "version": "2",
    "definition": "The body of knowledge used as the basis for test analysis and test design.",
    "reference": "After TMap",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "test case",
    "version": "2",
    "definition": "A set of preconditions, inputs, actions (where applicable), expected results and postconditions, developed based on test conditions.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": "test step"
  },
  {
    "term": "test case explosion",
    "version": "2",
    "definition": "The disproportionate growth in test cases for a specific test technique for a growing size or complexity of the test basis.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "test charter",
    "version": "3",
    "definition": "Documentation of a test objective for a test session.",
    "reference": null,
    "synonyms": "charter",
    "abbreviation": null,
    "see_also": "exploratory testing"
  },
  {
    "term": "test completion",
    "version": "2",
    "definition": "The activity that makes testware available for later use, leaves test environments in a satisfactory condition and communicates the results of testing to relevant stakeholders.",
    "reference": null,
    "synonyms": "test closure",
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "test completion report",
    "version": "3",
    "definition": "A type of test report produced at completion milestones that provides an evaluation of the corresponding test items against exit criteria.",
    "reference": null,
    "synonyms": "test summary report",
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "test condition",
    "version": "4",
    "definition": "A testable aspect of a component or system that is intended to be tested.",
    "reference": "After ISO 29119-1",
    "synonyms": "test situation, test requirement, test idea",
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "test control",
    "version": "2",
    "definition": "The activity that develops and applies corrective actions to get a test project on track when it deviates from what was planned.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": "test management"
  },
  {
    "term": "test cycle",
    "version": "1",
    "definition": "An instance of the test process against a single identifiable version of the test object.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "test data",
    "version": "3",
    "definition": "Data needed for test execution.",
    "reference": null,
    "synonyms": "test dataset",
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "test data management",
    "version": "1",
    "definition": "The process of providing the required test data for a component or system while ensuring compliance with legislation and standards.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "test data preparation",
    "version": "1",
    "definition": "The activity to select data from existing databases or create, generate, manipulate and edit data for testing.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "test data subsetting",
    "version": "1",
    "definition": "The process of extracting a consistent subset of production data for testing.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "test design",
    "version": "3",
    "definition": "The activity that derives and specifies test cases from test conditions.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "test director",
    "version": "1",
    "definition": "A senior manager who manages test managers.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": "test manager"
  },
  {
    "term": "test double",
    "version": "1",
    "definition": "A replacement component invoked by a test object to perform testing.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": "mock"
  },
  {
    "term": "test environment",
    "version": "1",
    "definition": "An environment containing hardware, instrumentation, simulators, software tools, and other support elements needed to perform a test.",
    "reference": "ISO 24765",
    "synonyms": "test bed, test rig",
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "test estimation",
    "version": "2",
    "definition": "An approximation related to various aspects of testing.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "test execution",
    "version": "2",
    "definition": "The activity that runs a test on a component or system producing actual results.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "test execution automation",
    "version": "1",
    "definition": "The use of software, e.g., capture/playback tools, to control the execution of tests, the comparison of actual results to expected results, the setting up of test preconditions, and other test control and reporting functions.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "test execution schedule",
    "version": "2",
    "definition": "A schedule for the execution of test suites within a test cycle.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "test fixture",
    "version": "1",
    "definition": "The predefined data and test environment to test software in a repeatable manner.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "test harness",
    "version": "2",
    "definition": "A collection of drivers and test doubles needed to execute a test suite.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "test heuristic",
    "version": "1",
    "definition": "A heuristic that supports testing.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "test histogram",
    "version": "1",
    "definition": "A visual representation that shows the distribution of test results.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "test hook",
    "version": "1",
    "definition": "A customized software interface that enables automated testing of a test object.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "test implementation",
    "version": "3",
    "definition": "The activity that prepares the testware needed for test execution.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "test infrastructure",
    "version": "1",
    "definition": "The test environments, test tools, office environment and procedures needed to perform testing.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "test item",
    "version": "2",
    "definition": "A part of a test object used in the test process.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": "test object"
  },
  {
    "term": "test leader",
    "version": "1",
    "definition": "The person who reports to the test manager on large projects and is responsible for project management of a particular test level or a particular set of test activities.",
    "reference": null,
    "synonyms": "lead tester",
    "abbreviation": null,
    "see_also": "test manager"
  },
  {
    "term": "test level",
    "version": "2",
    "definition": "A specific instantiation of a test process.",
    "reference": null,
    "synonyms": "test stage",
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "test log",
    "version": "1",
    "definition": "A chronological record of relevant details about test execution.",
    "reference": "ISO 24765",
    "synonyms": "test record, test run log",
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "test management",
    "version": "2",
    "definition": "The process of planning, scheduling, estimating, monitoring, reporting, controlling, and completing test activities.",
    "reference": "ISO 29119-1",
    "synonyms": null,
    "abbreviation": null,
    "see_also": "test control, test monitoring"
  },
  {
    "term": "test manager",
    "version": "2",
    "definition": "The person responsible for managing test activities, test resources, and evaluating the test object.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": "test director, test leader, Agile test leader"
  },
  {
    "term": "Test Maturity Model integration",
    "version": "1",
    "definition": "A five-level staged framework for test process improvement, related to the Capability Maturity Model Integration (CMMI), that describes the key elements of an effective test process.",
    "reference": null,
    "synonyms": null,
    "abbreviation": "TMMi",
    "see_also": null
  },
  {
    "term": "test mission",
    "version": "1",
    "definition": "The purpose of testing for an organization, often documented as part of the test policy.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": "test policy"
  },
  {
    "term": "test mnemonic",
    "version": "1",
    "definition": "A memory aid in the form of an abbreviation used to help remember key concepts or test practices.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "test model",
    "version": "1",
    "definition": "A model describing testware that is used for testing a component or a system under test.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "test monitoring",
    "version": "3",
    "definition": "The activity that checks the status of testing activities, identifies any variances from planned or expected, and reports status to stakeholders.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": "test management"
  },
  {
    "term": "test object",
    "version": "2",
    "definition": "The work product to be tested.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": "test item"
  },
  {
    "term": "test objective",
    "version": "3",
    "definition": "The purpose for testing.",
    "reference": null,
    "synonyms": "test goal",
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "test oracle",
    "version": "2",
    "definition": "A source to determine an expected result.",
    "reference": "After Adrion",
    "synonyms": "oracle",
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "test plan",
    "version": "3",
    "definition": "Documentation that describes test objectives, means and schedule for achieving test coordination.",
    "reference": "After ISO 29119-1",
    "synonyms": null,
    "abbreviation": null,
    "see_also": "master test plan, level test plan, test scope"
  },
  {
    "term": "test planning",
    "version": "1",
    "definition": "The activity of establishing or updating a test plan.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "test point analysis",
    "version": "1",
    "definition": "A formula-based test estimation technique based on function point analysis.",
    "reference": "TMap",
    "synonyms": null,
    "abbreviation": "TPA",
    "see_also": null
  },
  {
    "term": "test policy",
    "version": "1",
    "definition": "High-level documentation describing the principles, approach and major objectives of the organization regarding testing.",
    "reference": null,
    "synonyms": "organizational test policy",
    "abbreviation": null,
    "see_also": "test mission"
  },
  {
    "term": "test practice",
    "version": "1",
    "definition": "The expected way of performing test activities.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": "test approach"
  },
  {
    "term": "test procedure",
    "version": "1",
    "definition": "A sequence of test cases in execution order and any associated actions that may be required to set up the initial preconditions and any wrap-up activities after execution.",
    "reference": "After ISO 29119-1",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "test process",
    "version": "3",
    "definition": "A set of test activities performed to achieve a test objective.",
    "reference": "After ISO 29119-1",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "test process group",
    "version": "2",
    "definition": "A collection of specialists who facilitate the definition, maintenance, and improvement of the test processes used by an organization.",
    "reference": "After CMMI",
    "synonyms": null,
    "abbreviation": "TPG",
    "see_also": null
  },
  {
    "term": "test process improvement",
    "version": "1",
    "definition": "A program of activities undertaken to improve the performance and maturity of the organization's test processes.",
    "reference": "After CMMI",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "test process improvement manifesto",
    "version": "2",
    "definition": "A statement that echoes the Agile manifesto, and defines values for improving the test process.",
    "reference": "Veenendaal08",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "test progress",
    "version": "1",
    "definition": "The progress of testing against a baseline.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "test progress report",
    "version": "4",
    "definition": "A type of periodic test report that includes the progress of test activities against a baseline, risks, and alternatives requiring a decision.",
    "reference": null,
    "synonyms": "test status report",
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "test pyramid",
    "version": "1",
    "definition": "A graphical model representing the relationship of the amount of testing per level, with more at the bottom than at the top.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "test report",
    "version": "1",
    "definition": "Documentation summarizing testing and test results.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "test reporting",
    "version": "2",
    "definition": "The activity that consolidates test monitoring information and evaluates whether test objectives have been reached to inform stakeholders.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "test result",
    "version": "2",
    "definition": "The status of the execution of a test.",
    "reference": "After ISO 29119-1",
    "synonyms": "outcome, test outcome, result",
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "test run",
    "version": "1",
    "definition": "The execution of a test suite on a specific version of the test object.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "test schedule",
    "version": "1",
    "definition": "A list of activities, tasks, and milestones of the test process, their intended start and finish dates and interdependencies.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "test scope",
    "version": "1",
    "definition": "A description of the test object and its features to be tested.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": "test plan"
  },
  {
    "term": "test script",
    "version": "2",
    "definition": "A sequence of instructions for the execution of a test.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "test selection criteria",
    "version": "2",
    "definition": "The criteria used to derive and/or select test cases to achieve an acceptable size of a test.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "test session",
    "version": "1",
    "definition": "An uninterrupted period of time spent in executing tests.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "test smell",
    "version": "1",
    "definition": "An aspect of the testware that suggests potential problems, inefficiencies, or risks related to this testware.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "test specification",
    "version": "2",
    "definition": "The complete documentation of the test design, test cases, and test scripts for a specific test item.",
    "reference": "After ISO 29119-1",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "test step",
    "version": "1",
    "definition": "A single interaction between an actor and a test object consisting of an input, an action, and an expected result.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": "test case"
  },
  {
    "term": "test strategy",
    "version": "4",
    "definition": "A description of how to perform testing to reach test objectives under given circumstances.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "test suite",
    "version": "3",
    "definition": "A set of test scripts or test procedures to be executed in a specific test run.",
    "reference": null,
    "synonyms": "test set, test case suite",
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "test technique",
    "version": "3",
    "definition": "A procedure used to define test conditions, design test cases, and specify test data.",
    "reference": null,
    "synonyms": "test design technique",
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "test type",
    "version": "2",
    "definition": "A group of test activities based on specific test objectives aimed at specific characteristics of a component or system.",
    "reference": "After TMap",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "test-driven development",
    "version": "2",
    "definition": "A software development technique in which the test cases are developed, automated and then the software is developed incrementally to pass those test cases.",
    "reference": null,
    "synonyms": null,
    "abbreviation": "TDD",
    "see_also": "test-first approach"
  },
  {
    "term": "test-first approach",
    "version": "1",
    "definition": "An approach to software development in which the test cases are designed and implemented before the associated component or system is developed.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": "test-driven development"
  },
  {
    "term": "testability",
    "version": "3",
    "definition": "The degree to which test conditions can be established for a component or system, and tests can be performed to determine whether those test conditions have been met.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": "maintainability"
  },
  {
    "term": "testboarding",
    "version": "1",
    "definition": "A visualization technique that maps main and alternative scenarios per functionality that should be tested.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "tester",
    "version": "2",
    "definition": "A person who performs testing.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "testing",
    "version": "3",
    "definition": "The process within the software development lifecycle that evaluates the quality of a component or system and related work products.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": "quality control"
  },
  {
    "term": "testing capability",
    "version": "1",
    "definition": "The abilities an organization needs to accomplish its test objectives.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": "quality capability"
  },
  {
    "term": "testing for bias",
    "version": "1",
    "definition": "A test type to detect bias in input data, an AI model, or an AI-based system.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "testing in production",
    "version": "1",
    "definition": "A test level that focuses on validating a system in a production environment.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": "post-release testing, shift right"
  },
  {
    "term": "testing quadrants",
    "version": "1",
    "definition": "A classification model of test types/test levels in four quadrants, relating them to two dimensions of test objectives: supporting the product team versus critiquing the product, and technology-facing versus business-facing.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "testware",
    "version": "2",
    "definition": "Work products produced during the test process for use in planning, designing, executing, evaluating and reporting on testing.",
    "reference": "After ISO 29119-1",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "think aloud usability testing",
    "version": "1",
    "definition": "A usability testing technique where test participants share their thoughts with the moderator and observers by thinking aloud while they solve usability test tasks. Think aloud is useful to understand the test participant.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "think time",
    "version": "1",
    "definition": "The amount of time required by a user to determine and execute the next action in a sequence of actions.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "threshold coverage",
    "version": "1",
    "definition": "The coverage of neurons exceeding a threshold activation value in a neural network for a set of tests.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "time behavior",
    "version": "1",
    "definition": "The degree to which a component or system can perform its required functions within required response times, processing times and throughput rates.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "tissue tester",
    "version": "1",
    "definition": "A tester outside an Agile team having no experience with the component or system who tests it to provide early feedback before planned testing or development continues.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "Total Quality Management",
    "version": "2",
    "definition": "An organization-wide management approach to quality based on employee participation to achieve long-term success through customer satisfaction.",
    "reference": "After ISO 24765",
    "synonyms": null,
    "abbreviation": "TQM",
    "see_also": null
  },
  {
    "term": "tour",
    "version": "1",
    "definition": "A set of exploratory tests organized around a special focus.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "TPI Next",
    "version": "1",
    "definition": "A continuous business-driven framework for test process improvement that describes the key elements of an effective and efficient test process.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "traceability",
    "version": "3",
    "definition": "The ability to establish explicit relationships between related work products or items within work products.",
    "reference": "IREB Glossary",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "traceability matrix",
    "version": "1",
    "definition": "A matrix which correlates work products or items within work products to determine the coverage achieved.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "transcendent quality",
    "version": "2",
    "definition": "A view of quality based on the perception and feeling of individuals.",
    "reference": "After Garvin",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "transparency",
    "version": "1",
    "definition": "The degree to which appropriate information about an AI-based system is communicated to relevant stakeholders.",
    "reference": "After ISO 25059",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "unit test framework",
    "version": "2",
    "definition": "A tool that provides an environment for testing a unit in isolation.",
    "reference": "After Graham",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "unit testing",
    "version": "1",
    "definition": "A test level that focuses on evaluating the smallest part of code testable in isolation.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "usability",
    "version": "3",
    "definition": "The degree to which a component or system can be used by specified users to achieve specified goals in a specified context of use.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": "user interface aesthetics, operability, appropriateness recognizability, interaction capability"
  },
  {
    "term": "usability evaluation",
    "version": "1",
    "definition": "A process through which information about the usability of a system is gathered in order to improve the system (known as formative evaluation) or to assess the merit or worth of a system (known as summative evaluation).",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "usability lab",
    "version": "1",
    "definition": "A test facility in which unintrusive observation of participant reactions and responses to software takes place.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "usability requirement",
    "version": "1",
    "definition": "A requirement on the usability of a component or system.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "usability test participant",
    "version": "1",
    "definition": "A representative user who solves typical tasks in a usability test.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "usability test script",
    "version": "1",
    "definition": "A document specifying a sequence of actions for the execution of a usability test. It is used by the moderator to keep track of briefing and pre- session interview questions, usability test tasks, and post-session interview questions.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "usability test session",
    "version": "1",
    "definition": "A test session in usability testing in which a usability test participant is executing tests, moderated by a moderator and observed by a number of observers.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "usability test task",
    "version": "1",
    "definition": "A usability test execution activity specified by the moderator that needs to be accomplished by a usability test participant within a given period of time.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "usability testing",
    "version": "2",
    "definition": "Testing to evaluate the degree to which the system can be used by specified users with effectiveness, efficiency and satisfaction in a specified context of use.",
    "reference": "After ISO 25010",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "use case testing",
    "version": "3",
    "definition": "A black-box test technique in which test cases are designed to exercise use case behaviors.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "user acceptance testing",
    "version": "4",
    "definition": "A type of acceptance testing performed to determine if intended users accept the system.",
    "reference": null,
    "synonyms": null,
    "abbreviation": "UAT",
    "see_also": "acceptance testing"
  },
  {
    "term": "user controllability",
    "version": "1",
    "definition": "The degree to which a user can intervene in a system’s functioning in a timely manner.",
    "reference": "After ISO 25059",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "user error protection",
    "version": "1",
    "definition": "The degree to which a component or system protects users against making errors.",
    "reference": "After ISO 25010",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "user experience",
    "version": "1",
    "definition": "A person's perceptions and responses resulting from the use or anticipated use of a software product.",
    "reference": "ISO 9241-210",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "user interface",
    "version": "1",
    "definition": "All components of a system that provide information and controls for the user to accomplish specific tasks with the system.",
    "reference": null,
    "synonyms": null,
    "abbreviation": "UI",
    "see_also": null
  },
  {
    "term": "user interface aesthetics",
    "version": "2",
    "definition": "The degree to which a user interface enables pleasing and satisfying interaction for the user.",
    "reference": "ISO 25010",
    "synonyms": "attractiveness",
    "abbreviation": null,
    "see_also": "usability"
  },
  {
    "term": "user interface guideline",
    "version": "1",
    "definition": "A low-level, specific rule or recommendation for user interface design that leaves little room for interpretation so designers implement it similarly. It is often used to ensure consistency in the appearance and behavior of the user interface of the systems produced by an organization.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "user story",
    "version": "4",
    "definition": "A short narrative describing a need from a user's perspective together with the expected benefit when this need is satisfied.",
    "reference": "IREB Glossary",
    "synonyms": null,
    "abbreviation": null,
    "see_also": "user story testing"
  },
  {
    "term": "user story testing",
    "version": "2",
    "definition": "A black-box test technique in which test conditions are the acceptance criteria of user stories.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": "user story"
  },
  {
    "term": "user survey",
    "version": "1",
    "definition": "A usability evaluation whereby a representative sample of users are asked to report subjective evaluation into a questionnaire based on their experience in using a component or system.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "user-agent based testing",
    "version": "1",
    "definition": "A test type in which a test client is used to switch the user agent string and identify itself as a different client while executing test suites.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "user-based quality",
    "version": "2",
    "definition": "A view of quality measured by the degree that the needs, wants, and desires of a user are met.",
    "reference": "After Garvin",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "V-model",
    "version": "2",
    "definition": "A sequential software development lifecycle model describing a one-for-one relationship between major phases of software development from business requirements specification to delivery, and corresponding test levels from acceptance testing to component testing.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "validation",
    "version": "2",
    "definition": "Confirmation by examination that a work product matches a stakeholder's needs.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "value change coverage",
    "version": "1",
    "definition": "The coverage of neurons activated where their activation values differ by more than a change amount in the neural network for a set of tests.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "value-based quality",
    "version": "2",
    "definition": "A view of quality measured by the ratio of the cost to the value received from a product or service.",
    "reference": "After Garvin",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "verification",
    "version": "2",
    "definition": "The process of confirming that a work product fulfills its specification.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "vibe testing",
    "version": "1",
    "definition": "A test approach in which AI tests a component or system based on natural language descriptions of desired user experiences.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "virtual test environment",
    "version": "1",
    "definition": "A test environment in which one or more parts are digitally simulated.",
    "reference": "ISO 29119-11",
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "virtual user",
    "version": "1",
    "definition": "A simulation of activities performed according to a user operational profile.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "visual testing",
    "version": "1",
    "definition": "A test type that uses image recognition to interact with GUI objects.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "vulnerability",
    "version": "3",
    "definition": "A weakness in a component or system or its use that can be exercised and can result in harm.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": "cross-site scripting, dynamic application security testing, static application security testing, fuzz testing, penetration testing, weakness"
  },
  {
    "term": "vulnerability scanning",
    "version": "1",
    "definition": "A type of static analysis that detects vulnerabilities.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "walkthrough",
    "version": "3",
    "definition": "A type of formal review in which an author leads members of the review through a work product and the members ask questions and make comments.",
    "reference": "After ISO 20246",
    "synonyms": "structured walkthrough",
    "abbreviation": null,
    "see_also": "peer review"
  },
  {
    "term": "weakness",
    "version": "2",
    "definition": "A condition that may lead to undesirable behavior.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": "vulnerability"
  },
  {
    "term": "Web Content Accessibility Guidelines",
    "version": "1",
    "definition": "A part of a series of web accessibility guidelines published by the Web Accessibility Initiative (WAI) of the World Wide Web Consortium (W3C), the main international standards organization for the internet. They consist of a set of guidelines for making content accessible, primarily for people with disabilities.",
    "reference": null,
    "synonyms": null,
    "abbreviation": "WCAG",
    "see_also": null
  },
  {
    "term": "Website Analysis and Measurement Inventory",
    "version": "2",
    "definition": "A commercial website analysis service providing a questionnaire for measuring user experience and assessing delivery of business goals online.",
    "reference": null,
    "synonyms": null,
    "abbreviation": "WAMMI",
    "see_also": "Software Usability Measurement Inventory"
  },
  {
    "term": "white-box test technique",
    "version": "3",
    "definition": "A test technique based on the internal structure of a component or system.",
    "reference": null,
    "synonyms": "white-box test design technique, structure-based test technique",
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "white-box testing",
    "version": "2",
    "definition": "A test approach based on the internal structure of a component or system.",
    "reference": null,
    "synonyms": "clear-box testing, code-based testing, glass-box testing, logic-coverage testing, logic-driven testing, structural testing, structure-based testing",
    "abbreviation": null,
    "see_also": null
  },
  {
    "term": "wild pointer",
    "version": "1",
    "definition": "A pointer that references a location that is out of scope for that pointer or that does not exist.",
    "reference": null,
    "synonyms": null,
    "abbreviation": null,
    "see_also": null
  }
];
