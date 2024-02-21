// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Footer() {
  return (
    <>
      <div className=" bg-[#dddddd]">
        <div>
          <h1>Inspiration for future getaways</h1>
        </div>
        <hr className="border-t-2 border-gray-400 my-4" />

        <div className=" flex justify-between w-[90%] m-auto">
          <div>
            <ul>
              <li className=" font-semibold">Support </li>
              <li>Help Centre</li>
              <li>AirCover</li>
              <li> Anti-discrimination</li>
              <li>Disability</li>
              <li>Cancellation options</li>
              <li>Report neighbourhood concern</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className=" font-semibold">Hosting</li>
              <li>Airbnb your home</li>
              <li>AirCover for Hosts </li>
              <li>Hosting resources</li>
              <li>Community forum </li>
              <li>Hosting responsibly</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className=" font-semibold"> Airbnb</li>
              <li> Newsroom</li>
              <li> New features</li>
              <li> Careers</li>
              <li> Investors</li>
              <li> Airbnb.org emergency stays</li>
            </ul>
          </div>
        </div>

        <hr className="border-t-2 border-gray-400 my-4 mx-auto w-[95%]" />
        <div className="social w-[90%] m-auto flex justify-between">
          <div>
            <ul className="flex justify-between align-middle gap-3">
              <li>© 2024 Airbnb, Inc.</li>
              <li>Privacy</li>
              <li>Terms</li>
              <li>Sitemap</li>
              <li>Company details</li>
            </ul>
          </div>
          <div className=" flex gap-3 align-middle justify-items-center">
            <a href="/">
              <i className="fa-solid fa-globe"></i> English (IN)
            </a>
            <span>₹ INR</span>
            <i className="fa-brands fa-square-facebook text-3xl"></i>
            <i className="fa-brands fa-square-x-twitter text-3xl"></i>
            <i className="fa-brands fa-square-instagram text-3xl"></i>
          </div>
        </div>
      </div>
    </>
  );
}
