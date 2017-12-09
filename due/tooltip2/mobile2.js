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

(function(global) {

    var SL = {};
    SL = {
        init: function() {
            this.mcssone();
            this.mcsstwo();
            this.mcssthree();
            this.tooltip();
            this.session();


        }, //init 

        mcssone: function() {
            console.info('%c cssone \u221a', 'background:blue;color:white;');
            var mainone = ' div#tooltip:after{content:"";position:absolute;width:26px;height:0;border-width:26px;border-style:solid;border-color:transparent #fff transparent transparent;top:-52px;left:295px;transform:rotate(90deg);background:transparent}@keyframes totip{0%{opacity:0;top:-200px}100%{opacity:1;top:80px}}.face:hover{animation:shake .82s cubic-bezier(.36,.07,.19,.97) both;transform:translate3d(0,0,0);backface-visibility:hidden;perspective:1000px}@keyframes shake{10%,90%{transform:translate3d(-1px,0,0)}20%,80%{transform:translate3d(2px,0,0)}30%,50%,70%{transform:translate3d(-4px,0,0)}40%,60%{transform:translate3d(4px,0,0)}}.lowrapper{animation-name:totip;animation-duration:1s;position:absolute;transition:top .5s,opacity .5s;right:180px;top:115px}#tooltip{animation:shake .82s cubic-bezier(.36,.07,.19,.97) both;transform:translate3d(0,0,0);backface-visibility:hidden;perspective:1000px;width:366px!important;background-color:#fff;padding:20px;height:412px}label.tooltip{position:relative;color:#5390c1;cursor:pointer}label.tooltip input:checked~div{display:none}label.tooltip input{display:none}#tooltip .tootop{height:108px!important;display:block;background-color:#fff!important}.tootop h1{font-size:3em;color:#823f90!important;font-weight:bold!important;text-align:center;letter-spacing:-.5px;border-bottom:1px solid #eaeaea;width:90%;margin:0 auto;padding:.5em 0;line-height:35px;font-family:"FranklinGothicHeavy",Arial,sans-serif}#tooltip .toobottom{display:block!important;left:0!important;top:102px!important;height:280px!important;margin-top:-15px!important;text-align:center!important;padding:0 20px;font-family:"FranklinGothicRegular",Arial,sans-serif}#tooltip .toobottom p{color:#333!important;font-size:16px!important;font-family:"FranklinGothicRegular",Arial,sans-serif;color:#333}.pone{margin:1.25em 0 1em;border:1px solid #9a8a8a!important;padding:3px 0;border-radius:4px;text-align:center;background-color:#823f90!important}#tooltip .toobottom p.pnull{color:#333;font-size:16px!important;line-height:22px!important;letter-spacing:.15px}span.logcolor{font-weight:bolder;line-height:3em;text-align:center;letter-spacing:.25px!important}.pone a{text-decoration:none!important;color:#fff!important;letter-spacing:.5px;width:95%;margin:2em auto;font-size:17px!important;font-weight:100;line-height:38px;vertical-align:bottom}}.toobottom p.pone:nth-child(3){margin-top:0}.toobottom button{background-color:#fbfbfb!important;padding:14px 5px;color:#333;width:100%;border:1px solid #eaeaea!important;font-size:18px;line-height:18px;text-align:center;cursor:pointer;margin-top:.25em;width:70%}.toobottom button:focus,.toobottom button:active{outline:0}img.chatup{max-width:36px!important;margin-right:10px;height:auto;display:inline-block}.tooltip{opacity:1!important}.tooltip,#tooltip,.tootop,.toobottom{z-index:100!important}#header-id,.js-header-navigation.header-navigation,.site-body{z-index:100}#tooltip{border-top-left-radius:4px;border-top-right-radius:4px;border-bottom-left-radius:4px;border-bottom-right-radius:4px}span.logcolor a{color:#333!important;text-decoration:none!important}#chatio{position:absolute;bottom:0;right:0}.lowrapper{right:29%;80px}#header-id{position:relative}.testa{width:200px;margin:0 auto;display:block;opacity:0;position:relative}chawin{width:600px!important;height:700px!important;bottom:1%!important;right:1%!important}.lowrapper{display:none}@media screen and (max-width:375px) and (min-width:370px) and (-webkit-min-device-pixel-ratio:2){.lowrapper{right:3%!important;top:85px!important;position:fixed}#tooltip{width:350px!important;height:440px!important}div#tooltip:after{left:263px!important}.collapse.in{display:none}.pone a{vertical-align:text-top}.pone{padding:3px 12px}span.logcolor{line-height:2em!important}img.chatup{float:left;display:inline-block;margin-top:7px;width:30px!important;height:30px!important}#tooltip .toobottom{height:300px!important}.uno{background-color:#9f9f9f!important}#tooltip .toobottom p{text-align:left!important}#tooltip .toobottom p.pnull{text-align:center!important;font-size:18px!important}}@media screen and (max-width:414px) and (min-width:400px) and (-webkit-min-device-pixel-ratio:2){.lowrapper{right:6%!important;top:85px!important;position:fixed}#tooltip{width:350px!important;height:440px}div#tooltip:after{left:278px!important}.collapse.in{display:none}.pone a{vertical-align:text-top}.pone{padding:3px 12px}span.logcolor{line-height:2em!important}img.chatup{float:left;display:inline-block;margin-top:7px;width:30px!important;height:30px!important}#tooltip .toobottom{height:300px!important}.uno{background-color:#9f9f9f!important}#tooltip .toobottom p{text-align:left!important}#tooltip .toobottom p.pnull{text-align:center!important;font-size:18px!important}}@media screen and (max-width:360px) and (min-width:350px){.lowrapper{right:1.5%!important;top:85px!important;position:fixed}#tooltip{width:350px!important}div#tooltip:after{left:257px!important}.collapse.in{display:none}.pone a{vertical-align:text-top}.uno{background-color:#9f9f9f!important}#tooltip .toobottom p{text-align:left!important}#tooltip .toobottom p.pnull{text-align:center!important}}@media screen and (max-width:360px) and (min-width:320px){.lowrapper{right:2%!important;top:85px!important;position:fixed}#tooltip{width:305px!important;height:395px!important}div#tooltip:after{left:215px!important}.collapse.in{display:none}.tootop h1{font-size:2.5em!important}.pone a{font-size:14px!important;line-height:36px!important;vertical-align:text-top}img.chatup{width:25px!important;height:26px!important;margin-right:7px!important}span.logcolor{line-height:2em!important}img.chatup{float:left;display:inline-block;margin-top:7px}.toobottom button{font-size:14px!important;line-height:8px!important}#tooltip .toobottom p{font-size:14px!important;padding:0 12px}#tooltip .tootop{height:99px!important}#tooltip .toobottom{height:262px!important}.uno{background-color:#9f9f9f!important}#tooltip .toobottom p{text-align:left!important}#tooltip .toobottom p.pnull{text-align:center!important}}@media screen and (max-width:736px) and (min-width:720px) and (-webkit-min-device-pixel-ratio:2) and (orientation:landscape){.lowrapper{right:22%!important;top:120px!important}#tooltip{width:350px!important}div#tooltip:after{left:278px!important}.collapse.in{display:none}.pone a{vertical-align:text-top}.uno{background-color:#9f9f9f!important}#tooltip .toobottom p{text-align:left!important;padding-left:7px}#tooltip .toobottom p.pnull{text-align:center!important;font-size:18px!important}span.logcolor{line-height:2em!important}p.pone.uno a img.chatup{width:26px!important;height:26px!important}.tooltip .toobottom{height:300px!important}#tooltip .toobottom{height:300px!important}#tooltip{height:440px}}@media screen and (max-width:667px) and (min-width:660px) and (-webkit-min-device-pixel-ratio:2) and (orientation:landscape){.lowrapper{right:9%!important;top:120px!important}#tooltip{width:350px!important;height:440px}div#tooltip:after{left:278px!important}.collapse.in{display:none}.pone a{vertical-align:text-top;line-height:38px!important}.uno{background-color:#9f9f9f!important}#tooltip .toobottom p{text-align:left!important}#tooltip .toobottom p.pnull{text-align:center!important;font-size:18px!important}#tooltip .toobottom{height:305px!important}p.pone img.chatup{width:30px!important;height:30px!important}p.pone{padding-left:10px}span.logcolor{line-height:2em!important}}@media screen and (max-width:568px) and (min-width:560px) and (-webkit-min-device-pixel-ratio:2) and (orientation:landscape){.lowrapper{right:10%!important;top:120px!important}#tooltip{width:350px!important;height:410px!important}div#tooltip:after{left:278px!important}.collapse.in{display:none}.tootop h1{font-size:2.5em}.pone a{vertical-align:text-top;line-height:29px!important;font-sie:16px!important}.pone.uno{padding-top:2px!important}.uno{background-color:#9f9f9f!important}#tooltip .toobottom p{text-align:left!important;font-size:14px!important}#tooltip .toobottom p.pnull{text-align:center!important;font-size:16px!important}p.pone{padding:3px 12px}img.chatup{width:30px!important;height:30px!important}span.logcolor{line-height:2em!important}#tooltip .toobottom{height:267px!important}.toobottom button{line-height:22px!important;padding:8px 5px!important;font-size:16px!important}}   ';


            var head = document.getElementsByTagName('head')[0];

            function addcss(css) {
                var s = document.createElement('style');
                s.setAttribute('type', 'text/css');
                s.appendChild(document.createTextNode(css));
                head.appendChild(s);
            }
            addcss(mainone);

        }, //mcssone 

        mcsstwo: function() {
            console.info('%c csstwo \u221a', 'background:blue;color:white;');
            var maintwo = '.lowrapper {display:none;}  @media screen and (max-width:480px) and (min-width:450px) and (-webkit-min-device-pixel-ratio:2){.lowrapper{right:6%!important;top:90px!important}.pone{text-align:left;padding-left:20px}span.logcolor{line-height:2.2em!important}.pone a{vertical-align:inherit!important;font-size:16px!important}.tootop h1{font-size:2.5em!important;width:85%!important}p.pone.uno a img.chatup{margin-right:15px!important}.toobottom button{font-size:16px!important}}  @media screen and (max-width:640px) and (min-width:600px) and (-webkit-min-device-pixel-ratio:2){.lowrapper{right:9%!important;top:100px!important}.pone{text-align:left;padding-left:20px}span.logcolor{line-height:2.2em!important}.pone a{vertical-align:inherit!important;font-size:16px!important}.tootop h1{font-size:2.5em!important;width:85%!important}p.pone.uno a img.chatup{margin-right:15px!important}.toobottom button{font-size:16px!important}} ';


            var head = document.getElementsByTagName('head')[0];

            function addcss(css) {
                var s = document.createElement('style');
                s.setAttribute('type', 'text/css');
                s.appendChild(document.createTextNode(css));
                head.appendChild(s);
            }
            addcss(maintwo);

        }, //mcsstwo 

        mcssthree: function() {
            console.info('%c cssone \u221a', 'background:blue;color:white;');
            var maintwo = 'html,body {min-height:100%;} body {position:relative;} #olay {position:absolute; left:0; top:0; width:100%; height:100%; background-color:rgba(0,0,0,.6); z-index:10;}  ';

            var head = document.getElementsByTagName('head')[0];

            function addcss(css) {
                var s = document.createElement('style');
                s.setAttribute('type', 'text/css');
                s.appendChild(document.createTextNode(css));
                head.appendChild(s);
            }
            addcss(maintwo);



        }, //mcssthree


        tooltip: function() {
            console.info('%c tooltip \u221a', 'background:blue;color:white;');
            var tooltip = document.createElement('div');
            tooltip.className = "lowrapper";
            tooltip.innerHTML = '  <label class="tooltip"> <input type="checkbox"> <div id="tooltip"> <div class="tootop"> <h1> We\'ve Missed You </h1> </div><div class="toobottom"> <p class="pnull">If you are unable to remember<br/> your login credentials<br/></p> <p class="pone uno"><a href="tel:08000831988"><img class="chatup" src="https://sb.monetate.net/img/1/748/1317576.png" width="25" height="26">Call on <span class="logcolor">0800 111 222</span></a></p><p class="pone"><a href="javascript://Chat" id="chawin" onclick="liveagent.startChat(\'5730M000000IG3i\')"><img class="chatup" src="https://sb.monetate.net/img/1/748/1312856.png" width="25" height="26"> Click here to chat with us </a> </p><button id="vainow"> I\'m ok for now </button> </div></div></label>   ';


            var toolhandler = document.querySelector('.header-login');
            toolhandler.appendChild(tooltip);

            //new handler
            var he = document.getElementById('header-id');
            he.appendChild(tooltip);


            //popupclick
            document.getElementById('header-id').addEventListener('click', function(e) {
                if (window.screen.width < 750) {
                    var ovrlay = document.getElementById('olay');
                    console.log(e);
                    if (document.querySelector('.pone') !== null) {
                        var ison = document.querySelector('label.tooltip input ~div');
                        var okbut = document.querySelector('button#vainow');
                        //okbutton
                        okbut.addEventListener('click', function(e) {
                            console.log(e);
                            if (e.target.id == 'vainow') {
                                ison.style.display = "none";
                            }
                            ovrlay.style.display = "none";

                        }, false);

                        //resize
                        document.addEventListener('resize', function(e) {
                            if (window.screen.size > 750) {
                                ovrlay.style.display = "none";
                                document.querySelector('lowrapper').
                                style.display = "none";
                            }

                        }, false);

                    } //if pone!=null

                    //-dealing w/double click
                    $(document).on('click', 'button#vainow', function() {
                        $('.lowrapper').css({
                            'display': 'none'
                        });
                        ovrlay.style.display = "none";

                    });

                    //-dealing w/double click
                    $(document).on('click', 'p.pone.uno', function() {

                        var phone = $("span.logcolor").text();
                        phone = phone.replace("Call on:", "");
                        window.location.href = "tel://" + phone;

                    });


                } else {

                    e.preventDefault();
                    console.log(e);
                    if (document.querySelector('.pone') !== null) {
                        var ison = document.querySelector('label.tooltip input ~div');
                        var okbut = document.querySelector('button#vainow');
                        //okbutton
                        okbut.addEventListener('click', function(e) {
                            console.log(e);
                            if (e.target.id == 'vainow') {
                                ison.style.display = "none";
                            }

                        }, false);

                    } //if pone!=null

                    //-dealing w/double click
                    $(document).on('click', 'button#vainow', function() {
                        $('.lowrapper').css({
                            'display': 'none'
                        });
                        ovrlay.style.display = "none";

                    });

                    //-dealing w/double click
                    $(document).on('click', 'p.pone.uno', function() {

                        $('.lowrapper').css({
                            'display': 'none'
                        });

                    });


                }


            }, false);


        }, //tooltip


        session: function() {


                if (sessionStorage.isVisisted !== "visited") {
                    sessionStorage.isVisisted = 'visited';
                    setTimeout(function(e) {
                        if (document.querySelector('.lowrapper')) {
                            //olay
                            var olay = document.createElement('div');
                            olay.id = 'olay';
                            //handler
                            var bbo = document.body.children[0];
                            bbo.parentElement.insertBefore(olay, bbo);
                            olay.style.display = "block";

                            //popup
                            var ba = document.querySelector('.lowrapper');
                            ba.style.display = "block";


                            if (window.screen.width > 980) {
                                ba.style.display = "none";
                                olay.style.display = "none";
                            }

                        }


                    }, 1000);
                }


            } //session


    }; //SL


    //setTimeout(function (e) {
    SL.init();

    //}, 1500);


})(window);