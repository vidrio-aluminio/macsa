const menu_slide = document.getElementById("activo")
const contenedor = document.getElementById("contenedor")
const botones = document.getElementById("botones")
const qr = document.getElementById("qr")
const qr2 = document.getElementById("qr2")

const img_fondo = document.getElementById("img_fondo")
const right_btn = document.getElementById("right_btn")
const left_btn = document.getElementById("left_btn")

//function to do big and small the slide menu
menu_slide.onclick = function () {
  if (contenedor.className == "contenedor active2") {
    contenedor.className = "contenedor"
    botones.className = "botones"
    qr2.className = "qr2"
  }
  menu_slide.classList.toggle("active")
  contenedor.classList.toggle("active")
  botones.classList.toggle("active")
}

//function to show code qr in slide menu
qr.onclick = function () {
  qr2.classList.toggle("active2")
  qr.classList.toggle("active2")
  contenedor.classList.toggle("active2")
  botones.classList.toggle("active2")
}

const menu_toogle_header = document.querySelector(".menutoogle")
const ionicon_header = document.getElementById("menu_toogle")
const menu_nav = document.querySelector(".menu")

menu_toogle_header.onclick = function () {
  menu_toogle_header.classList.toggle("active")
  ionicon_header.classList.toggle("active")
  menu_nav.classList.toggle("active")
}

//variables to control images galery

const categoria_1 = document.getElementById("categoria_1")
const select_categoria_1 = document.getElementById("select_categoria_1")
const galeria_categoria_1 = document.getElementById("galeria_categoria_1")

const categoria_2 = document.getElementById("categoria_2")
const select_categoria_2 = document.getElementById("select_categoria_2")
const galeria_categoria_2 = document.getElementById("galeria_categoria_2")

const categoria_3 = document.getElementById("categoria_3")
const select_categoria_3 = document.getElementById("select_categoria_3")
const galeria_categoria_3 = document.getElementById("galeria_categoria_3")

const categoria_4 = document.getElementById("categoria_4")
const select_categoria_4 = document.getElementById("select_categoria_4")
const galeria_categoria_4 = document.getElementById("galeria_categoria_4")

const categoria_5 = document.getElementById("categoria_5")
const select_categoria_5 = document.getElementById("select_categoria_5")
const galeria_categoria_5 = document.getElementById("galeria_categoria_5")

const categoria_6 = document.getElementById("categoria_6")
const select_categoria_6 = document.getElementById("select_categoria_6")
const galeria_categoria_6 = document.getElementById("galeria_categoria_6")

const categoria_7 = document.getElementById("categoria_7")
const select_categoria_7 = document.getElementById("select_categoria_7")
const galeria_categoria_7 = document.getElementById("galeria_categoria_7")

const categoria_8 = document.getElementById("categoria_8")
const select_categoria_8 = document.getElementById("select_categoria_8")
const galeria_categoria_8 = document.getElementById("galeria_categoria_8")
//Function to control images galery
let a = []

a[0] = 0
select_categoria_1.onclick = function () {
  if (a[0] == 1) {
    galeria_categoria_1.style.display = "none"
    galeria_categoria_1.style.visibility = "hidden"
    select_categoria_1.setAttribute("name", "add-circle-outline");
    a[0] = 0
  }
  else {
    select_categoria_1.setAttribute("name", "close-circle-outline");
    galeria_categoria_1.style.visibility = "visible"
    galeria_categoria_1.style.height = "auto"
    galeria_categoria_1.style.display = "flex"

    a[0] = a[0] + 1

    galeria_categoria_2.style.visibility = "hidden"
    galeria_categoria_2.style.display = "none"
    select_categoria_2.setAttribute("name", "add-circle-outline");

    galeria_categoria_3.style.display = "none"
    galeria_categoria_3.style.visibility = "hidden"
    select_categoria_3.setAttribute("name", "add-circle-outline");

    galeria_categoria_4.style.display = "none"
    galeria_categoria_4.style.visibility = "hidden"
    select_categoria_4.setAttribute("name", "add-circle-outline");

    galeria_categoria_5.style.display = "none"
    galeria_categoria_5.style.visibility = "hidden"
    select_categoria_5.setAttribute("name", "add-circle-outline");

    galeria_categoria_6.style.display = "none"
    galeria_categoria_6.style.visibility = "hidden"
    select_categoria_6.setAttribute("name", "add-circle-outline");

    galeria_categoria_7.style.display = "none"
    galeria_categoria_7.style.visibility = "hidden"
    select_categoria_7.setAttribute("name", "add-circle-outline");

    galeria_categoria_8.style.display = "none"
    galeria_categoria_8.style.visibility = "hidden"
    select_categoria_8.setAttribute("name", "add-circle-outline");

  }
}

