let  card1 = document.querySelector(".card1"),
card2 = document.querySelector(".card2"),
card3 = document.querySelector(".card3"),
serviceCard1  = document.querySelector(".service_card1"),
serviceCard2  = document.querySelector(".service_card2"),
serviceCard3  = document.querySelector(".service_card3");

serviceCard1.addEventListener("mouseover",function(){
    card1.style.display = "block";
    card2.style.display = "none";
    card3.style.display = "none";
});
serviceCard2.addEventListener("mouseover",function(){
    card1.style.display = "none";
    card2.style.display = "block";
    card3.style.display = "none";
});
serviceCard3.addEventListener("mouseover",function(){
    card1.style.display = "none";
    card2.style.display = "none";
    card3.style.display = "block";
});










let questionText = document.querySelectorAll(".question_text"),
questionHide = document.querySelectorAll(".question_hide");

questionText.forEach((item,i)=>{
    item.addEventListener("click",()=>{   
        if(questionHide[i].style.display === 'none'){
            questionHide[i].style.display === 'block'
        }else{
            questionHide[i].style.display === 'none'
        }
              
   })
})




















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
    