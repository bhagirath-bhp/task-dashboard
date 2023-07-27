import React from 'react'

const Form2 = () => {
    return (
        <div className="flex-col justify-center p-5 bg-white">
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
        </div>
    )
}

export default Form2