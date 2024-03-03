import { useLocation } from "react-router-dom";
const Allimages = () => {
  const images = useLocation();
  console.log(images);
  return (
    <div className=" w-[75%] m-auto pt-6">
      {images.state.map((el, i) => {
        return (
          <div key={i}>
            <img src={el} alt="" />;
          </div>
        );
      })}
    </div>
  );
};

export default Allimages;
