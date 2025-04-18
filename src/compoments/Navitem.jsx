import { Link } from "react-router-dom"

export function Navitem({name, link}){
    return <li>
        <Link to={link}>{name}</Link>
    </li>
}