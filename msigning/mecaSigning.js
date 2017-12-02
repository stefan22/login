function externalScripts() {
     var scripts = [
         "https://code.jquery.com/jquery-3.2.1.min.js",
         "https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"
         
     ];
     var src;
     var script;
     var pendingScripts = [];
     var firstScript = document.scripts[0];
     while ((src = scripts.shift())) {
        if ("async" in firstScript) {
           script = document.createElement("script");
           script.async = false;
           script.src = src;
           document.head.appendChild(script);
        }//if
     }//while
}


//externalScripts();


(function (global) {
  var SL = {};
  
  SL = {
    init: function () {
      this.mcssone();
      this.mcsstwo();
      this.signing();
      


    }, //init 

    mcssone: function () {
      console.clear();
      console.info('%c cssone \u221a', 'background:blue;color:white;');
      var mainone = 'input[type=text].darkplace::placeholder {color:#333;} input[type=text].darkplace:-ms-input-placeholder {color:#333;} input[type=text].darkplace::-ms-input-placeholder {color:#333;} input[type=text].darkplace::-moz-placeholder {color:#333;} .login-form input.active {border: 1px solid #823f90;} input[type=text].redplace::placeholder {color:#f44336;}input[type=text].redplace:-ms-input-placeholder {color:#f44336;} input[type=text].redplace::-ms-input-placeholder {color:#f44336;} input[type=text].redplace::-moz-placeholder {color:#f44336;}  ';

      var head = document.getElementsByTagName('head')[0];

      function addcss(css) {
        var s = document.createElement('style');
        s.setAttribute('type', 'text/css');
        s.appendChild(document.createTextNode(css));
        head.appendChild(s);
      }
      addcss(mainone);

    }, //mcssone 

    


    mcsstwo: function () {
      console.info('%c cssfive \u221a', 'background:blue;color:white;');
      var style = document.createElement('style');
      style.type = "text/css";
      //bigfoot
      style.innerHTML = " \n";
     
          
      //append to head
      document.getElementsByTagName('head')[0].appendChild(style);


    }, //mcsstwo
    
    signing: function() {
      console.info('%c signing \u221a', 'background:blue;color:white;');
      //form
      var isform = document.querySelector('.login-form.js-login');
      //disabled signin
      isform.children[1].children[0].setAttribute('disabled',true);
      //isform.className = "login-form";
      var inputs = document.querySelectorAll('div.input-container');
      var usrname = document.getElementById('loginUsername');
      usrname.className += " darkplace";
      var usrpass = document.getElementById('loginPassword');
      //rem errors div
      var er = document.getElementById('loginErrors_106');
      er.parentElement.removeChild(er);
      
      function userfirst() {
        
        alert('enter a username before proceeding');
        
      }
      
      
      
      
      usrname.addEventListener('focus',function(e) {
        
        for(var i=0; i < inputs.length; i++) {
        
              //is username
              if(inputs[i].classList.contains('input-username')) {
                  //username,placeholder and active
                  if(usrname.placeholder == "Username") {
                    this.placeholder = "Please enter your username";
                    this.className = "active darkplace";
                    this.parentElement.parentElement.className += " active valid";
                    
              
                  }
                  
                  
                  
                 
                
              }//username
            
        
        }//for
        
        
      },false);
      
      usrname.addEventListener('blur',function(e) {
        
        for(var i=0; i < inputs.length; i++) {
        
           //is username
           if(inputs[i].classList.contains('input-username')) {
                
                if(usrname.value.length < 3) {
                  
                  usrname.className = "redplace invalid";
                  this.parentElement.parentElement.className += " active invalid";
                  
                }
                
                else if (usrname.value.length > 3) {
                  
                  usrname.className = "valid";
                  this.parentElement.parentElement.className += " active valid";
                  usrpass.removeAttribute('disabled');
                  
                }
                  
                  
                  
                  
                  
                  
                
           }//username
        
        
        }//for
        
        
      },false);
      
      usrpass.addEventListener('focus',function(e) {
        e.preventDefault();
        for(var i=0; i < inputs.length; i++) {
        
          //is usrpass
          if(inputs[i].classList.contains('input-password')) { 
              //check first user isnt invalid   
              if(usrname.className.indexOf('invalid') > -1) {
                //invalid so disable it and out
                usrpass.setAttribute('disabled', true);
                userfirst();
       
              }//if usr has no invalid    
              
               // if(usrname.className.indexOf('valid') > -1) {
               //    usrpass.setAttribute('disabled', false);
               // }  
                  
             
                  
                      
          }//usrpass
        
        
        }//for
        
        
      },false);
      
      usrpass.addEventListener('blur',function(e) {
        e.preventDefault();
        for(var i=0; i < inputs.length; i++) {
        
        //is usrpass
        if(inputs[i].classList.contains('input-password')) {
                  console.log('is password');
                  
                  if(inputs[i].classList.contains('active')) {
                      console.log('password remove active');
                      
                      if(inputs[i].classList.contains('invalid')) {
                          console.log('password remove active and is invalid');
                        
                      }//invalid 
                      
                      else if(inputs[i].classList.contains('valid')) {
                          console.log('password remove active and is valid');
                        
                      }//invalid   
                    
                  }//rem active  
                      
        }//usrpass
        
        
        }//for
        
        
      },false);
      
      
      
      
      
      
      
      
      
      
      
      
    }//signing
      
      
      
      
   

  }; //SL
  
         SL.init(); 

})(window);