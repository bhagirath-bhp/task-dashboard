import React from 'react'

const Form3 = () => {
    return (
        <div className="flex-col justify-center rounded p-5 bg-white w-full">
            <div className="header">
                <h3 className="text-xl font-bold">Form Title</h3>
                <p className="text-xs text-neutral-500">Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.</p>
            </div>
            <div className='flex '>
                <button className="bg-amber-200 h-6 w-15 px-2 rounded border border-amber-600 text-black flex justify-center align-center mx-2 s">
                    <img src="/england.svg" className="h-3 block sm:inline my-auto" />
                    <p className="lh-2 block sm:inline mx-2 my-auto" >English</p>
                </button>
                <button className="h-6 w-15 px-2 rounded border text-black flex justify-center align-center mx-2 s">
                    <img src="/turkey.svg" className="h-3 block sm:inline my-auto" />
                    <p className="lh-2 block sm:inline mx-2 my-auto" >Turkish</p>
                </button>
            </div>
            <form action="" className='w-full'>
                <div className='my-3'>
                    <label for='ip1' className='text-xs outline-none block sm:inline'>Label Title</label>
                    <input type="text" id='ip1' className='border outline-none rounded block w-full pl-3 placeholder:text-xs' placeholder='Placeholder Content' />
                </div>
                <div className='flex justify-center my-3 w-full'>
                    <div className='w-2/6'>
                        <label for='ip2' className='text-xs outline-none block'>Label Title</label>
                        <select className='border text-gray-400 outline-none rounded px-3 placeholder:text-xs text-xs h-6 w-11/12' placeholder='Placeholder Content' id='ip2'>
                            <option value="choose">choose</option>
                        </select>
                    </div>
                </div>
                <div>
                    <textarea name="" id="" cols="30" rows="10" className='border outline-none rounded placeholder:text-xs'></textarea>
                </div>
            </form>
        </div>
    )
}

export default Form3