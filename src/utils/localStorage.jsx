const employees = [
  {
    "id": 1,
    "firstname": "Ravi",
    "email": "employee1@example.com",
    "password": "123",
    "taskNumbers": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "taskTitle": "Task 1 for Employee 1",
        "taskDescription": "Complete the sales report",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskDate": "2024-10-19",
        "category": "Sales"
      },
      {
        "taskTitle": "Task 2 for Employee 1",
        "taskDescription": "Update client information",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskDate": "2024-10-15",
        "category": "CRM"
      },
      {
        "taskTitle": "Task 3 for Employee 1",
        "taskDescription": "Prepare presentation for next week",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskDate": "2024-10-20",
        "category": "Marketing"
      }
    ]
  },
  {
    "id": 2,
    "firstname": "Priya",
    "email": "employee2@example.com",
    "password": "123",
    "taskNumbers": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "taskTitle": "Task 1 for Employee 2",
        "taskDescription": "Draft social media plan",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskDate": "2024-10-19",
        "category": "Marketing"
      },
      {
        "taskTitle": "Task 2 for Employee 2",
        "taskDescription": "Conduct client survey",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskDate": "2024-10-14",
        "category": "Research"
      },
      {
        "taskTitle": "Task 3 for Employee 2",
        "taskDescription": "Revise project documentation",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskDate": "2024-10-10",
        "category": "Documentation"
      },
      {
        "taskTitle": "Task 4 for Employee 2",
        "taskDescription": "Organize team meeting",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskDate": "2024-10-18",
        "category": "Management"
      }
    ]
  },
  {
    "id": 3,
    "firstname": "Anjali",
    "email": "employee3@example.com",
    "password": "123",
    "taskNumbers": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "taskTitle": "Task 1 for Employee 3",
        "taskDescription": "Update software dependencies",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskDate": "2024-10-19",
        "category": "Development"
      },
      {
        "taskTitle": "Task 2 for Employee 3",
        "taskDescription": "Fix reported bugs",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskDate": "2024-10-16",
        "category": "Development"
      },
      {
        "taskTitle": "Task 3 for Employee 3",
        "taskDescription": "Optimize website performance",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskDate": "2024-10-14",
        "category": "Development"
      }
    ]
  },
  {
    "id": 4,
    "firstname": "Vikram",
    "email": "employee4@example.com",
    "password": "123",
    "taskNumbers": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "taskTitle": "Task 1 for Employee 4",
        "taskDescription": "Create user experience prototype",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskDate": "2024-10-19",
        "category": "Design"
      },
      {
        "taskTitle": "Task 2 for Employee 4",
        "taskDescription": "Develop wireframes for new feature",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskDate": "2024-10-20",
        "category": "Design"
      },
      {
        "taskTitle": "Task 3 for Employee 4",
        "taskDescription": "Collect feedback on prototype",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskDate": "2024-10-16",
        "category": "Design"
      },
      {
        "taskTitle": "Task 4 for Employee 4",
        "taskDescription": "Update design documentation",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskDate": "2024-10-12",
        "category": "Documentation"
      }
    ]
  },
  {
    "id": 5,
    "firstname": "Rakesh",
    "email": "employee5@example.com",
    "password": "123",
    "taskNumbers": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "taskTitle": "Task 1 for Employee 5",
        "taskDescription": "Set up cloud infrastructure",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskDate": "2024-10-19",
        "category": "DevOps"
      },
      {
        "taskTitle": "Task 2 for Employee 5",
        "taskDescription": "Deploy new app version",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskDate": "2024-10-13",
        "category": "DevOps"
      },
      {
        "taskTitle": "Task 3 for Employee 5",
        "taskDescription": "Monitor system performance",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskDate": "2024-10-18",
        "category": "DevOps"
      },
      {
        "taskTitle": "Task 4 for Employee 5",
        "taskDescription": "Fix server issues",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskDate": "2024-10-10",
        "category": "DevOps"
      }
    ]
  }
];



const admin = [
  {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }
  
]

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees))
  localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))
  
  return {employees, admin}
}

