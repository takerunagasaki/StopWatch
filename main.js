    /* global $ */
//$(document).ready(function(){
    let time = 0;
    let h = 0;
    let s = 0;
    let m = 0;
    let ms = 0;
    var IntervalId;
    
    //$(document).on("click",".StartButton", function() {
    function StartB () {
        //$(".SWT").text(time); //テキストを変更する処理です。
        document.getElementById("StaB").setAttribute("disabled", true);
        document.getElementById("StoB").removeAttribute("disabled");
        
        let ht = 0;
        let mt = 0;
        let st = 0;
        let mst = 0;
        let i = 0;
        //while(i >=10){
        
        const TimeCount = () =>{

            time++;
            ht = Math.floor(time/360000);
            mt = Math.floor((time - ht * 360000)/6000);
            st = Math.floor((time - ht * 360000 - mt * 6000)/100);
            h = ht;
            m = mt;
            s = st;
            ms = (time - ht * 360000 - mt * 6000 - s * 100);
        
            $(".SWT").text(h + ":" + m + ":" + s + ":" + ms); //テキストを変更する処理です。
            //$(".SWT").text(time); //テキストを変更する処理です。
            //$(".SWT").text(i); //テキストを変更する処理です。

        };
        IntervalId = setInterval(function(){
            TimeCount();
            
            /*var StopB = function(){
                $(".test").text("ストップ");
                clearInterval(IntervalId);
            }*/
            
            },10);
        
    };

    function StopB() {
        if (time > 0) {
            document.getElementById("StoB").setAttribute("disabled", true);
            document.getElementById("StaB").removeAttribute("disabled");
        }

        clearInterval(IntervalId);
        
    };

    function ResetB(){
        
        document.getElementById("StaB").removeAttribute("disabled");
        document.getElementById("StoB").removeAttribute("disabled");
        
        clearInterval(IntervalId);

        h = 0;
        m = 0;
        s = 0;
        ms = 0;
        time = 0;
        $(".SWT").text(h + ":" + m + ":" + s + ":" + ms); //テキストを変更する処理です。
    };
//});