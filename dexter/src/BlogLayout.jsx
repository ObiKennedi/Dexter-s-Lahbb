import { Outlet } from "react-router-dom"

const BlogLayout = () =>{
    return(
        <>
            <header>Blog</header>
            <Outlet/>
            <footer>Blog Footer</footer>
        </>
    )
}

export default BlogLayout