window.addEventListener("load", ()=>{
    const inputBill = document.querySelector("[data-bill]");
    const totalMembers = document.querySelector("[data-members]");
    const tipButtons = Array.from(document.querySelectorAll("button"));
    const customButton = document.querySelector("input.custom");
    const tipAmount = document.querySelector("div.amount-section h3");
    const totalAmount = document.querySelector("div.amount-section h3.total-amount");
    const resetButton = document.querySelector("a.button");
    tipButtons.forEach((button)=>{
        button.addEventListener("click",function(e){
                let tipPercentage= e.target.value;
                let billAmount = inputBill.value;
                let members = totalMembers.value;
                const tip = (billAmount * tipPercentage)/100;
                const total = members*tip;
                console.log(tip);
                tipAmount.innerText=`$ ${tip}`;
                totalAmount.innerText=`$ ${total}`;
                tipButtons.forEach((btn)=>
                btn.classList.remove("active")
            )
            console.log(this)
            this.classList.add("active");
            totalMembers.addEventListener("keyup", ()=>{
                let tipPercentage= this.value;
                let billAmount = inputBill.value;
                let members = totalMembers.value;
                const tip = (billAmount * tipPercentage)/100;
                const total = members*tip;
                console.log(tip);
                tipAmount.innerText=`$ ${tip}`;
                totalAmount.innerText=`$ ${total}`;
                if(totalMembers.value==0){
                    tipAmount.innerText=`$`;
                    totalAmount.innerText=`$`;  
                }
            })
            inputBill.addEventListener("keyup", ()=>{
                let tipPercentage= this.value;
                let billAmount = inputBill.value;
                let members = totalMembers.value;
                const tip = (billAmount * tipPercentage)/100;
                const total = members*tip;
                console.log(tip);
                tipAmount.innerText=`$ ${tip}`;
                totalAmount.innerText=`$ ${total}`;
                if(inputBill.value==""){
                    tipAmount.innerText=`$`;
                    totalAmount.innerText=`$`;  
                }
            })
            customButton.addEventListener("keyup", ()=>{
                let tipPercent= customButton.value;
                if(customButton.value!==0){
                    this.classList.remove("active");
                }
                console.log(tipPercent)
                    let billAmount = inputBill.value;
                    let members = totalMembers.value;
                    const tip = (billAmount * tipPercent)/100;
                    const total = members*tip;
                    console.log(tip);
                    tipAmount.innerText=`$ ${tip}`;
                    totalAmount.innerText=`$ ${total}`;
            })
            resetButton.addEventListener("click", (e)=>{
                e.preventDefault();
                inputBill.value="";
                totalMembers.value="";
                tipAmount.innerText="";
                totalAmount.innerText="";
                this.classList.remove("active");
                
            })
        })
    })
})