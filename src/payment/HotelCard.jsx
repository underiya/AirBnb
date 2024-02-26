import React from "react";

export default function HotelCard({ data }) {
  const checkInDate = new Date(data.checkInDate);
  const checkOutDate = new Date(data.checkOutDate);
  console.log(data);

  const checkInDateNew = new Date(data.formData.checkInDate);
  const checkOutDateNew = new Date(data.formData.checkOutDate);

  const difference = checkOutDateNew.getTime() - checkInDateNew.getTime();

  const differenceIn = difference / (1000 * 3600 * 24);
  let totalP = data.price * differenceIn;
  console.log(differenceIn);
  const servceFees = 2910;
  let totalPayment = totalP + servceFees;
  totalPayment = totalPayment.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");

  return (
    // lg:w-6/12 md:w-96
    <div className="lg:h-auto md:h-auto ">
      {/* w-40 md:w-72 lg:w-96 */}
      <div className="flex justify-between items-center mt-6 gap-5  ">
        {data && data.images && data.images.length > 0 && (
          <img
            className="ml-4 rounded-xl md:h-36 lg:h-24 md:w-36 lg:w-28 object-cover"
            src={data.images[0]}
            alt=""
          />
        )}
        <div className="mr-4 h-32 w-full">
          <h1 className="font-semibold ">{data.title}</h1>
          <p>{data.location}</p>
          <p>{data.nearBy}</p>
          {data.rating && (
            <h3 className="font-semibold">
              ★{data.rating}{" "}
              <span>({data.reviews && data.reviews.length + "Reviews"})</span>
            </h3>
          )}
        </div>
      </div>
      <hr className="mt-3" />
      <h1 className="text-2xl font-semibold mt-3 ml-4">Price details</h1>
      <div className="flex justify-between  mt-3">
        <h3 className="ml-4">{`₹${data.price} x ${differenceIn} nights`}</h3>
        <h3 className="mr-4">{`₹${totalP}`}</h3>
      </div>

      <div className="flex justify-between mt-3">
        <h3 className="ml-4">Airbnb service fee</h3>
        <h3 className="mr-4">{`₹${servceFees}`}</h3>
      </div>

      <hr className="mt-2" />

      <div className="flex justify-between  mt-3 lg:mb-3 md:pb-5">
        <h3 className="ml-4">Total (INR)</h3>
        <h3 className="mr-4">{`₹${totalPayment}`}</h3>
      </div>
    </div>
  );
}
