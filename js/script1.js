$(document).ready(function() {
    var time = 2;
    var $bar1,
    $bar2,
    $bar3,
      isPause,
      tick,
      percentTime;
      var img1 ='https://images.unsplash.com/photo-1445023835378-9fa9a2089f0c?format=auto&auto=compress&dpr=1&crop=entropy&fit=crop&w=1271&h=953&q=80';
      var img2 ='https://images.unsplash.com/photo-1464082354059-27db6ce50048?format=auto&auto=compress&dpr=1&crop=entropy&fit=crop&w=1271&h=847&q=80';
      var img3 ='https://images.unsplash.com/photo-1463608666382-cbb244a7bea2?format=auto&auto=compress&dpr=1&crop=entropy&fit=crop&w=1271&h=1769&q=80';
    
    $bar1 = $('.slider-progress .progress1');
    $bar2 = $('.slider-progress .progress2');
    $bar3 = $('.slider-progress .progress3');

    let arrimg =[img1,img2,img3];
    let arr = [$bar1,$bar2,$bar3];
    let i = 0;
  
    function startProgressbar(n) {
        resetProgressbar(n);
        document.getElementById("big_img").style.backgroundImage = "url(' " + arrimg[n] +" ')";
        percentTime = 0;
        isPause = false;
        tick = setInterval(interval, 30,n);
    }
  
    function interval(n) {
      if (isPause === false) {
        percentTime += 1 / (time + 0.1);
        arr[n].css({
          width: percentTime + "%"
        });
        if (percentTime >= 100) {
          resetProgressbar(i);
            percentTime = 0;
            i++;
            if(i<3){
              startProgressbar(i);
            }
           else{
             i=0;
             startProgressbar(i);
           }
        }
      }
    }
  
    function resetProgressbar(n) {
      arr[n].css({
        width: 0 + '%'
      });
      clearTimeout(tick);
    }
    function fullProgressbar(n) {
      arr[n].css({
        width: 100 + '%'
      });
      document.getElementById("big_img").style.backgroundImage = "url(' " + arrimg[n] +" ')";
      clearTimeout(tick);
    }
  
    if (window.matchMedia("(min-width: 1070px)").matches) {
      startProgressbar(i);
      /* the viewport is at least 400 pixels wide */
    } else {
      /* the viewport is less than 400 pixels wide */
    }
    
  
    // $('.slick-next, .slick-prev').click(function() {
    //   startProgressbar();
    // });
    $(".progress_player1").hover(function(){
      fullProgressbar(0);
      resetProgressbar(1);
      resetProgressbar(2);
      }, function(){
        i=0;
        startProgressbar(i);
      // $(this).css("background-color", "pink");
    });
    $(".progress_player2").hover(function(){
      fullProgressbar(1);
      resetProgressbar(0);
      resetProgressbar(2);
      }, function(){
        i=1;
        startProgressbar(i);
    });
    $(".progress_player3").hover(function(){
      fullProgressbar(2);
      resetProgressbar(0);
      resetProgressbar(1);
      }, function(){
        i=2;
        startProgressbar(i);
    });
  
  });