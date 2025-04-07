export const validations = {
    nombre: {
        requiredMessage: "El nombre es obligatorio.",
        pattern: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
        patternMessage: "El nombre solo puede contener letras."
    },
    apellido: {
        requiredMessage: "El apellido es obligatorio.",
        pattern: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
        patternMessage: "El apellido solo puede contener letras."
    },
    fecha: {
        requiredMessage: "La fecha de nacimiento es obligatoria.",
        pattern: /^\d{4}-\d{2}-\d{2}$/,
        patternMessage: "Formato inválido. Ingrese una fecha con el formato dd-mm-aaaa."
    },
    sexo: {
        requiredMessage: "Seleccione una opción de género."
    },
    valoracion: {
        requiredMessage: "Seleccione una valoración."
    },
    email: {
        requiredMessage: "El correo electrónico es obligatorio.",
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        patternMessage: "El formato del correo no es válido."
    }
};