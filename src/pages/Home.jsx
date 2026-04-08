import Sidebar from "../components/Sidebar.jsx";
import {useState} from "react";
import Header from "../components/Header.jsx";
import {Outlet} from "react-router-dom";
import Tabs from "../components/Tabs.jsx";
import ProfileInfo from "../components/ProfileInfo.jsx";
import Footer from "../components/Footer.jsx";

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
            <div className="flex flex-col min-h-screen">
                <Header open={openSidebar} toggleSide={toggleSide} rightSide={isSide}/>
                <Sidebar close={closeSidebar} seeActive={isActive} />
                <Tabs/>
                <div className="flex-1 bg-[rgb(33_40_48)] border-t border-[rgb(61_68_77)]">
                    <div className="flex justify-center gap-6 mx-auto w-[1280px] px-8">
                        <div className="mt-8">
                            <ProfileInfo/>
                        </div>
                        <div className="w-[896px]">
                            <Outlet/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    )
}