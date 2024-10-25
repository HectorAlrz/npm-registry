import React from "react";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";

function Header() {
  return (
    <div className="flex items-center justify-between px-4 border-b h-14 mb-8">
      <div className="w-full flex items-center space-x-2">
        <Link to="/" className="text-lg font-bold">
          NPM Registry
        </Link>
      </div>
      <div className="w-full max-x-xl ml-4">
        <SearchInput />
      </div>
    </div>
  );
}

export default Header;
