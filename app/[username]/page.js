"use client"
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home({ params }) {
    const [userData, setUserData] = useState({})
    const { username } = params;
    function fetchData() {
        const data = fetch('https://strapi-api.sgate.net/api/profiles?populate[profile_pic][fields][0]=url&filters[name][$eq]=' + username, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer 143888aefc1c5b694fa1b47690bc877bc107c3142e7252e3f327768689adb7b2dbeefbb3320f9964733cf2f51b72b1ae97e294b4d04f03527f375eef3729c45cd328ff8dfcf744cce03f9170045cd3eddd6c4a271941e121b2451e21aa29f79fe7a44f46309ef356ee79ae947cccd2e69a944a63e206e2005e2d2d5cdc163a93',
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {setUserData(data.data[0]?.attributes);
                console.log(data.data[0]?.attributes);
                
            })
    }
    useEffect(() => { fetchData() }, [])
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full  before:blur-2xl before:content-[''] after:absolute after:-z-20 
      after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 
       before:lg:h-[360px] z-[-1]">
                <div className="border-[4px] border-green-400 h-[40vh] w-[80vh] grid grid-cols-6 gap-4 place-items-center">
                    <div className="col-span-2 h-[70%] w-[90%]">
                        <img
                            src={'https://strapi-api.sgate.net/'+userData?.profile_pic?.data[0]?.attributes?.url}
                            alt="Next.js Logo"
                            className="object-contain"
                            priority />
                    </div>
                    <div className="col-span-4 h-[70%] w-[90%] p-4">
                        <p><span className="text-green-500">Name: </span><span className="text-black-600">{userData.name}</span></p>
                        <p><span className="text-green-500">Designation: </span><span className="text-black-600">{userData.designation}</span></p>
                        <p><span className="text-green-500">Company: </span><span className="text-black-600">{userData.company}</span></p>
                        <p><span className="text-green-500">Email: </span><span className="text-black-600">{userData.email_id}</span></p>
                        <p><span className="text-green-500">Work ID:</span> <span className="text-black-600">{userData.work_id}</span></p>

                    </div>
                </div>
            </div>

            <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
                <a
                    href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        Home
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                        </span>
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                        Find in-depth information about Next.js features and API.
                    </p>
                </a>

                <a
                    href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        About{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                        </span>
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                        Learn about Next.js in an interactive course with&nbsp;quizzes!
                    </p>
                </a>

                <a
                    href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        Contact{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                        </span>
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                        Explore starter templates for Next.js.
                    </p>
                </a>

            </div>
        </main>
    );
}
