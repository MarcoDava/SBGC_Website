import { Link } from 'react-router';
import Logo from '../../assets/Logo.jpg';
const Footer = () => {
    return(
        <div className="bg-[#26332A] h-[33vh] w-full flex justify-center items-center flex-col">
        <div className="pt-[5vh] bg-[#26332A]  h-full w-[80vw] flex justify-around items-center flex-row">
            <div className="flex h-full flex-col justify-start items-start text-white">
                <img src={Logo} className="h-[15vh]"></img>
            </div>
            <div className="flex h-full flex-col justify-start items-start text-white">
                <h3 className="font-bold mb-2">Navigation</h3>
                <Link to="/" className="mb-1">Home</Link>
                <Link to="/events" className="mb-1">Events</Link>
                <Link to="/contact" className="mb-1">Contact</Link>
                <Link to="/register" className="mb-1">Register</Link>
            </div>
            <div className="flex h-full flex-col justify-start items-start text-white">
                <h3 className="font-bold mb-2">Contact Us</h3>
                <p className="mb-1">Email:</p>
                <p className="mb-1">Phone:</p>
                <p className="mb-1">Address:</p>
            </div>
        </div>
        <hr className="border-t border-white w-full pt-[2vh]"></hr>
        <div className="text-white">
            <p className="pb-[2vh]">© 2026 SBGC All rights reserved.</p>
        </div>
        </div>
    )
}


export default Footer;