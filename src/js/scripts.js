// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)
// test: console.log("hello!");
//from function tutorial
/*const nextPage = document.querySelector('.greece-museum');
console.log(nextPage);
nextPage.classList.toggle("greece-museum");
console.log(nextPage)
function toggleParagraph() {
	nextPage.classList.toggle("greece-museum");
	console.log(nextPage);

}*/

/*from chatgpt*/
let currentQuestionIndex = 0;
const pages = document.querySelectorAll('.page');

function nextPage() {
	for (const page of pages) {
		page.classList.add('hidden');
	}
	pages[currentQuestionIndex].classList.remove('hidden');
	currentQuestionIndex++;
}
nextPage();
nextPage();
nextPage();


