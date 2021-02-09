const d = document;

const map = `
  <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.5685445358113!2d-86.83625258553069!3d21.169561985922297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c2c0fb0f8b1cd%3A0xe67fd0d3ec3777d0!2sLoncher%C3%ADa%20El%20Pocito!5e0!3m2!1ses-419!2smx!4v1612813327402!5m2!1ses-419!2smx" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
`;
/**Heder al hacer scroll y paricion del mapa */
window.addEventListener("scroll", () => {
  const header = d.querySelector("header");

  if (window.pageYOffset) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
  
  let windowHeight = window.innerHeight/1.5;
  const sectionUbication = d.querySelector("#ubication");
  if (sectionUbication.getBoundingClientRect().top <= windowHeight) {
    const containerMap = d.querySelector(".container-map");
    
    if (containerMap.innerHTML != map) {
    d.querySelector(".container-map").innerHTML = `${map}`;      
    }
    return false

  }
});
 /***Menu para movil */
const menu = d.querySelector(".menu");
menu.addEventListener("click", () => {
  const nav = d.querySelector("nav");
  nav.classList.toggle("active");
  const links = nav.querySelectorAll("a");
  links.forEach((link) => {
    link.addEventListener("click", () => nav.classList.remove("active"));
  });
});

/**Horarios */
const hours = d.querySelectorAll(".elemt-list");
let fecha = new Date();
let day = fecha.getDay();
if (day == 0) {
  day = 6;
}
hours.forEach((hour, index) => {
  if ((day) => 1) {
    index++;
  }
  if (day == 6) {
    index--;
  }

  if (day == index) {
    hour.classList.add("active");

    let chageDayHour = hour;
    chageDayHour.querySelector(".day").innerHTML = "Hoy";
    if (fecha.getHours() < 8 || fecha.getHours() >= 20) {
      let messages = hour.querySelectorAll(".message");
      messages.forEach((message) => {
        message.classList.add("active");
      });
    } else {
      return false;
    }
  } else {
    hour.classList.remove("active");
  }
});
