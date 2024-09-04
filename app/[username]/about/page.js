"use client"
import Header from "@/components/Header";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function About({ params }) {
    const [userData, setUserData] = useState({})
    const { username } = params;

    // function fetchData() {
    //     const data = fetch('https://strapi-api.sgate.net/api/profiles?populate[profile_pic][fields][0]=url&filters[name][$eq]=' + username, {
    //         method: 'GET',
    //         headers: {
    //             'Authorization': 'Bearer 143888aefc1c5b694fa1b47690bc877bc107c3142e7252e3f327768689adb7b2dbeefbb3320f9964733cf2f51b72b1ae97e294b4d04f03527f375eef3729c45cd328ff8dfcf744cce03f9170045cd3eddd6c4a271941e121b2451e21aa29f79fe7a44f46309ef356ee79ae947cccd2e69a944a63e206e2005e2d2d5cdc163a93',
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => {setUserData(data.data[0]?.attributes);
    //             console.log(data.data[0]?.attributes);
                
    //         })
    // }
    // useEffect(() => { fetchData() }, [])
    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-zinc-400 ">
            
            <div className="h-[90vh] w-[30%] shadow-lg mt-16 rounded-lg bg-white intro-x">
About
            </div>

            
        </main>
    );
}
