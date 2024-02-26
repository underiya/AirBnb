import React from "react";

function Review({ reviews }) {
  return (
    <div className="flex flex-col ml-[12%] flex-wrap justify-around">
      <h1 className="ml-8 font-extrabold  text-2xl">Reviews</h1>
      {reviews.map((review, index) => (
        <div
          key={index}
          className="max-w-sm rounded overflow-hidden m-4 border border-gray-200 sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
        >
          <div className="ml-8 w-12 h-12 mt-5 flex items-center justify-center bg-pink-300 rounded-full text-white text-2xl">
            {review.name.charAt(0)}
          </div>
          <div className="px-6 py-4">
            <span className="inline-block mt-1 rounded-full text-sm font-semibold text-gray-700 mr-2">
              {review.city}
            </span>
            <span className="inline-block rounded-full text-sm font-semibold text-gray-700">{`${review.rating} Rating`}</span>
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{review.name}</div>
            <p className="text-gray-700 text-base">{review.review_msg}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Review;
