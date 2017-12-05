/*
getready has all html but need:
1) banner √
2) href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" √
3) styles.css √
4) "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.js" √
5) script.js √

*/

function externalScripts() {
    var scripts = [
        "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.js"
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
        }
    }
}
externalScripts();

(function (global) {
    var msignin = document.querySelector('.header-login .btn-login');
    //disables signin first, and back on at signin fn
    msignin.setAttribute('disabled', true);
    var SL = {};
    SL = {
        init: function () {
            this.mcssone();
            this.mcsstwo();
            this.mgetready();
            this.signin();



        }, //init 

        mcssone: function () {
            console.info('%c cssone \u221a', 'background:blue;color:white;');
            var mainone = ' body{font-family:"FranklinGothicHeavy",Arial,sans-serif;height:100%;background-size:cover;margin:0}@keyframes spinner{0%{transform:rotateZ(0deg)}100%{transform:rotateZ(359deg)}}*{box-sizing:border-box}@keyframes goneso{0%{top:0;width:100%}50%{top:35%;opacity:.7}75%{top:33%;opacity:.5}100%{top:200%;width:100%;opacity:0}}@keyframes tostos{0%{margin-left:100%;width:300%}75%{font-size:300%;margin-left:15%;width:120%}100%{margin-left:0;width:100%}}*{box-sizing:border-box}.mwrapper{display:flex;align-items:center;flex-direction:column;justify-content:center;width:100%;min-height:100%;padding:0;background:rgba(162,166,169,0.85)}.ralogin{border-radius:2px 2px 5px 5px;padding:10px 25px 20px 25px;width:100%;margin:0 auto;max-width:480px;background:#e8e8e8;position:relative;padding-bottom:100px;box-shadow:0 1px 5px rgba(0,0,0,0.3)}.ismecatime{background:url(https://sb.monetate.net/img/1/748/1305929.png);opacity:.85;background-color:#fafafa;background-size:182.25px 41.5px;animation-name:mecalogin;animation-duration:5s;animation-timing-function:linear;animation-iteration-count:infinite;overflow:hidden;position:absolute;bottom:-3em;left:0;width:100%}@keyframes mecalogin{-15%{background-position:0,1px}25%{background-position:-182px 1px}50%{background-position:-364px 1px}75%{background-position:-546px 1px}100%{background-position:-729px 1px}}.ralogin.loading button{max-height:100%;padding-top:50px}.ralogin.loading button .spinner{opacity:1;top:90%}.ralogin.ok button{background-color:#033625a8;transition:background-color .5s,background-image 1s}.ralogin.ok button .spinner{transform:rotateZ(240deg);border:5px dotted #899927;width:40px;height:40px;box-shadow:0 0 5px 0 #142720;background:transparent}.ralogin input{//display:block;padding:19px 10px!important;margin-bottom:10px;width:99%;border:1px solid #ddd;transition:border-width .2s ease;border-radius:2px;color:#823f8f;font-size:14px;border-radius:4px;display:inline-block}.ralogin input+i.fa{color:#fff;font-size:1.5em;position:absolute;margin-top:12px;opacity:0;left:0;transition:all .1s ease-in}.ralogin input:focus,.ralogin input:active{outline:0;color:#823f8f;border-color:#823f8f;border-left-width:45px;padding:17px 10px;font-size:14px}.ralogin input:focus+i.fa,.ralogin input:active+i.fa{opacity:1;left:38px;transition:all .25s ease-out}.rabot{height:88px;position:relative}.ralogin a{font-size:14px;color:#823f8f;text-decoration:none}.ralogin .title{color:#823f90;font-size:2.5em;font-weight:bold;margin:10px 0 30px 0;border-bottom:1px solid #eee;padding-bottom:0;letter-spacing:-1px;padding-left:.15em}.ralogin button:hover{background:#d45c95;color:#fff} .ralogin button{width:100%;height:100%;background:#d45c95;color:#fff;border:0;position:absolute;left:0;bottom:0;max-height:56px;border-radius:4px;transform:rotateZ(0deg);transition:all .1s ease-out;font-variant:all-small-caps;font-size:3em;cursor:pointer;line-height:1em;padding:0;font-family:"FranklinGothicHeavy",Arial,sans-serif;border-top-left-radius:0;border-top-right-radius:0;} .ralogin button .spinner{display:block;width:50px;height:50px;position:absolute;border:7px solid #fff;border-top-color:rgba(174,79,124,0.78);border-radius:100%;left:50%;top:0;opacity:0;margin-left:-20px;margin-top:-20px;animation:spinner .6s infinite linear;transition:top .22s .22s ease,opacity .22s .22s ease,border-radius .5s .5s ease-in-out;box-shadow:0 1px 0 1px #eb8ab8ed;background-color:#f7a0c929}button.logino{background-color:#ce367e!important}.ralogin:not(.loading) button:hover{box-shadow:0 1px 3px #d55b95}.ralogin:not(.loading) button:focus{border-bottom-width:4px;outline:0}span.state:focus,span.state:active{outline:0}form,button{outline:0;}.btn-secondary{color:#fff;font-family:"FranklinGothicHeavy",Arial,sans-serif;font-size:2rem;padding:.7rem 1.5rem;text-transform:uppercase;width:50%}.logino{position:static!important;width:33%!important;font-size:1.5em!important;padding:5px 5px!important;max-height:40px!important;display:inline-block!important;margin:0!important}.rajoinbutton{width:100%;margin:0 auto;max-height:40px;overflow:hidden;text-align:center;vertical-align:middle;margin-top:3em}.rainput-username label,.rainput-password label{color:#823f8f;padding:.5em 0 .15em .25em;display:block}.rainput-username input::placeholder,.rainput-password input::placeholder{color:#823f8f;font-size:14px;font-style:italic}form.ralogin p{font-size:14px;color:#616161;padding:.5em .5em;margin-bottom:0} .rahelp {padding:.5em; } form.ralogin .rahelp p{font-size:14px;color:#303030; padding:.5em 0;margin-top:0; font-weight:normal;}form.ralogin p a.raclickhere{text-decoration:underline; font-weight:normal;}.propa img{max-width:480px;margin:0 auto;display:block;border-radius:5px;position:fixed;top:0;left:0;z-index:-1;opacity:.9;animation-name:goneso;animation-duration:4s}.propa p{font-size:16px!important;line-height:24px!important;color:#fcffb1!important;font-variant:initial!important;padding:0 2em!important;z-index:100;letter-spacing:.5px;text-shadow:0 0 1px #101010;animation-duration:2.5s;animation-name:tostos}#rawelcome{font-size:3em;color:#f8f8f8;margin-bottom:.5em;display:inline-block;text-shadow:0 0 1px #101010}#rawelcomeuser{font-size:3em;color:#f8f8f8;margin-top:2em;margin-bottom:.5em;display:inline-block;line-height:50px}#rasuser{font-size:.9em} .modal-ct {box-shadow:0 1px 0 1px #a1a1a1;outline:0px solid #bcba9524; overflow:hidden;border-radius:.6rem;max-width:45rem;min-width:30rem;position:static;max-height:49.5rem!important; padding:0;  } .modal-ct .close{-webkit-tap-highlight-color:transparent;outline-color:transparent;z-index:0}  ';

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
            console.info('%c csstwo \u221a', 'background:blue;color:white;');
            var maintwo = '.mwrapper {display:none; } .noma {display:block;} .close.mclose {height:4rem; line-height:40px; width:26%; border-radius:7px; position:absolute; right:0; top:0; }  .modal-ct.login-ct.modal-show {top:28%; left:50%; position:absolute;transition:top .3s, left .3s, opacity .3s; animation-name:coming; animation-duration:.45s;}@keyframes coming { 0% { top: -10%; left:64%; opacity:.45; }100% { top: 28%; left:50%; opacity:1;}} .modal-ct.close{left:410px;min-width:0;visibility:visible;height:40px;opacity:1;position:absolute;top:0;max-width:40px;color:#fff;overflow:hidden;padding:0;border-radius:0 0 0 5px;border-width:0;border-style:initial;border-color:initial;border-image:initial}.login-ct .close:focus{outline:0;box-shadow:none}  ';

            var head = document.getElementsByTagName('head')[0];
            function addcss(css) {
                var s = document.createElement('style');
                s.setAttribute('type', 'text/css');
                s.appendChild(document.createTextNode(css));
                head.appendChild(s);
            }
            addcss(maintwo);

        }, //mcsstwo 

        mgetready: function () {
            console.info('%c getready \u221a', 'background:blue;color:white;');
            //handler inside meca
            var mhandler = document.querySelector('.zone-modals.ct-modal');
            mhandler.innerHTML = ' <div class="mwrapper"> <div class="modal-ct login-ct"> <form class="ralogin" maction="/api/Login" data-inherit-redirect-url="true" data-message-not-found="Incorrect username or password" data-return-url="" data-validate="True" method="post" data-di-form-track=""> <p class="title">Sign In</p><div class="rainput-username active valid"> <label>Username</label> <input type="text" placeholder="Please enter your username" autofocus/> <i class="fa fa-user"></i> </div><div class="rainput-password"> <label>Password</label> <input type="password" placeholder="Password"/> <i id="mykey" class="fa fa-key"></i> </div><button type="button" class="modal-ct close" aria-label="Close" data-role="modal-close">× </button>   <div class="rahelp"> <p>Forgotten <a href="#">username</a> or <a href="#">password</a>?</p><a class="raclickhere" href="#">Click here</a> for help or contact us on <a href="#">0800 083 1988</a> </div><div class="rabot ismecatime"> <div class="rajoinbutton"> <button class="btn-secondary btn-registration logino" type="button" data-role=" modal-close">Join Now </button> </div></div><button type="submit" data-submit="ralogin"> <i class="spinner"></i> <span class="state">Sign In</span> </button> </form> </div></div>  ';


            var working = false;
            //form,uservalue,passvalue
            var raform = document.querySelector('form.ralogin');
            var raisuser = document.querySelector('.rainput-username input').value;
            var raispass = document.querySelector('.rainput-password input').value;
            var state = document.querySelector('button > .state');
            var ramessage = '';

            //onsubmit
            document.querySelector('.ralogin')
                .addEventListener('submit', function (e) {
                    e.preventDefault();

                    if (working) {
                        return;
                    }

                    working = true;

                    raform.classList.add('loading');
                    state.innerHTML = 'Authenticating VIPs';

                    //outer setTimeout
                    setTimeout(function () {
                        raform.classList.add('ok');

                        var rauser = document.querySelector('.rainput-username input').value;
                        state.innerHTML = '<div class="propa"><img src="https://sb.monetate.net/img/1/748/1304922.png"><p>' + ramessage(rauser) + '</p></div>';

                        function ramessage(rauser) {
                            var ramess = ramess || undefined;
                            if (rauser == '') {

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

                        }//ramessage fn

                        setTimeout(function () {
                            state.innerHTML = "log in";
                            //remove all but ralogin
                            raform.className = "ralogin";
                            working = false;
                        }, 3500);//innersetTimeout

                    }, 1500);//outer setTimeout

                });//onsubmit

        },//getready

        signin: function () {
            console.info('%c signin \u221a', 'background:blue;color:white;');
            //enable it back on
            msignin.removeAttribute('disabled');
            //and add a click event
            msignin.addEventListener('click', function (e) {
                console.log('clicked on signin button');
                e.preventDefault();
                //and once again while popup on
                msignin.setAttribute('disabled', true);
                //bring back popup
                var isnone = document.querySelector('.mwrapper');
                isnone.classList.add('noma');
                var mmodal = document.querySelector('.modal-ct.login-ct');
                mmodal.classList.add('modal-show');


                //when popup is close enable it back on
                msignin.removeAttribute('disabled');


                document.querySelector('button.modal-ct.close').
                    addEventListener('click', function (e) {
                        if (document.querySelector('.mwrapper.noma')) {
                            var remclas = document.querySelector('.mwrapper.noma');
                            remclas.classList.remove('noma');
                        }//ifnotundefined

                    }, false);

            }, false);


        }//signin




    }; //SL


    SL.init();


})(window);