import { VehicleInfo } from "../interfaces/vehicle.interface";

export const calcTax = (copValue:string, dataVehicle: VehicleInfo | undefined):string[] =>{
    const combustible = dataVehicle?.Combustivel;
    let value =0, taxPorcent="";

    if(copValue.length>0 && (combustible =="Gasolina") ){ 
      value=Number(copValue.split(' ')[1])*0.05;
      taxPorcent = "5%";
    }
    if(copValue.length>0 && (combustible =="Diesel") ){
       value=Number(copValue.split(' ')[1])*0.025;
       taxPorcent = "2.5%";
    }
    if(copValue.length>0 && (combustible =="Eléctrico") ){
       value=Number(copValue.split(' ')[1])*0.01;
       taxPorcent = "1%";
    }

    return [value.toFixed(2), taxPorcent];
  } 