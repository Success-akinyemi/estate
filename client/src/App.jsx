import './App.css'
import Index from './Page/Index'

function App() {

  const topFunction = () =>  {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <div className="app">
            {/**Switcher */}
        <div className="fixed top-1/4 -left-2 z-3">
            <span className="relative inline-block rotate-90">
                <input type="checkbox" className="checkbox opacity-0 absolute" id="chk" />
                <label className="label bg-slate-900 dark:bg-white shadow dark:shadow-gray-700 cursor-pointer rounded-full flex justify-between items-center p-1 w-14 h-8" for="chk">
                    <i className="uil uil-moon text-[20px] text-yellow-500 mt-1"></i>
                    <i className="uil uil-sun text-[20px] text-yellow-500 mt-1"></i>
                    <span className="ball bg-white dark:bg-slate-900 rounded-full absolute top-[2px] start-[2px] w-7 h-7"></span>
                </label>
            </span>
        </div>
      {/**Switcher */}

        {/**LTR & RTL Mode Code */}
        <div className="fixed top-[40%] -left-3 z-50">
            <a href="#" id="switchRtl">
                <span className="py-1 px-3 relative inline-block rounded-b-md -rotate-90 bg-white dark:bg-slate-900 shadow-md dark:shadow dark:shadow-gray-800 font-semibold rtl:block ltr:hidden" >LTR</span>
                <span className="py-1 px-3 relative inline-block rounded-b-md -rotate-90 bg-white dark:bg-slate-900 shadow-md dark:shadow dark:shadow-gray-800 font-semibold ltr:block rtl:hidden">RTL</span>
            </a>
        </div>
        {/**LTR & RTL Mode Code */}

        <a href="#" onClick={topFunction} id="back-to-top" class="back-to-top fixed hidden text-lg rounded-full z-10 bottom-5 end-5 h-9 w-9 text-center bg-green-600 text-white justify-center items-center"><i class="uil uil-arrow-up"></i></a>

      <Index />
    </div>
  )
}

export default App
