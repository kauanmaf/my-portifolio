// console.log("IT'S ALIVE");

// var x=0;

// x = x+3

// console.log(x)


// function $$ (selector, context = document) {
//     return Array.from(context.querySelectorAll(selector));
// }

// let navLinks = $$("nav a");
// let currentLink = navLinks.find(a => a.host === location.host && a.pathname === location.pathname);
// currentLink?.classList.add("current");
// console.log(navLinks);

const ARE_WE_HOME = document.documentElement.classList.contains("home");

let pages = [
    {url: ".", title : "Home"},
    {url: "projects", title : "Projects"},
    {url: "contact", title : "Contact"},
    {url: "https://github.com/kauanmaf", title : "GitHub"}
];


let nav = document.createElement("nav");
document.body.prepend(nav);

for (let p of pages) {
    console.log(p)
    let url = p.url;
    // if (!ARE_WE_HOME && !url.startsWith("http")) {
    //     url = "../" + url;
    // }
    let title = p.title;
    
    // Create link and add it to nav
    let a = document.createElement("a");
    a.href = url;
    a.textContent = title;
    if (a.host === location.host && a.pathname === location.pathname) {
        a.classList.add("current");
    }
    
    if (a.host != location.host)
        {
            a.target = "_blank";
        }

    nav.append(a);
}

