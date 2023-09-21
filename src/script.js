 /*HAMBURGER MENU*/
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});

// search bar
    const product = [
        {
            id: 0,
            image: 'src/Assets/Camp Images/Compressed Images/MountUlap.jpg',
            title: 'Mount Ulap',
            text: 'One of the most famous hikes in Benguet is Mt Ulap in Itogan.',
        },

        {
            id: 1,
            image: 'src/Assets/Camp Images/Compressed Images/CalaguasIsland.jpg',
            title: 'Calaguas Island',
            text: 'A paradise of islands that can rival the white sand beauty of Boracay.',
        },

        {
            id: 2,
            image: 'src/Assets/Camp Images/Compressed Images/OnayBeach.jpg',
            title: 'Onay Beach',
            text: 'This is one of the best beach camping sites, beautiful and pristine.',
        },

        {
            id: 3,
            image: 'src/Assets/Camp Images/Compressed Images/SevenSistersWaterfall.jpg',
            title: 'Seven Sisters Waterfall',
            text: 'The seven sisters is the 39th tallest waterfall in Norway.',
        },

        {
            id: 4,
            image: 'src/Assets/Camp Images/Compressed Images/LatikRiverside.jpg',
            title: 'Latik Riverside',
            text: 'Philippines is one of the most dazzling countries in all of Asia.',
        },

        {
            id: 5,
            image: 'src/Assets/Camp Images/Compressed Images/BuloySprings.jpg',
            title: 'Buloy Springs',
            text: 'This is one of the best beach camping sites,beautiful and pristine.',
        },
        
    ];

    const categories = [...new Set(product.map((item) => { return item }))]

    document.getElementById('searchbar').addEventListener('keyup', (e) => {
        const searchData = e.target.value.toLowerCase();
        const filteredData = categories.filter((item) => {
            return (
                item.title.toLowerCase().includes(searchData)
            )
        })
        displayItem(filteredData)
    });

    const displayItem = (items) => {
        document.getElementById('list').innerHTML = items.map((item) => {
            var { image, title, text } = item;
            return (
                `<li class="border-gray-300 border-solid border-[1px] w-full rounded-md p-2 camps">
                <img class="w-full rounded-md" src= "${image}">
                <div class="w-[80%]">
                <h1 class="mt-3 font-bold">${title} </h1>
                <p class="py-2">
                    ${text}
                </p>
                </div> 
                <div class="overflow-hidden text-center">
                <a href="#" class="my-3 font-bold w-full py-3 block rounded-md border-gray-300 border-solid border-[1px] hover:bg-black hover:text-white hover:border-black view-campground-button" data-campground-id="1">
                View campground
            </a>
            
                </div>
                
            </li>`
            )
        }).join('')
    };
    displayItem(categories);



// Searching for camps using their names

 
    
   




// Viewing individual campground

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
            event.preventDefault(); // Prevent the default behavior of the anchor tag

            const campgroundId = event.target.dataset.campgroundId;
            // Redirect to the individual page with the campgroundId as a query parameter
            window.location.href = `indiv.html?campgroundId=${campgroundId}`;
        });
    });
});

  

