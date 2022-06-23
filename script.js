const button = document.querySelector(".btn");
const parent = document.querySelector(".parent");

const openToastAlert = () => {
    parent.innerHTML= ""
    const toastAlert = document.createElement("div");
    toastAlert.append("I Love You baby, you are the prettiest girl I've ever seen, Mwahhh")
    toastAlert.classList.add("toastAlert");
    parent.append(toastAlert);
    toastAlert.style.bottom = `-${toastAlert.offsetHeight}px`;
    setTimeout(()=>{
        toastAlert.style.bottom = "0px"
    },100)

    setTimeout(()=>{
        toastAlert.style.bottom = `-${toastAlert.offsetHeight}px`
    },2000)
    
}



button.addEventListener("click", ()=>{
    openToastAlert();
})