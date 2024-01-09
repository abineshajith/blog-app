/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <main className="container mx-auto px-4 py-6">
    <h2 className="text-4xl font-bold mb-4">Welcome to Aroha Technologies Blog</h2>
    <p>Here you can read the latest articals</p>
</main>
 <div className="flex justify-end px-4">
 <input type="text" className="px-4 py-2 border border-gray-300 rounded-md" placeholder="Search..." />
 <button className="px-4 py-2 bg-blue-500 text-white rounded-md ml-4">Search</button>
</div>
   <br/>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  
        <div className="border border-gray-200 p-4">
          <img className="w-full h-48 object-cover mb-4" src="https://picsum.photos/200" alt="Post Image"/>
          <h2 className="text-xl font-semibold mb-2">
          Enjoy the journey</h2>
          <p className="text-gray-600">
            Enjoy the journey
            We make sure our team feels appreciated and valued. 
            We take the time to stop and acknowledge where we came from so that we don’t miss how impressive the climb is.</p>
            </div>
        <div className="border border-gray-200 p-4">
          <img className="w-full h-48 object-cover mb-4" src="https://picsum.photos/200" alt="Post Image"/>
          <h2 className="text-xl font-semibold mb-2">Post Title 2</h2>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="border border-gray-200 p-4">
          <img className="w-full h-48 object-cover mb-4" src="https://picsum.photos/200" alt="Post Image"/>
          <h2 className="text-xl font-semibold mb-2">Post Title 3</h2>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div> 
       
    </div>
</>
  )
}
