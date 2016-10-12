$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var words = $("#words").val();
    var paragraphs = $("#paragraphs").val();
    $.get('http://dinoipsum.herokuapp.com/api/?format=html&words=' + words + '&paragraphs=' + paragraphs).then(function(response) {
      $("#output").append(response);
    });
  });
});
