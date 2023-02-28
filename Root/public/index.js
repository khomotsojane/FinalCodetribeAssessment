

function toggleNav(id) {
    var nav_side = document.getElementById(id); 

    // for (var i = 0; i <10; i++) {
    //     var br = document.getElementById("space1")
    //     if (br == null) break; 
    //     br.remove();
    // }

    var display = nav_side.style.display

    if (display.length == 0 || display == "none") {
        nav_side.style.display = 'block'
    } else {
        nav_side.style.display = 'none'
    }
}

function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

function toggleDrop(id, caller) {
    var name = caller.innerText
    var nav_side = document.getElementById(id); 
    var display = nav_side.style.display

    if (display.length == 0 || display == "none") {

        nav_side.style.display = 'block'
    } else {
        nav_side.style.display = 'none'
    }

}
