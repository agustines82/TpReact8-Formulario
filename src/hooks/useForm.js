//useForm.js se usara para la logica del formulario, es un hook personalizado. Abstraigo la logica del formulario en este hook de manera que el codigo del componente Formulario se verá mas limpio
//los hooks personalizados no se exportan por manera default (para que se respete el nombre del archivo)
import { useState } from "react";

//los valores iniciales del formulario los va a recibir este hook personalizado como parametro:
//en el metodo handleBlur se van a desencadenar las validaciones por lo que al useForm le pasamos una funcion para validar validateForm (que va a recibir el hook personalizado con todas las validaciones del formulario)

export const useForm = (initialForm, validateForm) => {
    //VARIBLES DE ESTADO QUE CONTROLAN EL FOMULARIO
    const [form, setForm] = useState(initialForm);
    //para el manejo de los errores usaremos otro state que inicializaremos con un objeto vacio (si esta vacio entonces todo se valido bien / si contiene algo pues entonces hay un error):
    const [errors, setErrors] = useState({});
    //para el evento que envia el formulario contemplamo un proceso de loading:
    const [loading, setLoading] = useState(false);
    //para recibir la respuesta del envio creamos otro estado:
    const [response, setResponse] = useState(null);

    //declaramos las funciones que posteriormente en los elementos jsx del Formulario vamos a ejecutar en los eventos:
    const handleChange = (e) => {
        //desestructuro el name y el value del objeto e.tarjet:
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };
    const handleBlur = (e) => {
        //actualizar la variable del form
        handleChange(e);
        //actualiza la variable setError (se ejecuta la funcion de validacion y evalua c/u de las variables del formulario que corresponden a c/u de los inputs).
        setErrors(validateForm(form));
    };
    const handleSubmit = (e) => {};

    //vamos a retornar un objeto con las variables deestado
    return {
        form,
        errors,
        loading,
        response,
        handleChange,
        handleBlur,
        handleSubmit,
    };
};
