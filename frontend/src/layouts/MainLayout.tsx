import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <>
            <header>
                Desktop Test App
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                Rodapé
            </footer>
        </>
    )
}