

const employees = [
  {
    "id": 1,
    "firstname": "Aarav",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Build login page",
        "description": "Create responsive login page with validation",
        "date": "2025-09-15",
        "category": "Development",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Fix navbar bug",
        "description": "Resolve issue with collapsing navbar on mobile",
        "date": "2025-09-20",
        "category": "Bug Fix",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Write documentation",
        "description": "Add details for API usage in project wiki",
        "date": "2025-09-25",
        "category": "Documentation",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 2,
    "firstname": "Ishita",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Design landing page",
        "description": "Create Figma mockup for homepage",
        "date": "2025-09-12",
        "category": "Design",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Optimize images",
        "description": "Compress and optimize hero images for speed",
        "date": "2025-09-18",
        "category": "Performance",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Test mobile layout",
        "description": "Run cross-device testing on iOS/Android",
        "date": "2025-09-22",
        "category": "Testing",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Fix footer links",
        "description": "Correct broken links in footer section",
        "date": "2025-09-27",
        "category": "Bug Fix",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 3,
    "firstname": "Rohan",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Setup GitHub repo",
        "description": "Initialize repo and setup branch protection rules",
        "date": "2025-09-10",
        "category": "Setup",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Implement dark mode",
        "description": "Add theme toggle functionality",
        "date": "2025-09-16",
        "category": "Feature",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Fix search bug",
        "description": "Search bar not returning results for partial keywords",
        "date": "2025-09-21",
        "category": "Bug Fix",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 4,
    "firstname": "Neha",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Setup CI/CD pipeline",
        "description": "Configure GitHub Actions for auto-deploy",
        "date": "2025-09-11",
        "category": "DevOps",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Fix 404 error page",
        "description": "Style the custom 404 error page",
        "date": "2025-09-17",
        "category": "Design",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Improve form validation",
        "description": "Add regex checks for email and phone inputs",
        "date": "2025-09-23",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "API testing",
        "description": "Test authentication API with Postman",
        "date": "2025-09-29",
        "category": "Testing",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 5,
    "firstname": "Kiran",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Setup database schema",
        "description": "Design schema for user and tasks tables",
        "date": "2025-09-13",
        "category": "Database",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Fix slow queries",
        "description": "Optimize SQL queries for dashboard",
        "date": "2025-09-19",
        "category": "Performance",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Backup strategy",
        "description": "Setup daily backup cron jobs",
        "date": "2025-09-24",
        "category": "DevOps",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Fix login bug",
        "description": "Users unable to login with special characters",
        "date": "2025-09-28",
        "category": "Bug Fix",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 3,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  }
]

const admin = [
  {
    "id": 1,
    "firstname": "Arjun",
    "email": "admin@example.com",
    "password": "123"
  }
]

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
}
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));
  return { employees, admin };
}
