document.addEventListener("turbolinks:load", function() {

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

function showProjects(typeId) {
    let projectsSorted = document.getElementsByClassName('container-projects');
    let projectTypes = document.getElementsByClassName('project-type');
    for (let j = 0; j < projectTypes.length; j++) {
        if (projectTypes[j].id === typeId) {
            projectTypes[j].classList.add('active-tab');
        }
        else {
            projectTypes[j].classList.remove('active-tab');
        }
    }
    for (let i = 0; i < projectsSorted.length; i++) {
        projectsSorted[i].style.display = 'none';
        if (projectsSorted[i].id === typeId) {
            projectsSorted[i].style.display = 'block';
        }
    }
}

// let favIcon = document.querySelector("link[rel='shortcut icon']");
//
// window.onblur=function(){
//     favIcon.src = "<%= image_path(\"images/smile-wonk.png\")%>";
// };
// window.onfocus=function(){
//     favIcon.src = "<%= image_path(\"images/smile-regular.png\") %>";
// };