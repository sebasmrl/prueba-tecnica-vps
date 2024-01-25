import { useState } from "react";
import { CurrencyResponse } from "../api/currencyApi";
import { useVehicleInformation } from "../hooks"
import { DataForm } from "../interfaces/vehicle.interface"

interface Props{
  data: DataForm
}

export const InfoEstimateVehicle = ({data}:Props) => {


  const [copValue, setCopValue] = useState("");
 const { dataVehicle} = useVehicleInformation(data);
 console.log({dataVehicle})

 const conversion = CurrencyResponse.data.COP.value;
 console.log({conversion}, CurrencyResponse)

 console.log('conversion:', Number(dataVehicle?.Valor.split(' ')[1].split(',')[0]) );

  return (

    <article className={`flex flex-col bg-slate-100 shadow-md rounded-md p-10 px-20 gap-1  w-dvw md:w-7/12 self-center`}>
          <p><span className="font-semibold">Marca:</span> {dataVehicle?.Marca}</p>
          <p><span className="font-semibold">Modelo:</span> {dataVehicle?.Modelo}</p>
          <p><span className="font-semibold">Año:</span> {dataVehicle?.AnoModelo}</p>
          <p><span className="font-semibold">Combustible:</span> {dataVehicle?.Combustivel}</p>

          <div className=" flex gap-2 item">
            <span className="font-semibold">Valor: </span>
            <div className="flex flex-col w-4/12  ">
              <p><span> </span> {dataVehicle?.Valor || 'R$'}</p>
              <span id="cop-value"> { copValue}</span>
            </div>
            <button 
                type="button" 
                className="self-start rounded-md bg-indigo-600  px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={ ()=>{
                  //const $span = document.getElementById('cop-value');
                  setCopValue("COP "+Number(dataVehicle?.Valor.split(' ')[1].split(',')[0])*conversion);
                }}
            >Convertir a pesos</button>
          </div>
          <p><span className="font-semibold">Impuesto: </span> <span>5%</span> : <span>{Number(copValue.split(' ')[1])*0.05}</span></p>
        </article>
  )
}
