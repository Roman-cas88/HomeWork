function funcDropDown() {
    document.getElementById("divDrpDwn").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.buttonDropDown')) {
        var dropdowns = document.getElementsByClassName("divDropDownContent");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}