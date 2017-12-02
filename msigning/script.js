(function() {
   //globals
   var mform = document.querySelector('.login-form.js-login');
   //onsubmit
   addEvent(mform,'submit', function(e) {
      console.log(e);
      //stop it till username and password are filled
      debugger;
      e.preventDefault();
      //username
      var usrname = document.getElementById('loginUsername').value;
      //password
      var usrpass = document.getElementById('loginPassword').value;
     
      messAlert(usrname,usrpass);
      
   });//onsubmit
      
      
      
   function addEvent(el, event,callback) {
      //if addEvenList works
      if('addEventListener' in el) {
         el.addEventListener(event,callback,false);
      }else {
         //otherwise make callback a method of el
         el['e' + event + callback] = callback;
         //add second method
         el[event + callback] = function() {
            //use to call prev fn
           el['e' + event + callback](window.event);
         };
         //use attch evt() to call sec fn; which then calls first
         el.attachEvent('on' + event, el[event + callback]);
      }
      
   }//fn addEvent
      
      
   function messAlert(user,pass,message) {
      //msgbox div
      var msgbox = document.createElement('div');
      msgbox.id = 'msgbox';
      user = user;
      pass = pass;
      message = 'Welcome back ';
      msgbox.innerHTML = '<p>' + message + '<span class="tname">' + user + '</span></p>';
      msgbox.innerHTML += '<p>Your password is: ' + pass + '</p>';
     
      
      //append to form
      mform.appendChild(msgbox);
      
      
      
      
      
   }   
      
      
   
   
   
   
})();