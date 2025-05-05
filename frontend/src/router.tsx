
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";



export default function Router() {

    return ([
        <BrowserRouter>
        <Routes>
            <Route>                
                <Route path="/login" element={<LoginPage />} />
            </Route>
        </Routes>
        </BrowserRouter>
    ])
}