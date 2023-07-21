var email_re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var phone_re = /^\+?([0-9]{2})\)?([0-9]{11})$/;
var postal_re = /^\d{4}$/;
let x = true;
let decision = 1;



// define ui elements
let choice = document.querySelector('#chosed');
let validate_btn = document.querySelector('#validate-btn');


// add event listener
validate_btn.addEventListener('click', Validation);



// checking process
while (x == true) {
    decision = prompt(`
1. Email validation
2. Phone Number validation
3. Postal code validation

Type selected number(1/2/3)?:
`);

    switch (decision) {
        case '1':
            choice.innerHTML = `
            <div class="text-center" id="form_title">
                <h5> Email Validation</h5>
            </div>

            <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@gmail.com">
                <label for="floatingInput">Email address</label>
            </div>
            `
            x = false;
            break;
        case '2':
            choice.innerHTML = `
            <div class="text-center" id="form_title">
                <h5> Phone Number Validation</h5>
            </div>

            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="number" value="+88">
                <label for="floatingInputValue">Phone number</label>
            </div>
            `
            x = false;
            break;
        case '3':
            choice.innerHTML = `
            <div class="text-center" id="form_title">
                <h5> Postal Code Validation</h5>
            </div>

            <div class="form-floating mb-3">
                <input type="number" class="form-control" id="floatingInput" placeholder="number">
                <label for="floatingInput">Postal code</label>
            </div>
            `
            x = false;
            break;

        default:
            alert('please select again');
            break;
    }
}


// validate user input email/phone/postcode
function Validation(e){
    let inp = document.querySelector('#floatingInput');
    if(decision == 1){
        if(email_re.exec(inp.value)){
            alert("Valid Email")
        }else{alert('invalid')}
    }else if(decision == 2){
        if(phone_re.exec(inp.value)){
            alert("Valid Phone Number")
        }else{alert('invalid')}
    }else if (decision==3){
        if(postal_re.exec(inp.value)){
            alert("Valid Postal Code")
        }else{alert('invalid')}
    }
    // asking user if
    let z = prompt('go to home page?(y/n)');
    if(z=='y'){}
    else{
        e.preventDefault();
    }
}