 /*HAMBURGER MENU*/
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});


// Search bar



function search_camps() {
	let input = document.getElementById('searchbar').value
	input=input.toLowerCase();
	let x = document.getElementsByClassName('animals');
	
	for (i = 0; i < x.length; i++) {
		if (!x[i].innerHTML.toLowerCase().includes(input)) {
			x[i].style.display="none";
		}
		else {
			x[i].style.display="list-item";				
		}
	}
}


// const searchbar = document.getElementById('searchbar')
// const camps = document.querySelectorAll('#camps ')

// searchbar.addEventListener('input', e => {
//     const value = e.target.searchbar.value.toLowercase()
//     camps.forEach(camps => {
//         const isVisible = 
//         camps.innerHTML.toLowerCase().includes(searchbar.value);
//         camps.innerHTML.classList.toggle('hide', !isVisible)
//     })
// })

// function searchCamp() {
//     let input = document.getElementById('searchbar').value;
//     input  = input.toLowercase();
//     let camps = document.querySelector('#camps h5');
//     camps.innerHTML = input.toLowerCase()
    

//     for (i = 0; i < camps.length ; i++) {
//         if (!camps[i].innerHTML.includes(input)) {
//             camps[i].style.display = "none";
//         }else {
//             camps[i].style.display = "block";
//         }
//     }

// }