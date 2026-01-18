const btnEl = document.querySelector(".btn")

const inputEl = document.getElementById("input")

const copyEl = document.querySelector(".fa-copy")



btnEl.addEventListener("click", () => {
    createPassword();
});

copyEl.addEventListener("click", ()=>{
    copuPassword();
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
}

function copuPassword(){
    inputEl.select();
    inputEl.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(inputEl.value)
}