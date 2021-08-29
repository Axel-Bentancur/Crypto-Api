import React from "react";
import { Line } from "react-chartjs-2";
import moment from "moment";

export default function LineChart({ lista }) {
  function tiempo() {
    const timeLine = [];
    for (let i = 1; i <= 168; i++) {
      let hrs = moment().subtract(i, "hour").format("HH:00");
      let day = moment().subtract(i, "hour").format("ddd DD MMM YYYY, HH:00");
      if (hrs === "00:00") {
        timeLine.push(day);
      } else {
        timeLine.push(day);
      }
    }
    return timeLine.reverse();
  }
  const times = tiempo();

  const data = {
    labels: times, //-->Indicadores horizontal
    datasets: [
      {
        label: "Price", //-->Detalle del punto
        data: lista, //-->Puntos del diagrama
        backgroundColor: "#5e81ac57",
        borderWidth: 1, //--> Grosor de la linea
        pointRadius: 1,
        fill: "start", //-->fill color from start to line
        borderColor: function (context) {
          //-->Color de la linea
          var first = context.dataset.data[167];
          var last = context.dataset.data[0];
          return first > last
            ? "#8dc647" //draw positive en green
            : "#E15241"; // draw negative in red
        },
      },
    ],
  };

  const options = {
    elements: {
      point: {
        pointStyle: "rectRot", //-->pointer rectagle rotate
      },
    },
    responsive: true, //--> responsive
    plugins: {
      legend: {
        position: "top",
        display: false,
      }, //--> position y visualizacion del indicador.
      title: { text: "title grafic", display: true }, //--> texto y visualizacion del titulo del grafico.
    },
    scales: {
      x: {
        ticks: {
          callback: function (val, index) {
            // Hide the label of every 2nd dataset
            return index % 4 === 0 ? this.getLabelForValue(val) : "";
          },
          align: "start",
        },
        grid: {
          display: false, //--> dont show vertical lines
          drawBorder: true, //-->dont show border lines
          drawOnChartArea: true,
        },
      },
      y: {
        ticks: {
          callback: function (value, index, values) {
            return "$ " + value; //-->added $ to lateral bar
          },
        },
        grid: {
          display: true,
          drawBorder: false,
          drawOnChartArea: true,
        },
      },
    },
  };

  return (
    <div className="asd">
      <Line data={data} options={options} />
    </div>
  );
}

/*   function newList(e) {
    let newArray = [];
    for (let i = 0; i < e.length; i++) {
      newArray.push(e.splice(0, 24));
    }
    return newArray;
  } */
