import React from 'react'

const MainNav = () => {
    return (
        <div className=" pl-2 pr-2 mt-4">
            <nav className="flex justify-between">
                <ul className="flex align-center justify-center h-full">
                    <h3 className="font-bold">Add new post</h3>
                    <li className="flex ml-3 mr-2">
                        <img src="/list-ul.svg" className="h-4 m-auto mr-2" />
                        <p className="h-min m-auto">Add Content</p>
                    </li>
                    <li className="flex ml-3 mr-2">
                        <img src="/settings.svg" className="h-4 m-auto mr-2" />
                        <p className="h-min m-auto">Settings</p>
                    </li>
                </ul>
                <div>
                    <input
                        type="text"
                        className="min-h-[auto] rounded border bg-transparent px-3 py-[0.32rem] outline-none "
                        id="exampleFormControlInput2"
                        placeholder="Search Content" />
                </div>
            </nav>
        </div>
    )
}

export default MainNav