const form=document.querySelector("form");
const fullname=document.getElementById("name");
const email=document.getElementById("email");
const subject=document.getElementById("subject");
const message=document.getElementById("message");


function sendEmail(){
const bodyMessage=`Full Nmae : ${fullname.value}<br> Email:${email.value}<br> Subject:${subject.value}<br> Message:${message.value}`
    email.send({
        Host : "smtp.elasticemail.com",
        Username : "sid.rk85211@gmail.com",
        Password : "DC33EBAC4F5208F8AAB5C339F06931FAA324",
        To : 'them@website.com',
        From : "sid.rk85211@gmail.com",
        Subject : subject.value,
        Body : bodyMessage,
    }).then(
      (message) => {
        if(message=="ok"){
            Swal.fire({
                title:"succesfully",
                text:"Message sent successfully",
                icon:"success"
              });
        }
      }
    );
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    sendEmail();
})