
interface Props{
    titleInput: string;
    nameField: string;
    options: string[];
}

export const InputOpcionCar = ( {titleInput, nameField, options }: Props) => {
  return (
    <div className="flex justify-between w-7/12 border-2 flex-nowrap mb-5 items-center gap-9" >
          <div className="flex flex-nowrap grow-3">
            <span className="text-start grow-2 w-20">{titleInput}: </span>
            <select className="grow-2 rounded-md  p-2 bg-slate-200 focus:border-0 selection:border-0 focus:outline-none" name={nameField}>
            {
                options.map( opt => <option value={opt}>{opt}</option> )
            }
            </select>
          </div>
          <button type="button" className="grow-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm 
                         font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline 
                         focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >Seleccionar</button>
        </div>
  )
}
