import { ChangeEvent, FormEvent, useState } from "react";



/**
* 
* @param initialState 
* @returns '{ formData, handleChange, handleSubmit }'
* @author 'Sebastian Morales'
* @description 'useForm es un hook para trabajar con formularios sin importar el numero de entradas, 
sin embargo, sus valores "key" deben coincidir con la propiedad "name" de cada elemento input HTML' 
 */
export const useForm = <T>(initialState: T) => {

    
    const [formData, setFormData] = useState(initialState);

    const handleChange = ( e: (ChangeEvent<HTMLInputElement> ) )=>{
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
          });
    }
    
    const handleSelectChange = ( e: (ChangeEvent<HTMLSelectElement> ) )=>{
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
          });
    }

    const handleSubmit = async( e:FormEvent<HTMLFormElement>,  
            handleCallback: ()=> Promise<void> )=>{
        e.preventDefault();
        e.stopPropagation();
        await handleCallback();
    }
  
    const reinitalizeForm = ()=>{
        setFormData(initialState);
    }

   
    return {
        formData,
        handleChange,
        handleSelectChange,
        handleSubmit,
        reinitalizeForm,
    }
}