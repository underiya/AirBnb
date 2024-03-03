const Maps = ({ map_location, locationName }) => {
  // const lat=map_location.lat;
  // const long=map_location.long;
  const key = "AIzaSyDrJyW7ZQyuXHg2hkCrCUtIDwbyzBkV7_E";
  return (
    <div
      className="App w-[90%] m-auto border-[1px] rounded-[14px] "
      style={{ width: "90%", height: "500px", position: "relative" }}
    >
      <h1 className="text-center font-bold text-[32px] p-[10px] font-serif">
        Map
      </h1>
      {map_location && map_location.lat && map_location.long && (
        <div>
          <iframe
            title="Map"
            width="100%"
            height="500"
            frameBorder="0"
            style={{
              border: 0,
            }}
            src={`https://www.google.com/maps/embed/v1/view?key=${key}&center=${map_location.lat},${map_location.long}&zoom=15`}
            allowFullScreen
          ></iframe>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <img
              src="https://maps.google.com/mapfiles/ms/icons/red-dot.png"
              alt="marker"
              style={{ width: "32px", height: "30px" }}
              title={locationName}
            />
          </div>
        </div>
      )}{" "}
    </div>
  );
};

export default Maps;
