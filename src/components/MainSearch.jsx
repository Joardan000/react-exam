import Search from "../assets/search.svg"
import Close from "../assets/close.svg"
import MainRepos from "../assets/main-repos.svg"
import Copilot from "../assets/copilot.svg"
import customApi from "../api/useApi.js";
import {useEffect, useState} from "react";

export default function MainSearch({setOpenMain}) {
    const [login, setLogin] = useState("");
    const [repo, setRepo] = useState([]);
    const [mainInput, setMainInput] = useState("");

    async function getName() {
        try {
            const res = await customApi('/users/Joardan000')
            setLogin(res.data.login);
            const resRepos = await customApi('/users/Joardan000/repos')
            setRepo(resRepos.data)
        } catch (err) {
            console.log(err)
        }
    }

    const filteredRepo = repo.filter((repo) => repo.name.toLowerCase().includes(mainInput.toLowerCase()))

    useEffect(() => {
        getName()
    }, [])
    return (
        <>
            <div
                onClick={() => setOpenMain(false)}
                className="fixed items-start z-[1] inset-0 bg-[rgba(38_44_54/0.4)] top-0.5">
                <div
                    onClick={(e) => e.stopPropagation()}
                    className="ml-[4.5%] bg-[rgb(33,40,48)] w-[1476px] border border-[rgb(61,68,77)] rounded-xl shadow-[rgb(61,68,77)_0px_0px_0px_1px,rgb(1,4,9)_0px_24px_48px_0px]">
                    <div className="pt-2">
                        <div
                            className="mx-3 mt-1 mb-3 outline flex items-center gap-1 outline-[rgb(39,130,232)] rounded-[6px] px-1">
                            <img className="pt-[2.5px] pl-[4.5px] pr-1" src={Search} alt="main-search-svg"/>
                            <div className="flex items-center gap-1 py-[1.5px] w-full">
                                <div className="flex items-center">
                                    <p className="text-[13px] leading-[21px] text-[rgb(209,215,224)]">owner:</p>
                                    <p className="text-[13px] leading-[21px] rounded-[3px] bg-blue-500/10 text-blue-400/80">{login}</p>
                                </div>
                                <input
                                    value={mainInput}
                                    onChange={(e) => {setMainInput(e.target.value)}}
                                    className="text-[13px] leading-[21px] text-[rgb(209,215,224)] w-full outline-none bg-[rgb(33,40,48)]"
                                    type="text"/>
                            </div>
                            <div onClick={(e)=> {
                                e.stopPropagation()
                                setMainInput("");
                            }} className="p-2 rounded-[3px] hover:bg-[rgba(101_108_118/0.15)]">
                                <img className="w-4 h-4" src={Close} alt="main-close-icon"/>
                            </div>
                        </div>
                        {mainInput && (
                            <>
                                <div className="cursor-not-allowed flex px-2 py-[6px] rounded-[6px] hover:bg-[rgba(101_108_118/0.15)] mx-2 items-center justify-between">
                                    <img className="flex-shrink-0 mr-2" src={Search} alt="main-search-icon"/>
                                    <div className="flex items-center flex-shrink-0">
                                        <p className="text-[13px] leading-[21px] text-[rgb(209,215,224)] flex-shrink-0">owner:</p>
                                        <p className="text-[13px] leading-[21px] rounded-[3px] bg-blue-500/10 text-blue-400/80">{login}</p>
                                    </div>
                                    <p className="ml-1 text-[13px] w-full leading-[21px] text-[rgb(209,215,224)]">{mainInput}</p>
                                    <p className="text-[rgb(145,152,161)] text-[13px] flex-shrink-0">Search in this organization</p>
                                </div>
                                <div className="cursor-not-allowed flex px-2 py-[6px] rounded-[6px] hover:bg-[rgba(101_108_118/0.15)] mx-2 items-center justify-between">
                                    <img className="flex-shrink-0" src={Search} alt="main-search-icon2"/>
                                    <p className="ml-2 text-[13px] w-full leading-[21px] text-[rgb(209,215,224)]">{mainInput}</p>
                                    <p className="text-[rgb(145,152,161)] text-[13px] flex-shrink-0">Search all of Github</p>
                                </div>
                                <div className="w-full h-[1px] bg-[rgba(61_68_77/0.7)] my-2"></div>
                            </>
                        )}
                        <div className="px-2 relative max-h-[318px] custom-scroll overflow-y-auto bg-[rgb(33,40,48)]">
                            <p className="sticky bg-[rgb(33,40,48)] top-0 py-2 text-[11px] px-2 leading-[19.5px] text-[rgb(145,152,161)] font-semibold">Repositories</p>
                            <div>
                                {filteredRepo.map(({ id, name, full_name, html_url }) => (
                                    <a
                                        href={html_url}
                                        key={id}
                                        className="mr-1 flex items-start justify-between px-2 py-[6px] rounded-[6px] hover:bg-[rgba(101,108,118,0.15)] cursor-pointer"
                                    >
                                        <div className="flex items-start gap-2">
                                            <img src={MainRepos} alt="repo-icon" className="w-4 h-4 flex-shrink-0"/>
                                            <div className="flex flex-col gap-1">
                                                <p className="text-[13px] leading-[21px] text-[rgb(209,215,224)]">{name}</p>
                                                <p className="text-[11px] leading-[19.5px] text-[rgb(145,152,161)]">{full_name}</p>
                                            </div>
                                        </div>
                                        <p className="text-[13px] text-[rgb(145,152,161)] flex-shrink-0">Jump to</p>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-[1px] bg-[rgba(61_68_77/0.7)] my-2"></div>
                    <div className="px-2">
                        <p className="p-2 text-[10px] leading-[19.5px] text-[rgb(145,152,161)] font-semibold">Copilot</p>
                        <a href="https://github.com/copilot" className="rounded-[6px] justify-between hover:bg-[rgba(101_108_118/0.15)] py-[6px] px-2 flex items-center">
                            <img className="flex-shrink-0 w-4 h-4" src={Copilot} alt="main-copilot-icon"/>
                            <p className="text-[13px] pl-2 w-full leding-[21px] text-[rgb(209,215,224)]">Chat with Copilot</p>
                            <p className="text-[13px] flex-shrink-0 leading-[22.75px] text-[rgb(145,152,161)]">Start a new Copilot thread</p>
                        </a>
                    </div>
                    <div className="w-full h-[1px] bg-[rgba(61_68_77/0.7)] mt-2"></div>
                    <div className="px-4 py-3 flex items-center justify-between">
                        <a href="https://docs.github.com/en/search-github/github-code-search/understanding-github-code-search-syntax" className="ml-2 cursor-pointer hover:underline text-[rgb(71,139,230)] text-[11px] leading-[18px]">Search syntax tips</a>
                        <a className="ml-2 cursor-not-allowed hover:underline text-[rgb(71,139,230)] text-[11px] leading-[18px]">Give feedback</a>
                    </div>
                </div>
            </div>
        </>
    )
}