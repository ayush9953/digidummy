"use client"
import Header from "@/components/Header";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Profile() {

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

            <div className="h-[90vh] w-full shadow-lg mt-[70px] rounded-lg bg-white intro-x overflow-auto">
                <div class="cols-12">
                    <center>
                        <img align="middle" src="https://staging.sgate.in/html/digicard/images/sgate-logo.png" border="0" />
                    </center>
                </div>
                <div class="cols-12">
                    <center class="mt-3 mb-3">
                        <img align="middle" src="https://staging.sgate.in/html/digicard/images/slogon.png" border="0" />
                    </center>
                </div>
                <div class="cols-12">
                    <center class="mt-3 mb-3">
                        <img align="middle" className="h-36 w-36 rounded-[100%] shadow-xl" src="https://staging.sgate.in/html/digicard/images/nishant-jain-img.png" border="0" />
                    </center>
                </div>
                <div class="relative text-center h-24 w-100 flex items-center">
                    <span class="text-gray-950 w-fit block mx-auto text-3xl font-semibold ">Nishant Jain<br /><span class="font-semibold text-gray-950 dark:text-white text-1xl">(CEO)</span></span>

                </div>
                <div class="flex mt-4 p-2 flex justify-center">
                    <a href="tel:+919810150031" class="bg-zinc-300 p-1 group rounded-lg disabled:border *:select-none [&amp;>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-88 px-3.5 justify-center">
                        <svg class="h-88 w-8 text-slate-500" width="22" height="22" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"></path>  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path></svg><span>CALL</span>
                    </a>&nbsp;
                    <a href="https://wa.me/919810150031" target="_blank" class="bg-zinc-300 p-1 group rounded-lg disabled:border *:select-none [&amp;>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-88 px-3.5 justify-center">
                        <svg width="20" height="20" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.3945 2.66016C14.1328 3.43359 14.6953 4.27734 15.1172 5.22656C15.5391 6.17578 15.75 7.16016 15.75 8.17969C15.75 9.58594 15.3633 10.8867 14.6602 12.082C13.957 13.2773 12.9727 14.2266 11.7773 14.9297C10.582 15.6328 9.28125 15.9844 7.875 15.9844C6.53906 15.9844 5.27344 15.668 4.14844 15.0352L0 16.125L1.125 12.082C0.421875 10.8867 0.0703125 9.58594 0.0703125 8.17969C0.0703125 6.77344 0.421875 5.47266 1.125 4.27734C1.82812 3.08203 2.77734 2.13281 3.97266 1.42969C5.16797 0.726562 6.46875 0.375 7.875 0.375C8.89453 0.375 9.87891 0.585938 10.8281 0.972656C11.7773 1.39453 12.6211 1.95703 13.3945 2.66016ZM7.875 14.6836C9.03516 14.6836 10.125 14.4023 11.1445 13.8047C12.1289 13.2422 12.9375 12.4336 13.5352 11.4492C14.1328 10.4648 14.4492 9.375 14.4492 8.17969C14.4492 7.33594 14.2734 6.52734 13.9219 5.71875C13.5703 4.94531 13.0781 4.24219 12.4453 3.60938C11.8125 2.97656 11.1094 2.51953 10.3359 2.16797C9.5625 1.85156 8.71875 1.67578 7.875 1.67578C6.67969 1.67578 5.58984 1.99219 4.60547 2.55469C3.62109 3.15234 2.8125 3.96094 2.25 4.94531C1.65234 5.92969 1.37109 7.01953 1.37109 8.17969C1.37109 9.44531 1.6875 10.5703 2.39062 11.625L2.53125 11.8711L1.86328 14.2617L4.32422 13.6289L4.57031 13.7695C5.55469 14.4023 6.67969 14.6836 7.875 14.6836ZM11.4258 9.79688L11.5312 9.86719C11.6719 9.9375 11.7773 10.0078 11.8125 10.043C11.8125 10.1133 11.8125 10.2188 11.8125 10.3945C11.8125 10.6055 11.7422 10.7812 11.6719 10.9922C11.6016 11.2031 11.3906 11.3789 11.1094 11.5898C10.8281 11.8008 10.582 11.9062 10.3711 11.9062C10.0195 11.9766 9.70312 11.9766 9.42188 11.9062C9.07031 11.8359 8.57812 11.6953 8.01562 11.4141C6.82031 10.9219 5.73047 9.9375 4.74609 8.53125L4.67578 8.46094C4.14844 7.75781 3.90234 7.08984 3.90234 6.45703C3.90234 5.85938 4.11328 5.33203 4.53516 4.875L4.57031 4.83984C4.71094 4.69922 4.88672 4.59375 5.09766 4.59375H5.51953C5.58984 4.59375 5.66016 4.62891 5.73047 4.66406C5.80078 4.69922 5.83594 4.76953 5.90625 4.91016L6.50391 6.35156C6.57422 6.49219 6.57422 6.63281 6.53906 6.70312C6.39844 6.94922 6.25781 7.16016 6.08203 7.33594C5.97656 7.44141 5.90625 7.51172 5.90625 7.58203C5.87109 7.65234 5.90625 7.6875 5.97656 7.75781C6.29297 8.39062 6.67969 8.84766 7.13672 9.19922C7.45312 9.48047 7.94531 9.76172 8.61328 10.0781C8.78906 10.1836 8.92969 10.1836 9.03516 10.043C9.31641 9.69141 9.52734 9.44531 9.66797 9.26953C9.70312 9.19922 9.77344 9.12891 9.84375 9.12891C9.91406 9.12891 9.98438 9.16406 10.0898 9.16406C10.2656 9.23438 10.7227 9.44531 11.4258 9.79688Z" fill="currentColor"></path></svg>
                        <span>WHATSAPP</span>

                    </a>&nbsp;<a href="mailto:nishant.jain@sgate.in" class="bg-zinc-300 p-1 group rounded-lg disabled:border *:select-none [&amp;>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-88 px-3.5 justify-center">
                        <svg class="h-88 w-8 text-slate-500" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"></path>  <rect x="3" y="5" width="18" height="14" rx="2"></rect>  <polyline points="3 7 12 13 21 7"></polyline></svg><span>MAIL</span>

                    </a>
                </div>
                <div class="flex  p-2 flex justify-center">
                    <a href="tel:+919810150031" class="bg-zinc-300 p-1 group rounded-lg disabled:border *:select-none [&amp;>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-88 px-3.5 justify-center">
                        <svg class="h-88 w-8 text-slate-500" width="22" height="22" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"></path>  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path></svg><span>CALL</span>
                    </a>&nbsp;
                    <a href="https://wa.me/919810150031" target="_blank" class="bg-zinc-300 p-1 group rounded-lg disabled:border *:select-none [&amp;>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-88 px-3.5 justify-center">
                        <svg width="20" height="20" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.3945 2.66016C14.1328 3.43359 14.6953 4.27734 15.1172 5.22656C15.5391 6.17578 15.75 7.16016 15.75 8.17969C15.75 9.58594 15.3633 10.8867 14.6602 12.082C13.957 13.2773 12.9727 14.2266 11.7773 14.9297C10.582 15.6328 9.28125 15.9844 7.875 15.9844C6.53906 15.9844 5.27344 15.668 4.14844 15.0352L0 16.125L1.125 12.082C0.421875 10.8867 0.0703125 9.58594 0.0703125 8.17969C0.0703125 6.77344 0.421875 5.47266 1.125 4.27734C1.82812 3.08203 2.77734 2.13281 3.97266 1.42969C5.16797 0.726562 6.46875 0.375 7.875 0.375C8.89453 0.375 9.87891 0.585938 10.8281 0.972656C11.7773 1.39453 12.6211 1.95703 13.3945 2.66016ZM7.875 14.6836C9.03516 14.6836 10.125 14.4023 11.1445 13.8047C12.1289 13.2422 12.9375 12.4336 13.5352 11.4492C14.1328 10.4648 14.4492 9.375 14.4492 8.17969C14.4492 7.33594 14.2734 6.52734 13.9219 5.71875C13.5703 4.94531 13.0781 4.24219 12.4453 3.60938C11.8125 2.97656 11.1094 2.51953 10.3359 2.16797C9.5625 1.85156 8.71875 1.67578 7.875 1.67578C6.67969 1.67578 5.58984 1.99219 4.60547 2.55469C3.62109 3.15234 2.8125 3.96094 2.25 4.94531C1.65234 5.92969 1.37109 7.01953 1.37109 8.17969C1.37109 9.44531 1.6875 10.5703 2.39062 11.625L2.53125 11.8711L1.86328 14.2617L4.32422 13.6289L4.57031 13.7695C5.55469 14.4023 6.67969 14.6836 7.875 14.6836ZM11.4258 9.79688L11.5312 9.86719C11.6719 9.9375 11.7773 10.0078 11.8125 10.043C11.8125 10.1133 11.8125 10.2188 11.8125 10.3945C11.8125 10.6055 11.7422 10.7812 11.6719 10.9922C11.6016 11.2031 11.3906 11.3789 11.1094 11.5898C10.8281 11.8008 10.582 11.9062 10.3711 11.9062C10.0195 11.9766 9.70312 11.9766 9.42188 11.9062C9.07031 11.8359 8.57812 11.6953 8.01562 11.4141C6.82031 10.9219 5.73047 9.9375 4.74609 8.53125L4.67578 8.46094C4.14844 7.75781 3.90234 7.08984 3.90234 6.45703C3.90234 5.85938 4.11328 5.33203 4.53516 4.875L4.57031 4.83984C4.71094 4.69922 4.88672 4.59375 5.09766 4.59375H5.51953C5.58984 4.59375 5.66016 4.62891 5.73047 4.66406C5.80078 4.69922 5.83594 4.76953 5.90625 4.91016L6.50391 6.35156C6.57422 6.49219 6.57422 6.63281 6.53906 6.70312C6.39844 6.94922 6.25781 7.16016 6.08203 7.33594C5.97656 7.44141 5.90625 7.51172 5.90625 7.58203C5.87109 7.65234 5.90625 7.6875 5.97656 7.75781C6.29297 8.39062 6.67969 8.84766 7.13672 9.19922C7.45312 9.48047 7.94531 9.76172 8.61328 10.0781C8.78906 10.1836 8.92969 10.1836 9.03516 10.043C9.31641 9.69141 9.52734 9.44531 9.66797 9.26953C9.70312 9.19922 9.77344 9.12891 9.84375 9.12891C9.91406 9.12891 9.98438 9.16406 10.0898 9.16406C10.2656 9.23438 10.7227 9.44531 11.4258 9.79688Z" fill="currentColor"></path></svg>
                        <span>WHATSAPP</span>

                    </a>
                </div>
                <div class="cols-12 p-2 text-md">

                    <p class="mt-3 text-left" ><a href="https://www.sgate.in/" targte="_blank"><svg style={{ float: 'left' }} class="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>&nbsp;www.sgate.in</a></p>
                    <p class="mt-3 text-left" ><svg style={{ float: 'left' }} class="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                    </svg>&nbsp;sGate Tech Solutions Pvt. Ltd.</p>
                    <p class="mt-3 text-left"><a href="https://g.page/sgate-tech?share" target="_blank"><svg style={{ float: 'left' }} class="h-8 w-8 text-red-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"></path>  <circle cx="12" cy="11" r="3"></circle>  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1 -2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z"></path>&nbsp;</svg> <span >309 South Ex Tower, 389 Masjid Moth, New Delhi – 110049, India</span></a></p>

                </div>
            </div>

        </main>
    );
}
