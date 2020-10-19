document.addEventListener('DOMContentLoaded', function() {


    const header = document.querySelector('nav'); 
    const btnUp = document.createElement('div')
    btnUp.setAttribute('class', 'btn-up');
    btnUp.id = 'btn-up'
    btnUp.style.fontSize = '1.2em'
    btnUp.style.opacity = '0'
    btnUp.classList.add('text-pink-700')
    btnUp.classList.add('flex')
    btnUp.classList.add('justify-center')
    btnUp.classList.add('items-center')
    btnUp.innerHTML = '<i class="fas fa-chevron-up"></i>'
    document.body.appendChild(btnUp)




    let works = [... document.querySelectorAll('.works')]
    let linkWork = [... document.querySelectorAll('.link-work')]
    let overlayWork = [... document.querySelectorAll('.overlay-work')]


    let tip = document.querySelector('.custom-tip')
    
    // linkWork.style.transition = 'all .3s ease-in-out' 
    // overlayWork.style.transition = 'all .3s ease-in-out' 
    // overlayWork.style.opacity = '0' 
    // linkWork.style.opacity = '0' 
    
    let overlay = overlayWork.map(el => {
    
        el.style.transition = 'all .3s ease-in-out' 
        el.style.opacity = '0' 
    })

    let links = linkWork.map(el => {
    
        el.style.transition = 'all .3s ease-in-out' 
        el.style.opacity = '0' 
        el.style.transform = 'translateY(0)' 
    })
    
    let w = works.map(el => {
    

        el.addEventListener('mouseover', function() {
            el.lastElementChild.style.transform = 'translateY(-2rem)'
            el.lastElementChild.style.opacity = '1'
            el.firstElementChild.style.opacity = '1'
        })
    
        el.addEventListener('mouseleave', function() {
            el.lastElementChild.style.transform = 'translateY(0)'
            el.firstElementChild.style.opacity = '0'
            el.lastElementChild.style.opacity = '0'
        })
    
    })
    
    /*
     Animacion del menu 
    */

    const btn = document.getElementById('button')
    const menu = document.getElementById('menu')

    // menu.style.transition = 'all 1s ease-in-out'
    btn.addEventListener('click', e => {

        menu.classList.toggle('md:hidden')
        menu.classList.toggle('sm:hidden')
        // fadeIn(menu, 50)
        anime({
            targets: menu,
            duration: 500,
            opacity: [0, 1]
        });

    })


    // if (window.innerWidth < 768 ) {

    //     menu.classList.remove('xs-flex')

    //     btn.addEventListener('click', e => {

            
    //         menu.classList.toggle('xs-flex')
           
    //         // fadeIn(menu, 50)
    //         anime({
    //             targets: menu,
    //             duration: 500,
    //             opacity: [0, 1]
    //         });
    
    //     })
    

    // }


    if (window.matchMedia("(max-width: 768px)").matches) {
        /* The viewport is less than, or equal to, 700 pixels wide */

        menu.classList.remove('xs-flex')

        btn.addEventListener('click', e => {

            console.log(e.currentTarget)

            menu.classList.toggle('xs-flex')
           
            // fadeIn(menu, 50)
            anime({
                targets: menu,
                duration: 500,
                opacity: [0, 1]
            });
    
        })
    } else {
    /* The viewport is greater than 700 pixels wide */
    }

    /*
     Animacion del tooltip
    */

    if(window.innerWidth > 768) {

        setTimeout( function(){
    
            anime({
                targets: tip,
                duration: 1500,
                translateY: 5,
                opacity: [0, 1]
            });
    
        }, 5000)
    
        if (tip != undefined || tip != null) {
            
            tip.addEventListener('click', e => {
                if (e.target.tagName === 'path' || e.target.tagName === 'svg' || e.target.tagName === 'SPAN') {
                    anime({
                        targets: tip,
                        duration: 1500,
                        translateY: -20,
                        opacity: [1, 0]
                    });
        
                    setTimeout( function(){
        
                        tip.style.display = 'none'
                
                    }, 1600)
                    
                }   
            })
        }


        /*
            Animacion de titulos 
        */
        const textHero = document.getElementById('text-hero')

        if (textHero != undefined || textHero != null) {
            
            const mensaje = {
                "a": "Todo para el cuidado de tus mascotas",
                "b": "Peluqería, baños, tratamientos y asistencia en general"
            }
            // textHero.textContent = mensaje.a
            // textHero.textContent = mensaje.b
             let loopCompleted = 0;
             anime({
                 targets: textHero,
                 duration: 3500,
                 translateY: [20, 0],
                 opacity: [0, 1], 
                 direction: 'normal',
                 loop: true,
                 loopComplete: function(anim) {
                     
                     loopCompleted++;
                     
                     if (loopCompleted == 1) {
                         textHero.textContent = mensaje.b
                     }else {
                         
                         textHero.textContent = mensaje.a
                     }
         
                     if(loopCompleted >= 2) {
                         loopCompleted = 0
                     }
                     
                 }
             
             });



             function resizeDivison() {

                if(window.innerWidth > 768) {
        
                    /*
                        Animacion de titulos 
                    */
                    const textHero = document.getElementById('text-hero')
        
                    const mensaje = {
                        "a": "Todo para el cuidado de tus mascotas",
                        "b": "Peluqería, baños, tratamientos y asistencia en general"
                    }
            
                    let loopCompleted = 0;
                    anime({
                        targets: textHero,
                        duration: 3500,
                        translateY: [20, 0],
                        opacity: [0, 1], 
                        direction: 'normal',
                        loop: true,
                        loopComplete: function(anim) {
                            
                            loopCompleted++;
                            
                            if (loopCompleted == 1) {
                                textHero.textContent = mensaje.b
                            }else {
                                
                                textHero.textContent = mensaje.a
                            }
                
                            if(loopCompleted >= 2) {
                                loopCompleted = 0
                            }
                            
                        }
                    
                    });
        
        
                }
            }
        



        }

   
       

     
     
    }

    
    window.addEventListener('resize', resizeDivison);


    /*
        Control de botón up 
    */


    let posicionScroll = 0

    //Control de botón up
    let controlBtnUp = () => {

        intervalo = setInterval(function() {

            posicionScroll -= 10; 

            if(posicionScroll === header.offsetTop || posicionScroll < 0) {
                posicionScroll = 0; 
                clearInterval(intervalo)
            }

            window.scrollTo(0, posicionScroll);

        }, 20)

    }




    //Control de botón up
    window.addEventListener('scroll', (e) => {
        // posicionScroll = window.pageYOffset;
        
        //Control del header
        
        if(scrollY > 150) {
            // header.style.backgroundColor = 'rgba(255, 255, 255, .5)'
            
            btnUp.style.cursor = 'pointer'
            btnUp.style.opacity = '1'
            btnUp.addEventListener('click', controlBtnUp)
        }else { 
            // header.style.backgroundColor = 'rgba(255, 255, 255, 1)'
            
            
            btnUp.style.opacity = '0'
            btnUp.style.cursor = 'default'
            btnUp.removeEventListener('click', controlBtnUp)
        }
        

    })








    /*
        Modal
    */

    


    

    


    const year = document.getElementById('year');
    let y = new Date(); 
    year.textContent = y.getFullYear()




















})