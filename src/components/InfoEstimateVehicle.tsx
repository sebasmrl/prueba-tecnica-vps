import { useEffect, useState } from "react";
import { CurrencyResponse } from "../api/currencyApi";
import { useVehicleInformation } from "../hooks"
import { DataForm } from "../interfaces/vehicle.interface"
import { calcTax } from "../helpers/calTax";

interface Props{
  data: DataForm
}

export const InfoEstimateVehicle = ({data}:Props) => {

  const { dataVehicle } = useVehicleInformation(data);
  const conversion = CurrencyResponse.data.COP.value;

  const [copValue, setCopValue] = useState("");

  useEffect(() => {
    setCopValue("");
  },[data])
  
  

  return (

    <article className={`transition flex flex-col bg-slate-100 shadow-md rounded-md p-10 px-20 gap-1  w-dvw md:w-7/12 self-center`}>
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
                    setCopValue("COP "+(Number(dataVehicle?.Valor.split(' ')[1].split(',')[0].replace('.',''))*conversion).toFixed(2));
                }}
            >Convertir a pesos</button>
            
          </div>
          <p><span className="font-semibold">Impuesto: </span> <span>{`${calcTax(copValue,dataVehicle)[1]}`}</span> : <span>{`COP ${calcTax(copValue, dataVehicle)[0]}`}</span></p>
        </article>
  )
}
