//useForm.js se usara para la logica del formulario, es un hook personalizado. Abstraigo la logica del formulario en este hook de manera que el codigo del componente Formulario se verá mas limpio
//los hooks personalizados no se exportan por manera default (para que se respete el nombre del archivo)
import { useState } from "react";

//los valores iniciales del formulario los va a recibir este hook personalizado como parametro:
export const useForm = (initialForm) => {
    //VARIBLES DE ESTADO QUE CONTROLAN EL FOMULARIO
    const [form, setForm] = useState(initialForm);
    //para el manejo de los errores usaremos otro state que inicializaremos con un objeto vacio (si esta vacio entonces todo se valido bien / si contiene algo pues entonces hay un error):
    const [errors, setErrors] = useState({});
    //para el evento que envia el formulario contemplamo un proceso de loading:
    const [loading, setLoading] = useState(false);
    //para recibir la respuesta del envio creamos otro estado:
    const [response, setResponse] = useState(null);

    //declaramos las variables que posteriormente en los elementos jsx del Formulario vamos a ejecutar en los eventos:
    const handleChange = (e) => {};
    const handleBlur = (e) => {};
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