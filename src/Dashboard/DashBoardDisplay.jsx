 import dashboard2 from '../assets/web logo/dashboard2.png'

const DashBoardDisplay = () => {
    return(
        <div className='w-full flex items-center justify-center p-2 md:p-5'>
             <div className=' mdborder md:h-[800px] md:bg-gradient-to-bl to-black/10 from-cyan-100 flex flex-col items-center border-cyan-200 justify-center md:w-[800px] rounded-full'>
                <h1 className='uppercase bg-cyan- px-5 py-1 rounded border border-cyan-200 shadow-xl font-mono font-bold text-gray-500 first-letter:text-xl'>welcome to your <span className='text-orange-500'>dashboard</span></h1>
                <img className=' mx-auto ' src={dashboard2} alt="" />
             </div>
        </div>
    )}
export default DashBoardDisplay;