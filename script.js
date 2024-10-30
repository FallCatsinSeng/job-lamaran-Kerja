// script.js

// Sample function to handle clicking on "View Details"
document.addEventListener('DOMContentLoaded', () => {
    const viewDetailsButtons = document.querySelectorAll('.apply-btn');
    
    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Redirecting to job details page.');
            // Code to redirect to job details or load job details here
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const jobList = document.getElementById("jobList");
    const featuredJobsSection = document.getElementById("featuredJobs");

    // Function to display jobs if any exist
    function displayJobs() {
        const jobs = JSON.parse(localStorage.getItem("jobs")) || [];

        if (jobs.length > 0) {
            featuredJobsSection.style.display = "block";
            jobList.innerHTML = ""; // Clear previous listings

            // Display each job
            jobs.forEach(job => {
                const jobCard = document.createElement("div");
                jobCard.classList.add("job-card");
                jobCard.innerHTML = `
                    <h4>${job.title}</h4>
                    <p>Description: ${job.description}</p>
                    <p>Location: ${job.location}</p>
                    <p>Salary: ${job.salary}</p>
                    <p>Contact Phone: ${job.phone}</p>
                    <p>Contact Email: ${job.email}</p>
                `;
                jobList.appendChild(jobCard);
            });
        } else {
            featuredJobsSection.style.display = "none"; // Hide if no jobs exist
        }
    }

    // Initial display check on page load
    displayJobs();
});


document.addEventListener("DOMContentLoaded", () => {
    const jobForm = document.getElementById("jobForm");

    // Handle job form submission
    if (jobForm) {
        jobForm.addEventListener("submit", (event) => {
            event.preventDefault();

            // Get form values
            const title = document.getElementById("title").value;
            const description = document.getElementById("description").value;
            const location = document.getElementById("location").value;
            const salary = document.getElementById("salary").value;
            const phone = document.getElementById("phone").value;
            const email = document.getElementById("email").value;

            // Create job object
            const job = { title, description, location, salary, phone, email };

            // Save job to localStorage
            const jobs = JSON.parse(localStorage.getItem("jobs")) || [];
            jobs.push(job);
            localStorage.setItem("jobs", JSON.stringify(jobs));

            // Reset form and alert user
            jobForm.reset();
            alert("Job posted successfully! You can now find it on the main page.");
            window.location.href = 'index.html'; // Redirect to find jobs page
        });
    }
});
