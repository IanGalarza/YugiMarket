import { validateField, validateSurveyForm, validateRadioGroup } from "../components/validationHandler.js";
import { showCustomConfirm } from "../components/alerts.js";

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('surveyForm');

    form.addEventListener('submit', validateSurveyForm);

    form.querySelectorAll('input, textarea').forEach(field => {
        field.addEventListener('input', () => validateField(field));
    });

    ['sexo', 'valoracion'].forEach(groupName => {
        const radios = document.getElementsByName(groupName);
        radios.forEach(radio => {
            radio.addEventListener('input', () => {
                validateRadioGroup(groupName);
            });
        });
    });

    document.getElementById('resetBtn').addEventListener('click', () => {
        form.reset();
        form.querySelectorAll('.error-message').forEach(e => e.textContent = '');
        form.querySelectorAll('.input-error').forEach(e => e.classList.remove('input-error'));
    });

    document.getElementById('cancelBtn').addEventListener('click', async () => {
        const confirm = await showCustomConfirm(
            '¿Estás seguro de querer cancelar?',
            'Seleccioná “Sí” para volver a la página anterior o “No” para quedarte aquí.'
        );
        if (confirm) {
            window.history.back();
        }
    });
});
