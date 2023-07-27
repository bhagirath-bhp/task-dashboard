import Form1 from '@/components/Form1'
import Form2 from '@/components/Form2'
import Header from '@/components/Header'
import Main from '@/components/Main'
import MainNav from '@/components/MainNav'
import Sidebar from '@/components/Sidebar'
import React from 'react'



const Dashboard = () => {
    return (
        <div className="h-screen  flex-col justify-center align-center">
            <Header />
            <div className="flex ">
                <Sidebar />

                <div className="flex-col w-full h-full justify-center align-center bg-neutral-100">
                    <MainNav />
                    <div className="main-content flex-col w-full h-full justify-center align-center overflow-y-scroll overflow-x-hidden">
                        <Main />
                        <Form1 />
                        <Form2 />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard