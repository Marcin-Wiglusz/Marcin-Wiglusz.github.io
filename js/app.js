document.addEventListener('DOMContentLoaded', function () {
  
  //dropdown menu
  
  var dropdown = document.querySelector ('li.dropdown');
  var dropdownMenu = document.querySelector ('li.dropdown  ul.dropdown-menu');
  var triangle = document.querySelector ('.triangle');
  
  
  dropdown.addEventListener ('mouseover', function(){
    
    dropdown.style.paddingBottom = '30px';
    dropdownMenu.style.display = 'block';
    triangle.style.display = 'block';
  })
  
  dropdown.addEventListener ('mouseout', function(){
    
    dropdown.style.paddingBottom = 0;
    dropdownMenu.style.display = 'none';
    triangle.style.display = 'none';
  })
  
  
  // chairs section
  
  var clair = document.querySelector ('.clair-chair');
  var innerClair = document.querySelector ('.clair-chair .inner-chair');
  
  var margarita = document.querySelector ('.margarita-chair');
  var innerMargarita = document.querySelector ('.margarita-chair .inner-chair');
  
  
  
  clair.addEventListener ('mouseover', function(){ 
    innerClair.style.display = 'none';
  })   
    
   
  clair.addEventListener ('mouseout', function(){    
    innerClair.style.display = 'block';
  })
    
  
  margarita.addEventListener ('mouseover', function(){    
    innerMargarita.style.display = 'none';
  })
  margarita.addEventListener ('mouseout', function(){    
    innerMargarita.style.display = 'block';
  })
  
    
  //slider
 
  var next = document.querySelector ('.right-btn a');
  var prev = document.querySelector ('.left-btn a');
  
  var slides = document.querySelectorAll ('.slider-img');
  
  var displayedImg = 0;
  
  next.addEventListener ('click', function(){
    
    slides[displayedImg].classList.remove('visible');
    
    if (displayedImg >= slides.length - 1){
      displayedImg = 0;
    }
    else{
    displayedImg++;
    }
    slides[displayedImg].classList.add('visible');
  })
  
  
  prev.addEventListener ('click', function(){
    
    slides[displayedImg].classList.remove('visible');
    
    if (displayedImg >= slides.length - 1){
      displayedImg = 0;
    }
    else{
    displayedImg++;
    }
    slides[displayedImg].classList.add('visible');
    
    
  })
  
});






























