import React, { useState, useEffect } from "react";
import { getReport } from "../services/api";

const Report = () => {
  const [report, setReport] = useState([]);

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const { data } = await getReport();
        setReport(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchReport();
  }, []);

  return (
    <section class="text-gray-600 body-font bg-gray-800 h-screen">
        <h1 className="py-4 text-5xl text-gray-400 font-serif text-center">Weather Report</h1>
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
          {report.map((r, index) => (
            <div class="p-4 md:w-1/4">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                
                <div class="p-6">
                  <h1 class="title-font text-lg font-medium text-gray-600 mb-3">
                    {r.username}
                  </h1>
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    {r.city}
                  </h2>
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Report;
