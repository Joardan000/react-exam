import Sidebar from "../components/Sidebar.jsx";
import {useState} from "react";
import Header from "../components/Header.jsx";
import {Outlet} from "react-router-dom";
import Tabs from "../components/Tabs.jsx";
import ProfileInfo from "../components/ProfileInfo.jsx";

export default function Home() {
    const [isActive, setIsActive] =
        useState(false)
    const [isSide,setIsSide] =useState(false)
    function toggleSide() {
        setIsSide(!isSide);
    }
    function openSidebar() {
        setIsActive(true)
    }
    function closeSidebar() {
        setIsActive(false)
    }

    return (
        <>
            <div className="overflow-y-hidden">
                <Header open={openSidebar} toggleSide={toggleSide} rightSide={isSide}/>
                <Sidebar close={closeSidebar} seeActive={isActive} />
                <Tabs/>
                <div className="bg-[rgb(33_40_48)] border-t border-[rgb(61_68_77)]">
                    <div className="flex justify-center gap-6 min-h-screen overflow-y-hidden mx-auto w-[1280px] px-8">
                        <div className="mt-8">
                            <ProfileInfo/>
                        </div>
                        <div className="w-[896px]">
                            <Outlet/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}