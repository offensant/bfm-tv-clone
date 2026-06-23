const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, 'societe', 'commentateur-autoproclame-kevin-enquete.html');
const cssPath = path.join(__dirname, 'extracted_menu_css.txt');

// Read files
let html = fs.readFileSync(htmlPath, 'utf8');
const extractedCSS = fs.readFileSync(cssPath, 'utf8');

// Normalize line endings
html = html.replace(/\r\n/g, '\n');

// Find the old menu block
const startMarker = '<!-- Menu Hamburger Logic -->';
const endMarker = '\n<script>\ndocument.addEventListener(\'DOMContentLoaded\', function() {\n    const shareBtn';

const startIdx = html.indexOf(startMarker);
const endIdx = html.indexOf(endMarker, startIdx);

if (startIdx === -1) {
    console.error('ERROR: Could not find start marker "<!-- Menu Hamburger Logic -->"');
    process.exit(1);
}
if (endIdx === -1) {
    console.error('ERROR: Could not find end marker (share button script)');
    process.exit(1);
}

console.log('Found start marker at position:', startIdx);
console.log('Found end marker at position:', endIdx);

// Build the new block
const newBlock = `<!-- Menu Hamburger Logic -->
<style>
/* === EXTRACTED BFM TV MENU CSS === */

/* The menu slides from left, positioned below the header */
.main_menu_nav {
    background: #fff;
    position: fixed;
    right: 0;
    top: 52px; /* below header */
    transition: left .3s ease-in-out, opacity .3s ease-in-out;
    left: -360px;
    width: 360px;
    height: calc(100vh - 52px);
    z-index: 9999;
    border-top: 0;
    opacity: 0;
}
.main_menu_nav.active {
    left: 0;
    opacity: 1;
}
/* On mobile, full width */
@media (max-width: 640px) {
    .main_menu_nav {
        width: 100%;
        left: -100%;
    }
}

/* Menu nav container */
.main_menu_nav .menu_nav {
    background: #fff;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: calc(100vh - 142px);
    margin: 0 auto;
    max-width: 1280px;
    overflow-y: auto;
    width: 100%;
}

.main_menu_nav .menu_right {
    max-height: calc(var(--vh,1vh)*100 - 122px);
    overflow-y: auto;
    position: relative;
    width: 100%;
}

.main_menu_nav .menu_center_left {
    margin-top: 24px;
    padding: 0 0 55px 16px;
    width: 100%;
}

.main_menu_nav .menu_center__title {
    color: #737373;
    font-size: .875rem;
    font-weight: 600;
    margin-top: 24px;
}

.main_menu_nav .menu_slider_topics {
    border-bottom: 1px solid #e5e5e5;
    padding-bottom: 16px;
}

.main_menu_nav .menu_slider_topics .carousel_arrow {
    top: 20px !important;
}

.main_menu_nav .menu_slider_topics .slider_container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    margin: 19.5px 0 8px;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    -ms-overflow-style: none;
}

.main_menu_nav .menu_slider_topics .slider_container::-webkit-scrollbar {
    display: none;
}

.main_menu_nav .menu_slider_topics .slider_container li {
    border: 1px solid #e5e5e5;
    flex-shrink: 0;
    margin-right: 16px;
    padding: 8px 16px;
}

.main_menu_nav .menu_slider_topics .slider_container li a {
    font-size: .875rem;
    font-weight: 500;
    white-space: nowrap;
}

.main_menu_nav .menu_center_cta {
    border-bottom: 1px solid #e5e5e5;
    display: flex;
    flex-wrap: wrap;
    margin-right: 16px;
    padding: 16px 0;
}

.main_menu_nav .menu_center_cta .cta_button {
    background-color: #e5e5e5;
    border-radius: 99px;
    display: flex;
    font-size: .875rem;
    font-weight: 600;
    line-height: 1;
    margin: 0 8px 8px 0;
    padding: 8px 16px 8px 12px;
    width: auto;
}

.main_menu_nav .menu_center_cta .cta_button span {
    padding-left: 8px;
}

.main_menu_nav .menu_center_left .badge_container {
    border-bottom: 1px solid #e5e5e5;
    margin-bottom: 24px;
    display: none;
}

.main_menu_nav .menu_category_links_left {
    border-bottom: 1px solid #e5e5e5;
    margin: 8px 16px 24px 0;
    padding-bottom: 16px;
}

.main_menu_nav .menu_category_links_left li {
    font-size: 1rem;
    font-weight: 600;
    line-height: 1;
    padding: 8px 0;
}

.main_menu_nav .menu_category_links_left li a {
    display: flex;
    width: 100%;
}

.main_menu_nav .menu_label_header {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    margin-right: 16px;
    position: relative;
}

.main_menu_nav .menu_label_header svg {
    position: absolute;
    right: 0;
    transition: transform .4s ease-out, opacity .4s ease-out;
}

.main_menu_nav .show_menu {
    opacity: 1;
    stroke: #000;
    transform: rotate(0deg);
}

.main_menu_nav .hide_menu {
    fill: #000;
    opacity: 0;
    transform: rotate(90deg);
}

.main_menu_nav .sub_menu_list {
    --item-line-height: 14px;
    --item-padding-top: 8px;
    --item-padding-bottom: 8px;
    height: 0;
    overflow: hidden;
    padding: 0 24px;
    transition: height .3s ease-in-out;
}

.main_menu_nav .sub_menu_list li {
    font-size: .875rem;
    font-weight: 500;
    line-height: var(--item-line-height);
    padding: var(--item-padding-top) 0 var(--item-padding-bottom);
}

.main_menu_nav .menu_label_header .menu_label:before {
    content: "";
    transform: scaleX(0);
}

.main_menu_nav .menu_label_header .menu_label {
    margin-left: 0;
    transition: margin .3s ease-out;
}

.main_menu_nav .nav_active .menu_label_header .menu_label:before {
    background: #0032c8;
    background: var(--menu-main-color);
    content: "";
    height: 10px;
    left: -18px;
    position: absolute;
    top: 3px;
    transform: scaleX(100%);
    transform-origin: 0 50%;
    transition: transform .3s ease-out;
    width: 10px;
}

.main_menu_nav .menu_category_links_left li:hover li {
    color: #000;
}

.main_menu_nav .menu_pastille,
.main_menu_nav .rectangle_slider {
    padding: 16px 0 24px;
    position: relative;
}

.main_menu_nav .menu_pastille .carousel_arrow,
.main_menu_nav .rectangle_slider .carousel_arrow {
    display: none;
}

.main_menu_nav .menu_pastille .slider_wrapper,
.main_menu_nav .rectangle_slider .slider_wrapper {
    display: flex;
}

.main_menu_nav .menu_pastille .slider_container,
.main_menu_nav .rectangle_slider .slider_container {
    align-items: center;
    display: flex;
    overflow-x: scroll;
    position: relative;
    width: 100%;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    -ms-overflow-style: none;
}

.main_menu_nav .menu_pastille .slider_container::-webkit-scrollbar,
.main_menu_nav .rectangle_slider .slider_container::-webkit-scrollbar {
    display: none;
}

.main_menu_nav .menu_pastille li,
.main_menu_nav .rectangle_slider li {
    border: 0;
    flex: 0 0 auto;
    margin-left: 12px;
    padding: 0;
}

.main_menu_nav .menu_pastille li a,
.main_menu_nav .rectangle_slider li a {
    padding: 0;
    width: 64px;
}

.main_menu_nav .menu_pastille li img,
.main_menu_nav .rectangle_slider li img {
    width: 64px;
}

.main_menu_nav .menu_pastille li.item_social_media img {
    width: 40px;
}

.main_menu_nav .menu_pastille li:first-of-type,
.main_menu_nav .menu_pastille li:first-of-type a,
.main_menu_nav .rectangle_slider li:first-of-type,
.main_menu_nav .rectangle_slider li:first-of-type a {
    margin-left: 0;
}

.main_menu_nav .rectangle_slider li img {
    width: 165px;
}

.main_menu_nav .slider_wrapper {
    overflow: hidden;
    width: 100%;
}

.main_menu_nav .slider_container {
    display: flex;
    flex-wrap: nowrap;
    transform: translate(0);
    transition-duration: .3s;
    transition-property: transform;
    width: 100%;
}

.main_menu_nav .carousel_arrow {
    display: none;
    padding-top: 1px;
    position: absolute;
    right: 0;
    text-align: right;
    top: 0;
    white-space: nowrap;
}

.main_menu_nav .slider_arrow {
    background: transparent;
    border: 0;
    font-size: 0;
    height: 36px;
    outline: none;
    padding: 0;
    text-transform: none;
}

/* Menu header bar */
.main_menu_nav .menu_header_bar {
    display: flex;
    align-items: center;
    background: #00007D;
    padding: 14px 16px;
    flex-shrink: 0;
}
.main_menu_nav .menu_close_btn {
    background: none; border: none; cursor: pointer;
    color: #fff; font-size: 22px; margin-right: 16px;
    padding: 0; line-height: 1;
}
.main_menu_nav .menu_header_logo { height: 28px; width: auto; }

/* Desktop overrides */
@media (min-width: 992px) {
    .main_menu_nav {
        border-top: 0;
        height: calc(100vh - 85px);
        top: 85px;
    }
    .main_menu_nav .menu_nav {
        height: calc(100vh - 195px);
    }
}

</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
    var hamburgerBtn = document.querySelector('.hamburger-btn');
    var mainMenu = document.getElementById('main_menu_nav');

    // Clone to remove old listeners
    if (hamburgerBtn) {
        var newBtn = hamburgerBtn.cloneNode(true);
        if (hamburgerBtn.parentNode) {
            hamburgerBtn.parentNode.replaceChild(newBtn, hamburgerBtn);
        }
        hamburgerBtn = newBtn;
    }

    function openMenu() {
        if (mainMenu) {
            mainMenu.classList.add('active');
            mainMenu.classList.remove('close');
            document.body.style.overflow = 'hidden';
        }
    }
    function closeMenu() {
        if (mainMenu) {
            mainMenu.classList.remove('active');
            mainMenu.classList.add('close');
            document.body.style.overflow = '';
        }
    }

    if (hamburgerBtn) hamburgerBtn.addEventListener('click', function(e) { 
        e.preventDefault(); 
        if (mainMenu.classList.contains('active')) closeMenu(); else openMenu();
    });

    // Close button inside menu header
    var closeBtn = document.getElementById('menuCloseBtn');
    if (closeBtn) closeBtn.addEventListener('click', function(e) { e.preventDefault(); closeMenu(); });

    // Accordion submenus
    document.querySelectorAll('.main_menu_nav .toggle_sub_menu').forEach(function(header) {
        header.addEventListener('click', function() {
            var li = this.closest('li');
            var subMenu = this.nextElementSibling;
            if (subMenu && subMenu.classList.contains('sub_menu_list')) {
                var isOpen = li && li.classList.contains('nav_active');
                // Close all
                document.querySelectorAll('.main_menu_nav .nav_active').forEach(function(el) {
                    el.classList.remove('nav_active');
                    var sm = el.querySelector('.sub_menu_list');
                    if (sm) sm.style.height = '0';
                });
                document.querySelectorAll('.main_menu_nav .sub_menu_list').forEach(function(el) { el.style.height = '0'; });
                if (!isOpen && li) {
                    li.classList.add('nav_active');
                    var itemCount = parseInt(subMenu.style.getPropertyValue('--item-count')) || subMenu.children.length;
                    subMenu.style.height = (itemCount * 30) + 'px';
                }
            }
        });
    });
});
</script>
`;

// Do the replacement
const before = html.substring(0, startIdx);
const after = html.substring(endIdx);

html = before + newBlock + after;

// Write back
fs.writeFileSync(htmlPath, html, 'utf8');

console.log('SUCCESS: Menu block replaced!');
console.log('File written to:', htmlPath);
