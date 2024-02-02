 let btn = document.querySelector(".btn")
 let fullname = document.querySelector(".name")
 let email = document.querySelector(".email")
 let pass = document.querySelector(".pass")
 let con_pass = document.querySelector(".con_pass")


let validate_email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


let validate_pass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/


 let name_err = document.querySelector(".name_err")
 let email_err = document.querySelector(".email_err")
 let pass_err = document.querySelector(".pass_err")
 let con_pass_err = document.querySelector(".con_pass_err")
 


 btn.addEventListener("click",(e)=>{
    e.preventDefault()
   if(!fullname.value){
    name_err.innerHTML = "Enter Your Name"
   }else{
    name_err.innerHTML = ""
   }



   if(!email.value){
      email_err.innerHTML = "enter your email"
   }
   else{
    if(email.value.match(validate_email)){
        email_err.innerHTML = ""
    }else{
        email_err.innerHTML = "formate thik nai"
    }  
   }
    
   if(!pass.value){
    pass_err.innerHTML = "password daw miya"
   }else{
    if(pass.value.match(validate_pass)){
        pass_err.innerHTML = ""
    }else{
        pass_err.innerHTML = "strong pass daw"
    }
    
   }
    
   if(!con_pass.value){
    con_pass_err.innerHTML = "confirm password daw"
   }else{
    if(pass.value == con_pass.value){
        con_pass_err.innerHTML = ""
    }else{
        con_pass_err.innerHTML = "don't match"
    }
    
   }

 })
 







    