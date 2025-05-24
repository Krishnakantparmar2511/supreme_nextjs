import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="relative bg-white pt-[49.6px] pb-12">
      <div className="w-[80%] md:w-[70%] my-[113.9px] mx-auto relative z-10">
        <div className="flex items-center mb-12">
          <Image
            src="/images/supremegroup_logo.svg"
            width={226}
            height={63}
            alt="logo"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[repeat(4,minmax(0,1fr))] md:gap-x-[120px]  w-full gap-y-8 gap-x-8 mb-12">
          <div className="">
            <h4 className="font-manrope font-bold text-base text-black mb-4">
              APPLICATIONS
            </h4>
            <ul className="space-y-2 mt-[20px] text-black opacity-70 font-manrope text-sm leading-[41px]">
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  Apparel
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  Automotive
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  Filtration
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  Customised Solutions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-manrope font-bold text-base text-black mb-4">
              COMPANY
            </h4>
            <ul className="space-y-2 text-black opacity-70 font-manrope text-sm leading-[41px]">
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  Innovation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  Global Competency
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-manrope font-bold text-base text-black mb-4">
              MORE
            </h4>
            <ul className="space-y-2 text-black opacity-70 font-manrope text-sm leading-[41px]">
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  Terms and Conditions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-manrope font-bold text-base text-black mb-4">
              FOLLOW US
            </h4>
            <ul className="space-y-2 text-black opacity-70 font-manrope text-sm leading-[41px]">
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  Medium
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-black opacity-70 font-manrope text-sm leading-[41px] flex flex-col md:flex-row justify-between pt-8  gap-y-2">
          <p>©2023. All Rights Reserved.</p>
          <p>Supreme House, 110, 11th Road Chembur, Mumbai - 400071</p>
        </div>
      </div>

      <img
        src="/images/shared/footerbottom.svg"
        alt="footer bottom logo"
        className="absolute bottom-0 right-0 w-[180px] sm:w-[250px] md:w-[300px] lg:w-[404.13px] h-auto"
      />
    </footer>
  );
};
