import {NavLink} from "react-router-dom";
import {tabs} from "../data/data.js";
import {useEffect, useState} from "react";
import customApi from "../api/useApi.js";

export default function Tabs() {
    const [seeRepos, setSeeRepos] = useState("")
    async function getData() {
        const res = await customApi('/users/Joardan000')
        setSeeRepos(res.data.public_repos)
    }
    // useEffect(() => {
    //     getData();
    // },[])
    return (
        <section className="bg-[#151B23]">
            <div className="px-4 w-full flex items-center h-11 border-b border-b-[rgba(61_68_77/0.7)]">
                <div className="flex items-center justify-start gap-2">
                    {tabs.map((tab) => (
                        <NavLink
                            to={tab.path}
                            key={tab.id}
                            end={tab.path === "/"}
                            className="relative cursor-pointer rounded-[6px] flex items-center gap-2 hover:bg-[rgba(101_108_118_/0.2)] px-2 py-[5px]"
                        >
                            {({isActive}) => (
                                <>
                                    <img src={tab.url} alt={tab.id + "-tab-icon"}/>
                                    <p className="leading-[21px] font-semibold text-[13px] text-[rgb(209_215_224)]">{tab.title}</p>
                                    <div className={isActive && tab.path !== "#" ? "bg-[rgb(236_119_92)] w-full left-0 h-[2px] absolute -bottom-[8px]" : "hidden"}/>
                                    {tab.haveRepo && (
                                        <p className="bg-[rgba(101_108_118/0.2)] rounded-[20px] text-[rgb(209_215_224)] text-[12px] font-semibold leading-[12px] px-[6px] py-[2px]">{seeRepos}</p>
                                    )}
                                </>
                            )}
                        </NavLink>
                    ))}
                </div>
            </div>
        </section>
    )
}