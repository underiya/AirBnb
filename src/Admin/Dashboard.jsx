import Chart from "react-apexcharts";
import { useState } from "react";
const Dashboard = () => {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  });
  const [donut, setDonut] = useState({
    options: {},
    series: [44, 55, 41, 17, 15],
    labels: ["A", "B", "C", "D", "E"],
  });
  return (
    <>
      <div className="flex gap-6 border px-6 py-6">
        <div className=" border-4 border-slate-400 bg-slate-100 flex w-1/5 ">
          <div className="p-3 items-center ">
            <h4 className="font-bold">Number of Users</h4>
            <h1 className="font-bold text-red-950">2M</h1>
          </div>
          <div className="p-3 bg-slate-200 items-center">
            <img
              src="https://icon-library.com/images/no-user-image-icon/no-user-image-icon-14.jpg"
              className="w-10"
              alt=""
            />
          </div>
        </div>
        <div className=" border-red-400 border-4 flex w-1/5 bg-red-100">
          <div className="p-3 items-center">
            <h4 className="font-bold">Number of Locations</h4>
            <h1 className="font-bold text-red-950">2M</h1>
          </div>
          <div className="p-3 bg-red-200 items-center">
            <img
              src="https://static.vecteezy.com/system/resources/previews/011/318/674/original/simple-map-location-icon-design-png.png"
              className="w-16"
              alt=""
            />
          </div>
        </div>

        <div className=" border-yellow-400 border-4 flex w-1/5 bg-yellow-100">
          <div className="p-3 items-center">
            <h4 className="font-bold">Total Revenue</h4>
            <h1 className="font-bold text-red-950">200M</h1>
          </div>
          <div className="p-3 bg-yellow-200 items-center">
            <img
              src="https://cdn-icons-png.freepik.com/512/4064/4064750.png"
              className="w-16"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex gap-10 flex-wrap justify-between px-6 items-center border py-6 my-14 ">
        <Chart
          options={state.options}
          series={state.series}
          type="bar"
          width="500"
        />
        <Chart
          options={donut.options}
          series={donut.series}
          type="donut"
          width="380"
        />
       
      </div>
      
    </>
  );
};

export default Dashboard;
