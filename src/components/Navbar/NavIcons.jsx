import { GoHome } from "react-icons/go";
import { RiPagesLine } from "react-icons/ri";
import { FaRegListAlt, FaRegUser } from "react-icons/fa";

const NavIcons = () => {
    return (
        <div className="flex flex-col gap-3 items-center w-full">
            <a href="#" className="text-xl p-2 rounded-lg text-slate-600 transition-all duration-300 hover:bg-indigo-600 hover:text-white"><GoHome /></a>
            <a href="#" className="text-xl p-2 rounded-lg text-slate-600 transition-all duration-300 hover:bg-indigo-600 hover:text-white"><RiPagesLine /></a>
            <a href="#" className="text-xl p-2 rounded-lg text-slate-600 transition-all duration-300 hover:bg-indigo-600 hover:text-white"><FaRegListAlt /></a>
            <a href="#" className="text-xl p-2 rounded-lg text-slate-600 transition-all duration-300 hover:bg-indigo-600 hover:text-white"><FaRegUser /></a>
        </div>
    );
};

export default NavIcons;