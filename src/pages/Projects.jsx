import {useEffect, useState} from "react";
import Close from "../assets/close.svg"
import ProjectIcon from "../assets/projectIcon.svg"

export default function Projects() {
    const [activeTab, setActiveTab] = useState("open");
    const [search, setSearch] = useState(`is:${activeTab}`);

    useEffect(() => {
        setSearch(`is:${activeTab}`);
    },[activeTab]);
    return (
        <>
            <section className="mt-6 w-[896px]">
                <div className="flex justify-center items-center gap-3 mb-4">
                    <div className="relative flex">
                        <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-[rgb(145_152_161)]" width="16"
                             height="16" viewBox="0 0 16 16" fill="rgb(145, 152, 161)">
                            <path
                                d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"/>
                        </svg>
                        <input
                            className="w-[783px] bg-[rgb(33_40_48)] border border-[rgb(61_68_77)] rounded-[6px] pl-9 pr-8 py-[5px] text-[14px] text-[rgb(209_215_224)] outline-none focus:border-[rgb(71_139_230)] focus:ring-1 focus:ring-[rgb(71_139_230)] placeholder:text-[rgb(145_152_161)]"
                            placeholder="Search all projects"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            type="text"
                        />

                        <button
                            onClick={() => setSearch("")}
                            className="absolute right-1 top-1/2 w-6 h-6 hover:bg-[rgba(101_108_118/0.15)] rounded-[3px] flex justify-center items-center -translate-y-1/2 text-[rgb(145_152_161)] hover:text-[rgb(209_215_224)]"
                        >
                            <img src={Close} alt="close-icon"/>
                        </button>

                    </div>
                    <button
                        className="w-[100px] flex items-center justify-center gap-1 px-3 py-[5px] bg-[rgb(52_125_57)] border border-[rgba(205_217_229/0.15)] shadow-[0px_1px_1px_0px_rgba(1,4,9,0.6),0px_1px_3px_0px_rgba(1,4,9,0.6)] text-white text-[14px] font-medium leading-5 rounded-[6px] whitespace-nowrap">
                        New project
                    </button>
                </div>
                <div className="border border-[rgb(61_68_77)] rounded-[6px]">
                    <div className="flex bg-[rgb(38_44_54)] items-center justify-between px-4 py-[9.5px] border-b rounded-t-[6px] border-[rgb(61_68_77)]">
                        <div className="flex  items-center gap-4">
                            <div
                                onClick={() => setActiveTab("open")}
                                className={`flex items-center gap-2 text-[13px] font-semibold py-3 cursor-pointer ${
                                    activeTab === "open"
                                        ? "text-[rgb(209_215_224)]"
                                        : "text-[rgb(145_152_161)] hover:text-[rgb(209_215_224)]"
                                }`}
                            >
                                <span className="hover:underline hover:text-[rgb(71_139_230)]">Open</span>
                                <span className="font-medium bg-[rgba(101_108_118/0.2)] rounded-[24px] px-[6px] leading-[18px]">0</span>
                            </div>
                            <div
                                onClick={() => setActiveTab("closed")}
                                className={`flex items-center gap-2 text-[13px] font-semibold py-3 cursor-pointer ${
                                    activeTab === "closed"
                                        ? "text-[rgb(209_215_224)]"
                                        : "text-[rgb(145_152_161)] hover:text-[rgb(209_215_224)]"
                                }`}
                            >
                                <span className="hover:underline hover:text-[rgb(71_139_230)]">Closed</span>
                                <span className="font-medium bg-[rgba(101_108_118/0.2)] rounded-[24px] px-[6px] leading-[18px]">0</span>
                            </div>
                        </div>
                        <button className="flex items-center gap-1 text-[14px] text-[rgb(209_215_224)] font-medium">
                            Sort
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"
                                 className="text-[rgb(145_152_161)]">
                                <path
                                    d="M4.427 7.427l3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"/>
                            </svg>
                        </button>
                    </div>

                    <div className="py-[50px] flex flex-col items-center justify-center gap-[11px]">
                        <img src={ProjectIcon} alt="project-icon"/>
                        <p className="text-[rgb(209_215_224)] text-[19px] font-semibold leading-[30px] mb-1">
                            {activeTab === "open" ? "No open projects" : "No closed projects"}
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}