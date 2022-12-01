import React, { Component } from "react";
import dynamic from 'next/dynamic'
    
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface GraProps{
  options:Object,
  series:[],
  type:String
}
function GraChart({options,series,type}:GraProps){

    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={options}
              series={series}
              type={type}
             
            />
          </div>
        </div>
      </div>
    );
  }

export default GraChart