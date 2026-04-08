import FooterLogo from "../assets/footer-logo.svg"
import {footerLinks} from "../data/data.js";
export default function Footer() {
    return (
        <>
            <footer className="bg-[rgb(33_40_48)]">
                <div className="mx-auto justify-center pb-10 flex items-center gap-4 text-[rgb(145,152,161)] text-[11px] leading-[18px]">
                    <div className="flex items-center gap-2">
                        <img src={FooterLogo} alt="footer-logo"/>
                        <p>© 2026 GitHub, Inc.</p>
                    </div>
                    {
                        footerLinks.map((item) => (
                            <a key={item} href={item.href} className="hover:underline hover:text-[rgb(71,139,230)]">
                                {item.label}
                            </a>
                        ))
                    }
                </div>
            </footer>
        </>
    )
}