import Link from "next/link";
import MenuItems from "./MenuItems";

import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";

export default function Header() {
  return (
    <div className="max-w-6xl border-b-4 mx-auto p-3 flex justify-between items-center text-slate-100 text-xl">
      <div className="flex gap-4">
        <MenuItems title="home" address="/" Icon={AiFillHome} />
        <MenuItems title="about" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <Link
        className="text-2xl flex items-center justify-center font-bold bg-amber-500 py-1 px-1 rounded-lg"
        href={"/"}
      >
        clone
      </Link>
    </div>
  );
}
