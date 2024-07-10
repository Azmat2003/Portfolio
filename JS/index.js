const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
    let flag = 1;
    let inputs = document.getElementsByClassName("contact-inputs");
    for(let i=0; i<inputs.length; i++){
        if(inputs[i].value == ''){
            alert("Please Fll the Form Completely!");
            flag = 0;
        }
    }

    if(flag){
    const formData = new FormData(form);
    e.preventDefault();

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = json.message;
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
    }
});


let image = document.querySelector(".dp img")
image.addEventListener("mouseover",()=>{
    image.classList.add("animate__pulse")
    // image.classList.remove("animate__pulse");
    setTimeout(()=>{
        image.classList.remove("animate__pulse");
    }, 1000);
})

// let cards = document.querySelectorAll(".card");
// for(let i=0; i<cards.length; i++){
//     cards[i].addEventListener("mouseover",()=>{
//         cards[i].classList.add();
//     });
// }