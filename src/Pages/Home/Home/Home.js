import React, { useEffect, useState } from "react";
// import Navbar from "../../Shared/Navbar/Navbar";
import SurahCard from "./SurahCard";
import kk from "../../../Images/Infinity-1s-200px (2).gif";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(
      "https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/chapters/bn/index.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setData(data);
      });
  }, []);

  // console.log(data);
  return (
    <div className="  lg:w-[1100px]  mx-auto">
      {loading && (
        <div className="h-[100vh] grid justify-center items-center">
          {/* <progress className="progress progress-primary w-56 "></progress> */}
          <img src={kk} alt="" />
        </div>
      )}
      <div className="mx-2">
        <div className="my-9">
          {!loading && (
            <h1 className="font-bold text-center text-2xl text-white font-second">
              The Holy Quran
            </h1>
          )}
        </div>

        <div className="grid mt-4 gap-6 sm:grid-cols-1 lg:grid-cols-3">
          {data?.map((dt) => (
            <SurahCard key={dt.id} surah={dt}></SurahCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
