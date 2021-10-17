
// blog search bar translate
const search_bounding_box = document.querySelector("#search-bounding-box");
const search_icon = document.querySelector("#search-icon");
const search_input = document.querySelector("#search-input");
const search_icon_width = search_icon.getBoundingClientRect().width+3;

search_icon.addEventListener("click", (e) => {
    search_icon.style.cssText = "border:0;outline:none;";
    search_bounding_box.style.cssText = "border: 1px solid var(--ocean-blue);box-shadow: 0 0 4px 1px rgba(0, 208, 228, 0.3), 0 0 0 1px #00d0e4;";
    search_input.style.cssText = "width:calc(100% - "+search_icon_width+"px);";
});

search_input.addEventListener("blur", (e) => {
    search_bounding_box.style.cssText = "";
    search_input.style.cssText = "width:0;"
});
