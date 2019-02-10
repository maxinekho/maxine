document.addEventListener("turbolinks:load", function() {
    let rippleElements = document.getElementsByClassName("btnRippleEffect");
    for (let i = 0; i < rippleElements.length; i++) {
        rippleElements[i].onclick = function (e) {
            let X = e.pageX - this.offsetLeft;
            let Y = e.pageY - this.offsetTop;
            let rippleDiv = document.createElement("div");
            rippleDiv.classList.add('ripple');
            rippleDiv.setAttribute("style", "top:" + Y + "px; left:" + X + "px;");
            console.log('worked til here!');
            this.appendChild(rippleDiv);
            setTimeout(function () {
                rippleDiv.parentElement.removeChild(rippleDiv);
            }, 900);
        }
    }

    let modal = document.getElementById('zoomModal');
    let images = document.getElementsByClassName('zoomImages');
    let modalImg = document.getElementById("img01");
    let captionText = document.getElementById("caption");

    for (let i = 0; i < images.length; i++) {
        let img = images[i];
        img.onclick = function () {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
    }


    let backTop = document.getElementById("backToTop");
    backTop.onclick = function scrollUp() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
});

// let favIcon = document.querySelector("link[rel='shortcut icon']");
//
// window.onblur=function(){
//     favIcon.href = "<%= image_path(\"images/breaded-shrimp.png\")%>";
// };
// window.onfocus=function(){
//     favIcon.href = "<%= image_path(\"images/shrimp.png\") %>";
// };