import React from "react";

export default function StaysItems({ items }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 font-medium text-gray-700">
      {items.map((item, index) => {
        return (
          <div key={index} className="mt-5">
            <img
              src={item.photo}
              alt={item.title}
              className="rounded-lg w-full h-64 object-cover"
            />

            <div className="flex justify-between mt-2 text-sm">
              <div className="flex">
                {item.superHost ? (
                  <div className="border-solid border-2 border-gray-700 rounded-full px-2 font-bold mr-2">
                    SUPER HOST
                  </div>
                ) : null}
                <div className="text-gray-600">
                  {item.type} {item.beds ? `. ${item.beds} beds` : null}
                </div>
              </div>
              <div>{item.rating}</div>
            </div>

            <div className="text-sm font mt-2">
              Arty interior in 1900 wooden house
            </div>
          </div>
        );
      })}
    </div>
  );
}
