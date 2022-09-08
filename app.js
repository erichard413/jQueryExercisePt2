//Part Two - Movies App!
// Build an application that uses jQuery to do the following:

// Contains a form with two inputs for a title and rating along with a button to submit the form.
// When the form is submitted, capture the values for each of the inputs and append them to the DOM along with a button to remove each title and rating from the DOM.
// When the button to remove is clicked, remove each title and rating from the DOM.
$('button').on("click", function(){
    let movie = $('#movie').val();
    let rating = $('#rating').val();
    let button = '<button class="remove">X</button>';
    let text = $("<p></p>").text(`${movie} has a rating of ${rating}`);
    text.prepend(button);
    $('.movies').append(text);
});

$('.movies').on("click", ".remove", function(e){
        $(this).parent('p').remove();
    }
)
