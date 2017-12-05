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
          
        }, //init 

        mcssone: function () {
            console.info('%c cssone \u221a', 'background:blue;color:white;');
            var mainone = ' div#tooltip:after{z-index:100; content:"";position:absolute;width:24px;height:0;border-width:24px;border-style:solid;border-color:transparent #eaeaea transparent transparent;top:-59px;left:272px;transform:rotate(90deg);background:transparent}@keyframes totip{0%{opacity:0;top:-200px}100%{opacity:1;top:80px}}.face:hover{animation:shake .82s cubic-bezier(.36,.07,.19,.97) both;transform:translate3d(0,0,0);backface-visibility:hidden;perspective:1000px}@keyframes shake{10%,90%{transform:translate3d(-1px,0,0)}20%,80%{transform:translate3d(2px,0,0)}30%,50%,70%{transform:translate3d(-4px,0,0)}40%,60%{transform:translate3d(4px,0,0)}}.lowrapper{z-index:100; animation-name:totip;animation-duration:1s;position:absolute;transition:top .5s,opacity .5s}#tooltip{animation:shake .82s cubic-bezier(.36,.07,.19,.97) both;transform:translate3d(0,0,0);backface-visibility:hidden;perspective:1000px}label.tooltip{position:relative;border-bottom:2px dotted #980156;color:#5390c1;cursor:pointer}label.tooltip div{display:block !important; width:325px;font-size:.9em;line-height:1.2em;background-color:#eaeaea;color:#fff;text-align:center;padding:20px;display:none;position:absolute;top:70px;right:160px;;height:370px}label.tooltip input:checked~div{display:none}label.tooltip input{display:none}#tooltip .tootop{z-index:100; left:0;top:0;width:325px;height:60px;display:block;border-left:1px solid #e7e7e7;border-top-left-radius:4px;border-top-right-radius:4px;border-top:1px solid #e7e7e7;border-right:1px solid #e7e7e7;background-color:#fff}.tootop h1{color:#d45c95;font-weight:normal}.tootop h1 i{padding:0 .5em;font-size:1.25em}#tooltip .toobottom{z-index:100; display:block;left:0;top:102px;border-left:1px solid #e7e7e7;border-bottom:1px solid #e7e7e7;border-right:1px solid #e7e7e7;border-bottom-left-radius:4px;border-bottom-right-radius:4px;height:270px}#tooltip .toobottom p{color:#823f8f;font-size:1.15em}.pone{margin:1.75em 0 1.5em;border:1px solid #9a8a8a;padding:1em 0;border-radius:4px;text-align:center}.pone a i{margin-right:1.25em}.pone a{text-decoration:none;color:#823f8f;letter-spacing:.5px;width:95%;margin:2em auto}.toobottom p.pone:nth-child(3){margin-top:0}.toobottom button{background-color:#d45b95;padding:15px 5px;color:#fafafa;width:100%;border:1px solid #b7477d;font-size:1.5em;text-align:center;cursor:pointer}.toobottom button:focus,.toobottom button:active{outline:0} .tooltip {opacity:1 !important;}   ';

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
            var maintwo = ' .site-body {z-index:-1;} .cycle2-engine {z-index:0;} 
            .cycle-slide.cycle-sentinel {z-index:0;} .cycle-slide {z-index:0;} ';

            var head = document.getElementsByTagName('head')[0];
            function addcss(css) {
                var s = document.createElement('style');
                s.setAttribute('type', 'text/css');
                s.appendChild(document.createTextNode(css));
                head.appendChild(s);
            }
            addcss(maintwo);

        }, //mcsstwo 

       tooltip: function() {
            console.info('%c tooltip \u221a', 'background:blue;color:white;');
            var tooltip = document.createElement('div');
            tooltip.className = "lowrapper";
            tooltip.innerHTML = '<label class="tooltip"> <input type="checkbox"> <div id="tooltip"> <div class="tootop"> <h1> <i class="fa fa-hand-peace-o" aria-hidden="true"></i> We Missed You <i class="fa fa-hand-peace-o" aria-hidden="true"></i> </i> </h1> </div><div class="toobottom"> <p class="pnull">If you cant remember your login credentials:</p><p class="pone"> <a href="tel:08000831988"> <i class="fa fa-hand-peace-o"></i> Call us on 0800 111 222 </a> </p><p class="pone"> <a id="chaton" onclick="chaton()"><i class="fa fa-hand-peace-o"></i> Click here to chat with us </a> </p><button id="vainow" type="submit" class="btn-submit"> Im ok for now </button> </div></div></label>';

            var toolhandler = document.querySelector('.header-login');
            toolhandler.appendChild(tooltip);
       }




    }; //SL


    SL.init();


})(window);