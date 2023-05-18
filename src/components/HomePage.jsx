import React from 'react';
import {FaArrowCircleRight} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const videoUrl = "https://rr2---sn-4g5lzne6.googlevideo.com/videoplayback?expire=1684397605&ei=xYllZL23Hc2lgQe5p5PgCg&ip=95.181.236.18&id=o-ANT6rLWYMNVH9KM8RVTCBiiNiUXmhpB9N-csAVmmmX_3&itag=137&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278&source=youtube&requiressl=yes&spc=qEK7B5pWFpMzMCI5KMKvaF8rZGfIYL2_Mm9nF3lMOg&vprv=1&svpuc=1&mime=video%2Fmp4&ns=jxeGPmvUxx3HgRSrffGXd2UN&gir=yes&clen=3582132&otfp=1&dur=7.374&lmt=1605165613041552&keepalive=yes&fexp=24007246,24350017&beids=24350017&c=WEB&txp=6216222&n=WloI8BFEJ74RzQ&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Cgir%2Cclen%2Cotfp%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAJ-uEIzD6t_WBdz4P_yg4Q4YwXRm63xUm-ZwBxVCppi5AiEA911XRBEZyiavSfbJ8_FUgGbaf8-oRnVnn-ani3X9J6c%3D&rm=sn-4g5eke7l&req_id=14aa8450eecba3ee&cm2rm=sn-uxaxjvhxbt2u-50x67e,sn-hgnlz7l&ipbypass=yes&redirect_counter=3&cms_redirect=yes&cmsv=e&mh=nH&mip=156.202.113.162&mm=34&mn=sn-4g5lzne6&ms=ltu&mt=1684375726&mv=m&mvi=2&pl=19&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhALTxbPXQ-8owESk1NcWElyhYTmSU44hsxuu306YpWuxRAiBeHF5T91GCm94H6iSjd-TY4d7skirpS0falkG89fSq8A%3D%3D";

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <video autoPlay muted loop className="fixed top-0 left-0 w-full h-full object-cover z-[-2]">
                <source src={videoUrl} type="video/mp4" />
            </video>    
            <div className="fixed top-0 left-0 z-[-1] bg-black w-full h-full opacity-50"></div>
            <div className="text-white  flex flex-col justify-center items-center gap-3">
                <h1 className="text-2xl "> Welcome to</h1>
                <h1 className="text-8xl">Cheap Game Finder</h1>
                <Link className="flex gap-4 items-center" to="/store">
                    <h1 className="text-3xl">Go to deals</h1>
                    <FaArrowCircleRight className="text-3xl" />
                </Link>
            </div>
        </div>
    )
}

export default HomePage