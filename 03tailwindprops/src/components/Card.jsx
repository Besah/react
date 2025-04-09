import React from "react";

function Card({ username = "Hc", post = "Not assigned yet" }) {
  //   console.log(props);

  return (
    <div>
      <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
        <div>
          <img
            className="size-48 shadow-xl rounded-md"
            alt=""
            src="https://www.pexels.com/photo/29421578/"
          />
        </div>
        <div className="flex items-center md:items-start">
          <span className="text-2xl font-medium">Class Warfare</span>
          <span className="font-medium text-sky-500">The Anti-Patterns</span>
          <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
            <span>No. 4</span>
            <span>·</span>
            <span>2025</span>
          </span>
          {post}
        </div>
      </div>

      {/* <img src="https://images.pexels.com/photos/29421579/pexels-photo-29421579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
      <h1 className="text-3xl bg-green-500 p-3 rounded-md">
        A card for photos
      </h1>
      <p>Supposed to have generated a lorem</p> */}
    </div>
  );
}

export default Card;
