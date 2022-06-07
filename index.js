let display = document.getElementById("displayScreen");
let btn = document.querySelectorAll("button");
    
let displayValue = "";

window.addEventListener("onload",function()
{
    display.innerHTML = "0";
})

for (let item of btn)
{
    item.addEventListener("click", (event) => {
        
        // alert("working")
        // let buttonText = e.target.innertext;

        // console.log(event.target.innerText);

        let buttonText = event.target.innerText;

        // console.log(buttonText);

        if (buttonText == "X")
        {
            buttonText = '*';
            display.innerHTML += buttonText;
        }

        else if (buttonText =='R')
        {
            let temp = display.innerHTML;
            display.innerHTML = temp.slice(0,-1);
        }

        else if (buttonText == 'C')
        {
            display.innerHTML = "";
        }

        else if(buttonText == "%")
        {
            buttonText = "/";
            display.innerHTML += buttonText;
        }

        else if (buttonText == "=")
        {
            displayValue = display.innerHTML;
            display.innerHTML = eval(display.innerHTML);
        }
        else
        {
            display.innerHTML += buttonText;
        }
        
    })
}
