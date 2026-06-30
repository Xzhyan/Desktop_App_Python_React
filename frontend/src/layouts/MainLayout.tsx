import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <>
            <header className="bg-green-950 text-center p-2 shadow-md">
                <h1>Desktop Test App</h1>
            </header>

            <nav>
                <ul>
                    <a href=""></a>
                </ul>
            </nav>

            <main className="flex justify-center">
                <Outlet />
            </main>
        </>
    )
}