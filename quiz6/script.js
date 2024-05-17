'use strict';

document.querySelector(".gallery").addEventListener("click", function(event) {
    if(event.target.tagName === "IMG") {
        const img_preview = document.querySelector(".preview");
        const fig_caption = document.querySelector(".preview-container figcaption");

        img_preview.src = event.target.src;
        img_preview.alt = event.target.alt;
        fig_caption.textContent = event.target.alt;
    }
});