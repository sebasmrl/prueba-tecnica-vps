import { Navbar } from "../components"

export const HomePage = () => {
  return (
    <>
      <Navbar />

      <main className="flex flex-col px-16 mt-14">
        <form className="flex flex-col  ">

          <button type="button" className="self-start rounded-md mb-4 bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Limpiar</button>
          <br />

          <div className="flex justify-between w-7/12 flex-nowrap mb-5 items-center gap-9" >
            <div className="flex flex-nowrap grow-3 ">
              <span className="text-start  grow-2 w-20">Tipo Vehiculo: </span>
              <select className="grow-2 rounded-md  p-2 bg-slate-200 focus:ring-blue-500 focus:border-blue-500 text-sm  focus:outline-none" name="tipo-vehiculo">
                <option className="text-sm rounded-2xl  " value="value1">Value 1</option>
                <option value="value2" selected>Value 2</option>
              </select>
            </div>
            <button type="button" className="grow-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Seleccionar</button>
          </div>


          <div className="flex justify-between w-7/12 flex-nowrap mb-5 items-center gap-9" >
            <div className="flex flex-nowrap grow-3 ">
              <span className="text-start  grow-2 w-20">Marca: </span>
              <select className="grow-2 rounded-md  p-2 bg-slate-200 focus:ring-blue-500 focus:border-blue-500 text-sm  focus:outline-none " name="tipo-vehiculo">
                <option value="value1">Value 1</option>
                <option value="value2" selected>Value 2</option>
              </select>
            </div>
            <button type="button" className="grow-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Seleccionar</button>
          </div>


          <div className="flex justify-between w-7/12 flex-nowrap mb-5 items-center gap-9" >
            <div className="flex flex-nowrap grow-3 ">
              <span className="text-start  grow-2 w-20">Modelo: </span>
              <select className="grow-2 rounded-md  p-2 bg-slate-200 focus:border-0 selection:border-0" name="tipo-vehiculo">
                <option value="value1">Value 1</option>
                <option value="value2" selected>Value 2</option>
              </select>
            </div>
            <button type="button" className="grow-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Seleccionar</button>
          </div>
          <div className="flex justify-between w-7/12  flex-nowrap mb-5 items-center gap-9" >
            <div className="flex flex-nowrap grow-3 ">
              <span className="text-start  grow-2 w-20">Año: </span>
              <select className="grow-2 rounded-md  p-2 bg-slate-200 focus:border-0 selection:border-0" name="tipo-vehiculo">
                <option value="value1">Value 1</option>
                <option value="value2" selected>Value 2</option>
              </select>
            </div>
            <button type="button" className="grow-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Seleccionar</button>
          </div>

        </form>
        <br />

        <article className="flex flex-col bg-slate-100 shadow-md rounded-md p-10 px-20 gap-1  w-dvw md:w-7/12 self-center">
          <p><span className="font-semibold">Marca:</span> Kia Motors</p>
          <p><span className="font-semibold">Modelo:</span> Sportage LX 2.0 16V Flex Mec</p>
          <p><span className="font-semibold">Año:</span> 2014</p>
          <p><span className="font-semibold">Combustible:</span> Gasolina</p>

          <div className=" flex gap-2 item">
            <span className="font-semibold">Valor: </span>
            <div className="flex flex-col w-4/12  ">
              <p><span>R$</span> 978567758</p>
              <span>COP 89.0898</span>
            </div>
            <button type="button" className="self-start rounded-md bg-indigo-600  px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Convertir a pesos</button>
          </div>
          <p><span className="font-semibold">Impuesto: </span> <span>5%</span> <span>3.453533,2</span></p>
        </article>
      </main>


      <span className="fixed bottom-auto  right-2 z-1 bg-slate-100 p-1 cursor-pointer active:scroll-smooth">
        <img className=" w-8" src="https://cdn.icon-icons.com/icons2/1883/PNG/512/caretsymbol_120671.png" alt="" />
      </span>
      <footer className="bg-indigo-700 text-white w-full sticky mt-20 px-20 flex justify-between p-6">
        <p>© 2019 <span className="text-orange-600 font-bold">VPS SOFTWARE</span>. Todos los derechos reservados.</p>
        <img src="https://vpsnotas.com/sitio/images/site/vps-software_logo.png" alt="logo-vps-software" />
      </footer>
    </>
  )
}
