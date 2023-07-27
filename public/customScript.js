
    const tripple = document.querySelector(".triple");
    let navMenu = document.querySelector(".nav-menu");
    
    tripple.onclick = function(){
    
        tripple.classList.toggle('active');
        navMenu.classList.toggle('active');
        // document.style.body = 'filer:blue(20px)'
    
    }
    document.querySelectorAll(".nav-link").forEach(li => li.addEventListener("click",() =>{

        tripple.classList.remove('active');
        navMenu.classList.remove('active');
    }))


