import { NavLink } from "react-router-dom"

export const Navbar = () => {
    return (
        <nav className="flex flex-nowrap sticky pt-8   justify-evenly p-10">
            <h1 className="text-3xl font-semibold px-7 text-indigo-500 ">Avalúa tu Vehiculo</h1>
            <div className="flex flex-nowrap gap-2  justify-around w-5/12  h-14 items-center">
                <NavLink to="/" className="hover:text-orange-500 transition ease-in-out delay-120 hover:scale-110 "  >Home</NavLink>
                <NavLink to="https://vpsnotas.com/sitio/nuestra-compania" className="hover:text-orange-500 transition ease-in-out delay-120 hover:scale-110" >¿Quienes Somos?</NavLink>
                <NavLink to="https://vpsnotas.com/sitio/nuestra-compania" className="hover:text-orange-500 transition ease-in-out delay-120 hover:scale-110">Productos y Servicios</NavLink>
                <NavLink to="https://vpsnotas.com/sitio/contactenos" className=" p-3  hover:text-white bg-orange-500 transition ease-in-out delay-120 hover:scale-110">Contactenos</NavLink>
            </div>
        </nav>
    )
}
