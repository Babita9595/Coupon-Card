



            var toggleDark=()=>{
                var mybody = document.body;
              mybody.classList.toggle('body')
            }


            window.onload = function(){                                
           var element = document.getElementById('DarkMode');
           var mybody = document.querySelector('body');
           const navi = document.getElementsByTagName('nav')[0] ; 
           const icon = document.getElementById('IconBar')
           


           
           
//-----------------------------------



           
           element.onclick = function(){
//-----------------------------------------

element.classList.toggle('bi-brightness-high-fill');
if(element.classList.toggle('bi-moon')){
  
mybody.style.color = 'black';
mybody.style.background = 'white';
navi.style.background = 'blue';
icon.style.background = 'white';
const links = document.getElementsByTagName('a');

           for(i=3; i<9; i++){

           
                   
           if(links[i].href)
           {
               links[i].style.color = 'black';  
           }     
 
 
          else{

            console.log('this is not ref')
           }

           console.log('hello')

          }




 // mybody.document.classList.remove('body');
 // element.classList.toggle('bi-brightness-high-fill');
      console.log("papahello");


   }else{

    
     console.log('myhello');
  


//--------------------------------------------
            mybody.style.color = 'white';
            mybody.style.background = 'black';
            navi.style.background = 'black';
           icon.style.background = 'black';
           
           
           const links = document.getElementsByTagName('a');

           for(i=3; i<9; i++){

           
                   
           if(links[i].href)
           {
               links[i].style.color = 'white';  
           }     
 
 
          else{

            console.log('this is not ref')
           }

           console.log('hello')

          }
        }

       
      }   
         
    }

        


         
       
   //code for coupon
   

   function loadCoupon(){
    document.getElementById('coupon').style.display='block';
    
   // document.getElementById('ScrollBar').style.opacity = '0.5';
    document.getElementById('IconBar').style.opacity = '0.5';
    document.getElementById('MainNav').style.opacity = '0.5';
    document.getElementById('SpecialOfffer').style.opacity = '0.5';
    document.getElementById('moreproduct1').style.opacity = '0.5';
   
   

   

   }

   const closeCoupon = () => {

    document.getElementById('coupon').style.display = 'none';
   // document.getElementsByClassName('opac').style.opacity = '1';
   document.getElementById('IconBar').style.opacity = '1';
   document.getElementById('MainNav').style.opacity = '1';
   document.getElementById('SpecialOfffer').style.opacity = '1';
   document.getElementById('moreproduct1').style.opacity = '1';


   }

  // window.onload = function(){
  //}

