import GitHub from "../assets/github.svg"
import SideClose from "../assets/side-close.svg"
import Search from "../assets/search.svg"
import {useEffect, useState} from "react"
import customApi from "../api/useApi.js"
import {exploreItems, navItems} from "../data/data.js";

export default function Sidebar({seeActive, close}) {
    const [repos, setRepos] = useState([])
    const [visibleCount, setVisibleCount] = useState(5)

    async function getRepos() {
        try {
            const res = await customApi('/users/Joardan000/repos?sort=updated&per_page=100')
            setRepos(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        if (seeActive) {
            getRepos()
        }
    }, [seeActive])

    if (!seeActive) return null

    return (
        <div onClick={() => close(repos)}
             className="side_anime fixed inset-0 z-[999] flex justify-start bg-[#262C3666]">
            <div
                onClick={e => e.stopPropagation()}
                className="bg-[#2A313C] w-[320px] h-full overflow-y-auto rounded-r-[12px] border-r border-[#3D444D] shadow-[0px_0px_0px_1px_#3D444D,0px_6px_18px_0px_#01040966]"
            >
                <div className="flex items-center justify-between p-4">
                    <img src={GitHub} alt="github-icon" className="w-8 h-8"/>
                    <button
                        onClick={close}
                        className="rounded-[6px] w-8 h-8 flex items-center justify-center hover:bg-[rgba(101,108,118,0.15)]"
                    >
                        <img src={SideClose} alt="side-close-icon"/>
                    </button>
                </div>

                <nav className="p-2 mt-4">
                    {navItems.map(item => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="flex items-center gap-2 px-3 py-[6px] rounded-[6px] text-[14px] text-[rgb(209,215,224)] hover:bg-[rgba(101,108,118,0.15)] transition-colors"
                        >
                            <img src={item.icon} className="w-4 h-4"/>
                            {item.label}
                        </a>
                    ))}
                </nav>

                <hr className="border-[#3D444D] mx-2"/>

                <nav className="p-2">
                    {exploreItems.map(item => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="flex items-center gap-2 px-3 py-[6px] rounded-[6px] text-[14px] text-[rgb(209,215,224)] hover:bg-[rgba(101,108,118,0.15)] transition-colors"
                        >
                            <img src={item.icon} className="w-4 h-4"/>
                            {item.label}
                        </a>
                    ))}
                </nav>

                <hr className="border-[#3D444D] mx-2"/>

                <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-[12px] font-semibold text-[rgb(145,152,161)]">Top repositories</p>
                        <button className="p-2 rounded-[6px] hover:bg-[rgba(101_108_118/0.15)]">
                            <img className="w-4 h-4" src={Search} alt=""/>
                        </button>
                    </div>

                    <div className="space-y-1">
                        {repos.slice(0, visibleCount).map(repo => (
                            <a
                                key={repo.id}
                                href={repo.html_url}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 px-2 py-[5px] rounded-[6px] hover:bg-[rgba(101,108,118,0.15)] transition-colors group"
                            >
                                <img src={repo.owner.avatar_url} className="w-4 h-4 rounded-full flex-shrink-0"/>
                                <span
                                    className="text-[13px] text-[rgb(209,215,224)] truncate group-hover:text-[rgb(71,139,230)]">
                                    {repo.full_name}
                                </span>
                            </a>
                        ))}
                    </div>

                    {visibleCount < repos.length && (
                        <button
                            onClick={() => setVisibleCount(prev => prev + 5)}
                            className="mt-2 px-2 py-[5px] text-[13px] text-[rgb(145,152,161)] hover:text-[rgb(209,215,224)] hover:bg-[rgba(101,108,118,0.15)] rounded-[6px] w-full text-left transition-colors"
                        >
                            Show more
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}