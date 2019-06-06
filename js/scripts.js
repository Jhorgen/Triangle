$(document).ready(function(){
  $("#triangle").submit(function(event) {
    event.preventDefault();
    var A = parseInt($("#A").val());
    var B =  parseInt($("#B").val());
    var C = parseInt($("#C").val());
    console.log("hi");

    function result() {
        if  (A + B <= C || B + C <= A || A + C <= B) {
        return ("Not a Triangle")
      } else if (A === B && A === C)  {
        return ("Equilateral Triangle")
      } else if  (A === B || A === C || B === C) {
        return ("Isosceles Triangle")
      } else if(A != B && A != C && B != C) {
        return ("Scalene Triangle")
      } else {
        return ("null");
      }
    }

    $("#output").text(result);
    console.log("here");
  })
});
