import {useState, useEffect} from "react";
import Option from "../assets/option.svg";
import New from "../assets/new.svg";
import Star from "../assets/star.svg";
import customApi from "../api/useApi.js";
import Close from "../assets/side-close.svg";
import {languageColors,languages} from "../data/data.js";

export default function Repositories() {
    const [openLang, setOpenLang] = useState(false);

    const [findRepo, setFindRepo] = useState("");
    const [repos, setRepos] = useState([]);
    const [language, setLanguage] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 23;

    async function getRepos() {
        try {
            const res = await customApi('/users/Joardan000/repos', {
                params: {
                    per_page: 100,
                    sort: 'updated'
                }
            });
            setRepos(res.data);
        } catch (err) {
            console.log("Xatolik yuz berdi:", err);
        }
    }

    // useEffect(() => {
    //     getRepos();
    // }, []);

    const filtered = repos.filter(repo => {
        const matchName = repo.name.toLowerCase().includes(findRepo.toLowerCase())
        const matchLang = language === "All" || repo.language === language
        return matchName && matchLang
    });

    const totalPages = Math.ceil(filtered.length / perPage);
    const paginated = filtered.slice((currentPage - 1) * perPage, currentPage * perPage);

    useEffect(() => {
        setCurrentPage(1)
    }, [findRepo, language])

    return (
        <>
            <section className="mt-6">
                <form className="flex items-center gap-2 mb-4">
                    <input
                        className="bg-[rgb(33_40_48)] border border-[rgb(61_68_77)] focus:border-[rgb(71_139_230)] focus:ring-1 focus:ring-[rgb(71_139_230)] rounded-[6px] leading-5 px-3 py-[5px] w-[535px] text-[13px] text-[rgb(209_215_224)] outline-none"
                        onChange={(e) => setFindRepo(e.target.value)}
                        placeholder="Find a repository..."
                        value={findRepo}
                        type="text"
                    />
                    <button
                        className="flex text-[14px] items-center px-4 justify-center py-[5px] bg-[rgb(42_49_60)] border border-[rgb(61_68_77)] text-[rgb(209_215_224)] font-medium leading-5 rounded-[6px] gap-1">
                        <p>Type</p>
                        <img src={Option} alt="option-icon1"/>
                    </button>
                    <div
                        onClick={() => setOpenLang(true)}
                        className="cursor-pointer relative flex text-[14px] items-center px-4 justify-center py-[5px] bg-[rgb(42_49_60)] border border-[rgb(61_68_77)] text-[rgb(209_215_224)] font-medium leading-5 rounded-[6px] gap-1">
                        <p>Language</p>
                        <img src={Option} alt="option-icon2"/>
                        {openLang &&(
                            <div className="w-[298px] absolute top-10 right-2 text-[rgb(209,215,224)] text-[12px] leading-[18px] rounded-[6px] bg-[rgb(42,49,60)] border border-[rgb(61,68,77)] shadow-[rgba(1,4,9,0.4)_0px_6px_12px_-3px,rgba(1,4,9,0.4)_0px_6px_18px_0px]">
                                <div className="flex items-center justify-between py-[7px] pl-4 pr-[7px]">
                                    <p>Select language</p>
                                    <img className="cursor-pointer"
                                         onClick={(e)=>{
                                             e.stopPropagation()
                                             setOpenLang(false)
                                         }}
                                         src={Close} alt="lang-close-icon"/>
                                </div>
                                {
                                    languages.map(language => (
                                        <div
                                            className="border-t cursor-pointer pl-10 border-[rgba(61_68_77/0.7)] hover:bg-[rgba(101_108_118/0.15)] py-[7px] pr-[7px]"
                                             key={language}
                                             onClick={(e) => {
                                                 e.stopPropagation()
                                                 setLanguage(language)
                                                 setOpenLang(false)
                                             }}
                                        >
                                            {language}
                                        </div>
                                    ))
                                }
                            </div>
                        )}
                    </div>
                    <button
                        className="flex text-[14px] items-center px-4 justify-center py-[5px] bg-[rgb(42_49_60)] border border-[rgb(61_68_77)] text-[rgb(209_215_224)] font-medium leading-5 rounded-[6px] gap-1">
                        <p>Sort</p>
                        <img src={Option} alt="option-icon3"/>
                    </button>
                    <button
                        className="flex text-[14px] items-center px-4 justify-center py-[5px] bg-[rgb(52_125_57)] border border-[rgba(205_217_229/0.15)] text-white font-medium leading-5 rounded-[6px] gap-1">
                        <img src={New} alt="repos-new-icon"/>
                        <p>New</p>
                    </button>
                </form>

                <div>
                    {findRepo && (
                        <div className="border-t flex items-center justify-between border-[rgb(61_68_77)]">
                            <p className="py-4 text-[rgb(209,215,224)] text-[14px] leading-[21px]">
                                <span className="font-semibold">{paginated.length}</span> results for repositories
                                matching {findRepo} sorted by <span className="font-semibold">last updated</span>
                            </p>
                            <button onClick={()=>setFindRepo("")} className="text-[13px] leading-[21px] text-[rgb(145,152,161)] hover:text-[rgb(71,139,230)]">Clear filter</button>
                        </div>
                    )}
                    {paginated.length === 0 ? (
                        <div
                            className="border-t border-[rgb(61_68_77)] pt-[68px] pb-8 text-[19px] font-semibold mb-1 text-[rgb(209,215,224)] text-center">Joardan000 doesn't have any repositories that match.</div>
                    ) : (
                        <div className="border-y border-[rgb(61_68_77)]">
                            {paginated.map((repo, index) => (
                                <div
                                    key={repo.id}
                                    className={`flex items-start justify-between py-8 ${index !== 0 ? "border-t border-[rgb(61_68_77)]" : ""}`}
                                >
                                    <div className="flex flex-col gap-3">
                                        <div className="flex items-center gap-2">
                                            <a href={repo.html_url}
                                               className="text-[rgb(71_139_230)] font-semibold text-[18px] leading-6 hover:underline">
                                                {repo.name}
                                            </a>
                                            <span
                                                className="border border-[rgb(61_68_77)] rounded-[9999px] text-[rgb(145_152_161)] text-[12px] font-medium px-[7px] py-[1px] w-max">
                                            {repo.visibility}
                                        </span>
                                        </div>

                                        {repo.description && (
                                            <p className="text-[rgb(145_152_161)] text-[14px]">{repo.description}</p>
                                        )}

                                        <div className="flex items-center gap-4 mt-1">
                                            {repo.language && (
                                                <div className="flex items-center gap-1">
                                                    <div
                                                        className={`w-3 h-3 rounded-[50%] ${languageColors[repo.language] || "bg-[rgb(145_152_161)]"}`}></div>
                                                    <span
                                                        className="text-[rgb(145_152_161)] text-[12px]">{repo.language}</span>
                                                </div>
                                            )}
                                            <span className="text-[rgb(145_152_161)] text-[12px]">
                                            Updated on {new Date(repo.updated_at).toLocaleDateString("en-US", {
                                                month: "short", day: "numeric"
                                            })}
                                        </span>
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <button
                                            className="flex hover:bg-[rgb(47_55_66)] items-center gap-2 px-3 py-[4px] bg-[rgb(42_49_60)] border border-[rgb(61_68_77)] text-[rgb(209_215_224)] text-[12px] font-medium rounded-l-[6px]">
                                            <img src={Star} alt="star-icon"/>
                                            <p>Star</p>
                                        </button>
                                        <button
                                            className="flex hover:bg-[rgb(47_55_66)] items-center -ml-[1px] gap-2 px-2 py-[5px] bg-[rgb(42_49_60)] border border-[rgb(61_68_77)] text-[rgb(209_215_224)] text-[12px] font-medium rounded-r-[6px]">
                                            <img src={Option} alt="option-mock-icon"/>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                {totalPages > 1 && (
                    <div className="flex items-center justify-center gap-3 my-6">
                        <button
                            onClick={() => setCurrentPage(p => p - 1)}
                            disabled={currentPage === 1}
                            className={`flex items-center gap-1 px-[10.5px] hover:px-[10px] hover:py-[5px] py-[5.5px] rounded-[6px] text-[14px] leading-5
                                ${currentPage === 1
                                ? " text-[rgb(61_68_77)]"
                                : "hover:border hover:border-[rgba(61_68_77)] text-[rgb(71_139_230)]"
                            }`}
                        >
                            Previous

                        </button>

                        <button
                            onClick={() => setCurrentPage(p => p + 1)}
                            disabled={currentPage === totalPages}
                            className={`flex items-center gap-1 hover:px-[10px] px-[10.5px] hover:py-[5px] py-[5.5px] hover:border rounded-[6px] text-[14px] leading-5
                                ${currentPage === totalPages
                                ? "hover:border-[rgb(61_68_77)] text-[rgb(61_68_77)]"
                                : "hover:border-[rgb(61_68_77)] text-[rgb(71_139_230)]"
                            }`}
                        >
                            Next
                        </button>
                    </div>
                )}
            </section>
        </>
    );
}