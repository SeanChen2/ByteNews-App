import { useState } from "react"
import { Link } from "react-router-dom"
import { SidebarData } from "./SidebarData"
import SearchBox from "./SearchBox"

export default function SideBar() {
    return (
        <div className="side-bar">
            <SearchBox/>
            <h1>Categories</h1>
            <ul className="side-bar-items">
                {SidebarData.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <Link to={item.path}> {item.title} </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}