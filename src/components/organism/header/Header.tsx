import Image from "next/image";

export const Header = () => {
  return (
    <header className="flex justify-between items-center pl-4 pr-4 md:pl-[134px] md:pr-[150px] py-4 bg-white shadow-sm h-20">
      <div className="flex items-center">
        <Image
          src={"/images/supremegroup_logo.svg"}
          width={146.01}
          height={41}
          alt="logo"
        ></Image>
      </div>
      <div className=" items-center space-x-4 hidden md:flex">
        <a href="#contact" className="bg-buttonBlue font-manrope font-medium  text-base focus:bg-none rounded-full text-black px-[30px] py-[14px]  transition-colors">
          Contact Us
        </a>
        <Image
          src={"/images/linkedin.svg"}
          height={24}
          width={24}
          alt="linkedin"
        />
        <div className="flex gap-x-2">
          <Image
            src={"/images/language_logo.svg"}
            height={22}
            width={22}
            alt="translate"
          />
          <p className="text-black font-manrope text-xs font-semibold">ENG</p>
        </div>
      </div>
    </header>
  );
};
