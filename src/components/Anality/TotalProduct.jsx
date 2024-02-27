import { useState } from "react"
import Chat from "react-apexcharts"
function TotalProduct() {
  // eslint-disable-next-line no-unused-vars
  const [Pie, setPie] = useState({
          
    series: [44, 55, 41, 17, 15],
    options: {
      chart: {
        type: 'donut',
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    },
  
  
  });
  
  return (
    <section className=" bg-red-400 h-[250px] p-3 pb-3">
      <h2 className=" text-3xl text-center mb-5">Total live Products</h2>
      <Chat options={Pie.options} series={Pie.series} type={Pie.options.chart.type}/>
    </section>
  )
}

export default TotalProduct