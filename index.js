let btn1 = document.getElementById('btn-1');
let btn2 = document.getElementById('btn-2');
let btn3 = document.getElementById('btn-3');
// let btn4 = document.getElementById('btn-4');


function addText(event) {
  let className = event.currentTarget.className;
  let description = document.getElementsByClassName(className)[1];
  // document.querySelector('.jobs').innerHTML += window.getComputedStyle(description);
  if (window.getComputedStyle(description).display === 'none') {
    let jobs = document.getElementsByClassName('job');
    // jobs.forEach(job => job.style.display = 'none');
    for (let i = 0; i < jobs.length; i++) {
      jobs[i].style.display = 'none';
    }
    description.style.display = 'block';
  }
  
  // if (event.currentTarget === document.activeElement) {
  //   description.innerHTML += '<p>You\'ve clicked</p>' + event.currentTarget.className;
  // }
  
}

btn1.addEventListener("click", addText);
btn2.addEventListener("click", addText);
btn3.addEventListener("click", addText);
// btn4.addEventListener("click", addText);
