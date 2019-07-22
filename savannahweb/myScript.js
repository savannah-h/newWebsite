function imageChange(element){
  element.src = "7.jpg";
  element.onclick = "imageEdge(this)";
}
function imageEdge(element){
  element.style.borderRadius = "pink";
}
