import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsCard from "./DetailsCard";
import kk from "../../../Images/Infinity-1s-200px (2).gif";

const SurahDetails = () => {
  const { surahId } = useParams();
  //   console.log(surahId);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/chapters/bn/${surahId}.json`
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setData(data);
      });
  }, []);

  return (
    <div className="  lg:w-[1100px]  mx-auto text-center">
      {loading && (
        <div className="h-[100vh] grid justify-center items-center">
          {/* <progress className="progress progress-primary w-56 "></progress> */}
          <img src={kk} alt="" />
        </div>
      )}
      <div className="my-9">
        {!loading && (
          <div className="grid gap-4">
            <h1 className="text-white text-5xl font-second">{data.name}</h1>
            <h1 className="text-white text-3xl tracking-wider font-second">
              بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ
            </h1>
          </div>
        )}
      </div>

      <div className=" grid gap-5">
        {data?.verses?.map((dt) => (
          <DetailsCard key={dt.id} surahDetails={dt}></DetailsCard>
        ))}
      </div>
    </div>
  );
};

export default SurahDetails;
