
import HomePage from '../../Pages/HomePage/index'
import ErrorPage from '../../Pages/ErrorPage/index'
import Services from '../../Pages/Services/index'
import Contact from '../../Pages/Contact/index'
import Blog from '../../Pages/Blog/index'
import Project from '../../Pages/Project/index'


export const MyRoutes =[
    {id:1, path:"/", element:<HomePage/>, title:"Home"},
    {id:2, path:"/services", element:<Services/>, title:"Services"},
    {id:3, path:"/blog", element:<Blog/>, title:"Blog"},
    {id:4, path:"/project", element:<Project/>, title:"Project"},
    {id:5, path:"/contact", element:<Contact/>, title:"Contact"},
    {id:5, path:"*", element:<ErrorPage/>,}
]
