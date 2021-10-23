
// blog search bar translate
const search_bounding_box = document.querySelector("#search-bounding-box");
const search_icon = document.querySelector("#search-icon");
const search_input = document.querySelector("#search-input");
const search_icon_width = search_icon.getBoundingClientRect().width + 3;

search_icon.addEventListener("click", (e) => {
    search_icon.style.cssText = "border:0;outline:none;";
    search_bounding_box.style.cssText = "border: 1px solid var(--ocean-blue);box-shadow: 0 0 4px 1px rgba(0, 208, 228, 0.3), 0 0 0 1px #00d0e4;";
    search_input.style.cssText = "width:calc(100% - " + search_icon_width + "px);";
});

search_input.addEventListener("blur", (e) => {
    search_bounding_box.style.cssText = "";
    search_input.style.cssText = "width:0;"
});



// these code down below are work for upperside of the scroll navigation web version start

// hover items for language nav item and about nav item

// selected element
const hs_dropdown_menu_all = document.querySelectorAll(".hs-dropdown_menu");
const nav_link_hover_all = document.querySelectorAll(".hs-dr-nav-link_hover");
const nav_link_wrapper = document.querySelector(".hs-nav-link_wrapper");
const nav_link_wrapper_all = document.querySelectorAll(".hs-nav-link_wrapper");
const dropdown_icon_all = document.querySelectorAll(".dropdown-icon");
const link_label_icon_all = document.querySelectorAll(".hs-label_hover");
// const get_css_style_before = window.getComputedStyle(nav_link_wrapper, "::before");
// const get_css_style_after = window.getComputedStyle(nav_link_wrapper, "::after");



// nav hover items toggle for before and after angle (start)
hs_dropdown_menu_all.forEach(item => {
    item.addEventListener("mouseover", (e) => {
        nav_link_wrapper_all.forEach(item => {
            item.style.setProperty("--rotateX", 'rotateX(90deg)');
        })
    });
});

hs_dropdown_menu_all.forEach(item => {
    item.addEventListener("mouseout", (e) => {
        nav_link_wrapper_all.forEach(item => {
            item.style.setProperty("--rotateX", 'rotateX(0deg)');
        })
    });
});
// nav hover items toggle for before and after angle (end)


// making some array for better usecase 
const dropdown_menu_array = Array.from(hs_dropdown_menu_all);
const nav_link_hover_array = Array.from(nav_link_hover_all);
const dropdown_icon_array = Array.from(dropdown_icon_all);
const link_label_array = Array.from(link_label_icon_all);

// contain the same index nuber for all hover state 
let parentIndex = '';

// reuseable code for mouseover and mouseout state 

function changeStyles(color, decor) {
    nav_link_hover_array[parentIndex].style.color = color;
    nav_link_hover_array[parentIndex].style.textDecoration = decor;
    dropdown_icon_array[parentIndex].style.fill = color;
    if (link_label_array[parentIndex] == null) {
        return;
    } else {
        link_label_array[parentIndex].style.fill = color;
    }

}

// current nav item color will appear when mouse is hover the dropdown menu items
dropdown_menu_array.forEach((item, index, arr) => {

    item.addEventListener("mouseover", (e) => {
        if (arr[index] == e.target.closest(".hs-dropdown_menu")) {
            parentIndex = index;
            changeStyles('rgb(0, 145, 174)', 'underline');
        } else {
            return;
        }

    })
})

dropdown_menu_array.forEach((item, index, arr) => {

    item.addEventListener("mouseout", (e) => {
        if (arr[index] == e.target.closest(".hs-dropdown_menu")) {
            parentIndex = index;
            changeStyles('', '');
        } else {
            return;
        }

    })
})

// these code up above are work for upperside of the scroll navigation web version end.


// hover for the software & resources dropdown menu 
const wide_link_wrapper_all = document.querySelectorAll(".wide-link_wrapper");
const wide_drop_link_all = document.querySelectorAll("#wide_drop_link");
const wide_dropdown_content_all = document.querySelectorAll(".wide-dropdown_menu");
const wide_dropdown_icon_all = document.querySelectorAll(".wide-dropdown_icon");
// making of array 

const wide_link_wrapper_array = Array.from(wide_link_wrapper_all);
const wide_drop_link_array = Array.from(wide_drop_link_all);
const wide_dropdown_content_array = Array.from(wide_dropdown_content_all);
const wide_dropdown_icon_array =Array.from(wide_dropdown_icon_all);

const visibility = function (appear, currentIndex, color, decor) {
    wide_link_wrapper_array[currentIndex].style.setProperty("--visibility", appear);
    wide_dropdown_content_array[currentIndex].style.visibility = appear;
    wide_drop_link_array[currentIndex].style.cssText ="color:"+color+";text-decoration:"+decor+";";
    wide_dropdown_icon_array[currentIndex].style.fill = color;
};

wide_drop_link_array.forEach((item, index, arr) => {
    item.addEventListener("mouseover", (e) => {
        if (arr[index] == e.target.closest("#wide_drop_link")) {
            let currentIndex = index;

            visibility("visible", currentIndex,'rgb(0, 145, 174)', 'underline');
        } else {
            return;
        }
    });
});

wide_drop_link_array.forEach((item, index, arr) => {
    item.addEventListener("mouseout", (e) => {
        if (arr[index] == e.target.closest("#wide_drop_link")) {
            let currentIndex = index;

            visibility("hidden", currentIndex, '', '');
        } else {
            return;
        }
    });
});

wide_dropdown_content_array.forEach((item, index, arr) => {
    item.addEventListener("mouseover", (e) => {
        if (arr[index] == e.target.closest(".wide-dropdown_menu")) {
            let currentIndex = index;

            visibility("visible", currentIndex, 'rgb(0, 145, 174)', 'underline');
        } else {
            return;
        }
    });
});

wide_dropdown_content_array.forEach((item, index, arr) => {
    item.addEventListener("mouseout", (e) => {
        if (arr[index] == e.target.closest(".wide-dropdown_menu")) {
            let currentIndex = index;

            visibility("hidden", currentIndex, '', '');
        } else {
            return;
        }
    });
});
// hover items for the nav link end
// these code up above are work for scrolling navigation bar.




// next
