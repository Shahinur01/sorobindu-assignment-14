/* 
Alert function
*/
const setAlert = ( msg, type="danger") => {
return ` <p class="alert alert-${type} d-flex justify-content-between">${msg} <button data-dismiss="alert" class="btn-close"></button> </p>`
}
/* 
Email check
*/
const emailCheck = (email)=>{
    let pattern=/^[a-zA-Z0-9\._]{1,}@[a-zA-Z0-9]{1,}\.[a-zA-Z0-9]{3,}$/;
    return pattern.test(email);
}

/* 
Email check
*/
const cellCheck = (cell)=>{
    let pattern=/^(01|8801|\+8801)[0-9]{9}$/;
    return pattern.test(cell);
}

