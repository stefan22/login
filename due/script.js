(function() {
  var working = false;
  //form,uservalue,passvalue
  var raform = document.querySelector('form.ralogin');
  var raisuser = document.querySelector('.rainput-username input').value;
  var raispass = document.querySelector('.rainput-password input').value;
  var state = document.querySelector('button > .state');
  var ramessage ='';
  
  //onsubmit
  document.querySelector('.ralogin')
  .addEventListener('submit', function(e) {
      e.preventDefault();
      
      if(working) {
        return;
      }
        
      working = true;
      
      
      raform.classList.add('loading');
      state.innerHTML = 'Authenticating VIPs';
      
      setTimeout(function() {
        raform.classList.add('ok');
        
        var rauser = document.querySelector('.rainput-username input').value;
        state.innerHTML = '<div class="propa"><img src="https://sb.monetate.net/img/1/748/1304922.png"><p>' + ramessage(rauser) + '</p></div>';
        
        function ramessage(rauser) {
          var ramess = ramess || undefined;
          if(rauser == '') {
            
            ramess = '<span id="rawelcome">Welcome back!</span>' + '<br/>';
            ramess += ".. a lot has happened since you last logged in.";
            return ramess;
          }
          else {
            ramess = '<span id="rawelcomeuser">Welcome back <span id="rasuser">' + rauser + "!</span></span><br/><br/><br/>";
            ramess += ".. a lot has happened since you last logged in.";
            //document.querySelector('button i.spinner').style.top = '65%';
            return ramess;
            
          }//else
          
        }//ramessage
        
        setTimeout(function() {
          state.innerHTML = "log in";
          //remove all but ralogin
          raform.className = "ralogin";
          working = false;
          
        }, 3500);
        
      }, 1500);
    });
  
  
  
})();