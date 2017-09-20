function toggleInfo() {

    var toggleButton = document.getElementById("toggleButton");
    var adminPane = document.getElementById("adminPane");
    var userPane = document.getElementById("userPane");
    var panelTitle = document.getElementById("panelTitle");


    if(toggleButton.innerHTML === ("admin")){
        adminPane.style.display = "block";
        userPane.style.display = "none";
        toggleButton.innerHTML = "user";
        panelTitle.innerHTML = "Admin Account Preview";
    }
    else{
        adminPane.style.display = "none";
        userPane.style.display = "block";
        toggleButton.innerHTML = "admin";
        panelTitle.innerHTML = "User Account Preview";

    }

}
