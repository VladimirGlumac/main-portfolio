import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/Logo.png";

export const Footer = () => {
  return (
    <footer className="footer border border-t-[orange] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <Link className="p-4" href="/">
          <Image src={logo} height={50} width={50} alt="logo" />
        </Link>
        <p className="text-orange-300">
          Created by Vladimir Glumac 2024 - All rights reserved.
        </p>
      </div>
    </footer>
  );
};
