import Link from "next/link";
import { RiAddLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center bg-blue-500 px-8 py-3 rounded-full text-center w-[800px]">
      <Link href="/addTodo" passHref legacyBehavior>
        <a className="text-white flex items-center">
          <span className="mr-1">Add Topic</span>
          <RiAddLine className="w-6 h-6" />
        </a>
      </Link>
    </nav>
  );
};

export default Navbar;
