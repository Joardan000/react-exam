import {useEffect, useState} from "react";

import ProfileEmoji from '../assets/profile-emoji.svg'
import BlueEmoji from '../assets/blue-emoji.svg'
import Followers from '../assets/followers.svg'
import FollowersBlue from '../assets/followers-blue.svg'

import customApi from "../api/useApi.js";

export default function ProfileInfo() {
    const [isEdit, setIsEdit] = useState(false);

    const [img, setImg] = useState("")
    const [name, setName] = useState("")
    const [login, setLogin] = useState("")
    const [bio, setBio] = useState("")
    const [seeFollowers, setSeeFollowers] = useState(0)
    const [seeFollowing, setSeeFollowing] = useState(0)
    const [followersHovered, setFollowersHovered] = useState(false)

    const [seeName, setSeeName] = useState("")
    const [seeBio, setSeeBio] = useState()

    const [hovered, setHovered] = useState(false)

    async function get() {
        try {
            const res = await customApi.get('/users/Joardan000')

            setSeeFollowers(res.data.followers)
            setSeeFollowing(res.data.following)

            setImg(res.data.avatar_url)
            setName(res.data.name)
            setLogin(res.data.login)
            setBio(res.data.bio)
            setSeeName(res.data.name)
            setSeeBio(res.data.bio)

        } catch (err) {
            console.log(err)
        }
    }

    async function editProfile(e) {
        e.preventDefault()
        setName(seeName)
        setBio(seeBio)
        setIsEdit(false)
    }

    useEffect(() => {
        get()
    }, [])

    return (
        <>
            <div className="w-[296px]">
                <div className="rounded-[50%] relative w-[296px] h-[296px] border-2 border-[rgb(61_68_77)]">
                    <img className="object-cover rounded-[50%]" src={img} alt="main-logo-img"/>
                    {!hovered && (
                        <div
                            onMouseEnter={() => setHovered(true)}
                            className="bg-[rgb(33,40,48)] border border-[rgb(61,68,77)] rounded-[28px] shadow-[rgba(1,4,9,0.6)_0px_1px_1px_0px,rgba(1,4,9,0.6)_0px_1px_3px_0px] absolute bottom-[32px] right-0 p-2 flex justify-center items-center w-[38px] h-[38px]">
                            <img src={ProfileEmoji} alt="profile-emoji-icon"/>
                        </div>
                    )}

                    {hovered && (
                        <div
                            onMouseLeave={() => setHovered(false)}
                            className="bg-[rgb(33,40,48)] border border-[rgb(61,68,77)] rounded-[28px] shadow-[rgba(1,4,9,0.4)_0px_1px_1px_0px,rgba(1,4,9,0.8)_0px_3px_6px_0px] absolute bottom-[32px] -right-[61px] flex pl-[10px] cursor-pointer items-center gap-2 w-[99px] h-[38px]">
                            <img src={BlueEmoji} alt="blue-emoji-icon"/>
                            <p className="text-[rgb(209,215,224)] text-[12px] leading-[14px]">Set status</p>
                        </div>
                    )}
                </div>

                {!isEdit ? (
                    <>
                        <div className="my-4">
                            <p className="font-semibold text-[24px] leading-[30px] text-[rgb(209_215_224)]">{name}</p>
                            <p className="font-light text-[rgb(145_152_161)] text-[20px] leading-6">{login}</p>
                        </div>
                        <p className="mb-4 text-base text-[14px] text-[rgb(209_215_224)]">{bio}</p>
                        <button
                            onClick={() => setIsEdit(true)}
                            className="mb-4 px-4 h-8 w-full border border-[rgb(61_68_77)] rounded-[6px] bg-[rgb(42_49_60)] hover:bg-[rgb(47_55_66)] text-center font-medium leading-5 text-[14px] text-[rgb(209_215_224)]">Edit
                            profile
                        </button>

                        <div
                            className="mb-4 flex items-center text-[rgb(145_152_161)] leading-[21px] text-[14px] gap-1">
                            <a onMouseEnter={() => setFollowersHovered(true)}
                               onMouseLeave={() => setFollowersHovered(false)}
                               className="flex items-center gap-1 hover:text-[rgb(71_139_230)]"
                               href="https://github.com/Joardan000?tab=followers">
                                <img src={followersHovered ? FollowersBlue : Followers} alt="followers-icon"
                                />
                                <p>{seeFollowers} followers</p>
                            </a>
                            <p>·</p>
                            <a className="hover:text-[rgb(71_139_230)]"
                               href="https://github.com/Joardan000?tab=following">{seeFollowing} following</a>
                        </div>
                    </>
                ) : (
                    <>
                        <form onSubmit={editProfile} className="w-full font-sans">

                            <div className="mb-2">
                                <label className="block text-[14px] font-normal text-[rgb(209,215,224)] mb-1">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    value={seeName}
                                    onChange={(e) => setSeeName(e.target.value)}
                                    className="w-full h-8 px-3 py-[5px] bg-[rgb(33,40,48)] border border-[rgb(61,68,77)] rounded-[6px] shadow-[rgba(1,4,9,0.24)_0px_1px_0px_0px_inset] text-[rgb(209,215,224)] text-[14px] leading-5 align-middle outline-none transition-[color,background-color,box-shadow,border-color] duration-[80ms] ease-[cubic-bezier(0.33,1,0.68,1)] placeholder:text-[rgb(145,152,161)] focus:border-[rgb(71_139_230)] focus:ring-1 focus:ring-[rgb(71_139_230)]"
                                />
                            </div>

                            <div>
                                <label className="block text-[14px] font-normal text-[rgb(209,215,224)] mb-1">
                                    Bio
                                </label>
                                <textarea
                                    rows={3}
                                    placeholder="Add a bio"
                                    value={seeBio}
                                    onChange={(e) => setSeeBio(e.target.value)}
                                    className="w-full px-3 py-[5px] bg-[rgb(33,40,48)] border border-[rgb(61,68,77)] rounded-[6px] shadow-[rgba(1,4,9,0.24)_0px_1px_0px_0px_inset] text-[rgb(209,215,224)] text-[14px] leading-[21px] resize-y break-words outline-none transition-[color,background-color,box-shadow,border-color] duration-[80ms] ease-[cubic-bezier(0.33,1,0.68,1)] placeholder:text-[rgb(145,152,161)] focus:border-[rgb(71_139_230)] focus:ring-1 focus:ring-[rgb(71_139_230)]"
                                />
                                <p className="text-[11.5px] text-[rgb(145_152_161)] mt-1 leading-[18px]">
                                    You can <span className="font-semibold">@mention</span> other users and
                                    organizations to link to them.
                                </p>
                            </div>
                            <div className="flex items-center gap-1 py-4">

                                <button type="submit"
                                        className="inline-flex items-center justify-between gap-1 h-7 min-w-7 px-2 bg-[rgb(52,125,57)] hover:bg-[rgb(59,134,64)] border border-[rgba(205,217,229,0.15)] rounded-[6px] shadow-[rgba(1,4,9,0.6)_0px_1px_1px_0px,rgba(1,4,9,0.6)_0px_1px_3px_0px] text-white text-[12px] font-medium leading-[18px] cursor-pointer select-none transition-[color,fill,background-color,border-color] duration-[80ms] ease-[cubic-bezier(0.65,0,0.35,1)]">
                                    Save
                                </button>

                                <button onClick={() => {
                                    setIsEdit(false)
                                    setSeeName(name)
                                    setSeeBio(bio)
                                }} type="button"
                                        className="inline-flex items-center justify-between gap-1 h-7 min-w-7 px-2 bg-[rgb(42,49,60)] hover:bg-[rgb(47,55,66)] border border-[rgb(61,68,77)] rounded-[6px] text-[rgb(209,215,224)] text-[12px] font-medium leading-[18px] cursor-pointer select-none transition-[color,fill,background-color,border-color] duration-[80ms] ease-[cubic-bezier(0.65,0,0.35,1)]">
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </>
                )}
            </div>
        </>
    )
}