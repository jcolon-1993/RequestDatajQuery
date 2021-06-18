// Creates t-shirt option
var vote = '<div id="vote"><div class="third"><a href="http://example.org?tshirt=gray"><img src="img/t-gray.png" id="gray" alt="gray" /></a></div><div class="third"><a href="http://example.org?tshirt=yellow" id="yellow"><img src="img/t-yellow.png" id="yellow" alt="yellow" /></a></div><div class="third"><a href="http://example.org?tshirt=green"><img src="img/t-green.png" id="green" alt="green" /></a></div></div>';
$('#selector').append(vote);

/* If users click on a t-shirt an
anonymous function is triggered. */
$("#selector a").on("click", function(e)
{
  e.preventDefault();
  var queryString =  "vote=" + event.target.id;
  $.get("votes.php", queryString, function(data)
  {
    $("#selector").html(data);
  });
});
