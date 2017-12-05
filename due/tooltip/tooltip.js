(function (global) {
    document.addEventListener('DOMContentLoaded', function(e) {
        e.preventDefault();
        //session init
        var alreadyClicked = false;
        //session action
        if (!sessionStorage.alreadyClicked) {
           //open tooltip
           var toolti = document.createElement('label');
           





            //set session true
            sessionStorage.alreadyClicked = true;
        
        
        
        
        
        
        
        
        
        }
        else {
            return true;
        }//else donothing






    },false);//onpageload    

})(window);


/*

/*
adjacent sibling selector (is the tilda "~")
it selects any element that comes after the selected item.
ex:
      label.tooltip input:checked ~ span {displa:block;}
 
So the span that appears after the checked input item is what is selected
*/

/* html */
<label class="tooltip">football
<input type="checkbox">
        <span>some content for mlate alda ;ef sdfa;ljfa;fdkjf dsal;jmore content</span>
</label>

    /* css */
    label.tooltip {
        postion: relative;
   border-bottom:2px dotted #980156;
   color:#980156;
   cursor:help;
}

label.tooltip span {
        width: 120px;
   font-size:.9em;
   line-height:1.2em;
   background-color:#630c3c;
   color:#fff;
   text-align:center;
   padding:8px 20px;
   border-radius:20px;
   display:none;
   position:absolute;
   bottom:90%;
   left: -30px;
}

label.tooltip input:checked ~ span {
        display: block;
}

label.tooltip input {display: none;}  //input box is there by is hidden to users
 
 
*/