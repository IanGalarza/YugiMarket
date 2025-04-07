import { validations } from "../components/validations.js";
import { showCustomAlert } from "../components/alerts.js";


export function createErrorElement(field) {

    const error = document.createElement('span');

    error.classList.add('error-message');

    field.closest('.form-group')?.appendChild(error);

    return error;
}

export function validateField(field) {

    const { value, name } = field;

    const errorElement = field.closest('.form-group')?.querySelector('.error-message') || createErrorElement(field);

    let errorMessage = '';

    const validation = validations[name];

    if (!validation) return;


    if (value.trim() === '') {

        errorMessage = validation.requiredMessage;

    } else if (validation.pattern && !validation.pattern.test(value.trim())) {

        errorMessage = validation.patternMessage;
    }
    

    if (errorMessage) {

        errorElement.textContent = errorMessage;

        errorElement.style.display = 'block';

        field.classList.add('input-error');

    } else {

        errorElement.textContent = '';

        errorElement.style.display = 'none';

        field.classList.remove('input-error');
    }
}

export function validateSurveyForm(event) {

    event.preventDefault();

    let isValid = true;

    const form = document.getElementById('surveyForm');

    const elements = form.querySelectorAll('input, textarea');

    elements.forEach(field => {

        validateField(field);

        if (field.classList.contains('input-error')) {

            isValid = false;

        }
    });

    ['sexo', 'valoracion'].forEach(groupName => {

        const valid = validateRadioGroup(groupName);

        if (!valid) isValid = false;

    });
        

    if (isValid) {

        const formData = new FormData(form);

        const data = Object.fromEntries(formData.entries());
    
        form.reset();

        showCustomAlert(data);
    }
}

export function validateRadioGroup(groupName) {

    const groupInputs = document.getElementsByName(groupName);

    const anyChecked = Array.from(groupInputs).some(input => input.checked);

    const wrapper = groupInputs[0].closest('.form-group') || groupInputs[0].closest('.form-row');

    if (!wrapper) return;

    let errorElement = wrapper.querySelector('.error-message');

    if (!errorElement) {

        errorElement = document.createElement('span');

        errorElement.classList.add('error-message');

        wrapper.appendChild(errorElement);
    }

    if (!anyChecked) {

        errorElement.textContent = validations[groupName].requiredMessage;

        errorElement.style.display = 'block';

        return false;

    } else {
        errorElement.textContent = '';

        errorElement.style.display = 'none';
        
        return true;
    }
}
