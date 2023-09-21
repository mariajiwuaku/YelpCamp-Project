
        // Function to retrieve the campgroundId from the URL query parameters
        function getCampgroundIdFromUrl() {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get('campgroundId');
        }

        // Function to fetch and display campground details based on the campgroundId
        function displayCampgroundDetails() {
            const campgroundId = getCampgroundIdFromUrl();

            // Replace this with your logic to fetch campground details from a data source
            const campgroundDetails = {
                name: `Campground ${campgroundId}`,
                description: `Description for Campground ${campgroundId}`,
                // Add more details as needed
            };

            // Display campground details on the page
            const campgroundDetailsDiv = document.getElementById('campgroundDetails');
            campgroundDetailsDiv.innerHTML = `
                <h3>${campgroundDetails.name}</h3>
                <p>${campgroundDetails.description}</p>
                

            `;
        }

        // Calling the displayCampgroundDetails function when the page loads
        window.onload = displayCampgroundDetails;
   
