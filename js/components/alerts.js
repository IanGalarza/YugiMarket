export function showCustomAlert(formDataObj) {
    return new Promise((resolve) => {
        const alertContainer = document.createElement('div');
        alertContainer.className = 'custom-alert';

        alertContainer.innerHTML = `
            <div class="alert-box">
                <h2 class="alert-title">¡Encuesta enviada con éxito!</h2>
                <hr>
                <div class="alert-content">
                    <div class="row">
                        <div class="field-group">
                            <label>Nombre:</label>
                            <div class="field-value">${formDataObj.nombre}</div>
                        </div>
                        <div class="field-group">
                            <label>Apellido:</label>
                            <div class="field-value">${formDataObj.apellido}</div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="field-group">
                            <label>Fecha de nacimiento:</label>
                            <div class="field-value">${formDataObj.fecha}</div>
                        </div>
                        <div class="field-group">
                            <label>Género:</label>
                            <div class="field-value">${formDataObj.sexo}</div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="field-group">
                            <label>Valoración:</label>
                            <div class="field-value">${formDataObj.valoracion}</div>
                        </div>
                        <div class="field-group">
                            <label>Email:</label>
                            <div class="field-value">${formDataObj.email}</div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="field-group full">
                            <label>Comentario:</label>
                            <div class="field-value comment-text">${formDataObj.comentario}</div>
                        </div>
                    </div>
                </div>
                <button class="alert-ok">Aceptar</button>
            </div>
        `;

        document.body.appendChild(alertContainer);

        alertContainer.querySelector('.alert-ok').addEventListener('click', () => {
            alertContainer.remove();
            resolve();
        });

        alertContainer.addEventListener('click', (event) => {
            const alertBox = alertContainer.querySelector('.alert-box');
            if (!alertBox.contains(event.target)) {
                alertContainer.remove();
                resolve();
            }
        });
    });
}


export function showCustomConfirm(title, description) {
    return new Promise((resolve) => {
        const confirmContainer = document.createElement('div');
        confirmContainer.className = 'custom-confirm';
        confirmContainer.innerHTML = `
            <div class="confirm-box">
                <h2 class="confirm-title">${title}</h2>
                <hr class="confirm-separator">
                <p class="confirm-description">${description}</p>
                <div class="confirm-buttons">
                    <button class="confirm-yes">Sí</button>
                    <button class="confirm-no">No</button>
                </div>
            </div>
        `;
        document.body.appendChild(confirmContainer);

        const confirmBox = confirmContainer.querySelector('.confirm-box');

        confirmContainer.querySelector('.confirm-yes').addEventListener('click', () => {
            confirmContainer.remove();
            resolve(true);
        });

        confirmContainer.querySelector('.confirm-no').addEventListener('click', () => {
            confirmContainer.remove();
            resolve(false);
        });

        confirmContainer.addEventListener('click', (event) => {
            if (!confirmBox.contains(event.target)) {
                confirmContainer.remove();
                resolve(false);
            }
        });
    });
}
