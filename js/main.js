let myForm = document.forms[0];
let myInpNum = document.querySelector("[name = 'elements']");
let myInpText = document.querySelector("[name = 'texts']");
let mySelect = document.querySelector("select");
let mySub = document.querySelector("[name = 'create']");
let res = document.querySelector(".results");

document.body.style = "min-height:100vh;display:flex;align-items:center;justify-content:center;";
myForm.style = "width:80%;display:flex;align-items:center;justify-content:center;flex-direction:column;";
myInpNum.style.display = "block";
myInpText.style.display = "block";
myInpNum.style.marginBottom = "10px";
myInpText.style.marginBottom = "10px";
myInpNum.style.padding = "5px";
myInpText.style.padding = "5px";
myInpNum.style.borderRadius = "5px";
myInpText.style.borderRadius = "5px";
myInpNum.style.outline = "none";
myInpText.style.outline = "none";
myInpNum.style.border = "1px solid #111";
myInpText.style.border = "1px solid #111";
myInpNum.style.width = "50%";
myInpText.style.width = "50%";
mySelect.style = "padding:3px;width:50%;";
mySub.style = "display:block;margin:10px 0;width:50%;padding:8px 5px;background-color:#0b750f;color:#fff;border:none;border-radius:5px;cursor:pointer;";
res.style = "width:100%;flex-wrap:wrap;display:flex;justify-content:space-between;align-items:center;gap:10px"


myForm.onsubmit = function (event) {
    // Remove Old Boxes By ForEach
    document.querySelectorAll(".box").forEach(function (e) {
        e.remove();
    }) 

    // Get Number Of Boxes (n)
    n = Number(myInpNum.value);
    // console.log(n)
    
    if (n < 0) {
        alert("Sorry... Negative Not Allowed !")
    }
    // Get Text To Type In Box
    text = myInpText.value;
    // console.log(text)
    
    // Get Type Of Box
    type = mySelect.value;
    // console.log(type)

    // Append Number (n) Of Childs By For Loop
    for (let i = 1; i <= n; i++){
        let ele = document.createElement(type);
        ele.appendChild(document.createTextNode(text));
        ele.id = `id-${i}`;
        ele.className = "box";
        ele.style = "flex-basis:30%;text-align:center;flex-grow:1;padding:8px 5px;background-color:#eb4c19;color:#fff;border:none;border-radius:5px;";
        res.appendChild(ele);
        
    }

    
    
    event.preventDefault()
}
