import { Nav } from "../../components/nav/Nav"

export const Contact = () => {
    return (
        <div className="text-cyan-900 bg-gradient-to-r from-sky-100 to-zinc-50 w-screen">
            <div className="flex justify-center items-center h-full">
                <div className="w-[1400px] h-[900px] bg-white/85 rounded-2xl shadow-xl">
                    <div className="w-full h-full rounded-2xl grid grid-cols-4">
                        <Nav />
                        <main className="col-span-3 rounded-br-2xl rounded-tr-2xl p-5 bg-gray-50">
                            <h2 className="text-3xl mb-2">Contacto</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, dolorum, tempora vero hic placeat totam nihil nesciunt voluptatem nemo incidunt ex excepturi adipisci perspiciatis alias vitae nisi ipsa pariatur iure?</p>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    )
}