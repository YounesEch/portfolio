const menu = document.querySelector('.menu');
const navMenu = document.querySelector('.nav');

menu.addEventListener('click', menuOpen);
navMenu.addEventListener('click', navOpen);

function menuOpen () {
  navMenu.classList.toggle('active');
  menu.classList.remove('active');
}

function navOpen(){
  navMenu.classList.remove('active');
  menu.classList.toggle('active');
}

const content=document.querySelector('.pageOne');
const job=document.querySelector('.experience');
const study=document.querySelector('.education');
const competence=document.querySelector('.competence');
const work=document.querySelector('.work');

job.addEventListener('click', showContent);

function showContent(){

}