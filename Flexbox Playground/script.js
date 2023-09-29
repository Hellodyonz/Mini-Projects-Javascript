const boxContainer = document.querySelector('.box-container')
const spaceBetweenButton = document.querySelector("#space-between");
const spaceAroundButton = document.querySelector("#space-around");
const spaceEvenlyButton = document.querySelector("#space-evenly");
const justifyFlexStartButton = document.querySelector("#jflex-start");
const justifyFlexCenterButton = document.querySelector("#jcenter");
const justifyFlexEndButton = document.querySelector("#jflex-end");

const alignStartButton = document.querySelector("#aflex-start");
const alignCenterButton = document.querySelector("#acenter");
const alignEndButton = document.querySelector("#aflex-end");

// Justify Content

spaceBetweenButton.addEventListener('click',function(){
    boxContainer.style.justifyContent = "space-between";
})

spaceAroundButton.addEventListener('click',function(){
    boxContainer.style.justifyContent = "space-around";
})

spaceEvenlyButton.addEventListener('click',function(){
    boxContainer.style.justifyContent = "space-evenly";
})

justifyFlexStartButton.addEventListener('click',function(){
    boxContainer.style.justifyContent = "flex-start";
})

justifyFlexCenterButton.addEventListener('click',function(){
    boxContainer.style.justifyContent = "center";
})

justifyFlexEndButton.addEventListener('click',function(){
    boxContainer.style.justifyContent = "flex-end";
})

// Align Item

alignStartButton.addEventListener('click',function(){
    boxContainer.style.alignItems = "flex-start";
})

alignCenterButton.addEventListener('click',function(){
    boxContainer.style.alignItems = "center";
})

alignEndButton.addEventListener('click',function(){
    boxContainer.style.alignItems = "end";
})