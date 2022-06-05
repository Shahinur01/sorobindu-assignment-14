const userCreateForm = document.getElementById('userCreateForm');
// userCreateForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     alert('Create')
// })
const msg=document.querySelector('.msg');
const nameReq=document.querySelector('.name-req');
const emailReq=document.querySelector('.email-req');
const cellReq=document.querySelector('.cell-req');

userCreateForm.onsubmit= (event) =>{
    event.preventDefault();

    let name=document.getElementById('Name');
    let email=document.getElementById('email');
    let cell=document.getElementById('Cell');
    let userName=document.getElementById('userName');
    


    // require fields
    if (name.value =='') {
        nameReq.innerHTML=`<span style="color:red">*Required</span> `;
    }
    else{
        nameReq.innerHTML=``;
    }
    if (email.value =='') {
        emailReq.innerHTML=`<span style="color:red">*Required</span> `;
    }
    else{
        emailReq.innerHTML=``;
    }

    if (cell.value =='') {
        cellReq.innerHTML=`<span style="color:red">*Required</span> `;
    }
    else{
        cellReq.innerHTML=``;
    }

    if (name.value == '' || email.value == '' || cell.value == '' || userName.value == '') {
        msg.innerHTML =setAlert('All fields are required');
    }
    else if (emailCheck(email.value)==false) {
        msg.innerHTML=setAlert('Invalid email address','warning');
    }
    else if (cellCheck(cell.value)==false) {
        msg.innerHTML=setAlert('Invalid phone number','info');
    }
    else{
        msg.innerHTML =setAlert('Fields are stable','success');
    }

}