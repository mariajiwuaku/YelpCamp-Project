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
            image: 'src/Assets/Camp Images/Compressed Images/Mount Ulap.jpg',
            title: 'Mount Ulap',
            text: 'One of the most famous hikes in Benguet is Mt Ulap in Itogan.',
        },

        {
            id: 1,
            image: 'src/Assets/Camp Images/Compressed Images/Calaguas Island.jpg',
            title: 'Calaguas Island',
            text: 'A paradise of islands that can rival the white sand beauty of Boracay.',
        },

        {
            id: 2,
            image: 'src/Assets/Camp Images/Compressed Images/Onay Beach.jpg',
            title: 'Onay Beach',
            text: 'This is one of the best beach camping sites, beautiful and pristine.',
        },

        {
            id: 3,
            image: 'src/Assets/Camp Images/Compressed Images/Seven Sisters Waterfall.jpg',
            title: 'Seven Sisters Waterfall',
            text: 'The seven sisters is the 39th tallest waterfall in Norway.',
        },

        {
            id: 4,
            image: 'src/Assets/Camp Images/Compressed Images/Latik Riverside.jpg',
            title: 'Latik Riverside',
            text: 'Philippines is one of the most dazzling countries in all of Asia.',
        },

        {
            id: 5,
            image: 'src/Assets/Camp Images/Compressed Images/Buloy Springs.jpg',
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
                    <a href="" class="my-3 font-bold w-full py-3 block rounded-md border-gray-300 border-solid border-[1px] hover:bg-black hover:text-white hover:border-black">
                        View campground
                    </a> 
                </div>
                
            </li>`
            )
        }).join('')
    };
    displayItem(categories);