a[1] = 0
select_categoria_2.onclick = function () {
  if (a[1] == 1) {
    galeria_categoria_2.style.display = "none"
    galeria_categoria_2.style.visibility = "hidden"
    select_categoria_2.setAttribute("name", "add-circle-outline");
    a[1] = 0
  }
  else {
    select_categoria_2.setAttribute("name", "close-circle-outline");
    galeria_categoria_2.style.visibility = "visible"
    galeria_categoria_2.style.height = "auto"
    galeria_categoria_2.style.display = "flex"

    a[1] = a[1] + 1

    galeria_categoria_1.style.visibility = "hidden"
    galeria_categoria_1.style.display = "none"
    select_categoria_1.setAttribute("name", "add-circle-outline");

    galeria_categoria_3.style.display = "none"
    galeria_categoria_3.style.visibility = "hidden"
    select_categoria_3.setAttribute("name", "add-circle-outline");

    galeria_categoria_4.style.display = "none"
    galeria_categoria_4.style.visibility = "hidden"
    select_categoria_4.setAttribute("name", "add-circle-outline");

    galeria_categoria_5.style.display = "none"
    galeria_categoria_5.style.visibility = "hidden"
    select_categoria_5.setAttribute("name", "add-circle-outline");

    galeria_categoria_6.style.display = "none"
    galeria_categoria_6.style.visibility = "hidden"
    select_categoria_6.setAttribute("name", "add-circle-outline");

    galeria_categoria_7.style.display = "none"
    galeria_categoria_7.style.visibility = "hidden"
    select_categoria_7.setAttribute("name", "add-circle-outline");

    galeria_categoria_8.style.display = "none"
    galeria_categoria_8.style.visibility = "hidden"
    select_categoria_8.setAttribute("name", "add-circle-outline");
  }
}

a[2] = 0
select_categoria_3.onclick = function () {
  if (a[2] == 1) {
    galeria_categoria_3.style.display = "none"
    galeria_categoria_3.style.visibility = "hidden"
    select_categoria_3.setAttribute("name", "add-circle-outline");
    a[2] = 0
  }
  else {
    select_categoria_3.setAttribute("name", "close-circle-outline");
    galeria_categoria_3.style.visibility = "visible"
    galeria_categoria_3.style.height = "auto"
    galeria_categoria_3.style.display = "flex"

    a[2] = a[2] + 1

    galeria_categoria_1.style.visibility = "hidden"
    galeria_categoria_1.style.display = "none"
    select_categoria_1.setAttribute("name", "add-circle-outline");

    galeria_categoria_2.style.visibility = "hidden"
    galeria_categoria_2.style.display = "none"
    select_categoria_2.setAttribute("name", "add-circle-outline");

    galeria_categoria_4.style.display = "none"
    galeria_categoria_4.style.visibility = "hidden"
    select_categoria_4.setAttribute("name", "add-circle-outline");

    galeria_categoria_5.style.display = "none"
    galeria_categoria_5.style.visibility = "hidden"
    select_categoria_5.setAttribute("name", "add-circle-outline");

    galeria_categoria_6.style.display = "none"
    galeria_categoria_6.style.visibility = "hidden"
    select_categoria_6.setAttribute("name", "add-circle-outline");

    galeria_categoria_7.style.display = "none"
    galeria_categoria_7.style.visibility = "hidden"
    select_categoria_7.setAttribute("name", "add-circle-outline");

    galeria_categoria_8.style.display = "none"
    galeria_categoria_8.style.visibility = "hidden"
    select_categoria_8.setAttribute("name", "add-circle-outline");
  }
}

