var button = document.getElementById('send').addEventListener
('click',buttonClick);

function buttonClick(e){
    e.preventDefault();
    var form = document.querySelector('form');

    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var phone=document.getElementById('phone').value;
    var msg=document.getElementById('msg').value;

    if(!name || !email || !phone || !msg){
        alert('Please check your entries');
    }
    else{
    form.reset();
    console.log(msg);
    }
}