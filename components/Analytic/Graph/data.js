import axios from "axios";
import { useEffect, useState } from "react";

// async function rData() {
let state;

axios
  .post("http://localhost:3001/api/sms/allsmsQ")
  .then((response) => {
    state = [0];
  })
  .catch((error) => console.log(error));
// }, []);

//   // const result = res;
//   // const aFr = [result[0].noc, result[1].noc, result[2].noc, result[3].noc];
//   // console.log(aFr, "yyyyyyyyyy");

//   return state;
// }
console.log(state);

// export const Data = {
//   options: {
//     chart: {
//       id: "basic-bar",
//     },

//     xaxis: {
//       categories: [1, 2, 3, 4],
//     },
//     stoke: {
//       curve: "smooth",
//     },
//     yaxis: [
//       {
//         labels: {
//           style: {
//             colors: "black",
//           },
//         },
//       },
//     ],
//     dataLabels: {
//       enabled: false,
//     },
//     fill: {
//       type: "gradient",
//       gradient: {
//         shadeIntensity: 1,
//         opacityFrom: 0.7,
//         opacityTo: 0.9,
//         stops: [0, 90, 100],
//       },
//     },
//   },
//   series: [
//     {
//       name: "series-1",
//       data: [8, 8, 89, 0],
//     },
//   ],
//   width: "100%",
//   height: 400,
// };

export const bardata = {
  options: {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
    stoke: {
      curve: "smooth",
    },
    yaxis: [
      {
        labels: {
          style: {
            colors: "black",
          },
        },
      },
    ],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100],
      },
    },
    dataLabels: {
      enabled: false,
    },
  },
  series: [
    {
      name: "series-1",
      data: [30, 20, 45, 100, 49, 60, 40, 91],
    },
  ],
};
export const donutdata = {
  options: {
    plotOptions: {
      pie: {
        donut: {
          size: "50%",
        },
      },
    },
  },
  series: [44, 55, 41, 17, 15],
  width: 200,
  height: 200,
};

export const multilinedata = {
  options: {
    chart: {
      type: "area",
    },
    dataLabels: {
      enabled: true,
    },
    stroke: {
      curve: "straight",
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100],
      },
    },
  },
  series: [
    {
      name: "Series 1",
      data: [45, 52, 38, 45, 19, 23, 2],
    },
    {
      name: "Series 2",
      data: [60, 80, 20, 35, 29, 90, 20],
    },
  ],
  width: 400,
  height: 400,
};

export const linedata = {
  options: {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
    dataLabels: {
      enabled: false,
    },
    yaxis: [
      {
        labels: {
          style: {
            colors: "black",
          },
        },
      },
    ],
    stroke: {
      curve: "straight",
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100],
      },
    },
  },
  series: [
    {
      name: "series-1",
      data: [30, 20, 45, 100, 49, 60, 40, 91],
    },
  ],
};
export const radialdata = {
  options: {
    chart: {
      height: 480,
      type: "radialBar",
    },
    colors: ["#20E647"],
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        track: {
          background: "#333",
          startAngle: -135,
          endAngle: 135,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            fontSize: "30px",
            show: true,
          },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "horizontal",
        gradientToColors: ["#87D4F9"],
        stops: [0, 100],
      },
    },
    stroke: {
      lineCap: "butt",
    },
    labels: ["Progress"],
  },
  series: [87],
};
