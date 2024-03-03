import { useLocation } from "react-router-dom";
const Allimages = () => {
  const images = useLocation();
  console.log(images);
  return (
    <div className=" m-auto">
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
