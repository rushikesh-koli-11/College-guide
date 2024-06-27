document.getElementById('filter-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const cutoff = document.getElementById('cutoff').value;
    const location = document.getElementById('location').value;
    const category = document.getElementById('category').value;
    const department = document.getElementById('department').value;

    fetch(`/api/recommend?cutoff=${cutoff}&location=${location}&category=${category}&department=${department}`)
        .then(response => response.json())
        .then(data => {
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = '';

            if (data.length === 0) {
                resultsDiv.innerHTML = '<p>No colleges found</p>';
            } else {
                data.forEach(college => {
                    const collegeDiv = document.createElement('div');
                    collegeDiv.classList.add('college-card'); // Add CSS class for styling
                    collegeDiv.innerHTML = `
                        <p><b>College Name:</b> ${college.name} <span class="cutoff"><b>Cutoff:</b> ${college.cutoff}%</span></p>
                        <hr>
                    `;
                    resultsDiv.appendChild(collegeDiv);
                });
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = '<p>Error fetching data. Please try again later.</p>';
        });
});
