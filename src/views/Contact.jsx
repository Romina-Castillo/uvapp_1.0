import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        user_email: '',
        message: ''
    });

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false); // Estado para el envío

    const navigate = useNavigate(); // Hook para redirección

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true); // Activa el estado de carga

        // EmailJS config
        const serviceID = 'service_otsq8qm';
        const templateID = 'template_ha4xep4';
        const userID = 'XlrdeTNKrhbMM7W8C';

        emailjs.send(serviceID, templateID, formData, userID)
            .then((response) => {
                setSuccessMessage('Mensaje enviado exitosamente!');
                setErrorMessage('');
                setSubmitted(true); // Marca como enviado
                setTimeout(() => {
                    navigate('/');
                }, 2000);
            })
            .catch((error) => {
                setErrorMessage('Hubo un error al enviar el mensaje, por favor intenta nuevamente.');
                setSuccessMessage('');
            })
            .finally(() => {
                setLoading(false); // Desactiva el estado de carga al finalizar
                // Restablecer el estado de envío después de un pequeño retraso
                if (submitted) {
                    setTimeout(() => {
                        setSubmitted(false);
                    }, 2000); // Mantiene el estado de envío por 2 segundos
                }
            });
    };

    return (
        <div className="contact-section">
            <div className="form-container">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Nombre</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Nombre"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="surname">Apellido</label>
                    <input
                        type="text"
                        id="surname"
                        name="surname"
                        placeholder="Apellido"
                        value={formData.surname}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="user_email">Email</label>
                    <input
                        type="email"
                        id="user_email"
                        name="user_email"
                        placeholder="Email"
                        value={formData.user_email}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="message">Mensaje</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Mensaje"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>

                    <button 
                        type="submit" 
                        disabled={loading}
                        className={loading ? 'loading' : submitted ? 'submitted' : ''}
                    >
                        {loading ? 'Cargando...' : submitted ? 'Enviado' : 'Enviar'}
                    </button>
                </form>

                {successMessage && <p className="success-message">{successMessage}</p>}
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </div>
        </div>
    );
};

export default Contact;

