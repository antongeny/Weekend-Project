// const darkModeButton = document.getElementsByClassName("darkMode")[0];
const darkModeButton = document.querySelector(".darkMode");
console.log(darkModeButton);
darkModeButton.addEventListener("click", toggleDarkMode);
const bodyColor = document.querySelector(".body");
function toggleDarkMode(event) {
	const darkToggle = event.target;

	console.log("dark toggle works");
	if (bodyColor.className != "darkColors") {
		bodyColor.className = "darkColors";
	} else {
		bodyColor.className = "defaultColors";
	}
}

// $("") is a universal function;
// const pageTitleElement = $("#PageTItle")[0];

// console.log(element);
// pageTitleElement.innerHTML = "Hi, My name is..."
//or
// element[0].innerHTML = "Hi, My name is..."

// const image = $("img");
// console.log(images)

// let itterations = 0;

// setInterval(() => {
//   itterations++;
//   for(let i = 0; i<images.length; i++) {
//     const currImage = images[i];
//     console.log(curreImage.style)
//     const borderColor = `hsl(${itterations *30 % 255}, 100%, 50%)`
//     currImage.style.border = `10px solid ${borderColor}`
//   }
// }, 10)

//setInerval(() {
// or
// setTimeout((){
//   const tempTextElement = $("#tempText")[0];
//   tempTextElement.classList.add("invisible");
// },3000) //makes things disappear after 3 seconds
