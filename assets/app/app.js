let $btnOpenMenu = document.querySelector("#btnMenu");
let $btnCloseMenu = document.querySelector("#closeMenu");
let $header = document.querySelector("header");
let $body = document.querySelector("body");

$btnOpenMenu.addEventListener('click', function(){
  $header.classList.add('show_movil');
  $body.style.overflow = "hidden";
});

$btnCloseMenu.addEventListener('click',  function(){
  $body.style.overflow = "unset";
  $header.classList.remove('show_movil');
})