let pages = [
    "Karn, the great creator",
    "Card of the Day 2",
    "Card of the Day 3"
]
 
let dropdown = document.getElementById("dropdown-content");
 
function search() {
    let text = document.getElementById("searchbar input").value.toLowerCase();
    let elegable_pages = []
    for(i=0; i < pages.length; i++){
        if(pages[i].toLowerCase().indexOf(text) !== -1){
            elegable_pages.push(pages[i].split(" [")[0]);
        }
    }
    dropdown.innerHTML = ""
    for(i=0; i < elegable_pages.length; i++){
        let hyperlink = elegable_pages[i].toLowerCase().replaceAll(" ", "-").replaceAll(".", "").replaceAll(",", "")+".html"
        dropdown.innerHTML += '<a href="' + hyperlink + '"\>' + elegable_pages[i] + '</a>';
        console.log(elegable_pages[i])
    }
}
 
function show_searchlist() {
    dropdown.style.display = "flex";
}
 
function hide_searchlist() {
    setTimeout(() => {dropdown.style.display = "none";}
    , 100);
}