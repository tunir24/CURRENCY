let url = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/";
let sel = document.querySelectorAll("select");
let btn =   document.querySelector("button");
let fromcurr = document.querySelector(".from1");
let tocurr = document.querySelector(".to1");
let msg = document.querySelector(".msg");
for (select of sel){
    for (CurrCode in countryList){
    let newopt = document.createElement("option");
    newopt.value = CurrCode;
    newopt.innerText=CurrCode;
    if(select.name ==="from" && CurrCode==="USD"){
        newopt.selected = "selected";
    }
    else if(select.name ==="to" && CurrCode==="INR"){
        newopt.selected = "selected";
    }
    select.append(newopt);
    }
    select.addEventListener("change",(e)=>{
        flag(e.target);
    })
    
}

let flag = (element)=>{
 let CurrCode = element.value;
 let country = countryList[CurrCode];
 let link = `https://flagsapi.com/${country}/flat/64.png`
 let img = element.parentElement.querySelector("img");
 img.src = link;
}

btn.addEventListener("click",async (evt)=>{
evt.preventDeafult;

let amount = document.querySelector("input");
amtval = amount.value;
if (amtval<0 || amtval ===""){
    amtval=1;
    amount.value="1";
}

let newurl = `${url}/${fromcurr.value.toLowerCase()}/${tocurr.value.toLowerCase()}.json`;
let response = await fetch(newurl);
let data = await response.json();
let rate = data[tocurr.value.toLowerCase()];

let final = rate * amtval;
console.log(amtval);
console.log(final);
msg.innerText= `${amtval} ${fromcurr.value} = ${final} ${tocurr.value}`
msg.style.backgroundColor = "Yellow";
})
