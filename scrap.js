

// window.playIndex = 0
// window.wordsLength = 0

function getNextSectionAuto(){
//hard coded needs replacement

  // //Get next section
  // imgIndex = imgIndex + 1 < imageEls.length ? imgIndex + 1 : 0;
	// // Show the next image.
	// imageEls[imgIndex].classList.add('show');
	// // Hide the previous image.
	// imageEls[imgIndex - 1].classList.remove('show');

  return false;

  //run an API call and pull in a new result as long as n: prop is !== null
  return {

  }

}

const sleep = m => new Promise(r => setTimeout(r, m));

function sceneSetup(){
  //thtr.textContent="";

  //xhr some content G!
  sections = getNextSectionAuto();
  //section is empty
  if (sections == false) return false
  //change background
  //document.getElementsByClassName('stage')[0].style.backgroundImage = "url('https://s169923.gridserver.com/images/winterbarrel.jpg')"

  thtr.innerHTML=""
  return true
}



function getCredits(){
	/
}

const playWord = async (obj,w,i) => {
  console.log(w, 1000 * obj.t[i]);
  await sleep(1000 * obj.t[i]);
}


var loop = function(){

//images per call loop results
let imageEls;
let imgIndex = -1;


  window.sections.forEach((section, i) => {

    //Set a background image:
    if(section.b){
      //need to populate imgCurrIndex, imgUrl, etc with API result
      stage.insertAdjacentHTML('beforeend', `<div class="bg-img img-${i+1}"></div>`)
      imageEls = document.getElementsByClassName('bg-img');

      //add stylesheet for animation effect - can pull effect from API - []
      let style = document.createElement('style');

      style.setAttribute("id", `bg-${i+1}`);
      document.head.appendChild(style);
      style.sheet.insertRule(`.img-${i+1} {
        background-image: url("${section.b}");
        z-index: -${window.sections.length-(i+1)};
      `);

      imgIndex++

      // Show the next image.
      imageEls[imgIndex].classList.add('show');

      // Hide the previous image, skipping if first image.
      if(imgIndex) imageEls[(imgIndex - 1)].classList.remove('show');

    }



    //run the text animations on top of background
    //section.w.forEach((word, j) => {

      //playWord(section,word,j);
      //thtr.insertAdjacentHTML('beforeend', `<span class="tracking-in-contract-bck"> ${word}</span>`)
      //setTimeout(()=>{return true}, 1000 * section.t[j]);

    //})


  });



//let wordsLength = section.w.length;
// if(i < window.wordsLength){
//       loop();
//   }else{
//   //check if new scene exists and keep looping
//     if(sceneSetup() != false)
//     loop();
//   else {
//   getCredits();
//   }
//   }

//set background first if any
if(section.b){
  //thtr.textContent += " " + section.w[window.playIndex]
  //need to populate imgCurrIndex, imgUrl, etc with API result

  thtr.insertAdjacentHTML('beforeend', `<div class="bg-img img-${-(sections.length)+i}"></div>`)

  imageEls = document.getElementsByClassName('bg-img');

  //Get next section
  imgIndex = imgIndex + 1 < imageEls.length ? imgIndex + 1 : 0;
  // Show the next image.
  imageEls[imgIndex].classList.add('show');
  // Hide the previous image.
  imageEls[imgIndex - 1].classList.remove('show');

  let style = document.createElement('style');
  document.head.appendChild(style);
  style.sheet.insertRule(`#img-${sections.length - i} {
    background-image: url('${section.b}');
    z-index: ${-(sections.length) + i};
  }`);
}

section.w.forEach((word, j) => {
  setTimeout(function () {
  thtr.insertAdjacentHTML('beforeend', `<span class="tracking-in-contract-bck"> ${word}</span>`)
}, 1000 * section.t[j]);
});
