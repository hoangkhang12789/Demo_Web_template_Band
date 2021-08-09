var header = document.getElementById("header");
var mobile = document.getElementById("mobile");
mobile.onclick = function () {
    var isClose = header.clientHeight == 46;
    if (isClose) {
        header.style.height = "auto";
    } else {
        header.style.height = "46px";
    }
};
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
console.log(menuItems);
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    menuItem.onclick = function () {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');

        if (!isParentMenu) {
            header.style.height = "46px";
        } else {
            event.preventDefault();
        }

    }
}

