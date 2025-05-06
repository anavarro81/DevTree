
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AuthLayout from "./Layouts/AuthLayout";

export default function Router() {

    return ([
        <BrowserRouter>
        <Routes>
            <Route element={<AuthLayout />}>                
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Route>
        </Routes>
        </BrowserRouter>
    ])
}