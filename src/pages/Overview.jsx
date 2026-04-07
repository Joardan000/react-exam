import {useEffect, useState} from "react";
import customApi from "../api/useApi.js"

export default function Overview() {
    const [overviewMocks, setOverviewMocks] = useState([])

    async function getMocks() {
        try {
            const res = await customApi.get('/users/Joardan000/subscriptions')
            setOverviewMocks(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(()=>{
        getMocks()
    },[])
    return (
        <>
            <section className="mt-8">
                <div className="flex items-center justify-between mb-2">
                    <p className="text-[rgb(209_215_224)] text-base">Popular repositories</p>
                    <p className="text-[rgb(71_139_230)] text-[12px] leading-[18px] hover:underline">
                        Customize your pins
                    </p>
                </div>
                {
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        {
                            overviewMocks.slice(0, 6).map(mock => (
                                <div className="p-4 rounded-[6px] h-[98.5px] flex flex-col justify-between w-full border border-[rgb(61_68_77)]" key={mock.id}>
                                    <div className="flex justify-between">
                                        <a href={mock.html_url}
                                           className="text-[rgb(71_139_230)] text-[13px] font-semibold leading-[21px] hover:underline">{mock.name}
                                        </a>
                                        <p className="border border-[rgb(61_68_77)] rounded-[9999px] text-[rgb(145_152_161)] font-medium leading-[18px] px-[6px] text-[12px]">{mock.visibility}</p>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <div className={mock.language === null ? "hidden" : mock.language === "HTML" ? "bg-[rgb(227_76_38)] w-3 h-3 rounded-[50%] border border-[rgba(205_217_229/0.15)]" : "bg-[rgb(102_51_153)] w-3 h-3 rounded-[50%] border border-[rgba(205_217_229/0.15)]"}></div>
                                        <p className="text-[rgb(145_152_161)] text-[12px] leading-[18px]">{mock.language}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                }
                <div className="text-[rgb(145_152_161)] mt-6 text-[12px] leading-[18px]">
                    Seeing something unexpected? Take a look at the <span className="text-[12px] leading-[18px] text-[rgb(71_139_230)] underline"><a href="https://docs.github.com/en/account-and-profile/how-tos">GitHub profile guide</a></span>.
                </div>
            </section>
        </>
    )
}