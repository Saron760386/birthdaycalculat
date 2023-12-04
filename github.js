const output_year=document.querySelector(".output_year");
const output_month=document.querySelector(".output_month");
const output_day=document.querySelector(".output_day");
const img_btn=document.querySelector(".img_btn")

let isValid=false;
const input_day=document.querySelector("#day");
const input_month=document.querySelector("#month");
const input_year=document.querySelector("#year");

const error_day=document.querySelector(".error_day");
const error_month=document.querySelector(".error_month");
const error_year=document.querySelector(".error_year")

// output_day.style.border=" 1px solid red";
img_btn.addEventListener("click",calculateDate)
input_day.addEventListener("input",()=>{
        if(+input_day.value>31){
            error_day.textContent="Must be a valid date";
            error_day.style.color="red";
            isValid=false;
            return;
        }
        else{
            isValid=true;
            error_day.textContent="";
        }
        if(+input_day.value === 0){
            isValid=false;
            error_day.textContent="This field is required";
            error_day.style.color="red";
            isValid=false;
            return;
        }
        else{
            error_day.textContent="";
        }
    });

    input_month.addEventListener("input",()=>{
            if(+input_month.value>12){
                error_month.textContent="Must be a valid date";
                isValid=false;
                error_month.style.color="red";
                return;
            }
            else{
                isValid=true;
                error_month.textContent="";
            }
            if(+input_month.value===0){
                isValid=false;
                error_month.textContent="This field is required";
                error_month.style.color="red";
                isValid=false;
                return;
            }
            else{
                error_month.textContent="";
            }
        });
        input_year.addEventListener("input",()=>{
            if(+input_year.value>2023){
                error_year.textContent="Must be a valid date";
                error_year.style.color="red";
                isValid=flase;
                return;
            }
            else{
                isValid=true;
                error_year.textContent="";
            }
            if(+input_year.value===0){
                error_year.textContent="This fied is required";
                error_year.style.color="red";
                isValid=false;
                return;
            }
            else{
                error_year.textContent="";
                isValid=true;
            }
        })

        function calculateDate(){
            if(isValid){
                let birthday=`${input_month.value}/${input_day.value}/${input_year.value}`;
                let birthdayobj=new Date(birthday);
                let ageDiff= Date.now()-birthdayobj;
                let ageDate=new Date(ageDiff);

                let ageYear=ageDate.getUTCFullYear()-1970;
                let ageMonth=ageDate.getUTCMonth();
                let ageDay=ageDate.getUTCDay();

                output_year.innerHTML=ageYear;
                output_month.innerHTML=ageMonth;
                output_day.innerHTML=ageDay;

            }
        }