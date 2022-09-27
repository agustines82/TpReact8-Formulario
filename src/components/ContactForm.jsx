import React from "react";
import { useForm } from "../hooks/useForm";

import "../App.css";
//variable para darle los valores iniciales al formulario:
const initialForm = {
    name: "",
    lastname: "",
    dni: "",
    email: "",
};

//funcion para ejecutar validaciones del formulario:(recibe los datos del formulario y ejecuta la validacion)
const validationsForm = (form) => {
    //por cada error que haya en el formulario se creara una propiedad con ese error
    let errors = {};
    let regExNames = /^[a-zA-ZÀ-ÿ\s]{2,25}$/; // Letras y espacios, pueden llevar acentos.
    let regExEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    let regExDni = /^\d{7,8}$/; // 7 a 8 numeros.

    if (!form.name) {
        errors.name = "El campo Nombre es requerido.";
    } else if (!regExNames.test(form.name.trim())) {
        errors.name = "El campo Nombre solo acepta letras. Se requiere un minimo de 2 caracteres a un maximo de 25";
    }
    if (!form.lastname) {
        errors.lastname = "El campo Apellido es requerido.";
    } else if (!regExNames.test(form.lastname.trim())) {
        errors.lastname = "El campo Apellido solo acepta letras. Se requiere un minimo de 2 caracteres a un maximo de 25";
    }

    if (!form.dni) {
        errors.dni = "El campo DNI es requerido.";
    } else if (!regExDni.test(form.dni.trim())) {
        errors.dni = "El campo DNI solo acepta numeros. Se requiere un minimo de 7 caracteres a un maximo de 8";
    }

    if (!form.email) {
        errors.email = "El campo Email es requerido.";
    } else if (!regExEmail.test(form.email.trim())) {
        errors.email = "El campo Email es incorrecto";
    }
    return errors;
};

const ContactForm = () => {
    //desestructuramos el hook personalizado useForms.js
    const { form, errors, loading, response, handleChange, handleBlur, handleSubmit } = useForm(initialForm, validationsForm);
    return (
        <section className="container">
            <h2>Formulario de contacto</h2>

            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Nombre" onBlur={handleBlur} onChange={handleChange} value={form.name} required />
                {errors.name && <p className="lead text-danger mt-0 fs-6 ms-3">{errors.name}</p>}
                <input
                    type="text"
                    name="lastname"
                    placeholder="Apellido"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.lastname}
                    required
                />
                {errors.lastname && <p className="lead text-danger mt-0 fs-6 ms-3">{errors.lastname}</p>}
                <input type="number" name="dni" placeholder="DNI" onBlur={handleBlur} onChange={handleChange} value={form.dni} required />
                {errors.dni && <p className="lead text-danger mt-0 fs-6 ms-3">{errors.dni}</p>}
                <input type="email" name="email" placeholder="Email" onBlur={handleBlur} onChange={handleChange} value={form.email} required />
                {errors.email && <p className="lead text-danger mt-0 fs-6 ms-3">{errors.email}</p>}
                <button type="submit">Enviar</button>
            </form>
        </section>
    );
};

export default ContactForm;
