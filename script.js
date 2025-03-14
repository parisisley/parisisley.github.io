// JavaScript to enhance interactivity on each page

// Greeting for the home page
window.addEventListener('DOMContentLoaded', function() {
    const greetingElement = document.getElementById('greeting');
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
        greetingElement.textContent = "Good morning! Welcome to my website.";
    } else if (currentHour < 18) {
        greetingElement.textContent = "Good afternoon! Welcome to my website.";
    } else {
        greetingElement.textContent = "Good evening! Welcome to my website.";
    }
});

// Project list for the projects page
window.addEventListener('DOMContentLoaded', function() {
    const projectList = document.getElementById('project-list');
    const projects = [
        { name: "Project 1", url: "https://github.com/yourusername/project1" },
        { name: "Project 2", url: "https://github.com/yourusername/project2" },
        { name: "Project 3", url: "https://github.com/yourusername/project3" }
    ];

    projects.forEach(project => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = project.url;
        link.textContent = project.name;
        listItem.appendChild(link);
        projectList.appendChild(listItem);
    });
});

// Form submission handler for the services page
const form = document.getElementById('service-form');
if (form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('service-name').value;
        const email = document.getElementById('service-email').value;
        const response = document.getElementById('form-response');
        
        if (name && email) {
            response.textContent = `Thank you, ${name}! We'll get in touch with you at ${email} soon.`;
            response.style.color = 'green';
        } else {
            response.textContent = "Please fill out all fields.";
            response.style.color = 'red';
        }
    });
}
