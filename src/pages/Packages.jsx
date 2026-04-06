import {packages} from "../data/data.js";
import Package from "../assets/package.svg"

export default function Packages() {
    return (
        <>
            <section className="mt-8 w-[896px]">
                <div className="flex flex-col items-center text-center mb-[40px]">
                    <img className="mb-1" src={Package} alt="package-icon"/>
                    <h1 className="text-[rgb(209_215_224)] text-[32px] font-semibold leading-[48px] mb-2">
                        Get started with GitHub Packages
                    </h1>
                    <p className="text-[rgb(145_152_161)] text-[16px] leading-6">
                        Safely publish packages, store your packages alongside your code, and share your packages
                        privately with your team.
                    </p>
                </div>

                <p className="text-center text-[rgb(145_152_161)] text-[20px] leading-[30px] py-2 my-3">Choose a registry</p>

                <div className="grid grid-cols-3 mt-5 gap-4">
                    {packages.map((pkg) => (
                        <div
                            key={pkg.id}
                            className="flex flex-col justify-between px-6 pt-4 pb-6 border border-[rgb(61_68_77)] rounded-[6px] bg-[rgb(33_40_48)] gap-4"
                        >
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-2">
                                    <img src={pkg.icon} alt={"package-icon-"+pkg.id}/>
                                    <h3 className="text-[rgb(209_215_224)] font-semibold text-[24px] leading-[30px]">{pkg.name}</h3>
                                </div>
                                <p className="text-[rgb(145_152_161)] text-[11px] leading-[18px]">{pkg.description}</p>
                            </div>
                            <a
                                href={pkg.url}
                                className="w-max px-4 py-[5px] border border-[rgb(61_68_77)] rounded-[6px] text-[rgb(209_215_224)] text-[14px] font-medium bg-[rgb(42_49_60)] transition-colors">
                                Learn more
                            </a>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}