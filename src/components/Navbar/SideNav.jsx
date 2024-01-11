import { FiSearch } from "react-icons/fi";
import NavIcons from "./NavIcons";
import { PiButterflyFill } from "react-icons/pi";

const SideNav = () => {
    return (
        <div className="flex flex-col items-start gap-10 min-h-screen pt-5">
            <div className="flex flex-col gap-4 w-full items-center">
                <a className="text-2xl text-indigo-600" href="#"><PiButterflyFill /></a>
                <a className="text-xl text-slate-700" href="#"><FiSearch /></a>
            </div>
            <NavIcons />
        </div>
    );
};

export default SideNav;