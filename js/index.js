document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("pc_pop_up").addEventListener("click", function(){
    document.getElementById("menu-drop-down").classList.add('dropdown-active');
   })
 document.querySelector(".container").addEventListener("click", function(){
    document.getElementById("menu-drop-down").classList.remove('dropdown-active');
 })
})

document.querySelector("#searchButton").addEventListener("click", function(){
    document.getElementById("search-full-all").style.display='block'; 
})

document.querySelector(".close-search").addEventListener("click", function(){
    document.getElementById("search-full-all").style.display='none';  
})

