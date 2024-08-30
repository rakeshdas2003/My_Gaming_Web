let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

function submitForm() {
    const messageElement = document.getElementById('message');
    messageElement.innerHTML = ''; // Clear previous messages

    
    setTimeout(function(){
        alert("'Thank you for joining the clan!'");
    },300);

    /*const messageText = document.createTextNode('Thank you for submitting this form');
    messageElement.appendChild(messageText);*/
}