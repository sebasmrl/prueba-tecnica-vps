import {  useQuery } from "@tanstack/react-query";
import { estimateVehicleApi } from "../api/estimateVehicleApi";
import { DataForm, VehicleInfo } from "../interfaces/vehicle.interface";

interface Filter{
  tipo: string;
  codigoMarca?: string,
  codigoModelo?: string
}


export const useVehicle = <T>( { tipo, codigoMarca, codigoModelo }: Filter ) => {

    //console.log(tipo, codigoMarca, codigoModelo)
    let uri = `${tipo}/marcas`;
    const queryKey: string[] = ["vehiculo", tipo];


    if( codigoMarca ){
      uri= `${uri}/${codigoMarca}/modelos`;
      queryKey.push(codigoMarca);
      queryKey.push("modelos");
      //console.log("codigoMarca");

    }


 if(codigoModelo != undefined){
      uri= `${uri}/${codigoModelo}/anos`;
      queryKey.push(codigoModelo);
      queryKey.push("anos");
      //console.log("codigoModelo");
    } 


    const query = useQuery({  
        queryKey: queryKey,
        queryFn : async()=>{
          const { data } = await estimateVehicleApi.get<T>(uri);
          //console.log("peticion ejecutada")
          return data;
        },
        refetchInterval: 10000*20,
        retryDelay: 1000*20
      })


  return {
    data: query.data,
    isLoading: query.isLoading,
    isFetching: query.isFetching,
    isError: query.isError
  };


}


export const useVehicleInformation = (dataForm: DataForm)=>{

  //console.log('vehicleInformationExecute')
  let uri ='';
  if(dataForm.marca && dataForm.tipo && dataForm.modelo && dataForm.anos){
    uri=`${dataForm.tipo}/marcas/${dataForm.marca}/modelos/${dataForm.modelo}/anos/${dataForm.anos}`;
  }

  const queryVehicle = useQuery({
    queryKey: [ dataForm], 
    queryFn: async()=>{
      const { data } = await estimateVehicleApi.get<VehicleInfo>(uri);
      return data ;
    },
    refetchInterval: 10000*20,
    retryDelay: 1000*20
  }) 

  return {
    dataVehicle: queryVehicle.data,
    isFetching: queryVehicle.isFetching
  };
}


