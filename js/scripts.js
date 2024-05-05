// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)
// test: console.log("hello!");

/*from professor*/
let currentQuestionIndex = 0;
const pages = document.querySelectorAll('.page');

function nextPage() {
	for (const page of pages) {
		page.classList.add('hidden');
	}
	pages[currentQuestionIndex].classList.remove('hidden');
	currentQuestionIndex++;
}
//accept mission page
const acceptMission = document.getElementById('artset-3')
acceptMission.addEventListener('click', function(){
	document.getElementById('mission-message').classList.remove('hidden');
	nextPage();
});

const acceptButton = document.getElementById('accept-button')
acceptButton.addEventListener('click', function() {
	nextPage();
});

//clue page 1
const footPrints = document.getElementById('footprints')
footPrints.addEventListener('click', function(){
	nextPage();
});

//clue page 2
const handPrints = document.getElementById('hands')
handPrints.addEventListener('click', function(){
	nextPage();
});

//clue page 3
const loadingDock = document.getElementById('lock')
loadingDock.addEventListener('click', function(){
	nextPage();
});

//clue page 4
const note = document.getElementById('noted')
note.addEventListener('click', function(){
	nextPage();
});
