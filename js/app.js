
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



// hover items for language nav item and about nav item

// selected element
const hs_dropdown_menu = document.querySelector(".hs-dropdown_menu");
const nav_link = document.querySelector(".nav-link");
const nav_link_wrapper = document.querySelector(".hs-nav-link_wrapper");
const dropdown_icon = document.querySelector(".dropdown-icon");
const link_label_icon = document.querySelector(".link-label-icon");
const get_css_style_before = window.getComputedStyle(nav_link_wrapper,"::before");
const get_css_style_after = window.getComputedStyle(nav_link_wrapper,"::after");

// nav hover items toogle for before and after angle
hs_dropdown_menu.addEventListener("mouseover",(e)=>{
    nav_link_wrapper.style.setProperty("--rotateX",'rotateX(90deg)');
});

hs_dropdown_menu.addEventListener("mouseout",(e)=>{
    nav_link_wrapper.style.setProperty("--rotateX",'rotateX(0deg)');
});


// current nav item color will appear when mouse is hover the dropdown menu items
hs_dropdown_menu.addEventListener("mouseover",(e)=>{
    nav_link.style.color='rgb(0, 145, 174)';
    dropdown_icon.style.fill='rgb(0, 145, 174)';
    link_label_icon.style.fill='rgb(0, 145, 174)';
    
});

hs_dropdown_menu.addEventListener("mouseout",(e)=>{
    nav_link.style.color='';
    dropdown_icon.style.fill='';
    link_label_icon.style.fill='';
    
});


// hover items for the nav link end 