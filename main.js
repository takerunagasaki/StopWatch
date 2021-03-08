    /* global $ */
//$(document).ready(function(){
    let time = 0;
    let h = 00;
    let s = 00;
    let m = 00;
    let ms = 00;
    var IntervalId;
    
    //$(document).on("click",".StartButton", function() {
    function StartB () {
        $(".test").text("スタート");
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
            
            },1);
        
    };

    function StopB() {
        if (time > 0) {
            document.getElementById("StoB").setAttribute("disabled", true);
            document.getElementById("StaB").removeAttribute("disabled");
        }
        
        $(".test").text("ストップ");
        
        clearInterval(IntervalId);
        
    };

    function ResetB(){
        
        document.getElementById("StaB").removeAttribute("disabled");
        document.getElementById("StoB").removeAttribute("disabled");
        
        clearInterval(IntervalId);
        
        $(".test").text("リセット");
        h = 00;
        m = 00;
        s = 00;
        ms = 00;
        time=0;
        $(".SWT").text(h + ":" + m + ":" + s + ":" + ms); //テキストを変更する処理です。
    };
//});