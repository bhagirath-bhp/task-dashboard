import React from 'react'

const Header = () => {
    return (
        <header className="bg-black w-screen h-10 flex justify-between align-center text-white">
            <nav className="">
                <ul className="flex align-center justify-center h-full">
                    <li className="flex ml-3 mr-2">
                        <img src="/home.svg" className="h-4 m-auto mr-2" />
                        <p className="h-min m-auto">Home</p>
                    </li>
                    <li className="flex ml-3 mr-2">
                        <img src="/list-ul.svg" className="h-4 m-auto mr-2" />
                        <p className="h-min m-auto">Contents</p>
                    </li>
                    <li className="flex ml-3 mr-2">
                        <img src="/ui-alt.svg" className="h-4 m-auto mr-2" />
                        <p className="h-min m-auto">Categories</p>
                    </li>
                    <li className="flex ml-3 mr-2">
                        <img src="/settings.svg" className="h-4 m-auto mr-2" />
                        <p className="h-min m-auto">Settings</p>
                    </li>
                </ul>
            </nav>
            <div className="mt-auto mb-auto bg-white rounded-2xl text-black p-1 pr-2 flex">
                <img src="/Ellipse.png" className="h-6 mr-4" />
                <h3>hammer</h3>
            </div>
        </header>
    )
}

export default Header