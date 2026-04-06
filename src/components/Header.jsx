import Sidebar from '../assets/sidebar.svg'
import Logo from '../assets/logo.svg'
import Search from '../assets/search.svg'
import Copilot from '../assets/copilot.svg'
import HeaderOption from '../assets/option.svg'
import PLus from '../assets/header-plus.svg'
import Issues from '../assets/issues.svg'
import PullRequest from '../assets/pull-request.svg'
import Repos from '../assets/repos.svg'
import Notification from '../assets/notification.svg'
import {useEffect, useState} from "react";
import customApi from "../api/useApi.js";
import {Link} from "react-router-dom";
import {RightSide} from "./RightSide.jsx";

export default function Header(props) {
    const openFunc = props.open
    const rightOpen = props.toggleSide
    const isRight = props.rightSide

    const [login, setLogin] = useState('')
    const [img, setImg] = useState('')

    async function getLogin() {
        try {
            let res = await customApi.get('/users/Joardan000')
            setLogin(res.data.login)
            setImg(res.data.avatar_url)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getLogin()
    }, [])

    return (
        <>
            <header className="bg-[#151B23]">
                <div className="flex w-full items-center justify-between pt-4 pb-1 px-4">
                    <div className="flex items-center gap-3">
                        <button onClick={openFunc}
                                className="rounded-[6px] border border-[rgb(61_68_77)] bg-[rgb(61, 68, 77)] w-8 h-8 flex items-center justify-center">
                            <img src={Sidebar} alt="sidebar-icon"/>
                        </button>
                        <img src={Logo} alt="logo-icon"/>
                        <Link to="/" className="px-[6px] -ml-1 rounded-[6px] cursor-pointer font-medium leading-6 text-[13px] hover:bg-[rgba(101_108_118/0.15)] text-[rgb(209_215_224)] py-1">{login}</Link>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-2">
                            <div
                                className="cursor-pointer flex text-[rgb(145,152,161)] w-[191px] h-[32px] items-center justify-start border rounded-[6px] px-3 border-[rgb(61_68_77)]">
                                <img className="mr-2" src={Search} alt="search-icon"/>
                                <span className="text-[12px] leading-[12px]">
                                Type
                                <kbd className="border mx-1 rounded-[3px] px-1 border-[rgb(145,152,161)]">
                                    /
                                </kbd>
                                to search
                            </span>
                            </div>
                            <div className="flex items-center">
                                <div className="hover:bg-[rgba(101_108_118/0.15)] cursor-pointer rounded-l-[6px] flex justify-center items-center border border-[rgb(61_68_77)] w-8 h-8">
                                    <img src={Copilot} alt="frog-icon"/>
                                </div>
                                <div className="hover:bg-[rgba(101_108_118/0.15)] cursor-pointer -ml-[1px] rounded-r-[6px] flex justify-center items-center border border-[rgb(61_68_77)] w-8 h-8">
                                    <img src={HeaderOption} alt="header-option-icon"/>
                                </div>
                            </div>
                        </div>
                        <div className="w-[1px] h-5 flex bg-[rgb(61_68_77)] mx-1"></div>
                        <div className="flex items-center gap-2">
                            <div className="flex gap-1 items-center hover:bg-[rgba(101_108_118/0.15)] cursor-pointer p-2 rounded-[6px] border border-[rgb(61_68_77)]">
                                <img src={PLus} alt="plus-icon"/>
                                <img src={HeaderOption} alt="header-option-two"/>
                            </div>
                        </div>
                        <div className="items-center hover:bg-[rgba(101_108_118/0.15)] cursor-pointer p-2 rounded-[6px] border border-[rgb(61_68_77)]">
                            <img src={Issues} alt="issues-icon"/>
                        </div>
                        <div className="items-center hover:bg-[rgba(101_108_118/0.15)] cursor-pointer p-2 rounded-[6px] border border-[rgb(61_68_77)]">
                            <img src={PullRequest} alt="pull-request-icon"/>
                        </div>
                        <div className="items-center hover:bg-[rgba(101_108_118/0.15)] cursor-pointer p-2 rounded-[6px] border border-[rgb(61_68_77)]">
                            <img src={Repos} alt="repo-icon"/>
                        </div>
                        <div className="items-center hover:bg-[rgba(101_108_118/0.15)] cursor-pointer p-2 rounded-[6px] border border-[rgb(61_68_77)]">
                            <img src={Notification} alt="notifications-icon"/>
                        </div>
                        <div className="relative">
                            <div onClick={rightOpen} className="cursor-pointer rounded-[50%] border border-[rgb(61_68_77)]">
                                <img className="w-8 h-8 rounded-[50%]" src={img} alt="avatar-img"/>
                            </div>
                            {isRight && (
                                <div onClick={rightOpen} className="fixed inset-0 z-[99]" />
                            )}
                            <RightSide seeRight={isRight} close={rightOpen}/>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}