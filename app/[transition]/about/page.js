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
        <main className="flex min-h-screen md:w-[90%] lg:w-[50%] flex-col  items-center justify-between ">

            <div className="h-[90vh] w-full shadow-lg mt-[70px] p-2 rounded-lg bg-white intro-x overflow-auto">
                <div class="rounded-b-[--card-border-radius]" >

                    <div class="relative h-16 w-100 flex items-center">
                        <span class="text-gray-950 w-fit block mx-auto text-4xl font-semibold">ABOUT US</span>
                    </div>

                    <p><span >“We at S-Gate are driven by the ideology of Human centric approach”</span></p>
                    <p >We are a leading tech solution provider to a wide range of industries across the globe. We have a team of dynamic individuals who are inclined towards problem solving. We work in close association with all the stakeholders at our clients end to create wholesome solutions.</p>
                    <h3 class="mt-4 font-semibold text-gray-950 dark:text-white">Our Principles</h3>
                    <ul class="servicelist" >
                        <li>Process Focused</li>
                        <li>Effective Communication</li>
                        <li>Solution Orientated</li>
                        <li>Product Ownership</li>
                    </ul>
                </div>
            </div>


        </main>
    );
}
