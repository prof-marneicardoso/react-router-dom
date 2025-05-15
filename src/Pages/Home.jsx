import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";
import { Main } from "../Components/Main";
import { Nav } from "../Components/Nav";

export function Home() {
    return (
        <>
        {/* Adiciona os Components */}
        <Nav />
        <Header />
        <Main>
            {/* children */}
            <h1>Bem-vindo(a)</h1>

            <p>Libero, eius ex tenetur aliquid vel cumque inventore. Debitis, porro? Totam minima, quisquam obcaecati id deserunt adipisci commodi rerum excepturi, praesentium earum provident officiis cupiditate nobis voluptatum, at molestias suscipit laudantium minus ea nulla. Accusantium ipsa ut vitae autem consectetur! Veniam illo ipsa sed nobis dolorum fuga minima soluta perferendis fugiat, hic provident dolor consequuntur explicabo officia reprehenderit quod corporis, ab reiciendis ex, recusandae repellat? Atque nobis deleniti dignissimos facilis non ducimus quo excepturi rerum ut voluptatibus? Quidem repellat, provident vitae perspiciatis quibusdam rem repudiandae laborum voluptate, cupiditate voluptatibus pariatur assumenda sequi!</p>
        </Main>
        <Footer />
        </>
    );
}
