// Un-active everything when you click it
Array.prototype.forEach.call(document.getElementsByClassName("pagetoc")[0].children, function (el) {
    el.addEventHandler("click", function () {
        Array.prototype.forEach.call(document.getElementsByClassName("pagetoc")[0].children, function (el) {
            el.classList.remove("active");
        });
        el.classList.add("active");
    });
});

var updateFunction = function () {

    var id;
    var elements = document.getElementsByClassName("header");
    Array.prototype.forEach.call(elements, function (el) {
        if (window.pageYOffset >= el.offsetTop) {
            id = el;
        }
    });

    Array.prototype.forEach.call(document.getElementsByClassName("pagetoc")[0].children, function (el) {
        el.classList.remove("active");
    });

    Array.prototype.forEach.call(document.getElementsByClassName("pagetoc")[0].children, function (el) {
        if (id && id.href.localeCompare(el.href) == 0) {
            el.classList.add("active");
        }
    });
};

// Populate sidebar on load
window.addEventListener('load', function () {
    var pagetoc = document.getElementsByClassName("pagetoc")[0];
    var elements = document.getElementsByClassName("header");
    Array.prototype.forEach.call(elements, function (el) {
        var link = document.createElement("a");

        // Indent shows hierarchy
        var indent = "";
        switch (el.parentElement.tagName) {
            case "H1":
                indent = "0px";
                break;
            case "H2":
                indent = "15px";
                break;
            case "H3":
                indent = "30px";
                break;
            case "H4":
                indent = "45px";
                break;
            case "H5":
                indent = "60px";
                break;
            case "H6":
                indent = "75px";
                break;
            default:
                break;
        }

        link.appendChild(document.createTextNode(el.text));
        link.style.paddingLeft = indent;
        link.href = el.href;
        pagetoc.appendChild(link);
    });
    updateFunction.call();
});



// Handle active elements on scroll
window.addEventListener("scroll", updateFunction);
