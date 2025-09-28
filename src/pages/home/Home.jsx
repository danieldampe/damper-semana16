import { Nav } from "../../components/nav/Nav"

export const Home = () => {
    return (
        <div className="text-cyan-900 bg-gradient-to-r from-sky-100 to-zinc-50 w-screen">
            <div className="flex justify-center items-center h-full">
                <div className="w-[1400px] h-[900px] bg-white/85 rounded-2xl shadow-xl">
                    <div className="w-full h-full rounded-2xl grid grid-cols-4">
                        <Nav/>
                        <main className="col-span-3 rounded-br-2xl rounded-tr-2xl p-5 bg-gray-50">
                            <h2 className="text-3xl mb-2">Inicio</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis provident fugit tempore molestias voluptatem quo molestiae porro quas amet unde, iste tempora non recusandae ab est, nesciunt vel libero voluptatum.</p>
                            <div className="flex justify-center items-center mt-4">
                                <img src="https://purina.com.pe/sites/default/files/2022-10/Que_debes_saber_antes_de_adoptar_un_gatito.jpg" className="rounded-2xl" alt="" />
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    )
}