let formData = {
    email: '',
    message: '',
}

const formEl = document.querySelector(".feedback-form");
const localStrgFormKey = "feedback-form-state";

// читаємо дані зі сховища
let formInStrg = '';
try {
    formInStrg = localStorage.getItem(localStrgFormKey) ?? '';
    formData = JSON.parse(formInStrg);
}  
catch (error) {
    console.log(error.name);
}

// formData = JSON.parse(formInStrg);
formEl.email.value = formData.email;
formEl.message.value = formData.message;
    
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
        formData.email = '';
        formData.message = '';
    }  
 }

