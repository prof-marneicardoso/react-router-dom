import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Product } from "../Pages/Product";
import { About } from "../Pages/About";
import { NotFound } from "../Pages/NotFound";

export function AppRoutes() {
    return (
        // Lista de rotas
        <Routes>
            {/* Ao acessar a rota, carrega a página */}
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/index" element={<Home />} />

            <Route path="/product" element={<Product />} />
            <Route path="/produto" element={<Product />} />
            <Route path="/produtos" element={<Product />} />
            
            <Route path="/about" element={<About />} />

            {/* Qualquer rota não encontrada, será direcionada para NotFound */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
