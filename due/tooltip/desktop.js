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

    var SL = {};
    SL = {
        init: function () {
            this.mcssone();
            this.mcsstwo();
            this.tooltip();
            this.session();

        }, //init 

        mcssone: function () {
            console.info('%c cssone \u221a', 'background:blue;color:white;');
            var mainone = ' div#tooltip:after{content:"";position:absolute;width:26px;height:0;border-width:26px;border-style:solid;border-color:transparent #ffffff transparent transparent;top:-52px;left:295px;transform:rotate(90deg);background:transparent}@keyframes totip{0%{opacity:0;top:-200px}100%{opacity:1;top:80px}}.face:hover{animation:shake .82s cubic-bezier(.36,.07,.19,.97) both;transform:translate3d(0,0,0);backface-visibility:hidden;perspective:1000px}@keyframes shake{10%,90%{transform:translate3d(-1px,0,0)}20%,80%{transform:translate3d(2px,0,0)}30%,50%,70%{transform:translate3d(-4px,0,0)}40%,60%{transform:translate3d(4px,0,0)}}.lowrapper{animation-name:totip;animation-duration:1s;position:absolute;transition:top .5s,opacity .5s;right:180px;top:115px}#tooltip{animation:shake .82s cubic-bezier(.36,.07,.19,.97) both;transform:translate3d(0,0,0);backface-visibility:hidden;perspective:1000px;width:366px!important;background-color:#fff;padding:20px;height:412px}label.tooltip{position:relative;color:#5390c1;cursor:pointer}label.tooltip input:checked~div{display:none}label.tooltip input{display:none}#tooltip .tootop{height:108px!important;display:block; background-color:#fff!important}.tootop h1{font-size:3em;color:#823f90!important;font-weight:bold!important;text-align:center;letter-spacing:-.5px;border-bottom:1px solid #eaeaea;width:90%;margin:0 auto;padding:.5em 0;line-height:35px;font-family:"FranklinGothicHeavy",Arial,sans-serif;   }.tootop h1 i{padding:.75em 0 .5em; font-size:1.25em}#tooltip .toobottom{display:block!important;left:0!important;top:102px!important; height:280px!important;margin-top:-15px!important;text-align:center!important;padding:0 20px;font-family:"FranklinGothicRegular",Arial,sans-serif}#tooltip .toobottom p{color:#333!important;font-size:17px!important;font-family:"FranklinGothicRegular",Arial,sans-serif; color:#333;}.pone{margin:1.25em 0 1em;border:1px solid #9a8a8a!important;padding:.22em 0;border-radius:4px;text-align:center;background-color:#823f90!important}p.pnull{color:#333;font-size:16px!important;line-height:22px!important;letter-spacing:.15px}span.logcolor{font-weight:bolder;line-height:3em;text-align:center;letter-spacing:.25px!important}.pone a{text-decoration:none!important;color:#fff!important;letter-spacing:.5px;width:95%;margin:2em auto;font-size:17px!important;font-weight:100;line-height:38px;vertical-align:bottom}}.toobottom p.pone:nth-child(3){margin-top:0}.toobottom button{background-color:#fbfbfb!important;padding:10px 5px;color:#333;width:100%;border:1px solid #eaeaea!important;font-size:18px;line-height:25px;text-align:center;cursor:pointer}.toobottom button:focus,.toobottom button:active{outline:0}img.chatup{max-width:36px!important;margin-right:10px;height:auto; display:inline-block;}   ';

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
            var maintwo = ' .tooltip {opacity:1 !important;}  .tooltip,#tooltip,.tootop, .toobottom {z-index:100 !important;} #header-id, .js-header-navigation.header-navigation,.site-body {z-index:150;} #tooltip { border-top-left-radius:4px;border-top-right-radius:4px;border-bottom-left-radius:4px;border-bottom-right-radius:4px; }  span.logcolor a {color:#333 !important; text-decoration:none !important;} .lowrapper {display:none;} #ovlay { width:100%; height:100%; z-index:9999; opacity:.6;} .lowrapper {display:none;}  ';


            var head = document.getElementsByTagName('head')[0];

            function addcss(css) {
                var s = document.createElement('style');
                s.setAttribute('type', 'text/css');
                s.appendChild(document.createTextNode(css));
                head.appendChild(s);
            }
            addcss(maintwo);

        }, //mcsstwo 

        tooltip: function () {
            console.info('%c tooltip \u221a', 'background:blue;color:white;');
            var tooltip = document.createElement('div');
            tooltip.className = "lowrapper";
            tooltip.innerHTML = '  <label class="tooltip"> <input type="checkbox"> <div id="tooltip"> <div class="tootop"> <h1> We\'ve Missed You </h1> </div><div class="toobottom"> <p class="pnull">If you are unable to remember<br/> your login credentials<br/> Call on <span class="logcolor"><a href="tel:08000831988">0800 111 222</a></span> </p><p class="pone"><img class="chatup" src="https://sb.monetate.net/img/1/748/1312856.png" width="36" height="36"><a href="javascript://Chat" id="chawin" onclick="liveagent.startChat(\'5730M000000IG3i\')"> Click here to chat with us </a> </p><button id="vainow" type="submit" class="btn-submit"> I\'m ok for now </button> </div></div></label>   ';

            var toolhandler = document.querySelector('.header-login');
            toolhandler.appendChild(tooltip);


            if (document.querySelector('.lowrapper')) {

                document.getElementById('header-id').addEventListener('click', function (e) {

                    e.preventDefault();

                    var ba = document.querySelector('.lowrapper');
                    ba.style.display = "block";
                    //okbutton
                    var okbut = document.querySelector('button#vainow');
                    okbut.addEventListener('click', function (e) {
                        ba.style.display = "none";
                    }, false);


                    //-dealing w/double click
                    $(document).on('click', 'p.pnull span.logcolor', function () {

                        var phone = $("span.logcolor").text();

                        phone = phone.replace("Call on:", "");
                        window.location.href = "tel://" + phone;

                    });


                    //-dealing w/double click
                    $(document).on('click', 'button#vainow', function () {

                        $('.lowrapper').css({
                            'display': 'none'
                        });

                    });


                }, false);

            } //iflowrapper  


        },

        session: function () {
            console.info('%c session \u221a', 'background:blue;color:white;');

            if (sessionStorage.isVisisted !== "visited") {
                sessionStorage.isVisisted = 'visited';
                setTimeout(function (e) {
                    if (document.querySelector('.lowrapper')) {
                        var ba = document.querySelector('.lowrapper');


                        ba.style.display = "block";

                    }


                }, 1000);
            }


        }


    }; //SL


    SL.init();


})(window);