a[3] = 0
select_categoria_4.onclick = function () {
  if (a[3] == 1) {
    galeria_categoria_4.style.display = "none"
    galeria_categoria_4.style.visibility = "hidden"
    select_categoria_4.setAttribute("name", "add-circle-outline");
    a[3] = 0
  }
  else {
    select_categoria_4.setAttribute("name", "close-circle-outline");
    galeria_categoria_4.style.visibility = "visible"
    galeria_categoria_4.style.height = "auto"
    galeria_categoria_4.style.display = "flex"

    a[3] = a[3] + 1

    galeria_categoria_1.style.visibility = "hidden"
    galeria_categoria_1.style.display = "none"
    select_categoria_1.setAttribute("name", "add-circle-outline");

    galeria_categoria_2.style.visibility = "hidden"
    galeria_categoria_2.style.display = "none"
    select_categoria_2.setAttribute("name", "add-circle-outline");

    galeria_categoria_3.style.display = "none"
    galeria_categoria_3.style.visibility = "hidden"
    select_categoria_3.setAttribute("name", "add-circle-outline");

    galeria_categoria_5.style.display = "none"
    galeria_categoria_5.style.visibility = "hidden"
    select_categoria_5.setAttribute("name", "add-circle-outline");

    galeria_categoria_6.style.display = "none"
    galeria_categoria_6.style.visibility = "hidden"
    select_categoria_6.setAttribute("name", "add-circle-outline");

    galeria_categoria_7.style.display = "none"
    galeria_categoria_7.style.visibility = "hidden"
    select_categoria_7.setAttribute("name", "add-circle-outline");

    galeria_categoria_8.style.display = "none"
    galeria_categoria_8.style.visibility = "hidden"
    select_categoria_8.setAttribute("name", "add-circle-outline");
  }
}

a[4] = 0
select_categoria_5.onclick = function () {
  if (a[4] == 1) {
    galeria_categoria_5.style.display = "none"
    galeria_categoria_5.style.visibility = "hidden"
    select_categoria_5.setAttribute("name", "add-circle-outline");
    a[4] = 0
  }
  else {
    select_categoria_5.setAttribute("name", "close-circle-outline");
    galeria_categoria_5.style.visibility = "visible"
    galeria_categoria_5.style.height = "auto"
    galeria_categoria_5.style.display = "flex"

    a[4] = a[4] + 1

    galeria_categoria_1.style.visibility = "hidden"
    galeria_categoria_1.style.display = "none"
    select_categoria_1.setAttribute("name", "add-circle-outline");

    galeria_categoria_2.style.visibility = "hidden"
    galeria_categoria_2.style.display = "none"
    select_categoria_2.setAttribute("name", "add-circle-outline");

    galeria_categoria_3.style.display = "none"
    galeria_categoria_3.style.visibility = "hidden"
    select_categoria_3.setAttribute("name", "add-circle-outline");

    galeria_categoria_4.style.display = "none"
    galeria_categoria_4.style.visibility = "hidden"
    select_categoria_4.setAttribute("name", "add-circle-outline");

    galeria_categoria_6.style.display = "none"
    galeria_categoria_6.style.visibility = "hidden"
    select_categoria_6.setAttribute("name", "add-circle-outline");

    galeria_categoria_7.style.display = "none"
    galeria_categoria_7.style.visibility = "hidden"
    select_categoria_7.setAttribute("name", "add-circle-outline");

    galeria_categoria_8.style.display = "none"
    galeria_categoria_8.style.visibility = "hidden"
    select_categoria_8.setAttribute("name", "add-circle-outline");
  }
}

a[5] = 0
select_categoria_6.onclick = function () {
  if (a[5] == 1) {
    galeria_categoria_6.style.display = "none"
    galeria_categoria_6.style.visibility = "hidden"
    select_categoria_6.setAttribute("name", "add-circle-outline");
    a[5] = 0
  }
  else {
    select_categoria_6.setAttribute("name", "close-circle-outline");
    galeria_categoria_6.style.visibility = "visible"
    galeria_categoria_6.style.height = "auto"
    galeria_categoria_6.style.display = "flex"

    a[5] = a[5] + 1

    galeria_categoria_1.style.visibility = "hidden"
    galeria_categoria_1.style.display = "none"
    select_categoria_1.setAttribute("name", "add-circle-outline");

    galeria_categoria_2.style.visibility = "hidden"
    galeria_categoria_2.style.display = "none"
    select_categoria_2.setAttribute("name", "add-circle-outline");

    galeria_categoria_3.style.display = "none"
    galeria_categoria_3.style.visibility = "hidden"
    select_categoria_3.setAttribute("name", "add-circle-outline");

    galeria_categoria_4.style.display = "none"
    galeria_categoria_4.style.visibility = "hidden"
    select_categoria_4.setAttribute("name", "add-circle-outline");

    galeria_categoria_5.style.display = "none"
    galeria_categoria_5.style.visibility = "hidden"
    select_categoria_5.setAttribute("name", "add-circle-outline");

    galeria_categoria_7.style.display = "none"
    galeria_categoria_7.style.visibility = "hidden"
    select_categoria_7.setAttribute("name", "add-circle-outline");

    galeria_categoria_8.style.display = "none"
    galeria_categoria_8.style.visibility = "hidden"
    select_categoria_8.setAttribute("name", "add-circle-outline");
  }
}

