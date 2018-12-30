document.addEventListener("turbolinks:load", function() {
    let modal = document.getElementById('zoomModal');
    let span = document.getElementsByClassName("close")[0];

    span.onclick = function () {
        modal.style.display = "none";
    };
})
;
