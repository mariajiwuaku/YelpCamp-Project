 /*HAMBURGER MENU*/
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});



function viewCampground(campgroundId) {
  // Redirect to the individual page with the campgroundId as a query parameter
  window.location.href = `indiv.html?campgroundId=${campgroundId}`;
}
const campgrounds = [
    {
      id: 1,
      name: "Campground 1",
      description: "This is the first campground.",
      
    },
    {
      id: 2,
      name: "",
      description: "This is the second campground.",
      // Add more properties as needed
    },
    {
      id: 3,
      name: "Campground 3",
      description: "This is the second campground.",
      // Add more properties as needed
    },
    {
      id: 4,
      name: "Campground 4",
      description: "This is the second campground.",
      // Add more properties as needed
    },
    {
      id: 5,
      name: "Campground 5",
      description: "This is the second campground.",
      // Add more properties as needed
    },
    {
      id: 6,
      name: "Campground 6",
      description: "This is the second campground.",
      // Add more properties as needed
    },
    
  ];
  
document.addEventListener("DOMContentLoaded", () => {
    const campgroundButtons = document.querySelectorAll(".view-campground-button");
  
    campgroundButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const campgroundId = event.target.dataset.campgroundId;
        // Redirect to the individual page with the campgroundId
        window.location.href = `indiv.html?id=${campgroundId}`;
      });
    });
  });
  

