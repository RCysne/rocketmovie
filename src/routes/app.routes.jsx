import { Routes, Route } from 'react-router-dom';

// No app routes, estamos trabalhando apenas as rotas de dentro da aplicação. O usuário só tem acesso depois de logado (por isso SignIn e SignUp vão para outra pasta, a pasta de autenticação)

import { Home } from '../pages/Home';
import { News } from '../pages/News';
import { Profile } from '../pages/Profile';
import { Details } from '../pages/Details';


export function AppRoutes() {
    return (
        
        <Routes>
            <Route path='/' element={ <Home/> } />
            <Route path="/news" element={ <News/> } />
            <Route path="/profile" element={<Profile />} />
            <Route path="/details/:id" element={ <Details/> }  />

        </Routes>

    )
}