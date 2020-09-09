// Buttons

let button = document.getElementById('display-name-button');

button.onclick = function()
 { 
    alert('Lloyd');
 }
// Mouse Over

let light = document.getElementById('light-bulb'); 

light.addEventListener('mouseover',  () => {
    
    light.setAttribute('src', 'images/light-bulb-on.png')
   


});





// Toggle
let toggleAlert = document.getElementById('toggle-alert');
let toggleBut = document.getElementById('toggle-button');
let trueOrNot = true;

toggleBut.addEventListener('click', () => {
         
         if (trueOrNot ){
        toggleAlert.classList.add('invisible')
        trueOrNot = false;
        toggleAlert.innerHTML=('fuk this was annoying')
        toggleBut.innerHTML=('off')
         } else  {
            trueOrNot = true;
            toggleAlert.classList.remove('invisible')
            toggleBut.innerHTML=('on')

         }
         
       

});


// Validate
// Use bootstrap validation: https://getbootstrap.com/docs/4.5/components/forms/#server-side


// Challenge: Lists



// Challenge: Lists (Part 2)