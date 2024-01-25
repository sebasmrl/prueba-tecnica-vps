import { Footer, InfoEstimateVehicle, InputOpcionVehicle, Navbar } from "../components"
//import { Loader } from "../shared/Loader";
import { useForm, useVehicle } from "../hooks"
import { TiposVehiculo, DataForm, Marca, Modelos, Anos } from "../interfaces/vehicle.interface";


export const HomePage = () => {



  const {formData, handleSelectChange, reinitalizeForm }= useForm<DataForm>({
    tipo: TiposVehiculo.empty,
    marca: '',
    modelo: '',
    anos: ''
  } );

   const marcas = useVehicle<Marca[]>({ tipo: formData.tipo });
   const modelos = useVehicle<Modelos>({ tipo: formData.tipo, codigoMarca: formData.marca});
   const anos = useVehicle<Anos[]>({ tipo: formData.tipo, codigoMarca: formData.marca, codigoModelo: formData.modelo});

   console.log({formData})
   

  return (
    <>
      <Navbar />
      
      <main className=" flex flex-col px-16 mt-14">
        <form className="flex flex-col  ">

          <button 
              type="button" 
              className="self-start rounded-md mb-4 bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick ={ ()=>{
                reinitalizeForm();
              }}
              >Limpiar</button>
              
          <br />

          {/* { marcas.isFetching  ||modelos.isFetching || anos.isFetching
            && <Loader />
           }  */}
          <InputOpcionVehicle 
              value={ formData.tipo}
              handleChange={ handleSelectChange }
              nameField="tipo" 
              titleInput="Tipo Vehiculo" 
              optionsTipo={[
                TiposVehiculo.carros, 
                TiposVehiculo.camiones, 
                TiposVehiculo.motos
              ]} 
          />

          
           <InputOpcionVehicle
              value={formData.marca}
              handleChange={ handleSelectChange } 
              nameField="marca" 
              titleInput="Marca" 
              options={
                marcas.data?.map( (marca)=>{
                  return {
                    codigo: marca.codigo+"",
                    nome: marca.nome,
                  }  ;
                }) || []
              } 
          />
          
          
          <InputOpcionVehicle 
              value={ formData.modelo}
              handleChange={ handleSelectChange }
              nameField="modelo" 
              titleInput="Modelo" 
              options={
                modelos.data?.modelos?.map( (marca)=>{
                  return {
                    codigo: marca.codigo+"",
                    nome:   marca.nome,
                  }  ;
                }) || []
              } 
          />
          
          <InputOpcionVehicle 
             value={ formData.anos}
             handleChange={ handleSelectChange }
             nameField="anos" 
             titleInput="Años" 
             options={
               anos?.data?.map( ano =>{
                return ano;
               }) || []
             } 
          />
        </form>

        <br />
        <InfoEstimateVehicle data={ formData }/>

      </main>


      <span className=" fixed bottom-auto  right-2 z-1 bg-slate-100 p-1 cursor-pointer active:scroll-smooth">
        <img className=" w-8" src="https://cdn.icon-icons.com/icons2/1883/PNG/512/caretsymbol_120671.png" alt="" />
      </span>
      <Footer />
    </>
  )
}
