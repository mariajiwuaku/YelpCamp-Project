document.addEventListener("DOMContentLoaded", () => {
  // Get the campgroundId from the query parameter
  const urlParams = new URLSearchParams(window.location.search);
  const campgroundId = urlParams.get("campgroundId"); // Correct the parameter name to "campgroundId"

  // Fetch the campground details based on the campgroundId (Replace this with your data fetching logic)
  const campground = getCampgroundDetailsById(campgroundId);

  if (campground) {
      // Display the campground details in the HTML
      const campgroundDetailsContainer = document.getElementById("campground-details");
      const campgroundDetails = `
          <h2>${campground.name}</h2>
          <p>${campground.description}</p>
          <img src="${campground.imageSrc}" alt="${campground.name}" style="max-width: 100%;">
      `;
      campgroundDetailsContainer.innerHTML = campgroundDetails;
  } else {
      console.log("Campground not found");
  }
});

// Replace this function with your actual data fetching logic
function getCampgroundDetailsById(campgroundId) {
  // Simulated data for testing
  const campgrounds = [
      {
          id: 1,
          name: "Mount Ulap",
          description: "One of the most famous hikes in Benguet is Mt Ulap in Itogon.",
          imageSrc: "./src/Assets/Camp Images/Compressed Images/MountUlap.jpg",
      },
      {
          id: 2,
          name: "Calaguas Island",
          description: "A paradise of islands that can rival the white sand beauty of Boracay.",
          imageSrc: "./src/Assets/Camp Images/Compressed Images/CalaguasIsland.jpg",
      },
      {
        id: 3,
        name: "Calaguas Island",
        description: "A paradise of islands that can rival the white sand beauty of Boracay.",
        imageSrc: "./src/Assets/Camp Images/Compressed Images/CalaguasIsland.jpg",
    },
      
  ];

  return campgrounds.find((campground) => campground.id == campgroundId); // Use == instead of === for loose comparison
}
