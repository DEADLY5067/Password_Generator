const btnEl = document.querySelector(".btn")

const inputEl = document.getElementById("input")

const copyEl = document.querySelector(".fa-copy")

const AlertContainerEl = document.querySelector(".alert-container")   

btnEl.addEventListener("click", () => {
    createPassword();
});

copyEl.addEventListener("click", ()=>{
    if(inputEl.value){
        AlertContainerEl.classList.remove("active")
    setTimeout(()=>{
        AlertContainerEl.classList.add("active")
    },2000);
    copuPassword();
    }
})



function createPassword() {

    const chars = "0123456789abcdefghijklmnopqrstuvwxtFFz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLenght = 14;
    let password = "";  

    for (let i = 0; i < passwordLenght; i++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNum, randomNum + 1);      
    }
    inputEl.value = password;
    navigator.clipboard.writeText(inputEl.value)
    AlertContainerEl.innerText = password + " copied!";
}

function copuPassword(){
    inputEl.select();
    inputEl.setSelectionRange(0, 9999);
    
}