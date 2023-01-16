import React from "react";

const DetailsCard = ({ surahDetails }) => {
  const { id, text, translation } = surahDetails;
  return (
    <div className="  card shadow-xl ">
      <div className="rounded-lg grid gap-5  bg-stone-600 text-stone-300 shadow-xl p-4 hover:bg-stone-500 hover:text-white">
        {/* <div className=" bg-slate-400"> */}
        <div className="flex justify-between">
          <div className="avatar placeholder">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-8 h-8">
              <span className="text-xs">{id}</span>
            </div>
          </div>
          <h2 className="font-bold text-3xl tracking-widest font-second">
            {text}
          </h2>
        </div>

        {/* </div> */}

        <h2 className="text-left font-bold lg:text-1xl sm:text-1xl tracking-wider font-second">
          {translation}
        </h2>
      </div>
    </div>
  );
};

export default DetailsCard;
