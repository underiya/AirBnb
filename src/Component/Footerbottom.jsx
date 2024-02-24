export default function Footerbottom() {
  return (
    <div className="flex flex-col ml-[50px] pb-[30px] md:flex-row justify-between w-[90%] md:w-[90%] lg:[90%] xl:[90%]">
      <div className="mb-8 md:mb-0">
        <ul className="flex flex-col md:flex-row justify-between gap-2 text-gray-600 text-[16px]">
          <li>&copy; {new Date().getFullYear()} Airbnb Inc,.</li>
          <li className="hover:underline">
            <a
              href="https://www.airbnb.co.in/help/article/2855"
              target="_blank"
            >
              Privacy
            </a>
          </li>
          <li className="hover:underline">
            <a
              href="https://www.airbnb.co.in/help/article/2908"
              target="_blank"
            >
              Terms
            </a>
          </li>
          <li className="hover:underline">
            <a href="https://www.airbnb.co.in/sitemaps/v2" target="_blank">
              Sitemap
            </a>
          </li>
          <li className="hover:underline">
            <a
              href="https://www.airbnb.co.in/about/company-details"
              target="_blank"
            >
              Company Details
            </a>
          </li>
        </ul>
      </div>
      <div>
        <div className="social flex gap-2 text-gray-500 text-sm">
          <a
            href="https://www.facebook.com/AirbnbIndia"
            className="hover:underline"
          >
            <box-icon type="logo" name="facebook-square"></box-icon>
          </a>
          <a
            href="https://twitter.com/i/flow/login?redirect_after_login=%2Fairbnb_in"
            className="hover:underline"
          >
            <box-icon type="logo" name="twitter"></box-icon>
          </a>
          <a
            href="https://www.instagram.com/airbnb/"
            className="hover:underline"
          >
            <box-icon name="instagram" type="logo"></box-icon>
          </a>
        </div>
      </div>
    </div>
  );
}
