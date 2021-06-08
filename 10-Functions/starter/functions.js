// Functions to arrow
const button = document.querySelector('.buy');
const library = [
  'Cooking for dummies',
  'Learning React',
  'How to make ice',
  'Boiling water the right way',
  'Jump cat'
];

//Function
const videos = library.filter(function(video) {
  return video.includes('dummies');
});
console.log(videos);

//Arrow
const videosArrowFunc = library.filter(video => video.includes('ice'));
console.log(videosArrowFunc);

//Callbacks, Higher Order Functions
library.push('meditation for jackass')
console.log(library);

//Higher Order Functions (Default)
library.forEach(function(item) {
  console.log(item);
});

// Creating a /Higher Order Functions
function repeater(fn) {
  fn();
  fn();
  fn();
}

//Callback
button.addEventListener('click', () => {
  console.log('btn was click');
})