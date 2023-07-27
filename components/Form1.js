import React from 'react'

const Form1 = () => {
    return (
        <div className="flex-col justify-center w-full p-5 bg-white">
            <div className="header">
                <h3 className="text-xl font-bold">Form Title</h3>
                <p className="text-xs text-neutral-500">Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.</p>
            </div>
            <div class="bg-red-50 border border-red-400 text-red-900 px-3 py-2 rounded relative my-2" role="alert">
                <img src="/alert.svg" className="block sm:inline mr-3 my-auto h-4" />
                <span class="block sm:inline">Something seriously bad happened.</span>
            </div>
            <div className="table w-full rounded">
                <div class="flex flex-col">
                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div class="overflow-hidden rounded">
                                <table class="border-2 border-neutral-300 min-w-full text-center text-sm font-light">
                                    <thead
                                        class="border-b bg-neutral-300 font-medium text-black">
                                        <tr>
                                            <th scope="col" class="w-1/4 px-4 py-2">#</th>
                                            <th scope="col" class="w-1/4 px-4 py-2">First</th>
                                            <th scope="col" class="w-1/4 px-4 py-2">Last</th>
                                            <th scope="col" class="w-1/4 px-4 py-2">Handle</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="">
                                            <td class="whitespace-nowrap px-4 py-2 font-medium">1</td>
                                            <td class="whitespace-nowrap px-4 py-2">Mark</td>
                                            <td class="whitespace-nowrap px-4 py-2">Otto</td>
                                            <td class="whitespace-nowrap  px-4 py-2 flex justify-center align-center">
                                                {/* <img src="/ButtonEdit.svg" className="h-4" /> */}
                                                <button className="bg-blue-700 h-6 w-15 px-2 rounded text-white flex justify-center align-center mx-2">
                                                    <img src="/save.svg" className="h-3 block sm:inline my-auto" />
                                                    <p className="lh-2 block sm:inline mx-2 my-auto" >Edit</p>
                                                </button>
                                                <button className="bg-amber-600 h-6 w-15 px-2 rounded text-white flex justify-center align-center mx-2">
                                                    <img src="/save.svg" className="h-3 block sm:inline my-auto" />
                                                    <p className="lh-2 block sm:inline mx-2 my-auto" >Delete</p>
                                                </button>
                                            </td>
                                        </tr>
                                        <tr className="">
                                            <td class="whitespace-nowrap px-4 py-2 font-medium">1</td>
                                            <td class="whitespace-nowrap px-4 py-2">Mark</td>
                                            <td class="whitespace-nowrap px-4 py-2">Otto</td>
                                            <td class="whitespace-nowrap  px-4 py-2 flex justify-center align-center">
                                                {/* <img src="/ButtonEdit.svg" className="h-4" /> */}
                                                <button className="bg-blue-700 h-6 w-15 px-2 rounded text-white flex justify-center align-center mx-2">
                                                    <img src="/save.svg" className="h-3 block sm:inline my-auto" />
                                                    <p className="lh-2 block sm:inline mx-2 my-auto" >Edit</p>
                                                </button>
                                                <button className="bg-amber-600 h-6 w-15 px-2 rounded text-white flex justify-center align-center mx-2">
                                                    <img src="/save.svg" className="h-3 block sm:inline my-auto" />
                                                    <p className="lh-2 block sm:inline mx-2 my-auto" >Delete</p>
                                                </button>
                                            </td>
                                        </tr>
                                        <tr className="">
                                            <td class="whitespace-nowrap px-4 py-2 font-medium">1</td>
                                            <td class="whitespace-nowrap px-4 py-2">Mark</td>
                                            <td class="whitespace-nowrap px-4 py-2">Otto</td>
                                            <td class="whitespace-nowrap  px-4 py-2 flex justify-center align-center">
                                                {/* <img src="/ButtonEdit.svg" className="h-4" /> */}
                                                <button className="bg-blue-700 h-6 w-15 px-2 rounded text-white flex justify-center align-center mx-2">
                                                    <img src="/save.svg" className="h-3 block sm:inline my-auto" />
                                                    <p className="lh-2 block sm:inline mx-2 my-auto" >Edit</p>
                                                </button>
                                                <button className="bg-amber-600 h-6 w-15 px-2 rounded text-white flex justify-center align-center mx-2">
                                                    <img src="/save.svg" className="h-3 block sm:inline my-auto" />
                                                    <p className="lh-2 block sm:inline mx-2 my-auto" >Delete</p>
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="table-page flex justify-center gap-x-2 w-full align-center my-3">
                                    <img src="/Expand_left.svg" alt="" />
                                    <span className='text-center border w-5 h-5 leading-5 rounded text-xs'>1</span>
                                    <span className='text-center bg-blue-600 text-white border w-5 h-5 leading-5 rounded text-xs'>1</span>
                                    <span className='text-center border w-5 h-5 leading-5 rounded text-xs'>1</span>
                                    <img src="/Expand_right.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form1