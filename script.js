
document.addEventListener('DOMContentLoaded', () => {
    const viewDetailsButtons = document.querySelectorAll('.apply-btn');
    
    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Redirecting to job details page.');
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const jobList = document.getElementById("jobList");
    const featuredJobsSection = document.getElementById("featuredJobs");

    function displayJobs() {
        const jobs = JSON.parse(localStorage.getItem("jobs")) || [];

        if (jobs.length > 0) {
            featuredJobsSection.style.display = "block";
            jobList.innerHTML = ""; // Clear previous listings

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

    displayJobs();
});


document.addEventListener("DOMContentLoaded", () => {
    const jobForm = document.getElementById("jobForm");

    if (jobForm) {
        jobForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const title = document.getElementById("title").value;
            const description = document.getElementById("description").value;
            const location = document.getElementById("location").value;
            const salary = document.getElementById("salary").value;
            const phone = document.getElementById("phone").value;
            const email = document.getElementById("email").value;

            const job = { title, description, location, salary, phone, email };

            // Save job to localStorage
            const jobs = JSON.parse(localStorage.getItem("jobs")) || [];
            jobs.push(job);
            localStorage.setItem("jobs", JSON.stringify(jobs));

            jobForm.reset();
            alert("Job posted successfully! You can now find it on the main page.");
            window.location.href = 'index.html'; // Redirect to find jobs page
        });
    }
});
