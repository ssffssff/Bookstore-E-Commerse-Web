console.log("Script loaded!"); 
document.addEventListener("DOMContentLoaded", function() {
    var footerLinks = document.querySelectorAll("footer nav ul li a");
    footerLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            console.log("Footer link clicked: " + link.innerText); 
        });
    });
});
