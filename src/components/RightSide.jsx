import customApi from "../api/useApi.js";
import {rightSide1,rightSide2} from "../data/data.js";
import Change from "../assets/change.svg"
import Emoji from "../assets/profile-emoji.svg"
import SignOut from "../assets/sign-out.svg"
import {useEffect, useState} from "react";

export function RightSide({seeRight, close}) {
    const openRight = seeRight
    const funcClose = close

    const [sideData, setSideData] = useState([]);

    async function getRightSide() {
        try {
            const res = await customApi('/users/Joardan000')
            setSideData(res.data);
        } catch (err) {
            console.log(err)
        }
    }

    // useEffect(() => {
    //     getRightSide()
    // }, []);
    return (
        <>
            {openRight && (
                <>
                <div onClick={funcClose} className="fixed inset-0 z-[99]" ></div>
                <div
                    className="w-[256px] z-[100] text-[rgb(209,215,224)] text-[14px] absolute top-[37px] rounded-[12px] right-0 bg-[rgb(42,49,60)] shadow-[rgb(61,68,77)_0px_0px_0px_1px,rgba(1,4,9,0.4)_0px_6px_12px_-3px,rgba(1,4,9,0.4)_0px_6px_18px_0px] p-2">
                    <div className="pt-1 px-2 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-[50%] shadow-[0px_0px_0px_1px_rgba(205,217,229,0.15)]">
                                <img className="w-full h-full object-cover rounded-full" src={sideData.avatar_url}/>
                            </div>
                            <div>
                                <p className="font-semibold text-[13px]">{sideData.login}</p>
                                <p className="opacity-50">{sideData.name}</p>
                            </div>
                        </div>
                        <img className="p-2 rounded-[5px] hover:bg-[rgba(101_108_118/0.15)]" src={Change} alt="change-icon"/>
                    </div>
                    <div className="pt-1">
                        <div className="cursor-not-allowed p-2 flex items-center gap-2 w-full rounded-[6px] hover:bg-[rgba(101_108_118/0.15)]">
                            <img className="w-4 h-4" src={Emoji} alt="emoji-svg"/>
                            <p>Set status</p>
                        </div>
                        <div className="my-2 w-full h-[1px] bg-[rgba(61_68_77/0.7)]"></div>
                        <div className="flex flex-col">
                            {
                                rightSide1.map((item) => (
                                    <a className="py-[5px] px-2 cursor-pointer text-[14px] flex items-center gap-2 w-full rounded-[6px] hover:bg-[rgba(101_108_118/0.15)]" href={item.url}>
                                        <img className="w-4 h-4" src={item.icon} alt="emoji-svg"/>
                                        <p>{item.label}</p>
                                    </a>
                                ))
                            }
                        </div>
                        <div className="my-2 w-full h-[1px] bg-[rgba(61_68_77/0.7)]"></div>
                        {
                            rightSide2.map((item) => (
                                <a className="px-2 py-[5px] cursor-pointer flex items-center gap-2 w-full rounded-[6px] hover:bg-[rgba(101_108_118/0.15)]" href={item.url}>
                                    <img src={item.icon} alt="emoji-svg"/>
                                    <p>{item.label}</p>
                                </a>
                            ))
                        }
                        <div className="my-2 w-full h-[1px] bg-[rgba(61_68_77/0.7)]"></div>
                        <div className="p-2 cursor-not-allowed flex items-center gap-2 w-full rounded-[6px] hover:bg-[rgba(101_108_118/0.15)]">
                            <img src={SignOut} alt="sign-out-svg"/>
                            <p>Sign out</p>
                        </div>
                    </div>
                </div>
                    </>
            )}
        </>
    )
}