import Link from "next/link";

const NavLink = ({ href, title }) => {
    return (
        <Link 
        href={href} 
        className="block py-2 pl-3 pr-4 text-[#33698d] sm:text-xl rounded md:p-0 hover:text-black hover:bg-[#b2dcd4]"
        >
          {title}
      </Link> 
    );
};

export default NavLink;