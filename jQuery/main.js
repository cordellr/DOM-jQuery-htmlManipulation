$(document).ready(function () {
    //creates Nice Message button
    let button1 = $("<button>Nice Message</button>");
    $("body").append(button1);


    //button send alert with nice message
    $(button1).click(function () {
        alert("Have a great day!");
    });

    //returns an alert with the entry of the input form
    $('#entryButton').click(function () {
        alertMessage = $('#textEntered').val();
        alert('You entered "' + alertMessage + '"');
    });

    //changes background color of div with hover
    $('#hoverBox').mouseover(function () {
        $(this).css("background-color", "lightblue");
    });

    //returns background color of div when mouse leaves
    $('#hoverBox').mouseout(function () {
        $(this).css("background-color", "blue");
    });

    //function to select a random color
    function selectRandomColor() {
        let randColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
        return randColor;
    }

    //assigns random color to paragraph when clicked
    $('#paragraph1').click(function () {
        let randomColor = selectRandomColor();
        $(this).css("color", randomColor);
    });

    //name to site when Add My Name is clicked, only allows it to run once
    $('#addNameButton').one("click", function () {
        $('#nameDiv').append('<span>Cordell</span>');
    });

    //list of friends (some real, some imaginary...)
    let friends = ["Greg", "Ash", "Tanner", "Travis", "Jon", "Mark", "Jeff", "Steve", "Ryan", "Jacob"];

    //function for adding friend's name to list, only runs once
    $('#addFriendButton').one("click",function() {
        for (let i = 0; i < friends.length; i++) {
            $('#friendList').append(`<li>${friends[i]}</li>`)
        }
    });

});