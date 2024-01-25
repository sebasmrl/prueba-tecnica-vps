import { ChangeEvent } from "react";
import { Options } from "../interfaces/vehicle.interface";

interface Props{
    value: string;
    titleInput: string;
    nameField: string;
    options?:  Options[];
    optionsTipo?: string[];
    handleChange: (event: ChangeEvent<HTMLSelectElement>)=> void;
}

export const InputOpcionVehicle = ( {value, titleInput, nameField, options, optionsTipo, handleChange}: Props) => {

  return (
    <div className="flex justify-between w-7/12  flex-nowrap mb-5 items-center gap-9" >
          <div className="flex flex-nowrap grow-3 justify-center">
            <span className="  text-start  w-20">{titleInput}: </span>
            <select className=" w-3/5  rounded-md  p-2 bg-slate-200 focus:border-0 selection:border-0 focus:outline-none" value={value} name={nameField} onChange={ handleChange} >
            <option value={""} key={""}>{"Selecciona una opción"}</option>
            {
              (optionsTipo != undefined)
                ?  optionsTipo.map( opt => {
                return <option value={opt} key={opt}>{opt}</option>
              })
              :
              options?.map( opt => {
                return <option value={opt.codigo} key={opt.codigo+opt.nome}>{opt.nome}</option>
              })
            }
            </select>
          </div>
          {/* Boton "Seleccionar" no necesario debido a que los valores Option en selectElements se manejan como estados de la aplicación */}
          {/* <button type="button" disabled className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm 
                         font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline 
                         focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >Seleccionar</button> */}
        </div>
  )
}
