const employees = [
    {
        id: 1,
        email: "employee1@gmail.com",
        password: "12345",
        tasks: [
            {
                title: "Prepare Presentation",
                description: "Create slides for the upcoming client meeting.",
                date: "2024-12-01",
                category: "Work",
                active: true,
                newTask: false,
                completed: false,
                failed: false,
            },
            {
                title: "Team Meeting",
                description: "Discuss progress with the team on project tasks.",
                date: "2024-12-02",
                category: "Meeting",
                active: true,
                newTask: true,
                completed: false,
                failed: false,
            },
            {
                title: "Submit Report",
                description: "Submit the weekly report to the manager.",
                date: "2024-12-03",
                category: "Work",
                active: false,
                newTask: false,
                completed: true,
                failed: false,
            },
        ],
    },
    {
        id: 2,
        email: "employee2@gmail.com",
        password: "12345",
        tasks: [
            {
                title: "Code Review",
                description: "Review the pull requests assigned by the lead.",
                date: "2024-12-01",
                category: "Development",
                active: true,
                newTask: true,
                completed: false,
                failed: false,
            },
            {
                title: "Update Documentation",
                description: "Update the API documentation with new endpoints.",
                date: "2024-12-03",
                category: "Documentation",
                active: false,
                newTask: false,
                completed: true,
                failed: false,
            },
        ],
    },
    {
        id: 3,
        email: "employee3@gmail.com",
        password: "12345",
        tasks: [
            {
                title: "Fix Bugs",
                description: "Resolve the bugs reported in the QA phase.",
                date: "2024-12-01",
                category: "Development",
                active: true,
                newTask: true,
                completed: false,
                failed: false,
            },
            {
                title: "Database Backup",
                description: "Perform a full database backup.",
                date: "2024-12-02",
                category: "Maintenance",
                active: true,
                newTask: false,
                completed: false,
                failed: true,
            },
            {
                title: "Client Feedback",
                description: "Compile feedback received from the client.",
                date: "2024-12-03",
                category: "Work",
                active: false,
                newTask: false,
                completed: true,
                failed: false,
            },
        ],
    },
    {
        id: 4,
        email: "employee4@gmail.com",
        password: "12345",
        tasks: [
            {
                title: "System Testing",
                description: "Conduct testing on the newly deployed features.",
                date: "2024-12-01",
                category: "Testing",
                active: true,
                newTask: true,
                completed: false,
                failed: false,
            },
            {
                title: "Release Notes",
                description: "Draft release notes for the upcoming version.",
                date: "2024-12-03",
                category: "Documentation",
                active: false,
                newTask: false,
                completed: true,
                failed: false,
            },
        ],
    },
    {
        id: 5,
        email: "employee5@gmail.com",
        password: "12345",
        tasks: [
            {
                title: "Server Monitoring",
                description: "Monitor server performance and logs.",
                date: "2024-12-01",
                category: "Maintenance",
                active: true,
                newTask: true,
                completed: false,
                failed: false,
            },
            {
                title: "Employee Onboarding",
                description: "Assist in onboarding new employees.",
                date: "2024-12-02",
                category: "HR",
                active: false,
                newTask: false,
                completed: true,
                failed: false,
            },
            {
                title: "Budget Planning",
                description: "Create a budget plan for Q1 2025.",
                date: "2024-12-03",
                category: "Finance",
                active: false,
                newTask: false,
                completed: false,
                failed: true,
            },
        ],
    },
];

const admin = [
    {
        id: 1,
        email: "admin@gmail.com",
        password: "123",
    },
];


export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return { employees, admin }
}