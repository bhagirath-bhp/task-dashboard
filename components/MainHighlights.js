import React from 'react'

const MainHighlights = () => {
  return (
    <div className="flex justify-evenly w-full rounded bg-neutral-100 py-4">
        <div className="flex p-7 pr-20 rounded w-fit bg-white">
            <img src="/shop.svg" alt="" />
            <div className="ml-3">
                <p className="text-xs text-gray-600">total sales</p>
                <h3 className="font-bold">$2456</h3>
            </div>
        </div>
        <div className="flex p-7 pr-20 rounded w-fit bg-white">
            <img src="/u_shop.svg" className="w-9" />
            <div className="ml-3">
                <p className="text-xs text-gray-600">total expenses</p>
                <h3 className="font-bold">$2456</h3>
            </div>
        </div>
        <div className="flex p-7 pr-20 rounded w-fit bg-white">
            <img src="/visitor.svg" className="w-9"  />
            <div className="ml-3">
                <p className="text-xs text-gray-600">total visitors</p>
                <h3 className="font-bold">$2456</h3>
            </div>
        </div>
        <div className="flex p-7 pr-20 rounded  w-fit bg-white">
            <img src="/order.svg" className="w-9" />
            <div className="ml-3">
                <p className="text-xs text-gray-600">total orders</p>
                <h3 className="font-bold">$2456</h3>
            </div>
        </div>
    </div>
  )
}

export default MainHighlights