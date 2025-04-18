import { Navitem } from "./Navitem";
import { Search } from "./search";
import { Link } from "react-router-dom";

export function Navbar(){
    return <nav>
        <ul>

            <li><Link to={'/'}>ShopCart</Link></li>
        </ul>
        <ul>
            <Navitem name='Category' link='/category'></Navitem>
            <Navitem name='Deals' link='#'></Navitem>
            <Navitem name="What'New" link='#'></Navitem>
            <Navitem name='Develery' link='#'></Navitem>
            <Search></Search>
            <Navitem name="Account" link='/login'></Navitem>
            <Navitem name='Cart' link='/cart'></Navitem>
        </ul>
    </nav>
}