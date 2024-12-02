const employees = [
    {
        id: 1,
        name: "Rahul",
        email: "e1@gmail.com",
        password: "12345",
        taskCount: {
            completed: 1,
            active: 2,
            newTask: 1,
            failed: 0,
        },
        tasks: [
            
        ],
    },
    {
        id: 2,
        name: "Priya",
        email: "e2@gmail.com",
        password: "12345",
        taskCount: {
            completed: 1,
            active: 1,
            newTask: 1,
            failed: 0,
        },
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
        name: "Aarav",
        email: "e3@gmail.com",
        password: "12345",
        taskCount: {
            completed: 1,
            active: 2,
            newTask: 1,
            failed: 1,
        },
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
        name: "Sneha",
        email: "e4@gmail.com",
        password: "12345",
        taskCount: {
            completed: 1,
            active: 1,
            newTask: 1,
            failed: 0,
        },
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
        name: "Rohit",
        email: "e5@gmail.com",
        password: "12345",
        taskCount: {
            completed: 1,
            active: 1,
            newTask: 1,
            failed: 1,
        },
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