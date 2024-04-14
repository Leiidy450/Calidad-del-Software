import http from 'k6/http';
import { check } from 'k6';

export default function () {
    // Definir las credenciales de inicio de sesión
    const email = 'masielgonzalez68@gmail.com';
    const password = 'Masiel2019ea1.123';

    // Definir la URL de la solicitud de inicio de sesión
    const url = 'https://www.linkedin.com/checkpoint/lg/sign-in-another-account';

    // Definir los datos de la solicitud de inicio de sesión
    const payload = {
        email: email,
        password: password
    };

    // Realizar la solicitud de inicio de sesión
    const response = http.post(url, payload);

    // Verificar si la solicitud fue exitosa
    check(response, {
        'Inicio de sesión exitoso': (res) => res.status === 200
    });
}
