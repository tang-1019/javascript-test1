/*global $*/
$(document).ready(function(){
  let deci_sec = 0;
  let sec = 0;
  let deca_sec = 0;
  let min = 0;
  
  let time = 0;
  

  //スタート
  $("#start").click(function() {
    time = setInterval(countup,100);
    
    $(this).prop("disabled", true);
    $("#stop,#reset").prop("disabled", false);
  });
  
  //ストップ
  $("#stop").click(function() {
    time =clearInterval(time);
    
    $(this).prop("disabled", true);
    $("#start,#reset").prop("disabled", false);
  });
  
  //リセット
  $("#reset").click(function() {
    deci_sec = 0;
    sec = 0;
    deca_sec = 0;
    
    time =clearInterval(time);
    $("#timer").html("0：0：0：0");
    
    $(this).prop("disabled", true);
    $("#start").prop("disabled", false);
  });
  
  
  //カウントアップ処理
  function countup() {
    deci_sec += 1;
    
    if(deci_sec > 9) {
      deci_sec = 0;
      sec += 1;
    }
    
    if(sec > 9) {
      sec = 0;
      deca_sec += 1;
    }
    
    if(deca_sec > 5) {
      deca_sec = 0;
      min += 1;
    }
    
    $("#timer").html(min + "：" + deca_sec + "：" + sec + "：" + deci_sec);
    
  }
});
