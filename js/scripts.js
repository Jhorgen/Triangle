$(document).ready(function(){
  $("#triangle").submit(function(event) {
    event.preventDefault();
    var A = parseInt($("#A").val());
    var B =  parseInt($("#B").val());
    var C = parseInt($("#C").val());
    console.log("hi");

    function result() {
        if  (A === B && A === C) {
        return ("Equilateral triangle")
      } else if (A === B || A === C || B === C)  {
        return ("Isoseles triangle")
      } else if (A != B && A != C && B != C) {
        return ("Scalene triangle")
      } else if (A + B < C || B + C < A || A + C < B){
        return ("Not a equilateral, isosceles, or scalene triangle")
      } else {
        return ("null");
      }
    }

    $("#output").text(result);
    console.log("here");
  })
});
