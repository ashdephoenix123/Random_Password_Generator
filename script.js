let cha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let sym = "!@#$%^&*";
let num = "0123456789";

// let passwordLength = prompt("Enter the length"); // password length

document.getElementById("passwordLength").addEventListener("change", (e) => {
    let passwordLength = e.target.value;
    let password = "";

    for (let i = 0; i < passwordLength; i++) {

        //random number of an array
        let rn = Math.floor(Math.random() * 3);
        let arr = ["cha", "sym", "num"];

        switch (arr[rn]) {
            case "cha":
                let theCharacter = Math.floor(Math.random() * 52);
                password += cha.charAt(theCharacter);
                break;
            case "sym":
                let theSymbol = Math.floor(Math.random() * 8);
                password += sym.charAt(theSymbol);
                break;
            case "num":
                let theNumber = Math.floor(Math.random() * 10);
                password += num.charAt(theNumber);
                break;
        }
    }
    document.querySelectorAll("button")[0].addEventListener("click", () => {
        document.getElementById("display").innerHTML = "<strong>Your Password is: </strong>" + password;
        document.getElementById("btn2").removeAttribute("hidden")
    })

    document.querySelectorAll("button")[1].addEventListener("click", () => {
        let password = "";

        for (let i = 0; i < passwordLength; i++) {

            //random number of an array
            let rn = Math.floor(Math.random() * 3);
            let arr = ["cha", "sym", "num"];

            switch (arr[rn]) {
                case "cha":
                    let theCharacter = Math.floor(Math.random() * 52);
                    password += cha.charAt(theCharacter);
                    break;
                case "sym":
                    let theSymbol = Math.floor(Math.random() * 8);
                    password += sym.charAt(theSymbol);
                    break;
                case "num":
                    let theNumber = Math.floor(Math.random() * 10);
                    password += num.charAt(theNumber);
                    break;
            }
        }
        document.getElementById("display").innerHTML = "<strong>Your Password is: </strong>" + password;
    })
});





