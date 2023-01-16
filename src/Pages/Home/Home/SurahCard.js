import React from "react";
import { Link } from "react-router-dom";

const SurahCard = ({ surah }) => {
  const { id, transliteration, name, total_verses, translation } = surah;
  return (
    <Link to={`/surah/${id}`}>
      <div className="card bg-stone-600 text-stone-300 shadow-xl p-4 hover:bg-stone-500 hover:text-white">
        <div className="flex justify-between items-center ">
          <div className="flex gap-2 ">
            <div className="avatar placeholder">
              <div className="bg-neutral-focus text-neutral-content w-8 rounded">
                <span className="text-xs font-second">{id}</span>
              </div>
            </div>
            <div>
              <h3 className="font-bold font-second"> {transliteration}</h3>
              <p className="text-sm">{translation}</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold font-second">{name}</h4>
            <p className="font-second text-sm">ayah{total_verses}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SurahCard;
