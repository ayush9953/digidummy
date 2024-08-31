"use client"
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [userData,setUserData] = useState({})
function fetchData() {
  const data=fetch('https://strapi-api.sgate.net/api/books?filters[Name][$eq]='+'John',{
    method: 'GET',
    headers: {
      'Authorization': 'Bearer 143888aefc1c5b694fa1b47690bc877bc107c3142e7252e3f327768689adb7b2dbeefbb3320f9964733cf2f51b72b1ae97e294b4d04f03527f375eef3729c45cd328ff8dfcf744cce03f9170045cd3eddd6c4a271941e121b2451e21aa29f79fe7a44f46309ef356ee79ae947cccd2e69a944a63e206e2005e2d2d5cdc163a93',
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(data => setUserData(data))
}

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      hi there
      
    </main>
  );
}
