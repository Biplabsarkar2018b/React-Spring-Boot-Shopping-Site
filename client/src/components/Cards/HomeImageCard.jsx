import React from "react";

const HomeImageCard = ({img}) => {
  return (
    <div className="cursor-pointer flex border flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden mx-3">
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full"
          src={img}
          alt="Cloth Image"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">Notifier</h3>
        <p className="mt-2 text-sm text-gray-500">Men Shirt Cotton Blend</p>
      </div>
    </div>
  );
};

export default HomeImageCard;
