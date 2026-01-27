import { createBrowserRouter } from "react-router";
import Homepage from "../Pages/Homepage/Homepage";
import Eventpage from "../Pages/Eventpage/Eventpage";
import Contactpage from "../Pages/Contactpage/Contactpage";
import Registerpage from "../Pages/Registerpage/Registerpage";
import App from "../App";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<App />,
        children:[
            {path: "", element: <Homepage />},
            {path: "events", element : <Eventpage />},
            {path: "contact", element : <Contactpage />},
            {path: "register", element: <Registerpage />}
            // {path: "codeofethics", element: <CodeOfEthicsPage />},
            // {path: "profile" ,element: <ProfilePage />},
            // {path: "aboutus", element: <AboutUsPage />},
            // {path: "aboutus/history", element: <HistoryPage />}
        ]
    }
])