import ConfirmMail from "../views/modules/authentication/confirm-mail";
import LockScreen from "../views/modules/authentication/lock-screen";
import LoginPage from "../views/modules/authentication/login";
import RecoverPassword from "../views/modules/authentication/recover-password";
import RegisterPage from "../views/modules/authentication/register";
import { Navigate } from "react-router-dom";

export const AuthRouter = [
    {
        path:"/",
        element:<Navigate to="/sign-in" />
    },
    {
        path:'/sign-in',
        element:<LoginPage/>
    },
    {
        path:'/sign-up',
        element:<RegisterPage/>
    },
    {
        path:'/recover-password',
        element:<RecoverPassword/>
    },
    {
        path:'/confirm-mail',
        element:<ConfirmMail/>
    },
    {
        path:'/lock-screen',
        element:<LockScreen/>
    }
]