import logoblue from '@/public/assets/logos/logo_blue.png';
import sitemap from '@/public/assets/icons/general/sitemap.png';
import user from '@/public/assets/icons/general/user.png';
import Link from 'next/link';

export default function CxrayHeader() {
    return (
        <header>
            <div className="header-warpper wrapper">
                <div className="header-logos">
                    <Link style={{display: 'inline-block', height: '40px'}} href={"/"}>
                        <img src={logoblue.src}/>
                    </Link>
                </div>
                <div className="header-functions"></div>
                <div className="header-options">
                    <Link className="header-option" href={"/auth/join"}>
                        <span>to join</span>
                    </Link>
                    <Link className="header-option" href={"/auth/login"}>
                        <span>to login</span>
                    </Link>
                    <Link className="header-option" href={"/detail"}>
                        <span>to detil</span>
                    </Link>
                    <Link className="header-option" href={"/community"}>
                        <img src={sitemap.src}/>
                    </Link>
                    <Link className="header-option" href={"/profile"}>
                        <img src={user.src}/>
                    </Link>
                </div>
            </div>
        </header>
    );
}