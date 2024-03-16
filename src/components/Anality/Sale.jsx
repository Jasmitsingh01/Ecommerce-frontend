/* eslint-disable no-unused-vars */
import {useState} from 'react';
import Chart from 'react-apexcharts';
function Sale() {
    
    const [Line, setLine] = useState({})
  return (
    <div className='border-2 min-h-[200px]'>
        <h2 className=" text-3xl text-center lg:text-start  mb-5">Sales </h2>
        {/* <Chart options={Line} series={Line.series} type={Line.chart.type} width={300}/> */}
    </div>
  )
}

export default Sale