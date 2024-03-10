/* eslint-disable max-len */
import {useLocation} from 'react-router-dom';
const Allimages = () => {
  const images = useLocation();
  // console.log(images);
  return (
    <div className=" w-[75%] m-auto pt-[280px]">
      {images.state.map((el, i) => {
        return (
          <div
            key={i}
            className=" w-[80%] mx-auto  mt-[20px] flex justify-center justify-items-center"
          >
            <img src={el} alt="box" className="w-[600px] h-[500px]" />
          </div>
        );
      })}
    </div>
  );
};

export default Allimages;
