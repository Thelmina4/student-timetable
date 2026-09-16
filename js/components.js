// HELPER FUNCTION TO GET THE ROOT PATH

function getRootPath() {

    if (
        window.location.pathname.includes("/2nd-year/") ||
        window.location.pathname.includes("/3rd-year/")
    ) {
        return "../../";
    }

    return "";
}

// the header for each page including get root path
// Taking from data.js const year in studyData)
function loadHeader() {

    const header = document.getElementById("header");
    // the function above
    const rootPath = getRootPath();

    let yearMenus = "";

    // Go through each year
    for (const year in studyData) {

        let semesterMenus = "";

        // Go through each semester
        for (const semester in studyData[year]) {

            const pages = studyData[year][semester];

            semesterMenus += `

                <h6 class="dropdown-header">
                    ${semester}
                </h6>

                <li>
                    <a class="dropdown-item"
                       href="${rootPath}${pages.homework}">
                        Homework
                    </a>
                </li>

                <li>
                    <a class="dropdown-item"
                       href="${rootPath}${pages.exams}">
                        Exams/Projects
                    </a>
                </li>

                <li>
                    <a class="dropdown-item"
                       href="${rootPath}${pages.modules}">
                        Modules Info
                    </a>
                </li>

            `;
        }

        yearMenus += `

            <li class="nav-item dropdown">

                <a class="nav-link dropdown-toggle"
                   href="#"
                   role="button"
                   data-bs-toggle="dropdown"
                   aria-expanded="false">

                    ${year}

                </a>


                <ul class="dropdown-menu">

                    ${semesterMenus}

                </ul>

            </li>

        `;
    }

    // put it all together
    header.innerHTML = `

        <header class="py-1 bg-body-tertiary sticky-top">

            <nav class="navbar navbar-expand-lg">

                <div class="container-fluid">

                    <h1 class="h4 mb-0">

                        <a class="navbar-brand"
                           href="${rootPath}index.html">

                            <!-- Calendar icon -->

                            <svg xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                class="bi bi-calendar3"
                                viewBox="0 0 20 20">

                                <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z" />

                                <path  d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />

                                </svg>

                            StudyTrack

                        </a>

                    </h1>

                    <button class="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation">

                        <span class="navbar-toggler-icon"></span>

                    </button>

                    <div class="collapse navbar-collapse"
                         id="navbarNav">

                        <ul class="navbar-nav">

                            <li class="nav-item">

                                <a class="nav-link"
                                   href="${rootPath}index.html">

                                    Home

                                </a>

                            </li>

                            ${yearMenus}

                        </ul>

                    </div>

                </div>

            </nav>

        </header>

    `;
}
// FOOTER

function loadFooter() {

    const container = document.getElementById("footer");

    container.innerHTML = `
  <footer class="py-3 mt-auto">
    <div class="container text-center">
      <p class="mb-1">© 2026 - Personal academic tracking site</p>
      <p class="mb-0">
        Disclaimer: This website is for personal use only and is not an official source
        of college information.
      </p>
    </div>
  </footer>
    `;
}

// LOAD MODULES INDEX PAGE

function loadSemesterOverview() {

    const container = document.getElementById("semester-overview");

    container.innerHTML = `
    
        <div class="row g-3">

            <!-- Semester 1 -->
            <div class="col-12 col-sm-6">
                <div class="intro-card p-3 shadow-sm h-100">

                    <h3 class="h6 mb-2">&#x1f4da; Semester 1</h3>

                    <p class="mb-0">
                        Overview of modules, deadlines, and key information.
                    </p>

                    <ul>
                        ${thirdYearSem1Modules.map(module => `
                            <li>
                                <a href="modules3.html#${module.code.toLowerCase()}">
                                    ${module.code} ${module.name}
                                </a>
                            </li>
                        `).join("")}
                    </ul>

                </div>
            </div>


            <!-- Semester 2 -->
            <div class="col-12 col-sm-6">
                <div class="intro-card p-3 shadow-sm h-100">

                    <h3 class="h6 mb-2">&#x1f4da; Semester 2</h3>

                    <p class="mb-0">
                        Overview of modules, deadlines, and key information.
                    </p>

                    <p>
                        <b>More information to follow in January</b>
                    </p>

                </div>
            </div>

        </div>
    `;
}


// LOAD FUNCTIONS TO HTML PAGES
loadHeader();
loadFooter();
loadSemesterOverview();