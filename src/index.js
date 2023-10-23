import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
 document.querySelector("h1").addEventListener("click",function(e){
 alert ("Bana tıkladın");
});



  const changes = document.querySelectorAll(".nav-link")

  changes.forEach((link) => { 
    link.addEventListener("mouseover",() =>{
      link.style.backgroundColor= "#ff5733";
      link.style.color= "white";
      link.style.border= "3px solid black";
    })
    link.addEventListener("mouseout",() =>{
      link.style.backgroundColor= "";
      link.style.color= "";
      link.style.border= "3px solid black";
    })
    link.addEventListener("mousedown",() =>{
      link.style.backgroundColor= "#ADFF2F";
      link.style.color= "white";
      link.style.border= "3px solid black";
      link.style.transition= "0s";
      link.style.transform= "scale(.9s)";
    })
    link.addEventListener("mouseup",() =>{
      link.style.backgroundColor= "";
      link.style.color= "";
      link.style.border= "3px solid black";
      link.style.transition= "0.3s";
      link.style.transform= "scale(1)";
    })
  });
  
 function randomRgb (event) {
  const r = Math.floor(Math.random()* 256);
  const g = Math.floor(Math.random()* 256);
  const b = Math.floor(Math.random()* 256);
  
  return`rgb(${r}, ${g}, ${b})`;

 }

 document.querySelector(".intro h2").addEventListener(
  "mouseenter", (event)=> {
    event.target.style.backgroundColor = randomRgb();
  }); 

 document.querySelector(".text-content h2").addEventListener(
    "mouseenter", (event)=> {
      event.target.style.backgroundColor = randomRgb();
    }); 

  window.addEventListener("resize", () => {
    console.log("ekran boyutu değişti!");
  })  

  const btnSizes = [1, 1, 1];

  document.querySelectorAll(".btn").forEach((btn,i) => {
    btn.addEventListener("dblclick",() => {
      btnSizes[i]*=1.25 ;
      btn.style.transform = `scale(${btnSizes[i]})`;
    })
  })