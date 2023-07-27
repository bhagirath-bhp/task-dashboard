import Form1 from '@/components/Form1'
import Header from '@/components/Header'
import Main from '@/components/Main'
import MainNav from '@/components/MainNav'
import Sidebar from '@/components/Sidebar'
import React from 'react'



const Dashboard = () => {
    return (
        <div className="h-screen w-full flex-col justify-center align-center">
            <Header />
            <div className="flex ">
                <Sidebar />

                <div className="flex-col w-full h-full justify-center align-center">
                    <MainNav />
                    <div className="main-content flex-col w-full h-full justify-center align-center overflow-y-scroll overflow-x-hidden h-3/6">
                        <Main />
                        <Form1 />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard