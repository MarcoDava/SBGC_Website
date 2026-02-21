import { useState } from "react";
import { Link } from "react-router";
import logo from '../../assets/Logo.jpg';
import { motion } from "motion/react";
import { Home, CalendarDays, Mail, UserPlus, Scale, Users } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home", Icon: Home },
  { to: "/events", label: "Events", Icon: CalendarDays },
  { to: "/contact", label: "Contact", Icon: Mail },
  { to: "/register", label: "Register", Icon: UserPlus },
  { to: "/codeofethics", label: "Code of Ethics", Icon: Scale },
  { to: "/aboutus", label: "About us", Icon: Users },
];

const Navbar = () => {
    const [expanded, setExpanded] = useState(false);
    return(
        <motion.div initial={{ opacity: 0, x: -200 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 3 }} className="fixed top-0 left-0 right-0 flex flex-row justify-start items-start h-full w-[15vh] z-50">
            <div className={`pt-[3vh] nav-container flex justify-start items-start flex-col gap-[5vh] bg-[#4a3636]/60 backdrop-blur-sm h-[100vh] shadow-lg/15 transition-all ${expanded ? "min-w-[260px] w-[260px]" : "w-[15vh]"}`}>
                <img className={`overflow-hidden transition-all rounded-[1vh] ${expanded ? "ml-5 h-[10vh]": "w-0"}`} src={logo} alt="Logo" decoding="async" />
                {navLinks.map(({ to, label, Icon }, i) => (
                  <Link
                    key={to}
                    to={to}
                    className={`overflow-hidden transition-all text-white flex items-center justify-start gap-[3vw] text-left ${expanded ? (i === 0 ? "mt-[7vh] w-full pl-5 pr-4" : "w-full pl-5 pr-4") : "w-0"}`}
                  >
                    <Icon size={22} className="flex-shrink-0" aria-hidden />
                    <span className="truncate">{label}</span>
                  </Link>
                ))}

            </div>
            <button className="ml-[2vh] mt-[2vh]" onClick={()=>setExpanded(curr=>!curr)}>{
            expanded ? 
            <div className="flex flex-row justify-center items-center bg-[#4a3636]/60 backdrop-blur-sm  h-[7vh] w-[7vh] p-[1.5vh] shadow-lg/15 rounded-[50%]">
                <img className="h-full" src="https://www.iconpacks.net/icons/2/free-arrow-left-icon-3099-thumb.png" alt="Expand" decoding="async" loading="lazy" width={24} height={24} />
            </div>    
                :
            <div className="flex flex-row justify-between items-center bg-[#4a3636]/60 backdrop-blur-sm h-[7vh] w-[14vh] p-[1.5vh] shadow-lg/15 rounded-[3.5vh]">
                <img className="h-[6vh] rounded-[1vh]" src={logo} alt="Logo" decoding="async" />
                <img className="h-full rotate-180" src="https://www.iconpacks.net/icons/2/free-arrow-left-icon-3099-thumb.png" alt="Collapse" decoding="async" loading="lazy" width={24} height={24} />
            </div>
            }</button>
        </motion.div>
    )
}

export function NavBarItems({}){
    return(
        <div/>
    )
}

export default Navbar;
