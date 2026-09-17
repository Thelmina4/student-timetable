// HEADER //

const studyData = {

    "2nd Year": {

        "Semester 1": {
            homework: "2nd-year/semester-1/deadlines.html#homework",
            exams: "2nd-year/semester-1/deadlines.html#exams-projects",
            modules: "2nd-year/semester-1/modules.html"
        },

        "Semester 2": {
            homework: "2nd-year/semester-2/deadlines.html#homework",
            exams: "2nd-year/semester-2/deadlines.html#exams-projects",
            modules: "2nd-year/semester-2/modules.html"
        }

    },

    "3rd Year": {

        "Semester 1": {
            homework: "3rd-year/semester-1/deadlines.html#homework",
            exams: "3rd-year/semester-1/deadlines.html#exams-projects",
            modules: "3rd-year/semester-1/modules.html"
        }

    }

};

// MODULES

const CSC1042 = {
    code: "CSC1042",
    name: "Computer Networks 2",
    // unique identifier for the module
    id: "csc1042",
    colour: "#..."
};
const CSC1048 = {
    code: "CSC1048",
    name: "Computability & Complexity",
    id: "csc1048",
    colour: "#..."
};

const CSC1058 = {
    code: "CSC1058",
    name: "User Interface Design & Implementation",
    id: "csc1058",
    colour: "#..."
};

const CSC1202 = {
    code: "CSC1202",
    name: "Prompt Engineering and LLM-Based Agents",
    id: "csc1202",
    colour: "#..."
};

const CSC1046 = {
    code: "CSC1046",
    name: "OO Analysis & Design",
    id: "csc1046",
    colour: "#..."
};

const CSC1049 = {
    code: "CSC1049",
    name: "COMSCI3 Project",
    id: "csc1049",
    colour: "#..."
};

const CSC1047 = {
    code: "CSC1047",
    name: "Advanced Algorithms and A.I. Search",
    id: "csc1047",
    colour: "#..."
};

// LIST OF 3RD YR SEM1 MODULES 
const thirdYearSem1Modules = [
    CSC1042,
    CSC1048,
    CSC1058,
    CSC1202,
    CSC1046,
    CSC1049,
    CSC1047
];

// EVENTS FOR THE DEADLINES PAGE - CALENDAR & UPCOMING EVENTS

// KISS - keep it simple, reduce the number of categories
// category: "Project",
// category: "Exam",
// category: "Careers Event",
// category: "Meeting" 
// category: null,


// const events = [];
const events = [
    {
        id: 1,
        // MODLUE IS THE SAME AS THE ID FOR THE MODULES
        module: "csc1042",
        // moduleName: "OO Analysis & Design",
        category: "Project",

        title: "Analysis",

        // dates
        // Exact time known → "17:00"
        // Time not announced yet → null / "TBC" for display
        // All-day event → true
        date: "2026-10-02",
        time: "17:00",
        allDay: false,

        week: 4,

        type: " Group Project",
        description: "1. Refined requirements specification 2. Scenarios 3. Primary class list 4. Class Diagrams 5. Use case diagrams 6. Result of “Structured walk-through” 7. Minutes/notes of team meetings",
        link: "https://loop.dcu.ie/course/view.php?id=77850&section=1",
        completed: false
    },

    {
        id: 2,
        module: "csc1058",
        // moduleName: "OO Analysis & Design",
        category: "Project",

        title: "Product Design",

        date: "2026-10-16",
        time: "17:00",
        allDay: false,
        week: 6,

        type: "Group Project",
        description: "1. Object diagrams 2. Refined class diagrams 3. User interface mock-ups 4. State machines",
        link: "https://loop.dcu.ie/course/view.php?id=77850&section=1",
        completed: false
    },

    {
        id: 3,
        module: "csc1058",
        // moduleName: "OO Analysis & Design",

        // category: null,? or give it it's own category?
        category: "Project",
        title: "Class Design",

        date: "2026-10-23",
        time: "17:00",
        allDay: false,
        week: 7,

        type: "Group Project",
        description: "1. Collaboration diagrams 2. Sequence diagrams 3. Object diagrams 4. Refined class diagrams 5. Class skeletons 6. Minutes or notes of any team meetings",
        link: "https://loop.dcu.ie/course/view.php?id=77850&section=1",
        completed: false
    },

    {
        id: 4,
        module: "csc1058",
        // moduleName: "OO Analysis & Design",
        category: "Project",
        title: "Implementation",

        date: "2026-11-13",
        time: "17:00",
        allDay: false,
        week: 10,

        type: "Group Project",
        description: "1. Source code (provisional) 2. Minutes or notes of any team meetings",
        link: "https://loop.dcu.ie/course/view.php?id=77850&section=1",
        completed: false
    },
    {
        id: 5,
        module: "csc1058",
        // moduleName: "OO Analysis & Design",
        category: "Project",
        title: "Presentation",

        date: "2026-11-16",
        time: "17:00",
        allDay: false,
        week: 11,

        type: "Group Project",
        description: "1. Project presentation",
        link: "https://loop.dcu.ie/course/view.php?id=77850&section=1",
        completed: false
    },
    {
        id: 6,
        module: "csc1058",
        // moduleName: "OO Analysis & Design",
        category: "Project",
        title: "Presentation",

        date: "2026-11-18",
        time: "17:00",
        allDay: false,
        week: 11,

        type: "Group Project",
        description: "1. Project presentation",
        link: "https://loop.dcu.ie/course/view.php?id=77850&section=1",
        completed: false
    },
    {
        id: 7,
        module: "csc1058",
        // moduleName: "OO Analysis & Design",
        category: "Project",
        title: "Presentation",

        date: "2026-11-23",
        time: "17:00",
        allDay: false,
        week: 12,

        type: "Group Project",
        description: "1. Project presentation ",
        link: "https://loop.dcu.ie/course/view.php?id=77850&section=1",
        completed: false
    },
    {
        id: 8,
        module: "csc1058",
        // moduleName: "OO Analysis & Design",
        category: "Project",
        title: "Presentation",

        date: "2026-11-25",
        time: "17:00",
        allDay: false,
        week: 12,

        type: "Group Project",
        description: "1. Project presentation ",
        link: "https://loop.dcu.ie/course/view.php?id=77850&section=1",
        completed: false
    },
    {
        id: 9,
        module: "csc1058",
        // moduleName: "OO Analysis & Design",
        category: "Project",
        title: "Implementation",

        date: "2026-11-25",
        time: "17:00",
        allDay: false,
        week: 12,

        type: "Group Project",
        description: "1. Summary of changes and additions since provisional source code delivery. 2. Minutes or notes of any team meetings",
        link: "https://loop.dcu.ie/course/view.php?id=77850&section=1",
        completed: false
    }
];