function validate(){
    var name = document.forms["edit-menu"]["item-name"].value;
    var price = document.forms["edit-menu"]["rs"].value;
    var date = document.forms["edit-menu"]["launch-date"].value;
    var category = document.forms["edit-menu"]["category"].value;
    if (name == "") {
        alert("Title is required");
        return false;
    } else if ((name.length < 2) || (name.length > 100)){
        alert("Title should have 2 to 100 characters");
        return false;
    } else if (price == ""){
        alert("Box Office is required");
        return false;
    } else if (isNaN(price)) {
        alert("Box Office has to be a number");
        return false;
    } else if (date == "") {
        alert("Date of Launch is required");
        return false;
    } else if (category == "") {
        alert("Select one genre");
        return false;
    } else {
        return true;
    }
}