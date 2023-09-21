// indiv.js
const campgrounds = window.campgrounds
console.log(campgrounds)
function displayCampgroundDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const campgroundId = urlParams.get('id');
  
    const campground = campgrounds.find((camp) => camp.id === parseInt(campgroundId, 10));

    if (campground) {
      const campgroundDetailsContainer = document.getElementById('campground-details');
  
      const campgroundDetails = `
        <h2>${campground.name}</h2>
        <p>${campground.description}</p>
        <img src="${campground.imageSrc}" alt="${campground.name}" />
      `;
  
      campgroundDetailsContainer.innerHTML = campgroundDetails;
    } else {
      console.log("Campground not found");
    }
  }
  
  displayCampgroundDetails();
  