let varHue = 0;

function addDiv (){
  let newDiv = document.createElement("div");
    newDiv.classList.add("content");
    newDiv.style.backgroundColor = Please.make_color({value: 0.9, golden: false, hue: varHue});
    varHue += 3;
    if(varHue >= 355){
      varHue = Math.max(0, (varHue -= 355));
    } else {
      document.querySelector("body").append(newDiv);
    }
}

window.addEventListener("scroll", function(){
  while(window.scrollY + window.innerHeight > document.body.scrollHeight){
    addDiv();
  };
});