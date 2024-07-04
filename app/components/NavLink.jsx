import Link from "next/link";

const NavLink = ({ href, title }) => {
    return (
        <Link 
        href={href} 
        className="block py-2 pl-3 pr-4 text-[#1A4D23] sm:text-xl rounded md:p-0 hover:text-black hover:bg-[#E8DFCA]"
        >
          {title}
      </Link> 
    );
};

export default NavLink;
