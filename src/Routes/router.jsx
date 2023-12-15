
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
import About from '../Pages/Home/About/About';
import Projects from '../Pages/Home/Projects/Projects';
import Contact from '../Pages/Home/Contact/Contact';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        // children: [
        //     {
        //         path: "/",
        //         element: <Home />,
        //     },
        //     {
        //         path: "about",
        //         element: <About />,
        //     },
        //     {
        //         path: "projects",
        //         element: <Projects />,
        //     },
        //     {
        //         path: "contact",
        //         element: <Contact />,
        //     },
        // ],
    },
]);

export default router;
