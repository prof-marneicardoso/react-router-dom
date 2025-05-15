import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";
import { Main } from "../Components/Main";
import { Nav } from "../Components/Nav";

export function Product() {
    return (
        <>
        <Nav />
        <Header />
        <Main>
            <h1>Produtos</h1>
        </Main>
        <Footer />
        </>
    );
}
