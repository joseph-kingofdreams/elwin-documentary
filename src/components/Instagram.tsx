import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Instagram = () => {


    const [instagram, setInstagram] = useState<any>();

    useEffect(() => {
        axios.get('https://v1.nocodeapi.com/josephli/instagram/mBDVjLVBfrNECgmI').then((response) => {
            setInstagram(response.data.data);
        });
    }, [])

    return (

        <div
            className="aspect-[1/2] h-full overflow-hidden rounded-3xl xl:rounded-[2.5rem] border-4 2xl:border-8 border-neutral-700 p-1 grid bg-[radial-gradient(#d4d4d4,#404040)] min-h-[560px]"
        >
            <div className="flex flex-col overflow-hidden rounded-[1.2rem] xl:rounded-[2rem] bg-white border-4 border-black ">
                <a href="https://www.instagram.com/agentsoftheundergroundrailroad/" target="__blank" className="text-sm p-4 h-11 flex items-center justify-center bg-white font-bold z-10 col-span-3 border-b border-neutral-300">agentsoftheundergroundrailroad</a>
                <div className="h-full overflow-y-scroll no-scrollbar">
                    <div
                        className="grid gap-0.5 grid-cols-3"
                    >
                        {
                            instagram && instagram.map((post) => {
                                return (<a key={post.id} className="aspect-square overflow-hidden" href={post.permalink} target="__blank">
                                    <img className="object-fit-cover min-h-full min-w-full" src={post.media_url} />
                                </a>)
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Instagram;