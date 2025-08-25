// find max between two numbers
function find_max_callback(event){
event.preventDefault();
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const error = document.getElementById("error-max");
    const result = document.getElementById("result-max");
    
    // to check the input box is empty
    if(isNaN(num1) || isNaN(num2)){
        result.textContent = "";
        error.textContent = "Enter a valid number!";
        return;
    }
    let max;
    if(num1 > num2){
        max = num1;
    }
    else{
        max = num2;
    }
    error.textContent = "";
    result.innerHTML = `Maximum Number: ${max}`;
}
const max_form = document.getElementById("max");
max_form.addEventListener("submit", find_max_callback);

// reverse a string

function reverse_string_callback(event){
    event.preventDefault();
    const str = document.getElementById("str").value;
    const error = document.getElementById("error-rev");
    const result = document.getElementById("result-rev");
    if(str === ""){
        result.textContent = "";
        error.textContent = "Please enter the text!!";
        return;
    }
    if(str.length >= 3 && str.length <=30){
    let rev = "";
    for(let i=str.length-1; i>=0; i--){
        rev += str[i];
    }
    error.textContent = "";
    result.innerHTML = `Reversed String:<br> ${rev}`;
    }
    else{
        result.textContent = "";
        error.textContent = "Input should be greater than 3 and less than 30 character!";
    }

    
}
const reverse_form = document.getElementById("reverse");
reverse_form.addEventListener("submit", reverse_string_callback);

//find the longest word

function find_largest_word_callback(event){
    event.preventDefault();
    const word = document.getElementById("word").value;
    const error = document.getElementById("error-longest-word");
    const result = document.getElementById("result-longest-word");
    console.log(word.length);
    if(word.trim() === ""){
        result.textContent = "";
        error.textContent = "Please enter the words!";
        return;
    }
    const word_array = word.split(',').map(word => word.trim());
    // console.log(word_array);
    // for(let i=0; i<word_array.length; i++){
    //     let l = word_array[i].length;
    //     console.log(l);
    // }
    let largest = "";
    for(let i=0; i<word_array.length; i++){
        if(word_array[i].length > largest.length){
            largest = word_array[i];
        }
    }
    error.textContent  = "";
    result.innerHTML = `Largest Words:<br> ${largest}`;

}

const find_largest_word_form = document.getElementById("find-largest-word");
find_largest_word_form.addEventListener("submit", find_largest_word_callback);

// cookies



function load_details_callback(){
    const cookies = document.cookie.split(";");
    
    cookies.forEach(cookie => {
        const [key, value] = cookie.trim().split("=");

        if(key === "name"){
            document.getElementById("header-name").innerHTML = decodeURIComponent(value);
        }
        if(key == "phone"){
            document.getElementById("footer-phone").innerHTML = decodeURIComponent(value);
        }
        
    });
    
}

function save_details_callback(event){
    event.preventDefault();
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phonenum").value;
    const error = document.getElementById("error-cookies");
    const result = document.getElementById("result-cookies");
    
    error.textContent = "";
    result.textContent = "";

    if(name === "" || phone === ""){
        error.textContent = "Please enter the Name and Number!";
        return;
    }
    if(phone.length != 10){
        error.textContent = "Phone number must contains 10 digit!";
        return;
    }

    document.cookie = `name = ${encodeURIComponent(name)}; max-age=${7 * 24 * 60 * 60}`;
    document.cookie = `phone = ${encodeURIComponent(phone)}; max-age=${7 * 24 * 60 * 60}`;

    // document.getElementById("header-name").innerHTML = name;
    // document.getElementById("footer-phone").innerHTML = phone;
    error.innerHTML = "";
    console.log("success");
    console.log(document.cookie);
    result.textContent = "Data Saved!";
    
}


const cookies = document.getElementById("cookies");
cookies.addEventListener("submit", save_details_callback);
document.addEventListener("DOMContentLoaded", load_details_callback);

