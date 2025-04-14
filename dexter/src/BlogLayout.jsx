import { Outlet } from "react-router-dom";

const BlogLayout = () =>{
    return(
        <>
            <header>Blog header</header>
            <main>{Outlet}</main>
            <footer>Blog footer</footer>
        </>
    )
}

export default BlogLayout