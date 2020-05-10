// (function(){
//     emailjs.init('user_Vth93JdMVS4OjsQEyYqPv');
//  })();
// jQuery(document).ready(function() {

//     jQuery(".anchor").on("click", function (event) {

//         event.preventDefault();
        
//         var id = jQuery(this).attr('href'),
        
//         top = jQuery(id).offset().top;
        
//         jQuery('body,html').animate({scrollTop: top}, 800);
//     });

//     jQuery(".top").on("click", function(event) {
//         event.preventDefault();
//         jQuery('body,html').animate({scrollTop: 0}, 800);
//     })

//     jQuery(".rs_block .head").on("click", function(event) {
//         event.preventDefault();
//         if(!jQuery(this).parent(".rs_block").hasClass("active")) {
//             jQuery(".rs_block").removeClass("active")
//             jQuery(".rs_block .body").hide(600)

//             jQuery(this).siblings(".body").show(600)
//             jQuery(this).parent(".rs_block").addClass("active")
//         }
//     })
//     jQuery("form").on("submit", function(event) {
//         event.preventDefault()
//         let msg = `From:${jQuery("#your-name").val()} \n Message: ${jQuery("#message").val()}`

//         let success




//         var templateParams = {
//             full_name: jQuery('#your_name').val(),
//             email: jQuery('#your_email').val(),
//             message: jQuery('#message').val()
//         };
         
//         emailjs.send('gmail', 'base', templateParams)
//             .then(function(response) {
//                console.log('SUCCESS!', response.status, response.text);
//                success = true;
//             }, function(error) {
//                console.log('FAILED...', error);
//                success = false;
//             });

//         if(success) {
//             jQuery(".info_msg").text("Your message was sent successfully")
//             jQuery(".info_msg").css('color','green')
//             alert("Your message was sent successfully")
//         } else {
//             jQuery(".info_msg").text("Oops, something went wrong :( ... Try later")
//             jQuery(".info_msg").css('color','red')
//         }
//     })



//     jQuery(".cookie_ok").on("click", function(event) {
//         event.preventDefault()      
//         localStorage.setItem("cookie_ok", true)
//         jQuery(".cookies_alert").hide()
//     })
//     if(!localStorage.getItem("cookie_ok")) {
//         jQuery(".cookies_alert").show()
//     }
window.addEventListener('DOMContentLoaded',function(){
    'use strict';
    let tab = document.querySelectorAll('.tab'),
        tabs = document.querySelector('#tabs'),
       tabContent = document.querySelectorAll('.tabContent');
      
      function hideTabContent (a){
         for (let i = a; i < tabContent.length; i++){
             tabContent[i].classList.remove('show');
             tabContent[i].classList.add('hide');
           
         }
     }  
    hideTabContent(1); 
     function showTabContent(b){
         if(tabContent[b].classList.contains('hide')){
             
           
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
         }
     }
      
     tabs.addEventListener('click',function(event){
         let target = event.target;
         if(target && target.classList.contains('tab')){
             for(let i = 0; i < tab.length ; i++){
                 if(target == tab[i]){
                     hideTabContent(0);
                     showTabContent(i);
                     break;
                 }
             }
         }
     })

     let more = document.querySelector('.more'),
         closeBtn = document.querySelector('.closeBtn'),
         modals = document.querySelector('.modalBlock');
    more.addEventListener('click',function(){
        modals.style.display = 'block';
        document.body.style.overflow = 'hidden';
    })
    closeBtn.addEventListener('click',function(){
        modals.style.display = 'none';
        document.body.style.overflow = '';
    })



 let deadline = '2020-06-28';

 function differenceTime(endtime){
     let t =  Date.parse(deadline) - Date.parse(new Date()),
    days = Math.floor((t/(1000*60*60*24))),
    hours = Math.floor((t/1000/60/60)%24),
    minutes = Math.floor((t/1000/60)%60),
    seconds = Math.floor((t/1000)%60);
 
 return {
     'total': t,
     'days' : days,
     'hours': hours,
     'minutes': minutes,
     'seconds' :seconds
     };
    }
    function setClock (id, endtime){
        let  timer = document.getElementById(id),
            days = timer.querySelector('.days'),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(onClock,1000);
            function onClock(){
             let   t = differenceTime(endtime);
            function addZero(num){
                if(num <= 9){
                    return '0' + num;
                }else return num;
            };
            days.textContent = t.days;
            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);
            
            
                if(timeInterval <= 0){
                    clearInterval(timeInterval);
                }
            }

    }
    setClock('timer','deadline');
    let btnDay = document.querySelector('.btnDay'),
    ideasBlock = document.querySelector('.ideasBlock'),
    close = document.querySelector('.close')

    btnDay.addEventListener('click',function(){
        ideasBlock.style.display = 'block';
        // document.body.style.overflow = 'hidden';

    })
    close.addEventListener('click',function(){
        ideasBlock.style.display = 'none';
        // document.body.style.overflow = '';
    })
    
});

