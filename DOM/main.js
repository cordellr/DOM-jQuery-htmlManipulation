document.addEventListener("DOMContentLoaded", function () {
    //creates Nice Message button
    let button1 = document.createElement("button");
    document.body.appendChild(button1);
    let button1Text = document.createTextNode("Nice Message");
    button1.appendChild(button1Text);

    //button send alert with nice message
    button1.addEventListener("click", function () {
        alert("Have a great day!");
    });

    //returns an alert with the entry of the input form
    entryButton.addEventListener("click", function () {
        alertMessage = document.getElementById("textEntered").value;
        alert('You entered "' + alertMessage + '"');
    });

    //changes background color of div with hover
    hoverBox.addEventListener("mouseover", function () {
        document.getElementById("hoverBox").style.backgroundColor = "lightblue";
    });

    //returns background color of div when mouse leaves
    hoverBox.addEventListener("mouseout", function () {
        document.getElementById("hoverBox").style.backgroundColor = "blue";
    });

    //function to select a random color
    function selectRandomColor() {
        let randColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
        return randColor;
    }

    //assigns random color to paragraph when clicked
    paragraph1.addEventListener("click", function () {
        let randomColor = selectRandomColor();
        document.getElementById("paragraph1").style.color = randomColor;
    });

    //adds span and name to site when addName is clicked, only allows it to run once
    function oneAddName() {
        let spanName = document.createElement("span");
        nameDiv.appendChild(spanName);
        let myName = document.createTextNode("Cordell");
        spanName.appendChild(myName);
        addNameButton.removeEventListener("click", oneAddName);
    }

    //listens for click on addName button, then runs oneAddName function
    addNameButton.addEventListener("click", oneAddName);

    //list of friends (some real, some imaginary...)
    let friends = ["Greg", "Ash", "Tanner", "Travis", "Jon", "Mark","Jeff","Steve","Ryan","Jacob"];

    //function for adding friend's name to list, only runs once
    function friendListFunction() {
        for (let i=0; i < friends.length; i++) {
            //create list item, append to list, add friend's name from array according to i array number
            let friendItem = document.createElement("li");
            friendList.appendChild(friendItem);
            let friendName = document.createTextNode(friends[i]);
            friendItem.appendChild(friendName);
        }
        addFriendButton.removeEventListener("click", friendListFunction);
    }

    //adds friend's name to list when button is clicked
    addFriendButton.addEventListener("click", friendListFunction);


});