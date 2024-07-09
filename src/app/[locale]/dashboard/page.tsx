import { Plus } from 'lucide-react'
import React from 'react'

const Dashboard = () => {


    return (
        <div className={`flex min-h-[calc(100vh-50px)] px-[20px] md:px-[50px] xl:px-[80px]`}>
            <div className="flex justify-center items-center border w-full h-[50vh] rounded mt-[30px] text-center">
                {`Content`} <br />
                {`Reports`} <br />
                {`History`}
            </div>
            <div className="flex items-center justify-center fixed bottom-[5vh] right-[15px] md:right-[20px] w-[40px] h-[40px] rounded-[20px] bg-primary cursor-pointer">
                <Plus className="w-[30px] h-[30px] text-white" />
            </div>
        </div>
    )
}

export default Dashboard