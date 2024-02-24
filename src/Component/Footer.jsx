import FooterTop from "./FooterTop";
import Footerbottom from "./Footerbottom";

export default function Footer() {
  return (
    <>
      {" "}
      <div className="bg-[#dddddd] mt-[14px]">
        <FooterTop />

        <hr className=" border-t-[1px] border-gray-400 my-4" />

        <div className=" flex flex-col text-[18px] ml-[50px] md:flex-row justify-between w-[90%] md:w-[90%] lg:w-[90%] xl:w-[90%] mx-auto my-[20px] py-[30px]  ">
          <div className="mb-8 md:mb-0">
            <ul className="flex flex-col justify-between gap-[10px] text-slate-500">
              <li className="font-semibold text-black">Support</li>
              <li className="hover:underline">
                <a href="/">Help Centre</a>
              </li>
              <li className="hover:underline">
                <a href="/">AirCover</a>
              </li>
              <li className="hover:underline">
                <a href="/">Anti-discrimination</a>
              </li>
              <li className="hover:underline">
                <a href="/">Disability</a>
              </li>
              <li className="hover:underline">
                <a href="/">Cancellation options</a>
              </li>
              <li className="hover:underline">
                <a href="/">Report neighbourhood concern</a>
              </li>
            </ul>
          </div>
          <div className="mb-8 md:mb-0">
            <ul className="flex flex-col justify-between gap-[10px] text-slate-500">
              <li className="font-semibold text-black">Hosting</li>
              <li className="hover:underline">
                <a href="/">Airbnb your home</a>
              </li>
              <li className="hover:underline">
                <a href="/">AirCover for Hosts</a>
              </li>
              <li className="hover:underline">
                <a href="/">Hosting resources</a>
              </li>
              <li className="hover:underline">
                <a href="/">Community forum</a>
              </li>
              <li className="hover:underline">
                <a href="/">Hosting responsibly</a>
              </li>
              <li className="hover:underline">
                <a href="/">Join a free Hosting class</a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col justify-between gap-[10px] text-slate-500">
              <li className="font-semibold text-black">Airbnb</li>
              <li className="hover:underline">
                <a href="/">Newsroom</a>
              </li>
              <li className="hover:underline">
                <a href="/">New features</a>
              </li>
              <li className="hover:underline">
                <a href="/">Careers</a>
              </li>
              <li className="hover:underline">
                <a href="/">Investors</a>
              </li>
              <li className="hover:underline">
                <a href="/">Airbnb.org emergency stays</a>
              </li>
            </ul>
          </div>
        </div>
        <hr className=" border-t-[1px] border-gray-400 my-4 w-[90%] m-auto" />
        <Footerbottom />
      </div>
    </>
  );
}