a[6] = 0
select_categoria_7.onclick = function () {
  if (a[6] == 1) {
    galeria_categoria_7.style.display = "none"
    galeria_categoria_7.style.visibility = "hidden"
    select_categoria_7.setAttribute("name", "add-circle-outline");
    a[6] = 0
  }
  else {
    select_categoria_7.setAttribute("name", "close-circle-outline");
    galeria_categoria_7.style.visibility = "visible"
    galeria_categoria_7.style.height = "auto"
    galeria_categoria_7.style.display = "flex"

    a[6] = a[6] + 1

    galeria_categoria_1.style.visibility = "hidden"
    galeria_categoria_1.style.display = "none"
    select_categoria_1.setAttribute("name", "add-circle-outline");

    galeria_categoria_2.style.visibility = "hidden"
    galeria_categoria_2.style.display = "none"
    select_categoria_2.setAttribute("name", "add-circle-outline");

    galeria_categoria_3.style.display = "none"
    galeria_categoria_3.style.visibility = "hidden"
    select_categoria_3.setAttribute("name", "add-circle-outline");

    galeria_categoria_4.style.display = "none"
    galeria_categoria_4.style.visibility = "hidden"
    select_categoria_4.setAttribute("name", "add-circle-outline");

    galeria_categoria_5.style.display = "none"
    galeria_categoria_5.style.visibility = "hidden"
    select_categoria_5.setAttribute("name", "add-circle-outline");

    galeria_categoria_6.style.display = "none"
    galeria_categoria_6.style.visibility = "hidden"
    select_categoria_6.setAttribute("name", "add-circle-outline");

    galeria_categoria_8.style.display = "none"
    galeria_categoria_8.style.visibility = "hidden"
    select_categoria_8.setAttribute("name", "add-circle-outline");
  }
}

a[7] = 0
select_categoria_8.onclick = function () {
  if (a[7] == 1) {
    galeria_categoria_8.style.display = "none"
    galeria_categoria_8.style.visibility = "hidden"
    select_categoria_8.setAttribute("name", "add-circle-outline");
    a[7] = 0
  }
  else {
    select_categoria_8.setAttribute("name", "close-circle-outline");
    galeria_categoria_8.style.visibility = "visible"
    galeria_categoria_8.style.height = "auto"
    galeria_categoria_8.style.display = "flex"

    a[7] = a[7] + 1

    galeria_categoria_1.style.visibility = "hidden"
    galeria_categoria_1.style.display = "none"
    select_categoria_1.setAttribute("name", "add-circle-outline");

    galeria_categoria_2.style.visibility = "hidden"
    galeria_categoria_2.style.display = "none"
    select_categoria_2.setAttribute("name", "add-circle-outline");

    galeria_categoria_3.style.display = "none"
    galeria_categoria_3.style.visibility = "hidden"
    select_categoria_3.setAttribute("name", "add-circle-outline");

    galeria_categoria_4.style.display = "none"
    galeria_categoria_4.style.visibility = "hidden"
    select_categoria_4.setAttribute("name", "add-circle-outline");

    galeria_categoria_5.style.display = "none"
    galeria_categoria_5.style.visibility = "hidden"
    select_categoria_5.setAttribute("name", "add-circle-outline");

    galeria_categoria_6.style.display = "none"
    galeria_categoria_6.style.visibility = "hidden"
    select_categoria_6.setAttribute("name", "add-circle-outline");

    galeria_categoria_7.style.display = "none"
    galeria_categoria_7.style.visibility = "hidden"
    select_categoria_7.setAttribute("name", "add-circle-outline");
  }
}


























