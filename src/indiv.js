document.addEventListener("DOMContentLoaded", () => {
  // Get the campgroundId from the query parameter
  const urlParams = new URLSearchParams(window.location.search);
  const campgroundId = urlParams.get("id");

  // Fetch the campground details based on the campgroundId (Replace this with your data fetching logic)
  const campground = getCampgroundDetailsById(campgroundId);

  if (campground) {
    // Display the campground details in the HTML
    const campgroundDetailsContainer = document.getElementById("campground-details");
    const campgroundDetails = `
      <h2>${campground.name}</h2>
      <p>${campground.description}</p>
      <img src="${campground.imageSrc}" alt="${campground.name}" />
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
      imageSrc: "./src/Assets/MountUlap.jpg",
    },
    

    {
      id: 2,
      name: "Calaguas Island",
      description: "A paradise of islands that can rival the white sand beauty of Boracay.",
      imageSrc: "src/Assets/Camp Images/Compressed Images/CalaguasIsland.jpg",
    },
    {
      id: 3,
      name: "Onay Beach",
      description: "This is one of the best beach camping sites, beautiful and pristine.",
      imageSrc: "src/Assets/Camp Images/Compressed Images/OnayBeach.jpg",
    },
    {
      id: 4,
      name: "Seven Sisters Waterfall",
      description: "The seven sisters is the 39th tallest waterfall in Norway.",
      imageSrc: "src/Assets/Camp Images/Compressed Images/SevenSistersWaterfall.jpg",
    },
    {
      id: 5,
      name: "Latik Riverside",
      description: "Philippines is one of the most dazzling countries in all of Asia.",
      imageSrc: "src/Assets/Camp Images/Compressed Images/LatikRiverside.jpg",
    },
    {
      id: 6,
      name: "Buloy Springs" ,
      description: "This is one of the best beach camping sites, beautiful and pristine.",
      imageSrc: "src/Assets/Camp Images/Compressed Images/BuloySprings.jpg",
    },

  ];

  return campgrounds.find((campground) => campground.id === parseInt(campgroundId, 10));
}
