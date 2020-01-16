$(document).ready(function(){
  $("form").submit(function(event){
    var name = $("input#name").val();
    var sex = $("input:radio[name=sex]:checked").val();
    var age = $("input#age").val();
    var dob = $("input#dob").val();
    var color = $("input#favcolor").val();
    console.log(favcolor);
    alert("The following information has been submitted");

    event.preventDefault();
  });
});