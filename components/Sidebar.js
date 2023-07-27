import React from 'react'

const Sidebar = () => {
    return (
        <aside className="sticky l-0 flex-col bg-neutral-900 py-5 px-7 text-white overflow-y-scroll sidebar">
            <div className="add border-b-1">
                <button className="flex bg-white rounded px-4 py-2 m-auto text-black">
                    <img src="/add_item.svg" className="h-3 m-auto mr-2" />
                    <span>New Item</span>
                </button>
            </div>
            <div className="collections mt-7">
                <div className="mb-5">
                    <div className="flex">
                        <div className='flex'>
                            <img src="/dashboard.svg" alt="" />
                            <h3 className="ml-2">Dashboard</h3>
                        </div>
                        <img src="/expand.svg" className="ml-20" />
                    </div>
                    <ul className="ml-7 mt-5">
                        <li className="mt-2">Commerce</li>
                        <li className="mt-2">Analytics</li>
                        <li className="mt-2">Crypto</li>
                        <li className="mt-2">Helpdesk</li>
                        <li className="mt-2">Monitoring</li>
                        <li className="mt-2">Fitness</li>
                    </ul>
                </div>
                <div className="flex my-6">
                    <div className='flex'>
                        <img src="/dashboard.svg" alt="" />
                        <h3 className="ml-2">Dashboard</h3>
                    </div>
                    <img src="/collapse.svg" className="ml-20" />
                </div>
                <div className="flex my-6">
                    <div className='flex'>
                        <img src="/dashboard.svg" alt="" />
                        <h3 className="ml-2">Dashboard</h3>
                    </div>
                    <img src="/collapse.svg" className="ml-20" />
                </div>
                <div className="flex my-6">
                    <div className='flex'>
                        <img src="/dashboard.svg" alt="" />
                        <h3 className="ml-2">Dashboard</h3>
                    </div>
                    <img src="/collapse.svg" className="ml-20" />
                </div>
                <div className="flex my-6">
                    <div className='flex'>
                        <img src="/dashboard.svg" alt="" />
                        <h3 className="ml-2">Dashboard</h3>
                    </div>
                    <img src="/collapse.svg" className="ml-20" />
                </div>
                <div className="flex my-6">
                    <div className='flex'>
                        <img src="/dashboard.svg" alt="" />
                        <h3 className="ml-2">Dashboard</h3>
                    </div>
                    <img src="/collapse.svg" className="ml-20" />
                </div>
                <div className="flex my-6">
                    <div className='flex'>
                        <img src="/dashboard.svg" alt="" />
                        <h3 className="ml-2">Dashboard</h3>
                    </div>
                    <img src="/collapse.svg" className="ml-20" />
                </div>
            </div>
        </aside>
    )
}

export default Sidebar