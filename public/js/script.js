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
            // Create a table element
            const table = document.createElement('table');
            table.classList.add('results-table'); // Add CSS class for styling

            // Create table header
            const thead = document.createElement('thead');
            thead.innerHTML = `
                <tr>
                    <th>College Name</th>
                    <th>Cutoff (%)</th>
                </tr>
            `;
            table.appendChild(thead);

            // Create table body
            const tbody = document.createElement('tbody');

            // Populate table rows with data
            data.forEach(college => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${college.name}</td>
                    <td>${college.cutoff}%</td>
                `;
                tbody.appendChild(row);
            });

            table.appendChild(tbody);
            resultsDiv.appendChild(table);
        }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = '<p>Error fetching data. Please try again later.</p>';
    });

});
