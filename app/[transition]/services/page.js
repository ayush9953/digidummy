"use client"
import Header from "@/components/Header";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function About() {

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
        <main className="flex min-h-screen lg:w-[50%] flex-col  items-center justify-between ">

            <div className="h-[90vh] w-full shadow-lg mt-[70px] rounded-lg bg-white intro-x overflow-auto p-2">
                <div class="relative h-16 w-100 flex items-center">
                    <span class="text-gray-950 w-fit block mx-auto text-4xl font-semibold">SERVICES</span>
                </div>
                <h2 class="mt-2 text-center font-semibold"><span style={{ color: '#f8b900', fontSize: '20px' }}>Cargodash<br />An Agile ERP Solution!<br /></span>Revolutionize your Logistics Management</h2>
            
            <center>
                <img src="https://staging.sgate.in/html/digicard/images/sgate-1-3.png"/>
            </center>
            <ul class="servicelist mt-4">
                <li>-Seamless Operations</li>
                <li>-Real-Time Visibility</li>
                <li>-Optimize Performance</li>
                <li>-Scalable Solution</li>
                <li>-Customizable Modules</li>
                <li>-Advanced Security</li>
                <li>-Mobile Accessibility</li>
                <li>-Hassle-Free Integration</li>
                <li>-Data-Driven Decisions</li>
                <li>-Expert Support</li>
            </ul>

            <p class="dark:text-gray-300 text-gray-700 mt-4">Take your online presence to new heights with our top-tier domain registration and web 
                hosting services. Join countless satisfied customers who have experienced the difference in performance and reliability. 
                Get started today and unlock the full potential of your website!</p>

            </div>

        </main>
    );
}
