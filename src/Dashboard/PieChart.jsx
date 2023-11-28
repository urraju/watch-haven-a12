

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const PieChart = ({ data }) => {
 
 
  const enitialValue = 12;
  const yourtPercentage = (getData.length / data.length) * 100;
  const yourRemaing = 100 - yourtPercentage;
  return (
    <div>
      <div className="flex justify-center items-center">
        
          <p className=" text-center text-2xl md:text-3xl lg:text-3xl font-semibold text-green-500">
            You Have No{" "}
            <span className=" text-cyan-500  font-black">Donate</span> any
            card...!
            <div>
              <Chart
                className="h-[40vh] flex flex-col-reverse"
                type="pie"
                width={400}
                height={500}
                series={data.review}
                options={{ labels: ["No Use Donation", "Total Donation"] }}
              />
            </div>
            <div>
              <Chart
                className="h-[40vh] flex flex-col-reverse"
                type="pie"
                width={400}
                height={500}
                series={data.post.lenght}
                options={{ labels: ["No Use Donation", "Total Donation"] }}
              />
            </div>
            <div>
              <Chart
                className="h-[40vh] flex flex-col-reverse"
                type="pie"
                width={400}
                height={500}
                series={data.product}
                options={{ labels: ["No Use Donation", "Total Donation"] }}
              />
            </div>
            
          </p>
        
      </div>
    </div>
  );
};

export default PieChart;
