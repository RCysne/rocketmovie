import { Routes, Route } from 'react-router-dom';

// No app routes, estamos trabalhando apenas as rotas de dentro da aplicação. O usuário só tem acesso depois de logado (por isso SignIn e SignUp vão para outra pasta, a pasta de autenticação)

import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';



export function AuthRoutes() {
    return (
        
        <Routes>
            <Route path='/' element={ <SignIn/> } />
            <Route path="/register" element={ <SignUp/> } />
        </Routes>

    )
}