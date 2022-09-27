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
const validationsForm = () => {};

const ContactForm = () => {
    //desestructuramos el hook personalizado useForms.js
    const { form, errors, loading, response, handleChange, handleBlur, handleSubmit } = useForm(initialForm, validationsForm);
    return (
        <section className="container">
            <h2>Formulario de contacto</h2>

            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Nombre" onBlur={handleBlur} onChange={handleChange} value={form.name} required />
                <input
                    type="text"
                    name="lastname"
                    placeholder="Apellido"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.lastname}
                    required
                />
                <input type="number" name="dni" placeholder="DNI" onBlur={handleBlur} onChange={handleChange} value={form.dni} required />
                <input type="email" name="email" placeholder="Email" onBlur={handleBlur} onChange={handleChange} value={form.email} required />
                <button type="submit">Enviar</button>
            </form>
        </section>
    );
};

export default ContactForm;
