export default function ValidateFunction(){
    const info = document.querySelectorAll(".info");
    for(var item of info){
        if(item.innerHTML === ""){
            item.innerHTML = "Not Available";
            item.style.color = "#4B6A9B"
        }
    }
}