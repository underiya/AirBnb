/* eslint-disable max-len */
/* eslint-disable react/prop-types */
export default function HotelCard({data, checkOut, checkIn}) {
  const year = 2024; // You need to specify the year

  // Convert to a Date object
  const ChecKIdate = new Date(`${year}-${checkIn}`);
  const ChecKOdate = new Date(`${year}-${checkOut}`);
  // Format the date as YYYY-MM-DD
  const formattedCheckINDate = ChecKIdate.toISOString().split('T')[0];
  const formattedCheckOutDate = ChecKOdate.toISOString().split('T')[0];


  const checkInDate = new Date(formattedCheckINDate);
  const checkOutDate = new Date(formattedCheckOutDate);


  const timeDifference = checkOutDate.getTime() - checkInDate.getTime();
  const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));


  const totalP = data.price * daysDifference;

  const servceFees = 2910;
  let totalPayment = totalP + servceFees;
  totalPayment = totalPayment.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

  return (

    <div className="lg:h-auto md:h-auto  py-3">

      <div className="flex justify-between  items-center  gap-5  ">
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
              ★{data.rating}{' '}
              <span>({data.reviews && data.reviews.length + 'Reviews'})</span>
            </h3>
          )}
        </div>
      </div>
      <hr className="mt-3" />
      <h1 className="text-2xl font-semibold mt-3 ml-4">Price details</h1>
      <div className="flex justify-between  mt-3">
        <h3 className="ml-4">{`₹${data.price} x ${daysDifference} nights`}</h3>
        <h3 className="mr-4">{`₹${totalP}`}</h3>
      </div>

      <div className="flex justify-between mt-3">
        <h3 className="ml-4">Airbnb service fee</h3>
        <h3 className="mr-4">{`₹${servceFees}`}</h3>
      </div>

      <hr className="mt-2" />

      <div className="flex justify-between  mt-3  ">
        <h3 className="ml-4">Total (INR)</h3>
        <h3 className="mr-4">{`₹${totalPayment}`}</h3>
      </div>
    </div>
  );
}
