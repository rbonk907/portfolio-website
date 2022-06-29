let btn1 = document.getElementById('btn-1');
let btn2 = document.getElementById('btn-2');
let btn3 = document.getElementById('btn-3');
// let btn4 = document.getElementById('btn-4');

const menu = document.querySelector('.hamburger-icon span');
const closeMenu = document.querySelector('.close-icon')


function showNav(event) {
  event.currentTarget.classList.add('hidden');
  const aside = document.querySelector('.sidebar-wrapper');
  closeMenu.classList.remove('hidden');
  aside.classList.remove('hidden');
  document.querySelector('body').classList.add('blur');
}

function hideNav(event) {
  const aside = document.querySelector('.sidebar-wrapper');
  aside.classList.add('hidden');
  closeMenu.classList.add('hidden');
  document.querySelector('body').classList.remove('blur');
  menu.classList.remove('hidden');
}

function addText(event) {
  let className = event.currentTarget.className;
  let description = document.getElementsByClassName(className)[1];
  // document.querySelector('.jobs').innerHTML += window.getComputedStyle(description);
  if (window.getComputedStyle(description).display === 'none') {
    let jobs = document.getElementsByClassName('job');
    let tabs = document.getElementsByClassName('tab');
    // jobs.forEach(job => job.style.display = 'none');
    for (let i = 0; i < jobs.length; i++) {
      jobs[i].style.display = 'none';
      tabs[i].style.borderBottom = '2px solid gray';
    }
    event.currentTarget.parentNode.style.borderBottom = '2px solid blue';
    description.style.display = 'block';
  }
  
  // if (event.currentTarget === document.activeElement) {
  //   description.innerHTML += '<p>You\'ve clicked</p>' + event.currentTarget.className;
  // }
  
}

menu.addEventListener("click", showNav);
closeMenu.addEventListener("click", hideNav);
btn1.addEventListener("click", addText);
btn2.addEventListener("click", addText);
btn3.addEventListener("click", addText);
// btn4.addEventListener("click", addText);
