let pages = [
    "Karn, the great creator",
    "Mycosynth lattice",
    "Exuberant Wolfbear",
    "Hollowborn Barghest",
    "Eerie ultimatum",
    "Brilliant halo",
    "Verge rangers",
    "Amareth, the Lustrous",
    "Pithing needle",
    "Oltec matterweaver",
    "Hullbreaker horror",
    "Gandalf the Grey",
    "Craw wurm",
    "Great gilded boat",
    "Sentinel-sliver",
    "Tifa martial artist",
    "Stampede",
    "Revive",
    "Swamp",
    "Bedevil",
    "Mikaeus the unhallowed",
    "Shadowgrange archfiend",
    "Grubs command",
    "Smugglers share",
    "Spawning bed",
    "Elvish spirit guide",
    "Temporal adept",
    "Forest",
    "Reapers talisman",
    "Boarded window",
    "Sultai-runemark",
    "Bargo king eternal",
    "Krenko mob boss",
    "Edgar Markov",
    "Prismari the inspiration"
]
 
let dropdown = document.getElementsByClassName("dropdown-content")[0];
 
function search() {
    let text = document.getElementsByClassName("searchbar input","searchbar input2")[0].value.toLowerCase();
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