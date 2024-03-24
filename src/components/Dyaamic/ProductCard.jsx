import { useSelector } from 'react-redux';
import { FaRegStar } from "react-icons/fa";

function ProductCard() {
 const ActiveLocation=useSelector((state)=>state.Location.AdminSide);
    
  return (
    <div className='px-3'>
      <div className= ' relative mb-2'>
        <img src={'/bule_shoe.jpg'} alt="Product" className='object-cover w-[120px] h-[120px]  min-[545px]:w-[250px] min-[545px]:h-[250px]' />
        <span className=' absolute  bg-white rounded-full px-2 py-1 top-1 md:top-[10px] md:left-[10px] text-sm border-0 shadow-md'>Sale !</span>
      </div>
      <div>
        <div>
          <h4 className='font-semibold mb-2'>Dnk Bule shoes</h4>
          {
               ActiveLocation ?<>
               <p className=' text-green-400 font-bold'> Available : 223 </p>
               <p className=' text-red-400 font-bold'>Already sold : 1223 </p>
               
               </>:<p className=' text-gray-400'>Men</p>

          }
          <p className=' font-semibold mb-3'><span className={` ${ActiveLocation?`block `:`line-through text-gray-400`}`}> {ActiveLocation?'Actual Price :':null} $150.00</span>{ActiveLocation?'Sale Price :':null} $120.00</p>
          
          {
               ActiveLocation?
               <>
               <button className='text-blue-500 border-blue-400 border-2 px-3 rounded-xl mx-3'>Edit</button>
               <button className=' text-red-500 border-red-400 border-2 px-3  rounded-xl'>Delete</button>
               </>:
               <>     
            <div className='flex mb-3'>
               <div className=' bg-red-500 w-[15px] h-[15px] mb-2 rounded-full outline outline-1 p-2	 outline-offset-2  outline-black me-3 '></div>
               <div className=' bg-blue-500 w-[15px] h-[15px] mb-2 rounded-full outline outline-1 p-2	 outline-offset-2  outline-black me-3 '></div>
               <div className=' bg-green-500 w-[15px] h-[15px] mb-2 rounded-full outline outline-1 p-2	 outline-offset-2  outline-black '></div>
          </div>
          <div className='flex  w-[80px]'>
            <FaRegStar/><FaRegStar/><FaRegStar/><FaRegStar/><FaRegStar/>
          </div>
          </>

          }
        </div>
      </div>
    </div>
  )
}

export default ProductCard