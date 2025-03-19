import style from "./NavBar.module.css"

import { Outlet, Link } from "react-router";
import { useState, useEffect } from "react";

export default function NavBar() {
    return <main id={style.main}>
        <nav id={style.navbar}>
            <Link to="./posts">posts</Link>            
            <Link to="./create-post">create</Link>
        </nav>
        <Outlet/>
    </main>
}