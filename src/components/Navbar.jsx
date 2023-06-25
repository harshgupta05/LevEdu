import './Navbar.css'
import { BsSearch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { IoIosCall } from "react-icons/io";
import logo from '../assets/logo-levEdu1.png'




function Navbar() {
    return (
        <div className='navbarContainer'>
        <img src={logo} alt="" />
            <p>                      </p>
            <p> Study Abroad</p>
            <p> Accomodation </p>
            <p> Test Prep </p>
            <p> Community </p>
            <p> Products </p>
            <p> More </p>
            <p> <BsSearch /></p>
            <p> <IoIosCall /></p>
            <p> <CgProfile/></p>
                  

        </div>
    )
}

export default Navbar