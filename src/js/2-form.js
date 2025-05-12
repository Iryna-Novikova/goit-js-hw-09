let formData = {
    email: '',
    message: '',
}

const formEl = document.querySelector(".feedback-form");
const localStrgFormKey = "feedback-form-state";

// читаємо дані зі сховища
// const formInStrg = localStorage.getItem(localStrgFormKey) ?? '';
// let FD = JSON.parse(formInStrg);
// console.log(FD);
// // if !(formInStrg === '') { 
// //     formData = JSON.parse(formInStrg);
// //     console.log(formData);git 
// // }
// console.log('in storage: ', formInStrg);

// прослуховувач події введення
formEl.addEventListener('input', heandlerFormInput);

function heandlerFormInput(evt) {
    const formDataField = evt.target.name;
    formData[formDataField] = evt.target.value.trim();
    localStorage.setItem(localStrgFormKey, JSON.stringify(formData));
};

// прослуховувач події відправлення форми
formEl.addEventListener('submit', heandlerFormSbmt);

function heandlerFormSbmt(evt) {
    evt.preventDefault();  

    if (formData.email === '' || formData.message === '') {
        alert("Fill please all fields");
    } else {
        console.log(formData);
        localStorage.removeItem(localStrgFormKey);
        formEl.reset();
    }  
 }

