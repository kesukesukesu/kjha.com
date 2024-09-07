var tablinks=document.getElementsByClassName("tab-links")
var tabcontent=document.getElementsByClassName("tab-content")
function opentab(_tabname){
    for (tablinks of tablinks){
    tablinks.classList.remove("active-links")
    }
    for (tabcontent of tabcontent){
        tabcontent.classList.remove("active-tab")
        }
       // Event.currentTarget.classList.add("active-links")
document.getElementsById(_tabname).classList.add("active-tab")}

