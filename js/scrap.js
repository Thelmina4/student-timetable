const studyData = {
    "2nd Year": {
        "Semester 1": {
            homework: "2nd-year/semester-1/homework.html",
            exams: "2nd-year/semester-1/exams-projects.html",
            modules: "2nd-year/semester-1/modules.html"
        },

        "Semester 2": {
            homework: "2nd-year/semester-2/homework.html",
            exams: "2nd-year/semester-2/exams-projects.html",
            modules: "2nd-year/semester-2/modules.html"
        }
    },

    "3rd Year": {
        "Semester 1": {
            homework: "3rd-year/semester-1/homework.html",
            exams: "3rd-year/semester-1/exams-projects.html",
            modules: "3rd-year/semester-1/modules.html"
        }
    }
};

document.getElementById("module-name").innerHTML = `
    <h2>${CSC1042.code}</h2>
    <p>${CSC1042.name}</p>
`;
