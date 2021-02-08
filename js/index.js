const d = document;

window.addEventListener("scroll", ()=>{
  const header = d.querySelector("header");
  if(window.pageYOffset){

    header.classList.add("active");
  }else{
    header.classList.remove("active");
  }
})

const menu = d.querySelector(".menu");
menu.addEventListener("click", ()=>{
  const nav = d.querySelector("nav");
  nav.classList.toggle("active")
  const links = nav.querySelectorAll("a");
  links.forEach(link => {
    link.addEventListener("click", ()=> nav.classList.remove("active"))
  })
})

/**Horarios */
const hours = d.querySelectorAll(".elemt-list");
let fecha = new Date();
let day = fecha.getDay();
if (day == 0) {
    day = 6
}
hours.forEach((hour, index) =>{
      if(day => 1){
        index++
      }
      if(day == 6){
        index--
      }

    if (day == index) {
        let chageDayHour = hour;
        chageDayHour.querySelector(".day").innerHTML="Hoy";
        if(day == 6){
        chageDayHour.querySelector(".open-closed").innerHTML="Cerrado"  
        }
        hour.classList.add("active")
        
      }else{
        hour.classList.remove("active")
    }
})