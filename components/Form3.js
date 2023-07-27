import React from 'react'

const Form3 = () => {
    return (
        <div className="flex justify-between rounded  my-7 bg-white w-full bg-gray-100">
            <div className='w-3/5 bg-white rounded p-10'>
                <div className="header">
                    <h3 className="text-xl font-bold">Form Title</h3>
                    <p className="text-xs text-neutral-500">Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.</p>
                </div>
                <form action="" className='w-full'>
                    <div className='my-3'>
                        <label for='ip1' className='text-xs outline-none block sm:inline'>Label Title</label>
                        <input type="text" id='ip1' className='border h-7 leading-8  outline-none rounded block w-full pl-3 placeholder:text-xs' placeholder='Placeholder Content' />
                    </div>
                    <div className='flex justify-center my-3 w-full'>
                        <div className='w-full'>
                            <label for='ip2' className='text-xs outline-none block'>Label Title</label>
                            <select className='border h-7 leading-8  text-gray-400 outline-none rounded px-3 placeholder:text-xs text-xs h-6 w-full' id='ip2'>
                                <option value="choose" className='border h-7 leading-8  text-gray-400 outline-none rounded px-3 placeholder:text-xs text-xs h-6 w-11/12'>choose</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex my-3 w-full'>
                        <div className='w-1/2'>
                            <label for='ip4' className='text-xs outline-none block'>Label Title</label>
                            <input type="text" id='ip4' className='border h-7 leading-8  outline-none rounded  pl-3 placeholder:text-xs w-11/12' placeholder='Placeholder Content' />
                        </div>
                        <div className='w-1/2'>
                            <label for='ip4' className='text-xs outline-none block'>Label Title</label>
                            <input type="text" id='ip4' className='border h-7 leading-8  outline-none rounded pl-3 placeholder:text-xs w-11/12' placeholder='Placeholder Content' />
                        </div>
                    </div>
                    <div>
                        <label for='ip5' className='text-xs outline-none block'>Label Title</label>
                        <textarea name="" id="ip5" cols="54" rows="5" className='border outline-none rounded placeholder:text-xs'></textarea>
                    </div>
                </form>
            </div>
            <div className='w-2/6 bg-white p-10'>
                <div className="header">
                    <h3 className="text-xl font-bold">Form Title</h3>
                </div>
                <form action="" className='w-full'>
                    <div className='my-3'>
                        <label for='ip6' className='text-xs outline-none block sm:inline'>Label Title</label>
                        <input type="text" id='ip6' className='border h-7 leading-8  outline-none rounded block w-full pl-3 placeholder:text-xs' placeholder='Placeholder Content' />
                    </div>
                    <div className='my-3'>
                        <label for='ip7' className='text-xs outline-none block'>Label Title</label>
                        <select className='border h-7 leading-8  text-gray-400 outline-none rounded px-3 placeholder:text-xs text-xs h-6 w-full' id='ip7'>
                            <option value="choose" className='border h-7 leading-8  text-gray-400 outline-none rounded px-3 placeholder:text-xs text-xs h-6 w-11/12'>choose</option>
                        </select>
                    </div>
                    <div className='my-3'>
                        <label for='ip8' className='text-xs outline-none block'>Label Title</label>
                        <textarea name="" id="ip8" cols="25" rows="5" className='border outline-none rounded placeholder:text-xs'></textarea>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form3