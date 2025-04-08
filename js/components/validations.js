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
        pattern: /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/,
        patternMessage: "La fecha ingresada no es válida. Use el formato dd-mm-aaaa y asegúrese de que sea una fecha real."
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