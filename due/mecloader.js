(function (global) {
    var SL = {};
    SL = {
        init: function () {
            this.mcssone();
            this.mcsstwo();
            this.getready();
            

        }, //init 

        mcssone: function () {
            console.info('%c cssone \u221a', 'background:blue;color:white;');
            var mainone = '  ';

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
            var maintwo = '  ';

            var head = document.getElementsByTagName('head')[0];
            function addcss(css) {
                var s = document.createElement('style');
                s.setAttribute('type', 'text/css');
                s.appendChild(document.createTextNode(css));
                head.appendChild(s);
            }
            addcss(maintwo);

        }, //mcsstwo 

        getready: function() {
            console.info('%c getready \u221a', 'background:blue;color:white;');







            

        }//getready




    }; //SL


    SL.init();


})(window);