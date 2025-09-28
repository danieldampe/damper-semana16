import { Link } from "react-router-dom"
export const Nav = () => {
    return (
        <header className="col-span-1 rounded-bl-2xl rounded-tl-2xl">
            <h1 className="text-3xl font-bold text-center mt-4 uppercase">EjemploPost</h1>
            <nav className="mt-4">
                <ul>
                    <li>
                        <Link
                            className="border border-gray-200 block p-3 pl-4 m-2 rounded-2xl transition-all ease-in
                                        hover:shadow-xl"
                            to="/">Home</Link>
                    </li>
                    <li>
                        <Link
                            className="border border-gray-200 block p-3 pl-4 m-2 rounded-2xl transition-all ease-in
                                        hover:shadow-xl"
                            to="/post">Post</Link>
                    </li>
                    <li>
                        <Link
                            className="border border-gray-200 block p-3 pl-4 m-2 rounded-2xl transition-all ease-in
                                        hover:shadow-xl"
                            to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}