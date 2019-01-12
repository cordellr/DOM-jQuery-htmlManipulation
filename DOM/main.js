document.addEventListener("DOMContentLoaded", function () {
    //creates button1
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
        addName.removeEventListener("click", oneAddName);
    }

    //listens for click on addName button, then runs oneAddName function
    addName.addEventListener("click", oneAddName);



});