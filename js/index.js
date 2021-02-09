const d = document;

/**Heder al hacer scroll y paricion del mapa */
window.addEventListener("scroll", () => {
  const header = d.querySelector("header");

  if (window.pageYOffset) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
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
