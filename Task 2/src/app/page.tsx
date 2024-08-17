import CategoryList from "@/components/ui/CategoryList";
import Header from "@/components/ui/Header";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";
import slider1 from '../assets/images/slider-01.jpg.png'
import svg1 from '../assets/images/SVG1.png'
import svg2 from '../assets/images/SVG2.png'
import svg3 from '../assets/images/SVG3.png'
import svg4 from '../assets/images/SVG4.png'
import banner1 from '../assets/images/banner-01.jpg.png'
import banner2 from '../assets/images/banner-02.jpg.png'
import banner3 from '../assets/images/banner-03.jpg.png'
import banner4 from '../assets/images/banner-04.jpg.png'
import banner5 from '../assets/images/banner-05.jpg.png'
import banner6 from '../assets/images/banner-06.jpg.png'
import banner7 from '../assets/images/banner-07.jpg.png'
import { Button } from "@nextui-org/button";
import { FaArrowRightLong } from "react-icons/fa6";
import NewArrivals from "@/components/ui/NewArrivals";
import FeaturedProducts from "@/components/ui/FeaturedProducts";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main>
      <Header />

      <section className="flex">
        <section className="pl-[6vw] mt-12 border-t-2 border-gray-200 relative">
          <CategoryList />
        </section>
        <section className="w-full">
          <div className="border-gray-200 border-b-2 flex justify-between w-full border-b-2 border-gray-200 h-fit pr-[6vw]">
            <ul className="flex h-12 pl-6">
              <li className="capitalize font-semibold text-base mr-7 flex items-center tracking-tighter hover:border-b-2 hover:border-purple-800 hover:text-purple-800 cursor-pointer" id="home">home <MdKeyboardArrowDown className="ml-1 text-gray-500 text-xl" /></li>
              <li className="capitalize font-semibold text-base mr-7 flex items-center tracking-tighter hover:border-b-2 hover:border-purple-800 hover:text-purple-800 cursor-pointer">shop <MdKeyboardArrowDown className="ml-1 text-gray-500 text-xl" /></li>
              <li className="capitalize font-semibold text-base mr-7 flex items-center tracking-tighter hover:border-b-2 hover:border-purple-800 hover:text-purple-800 cursor-pointer">fruits & vegetables</li>
              <li className="capitalize font-semibold text-base mr-7 flex items-center tracking-tighter hover:border-b-2 hover:border-purple-800 hover:text-purple-800 cursor-pointer">beverages</li>
              <li className="capitalize font-semibold text-base mr-7 flex items-center tracking-tighter hover:border-b-2 hover:border-purple-800 hover:text-purple-800 cursor-pointer">blog</li>
              <li className="capitalize font-semibold text-base mr-7 flex items-center tracking-tighter hover:border-b-2 hover:border-purple-800 hover:text-purple-800 cursor-pointer">contact</li>
            </ul>
            <ul className="flex h-12">
              <li className="capitalize font-semibold text-base mr-7 flex items-center tracking-tighter hover:border-b-2 hover:border-purple-800 hover:text-purple-800 cursor-pointer">trending products <MdKeyboardArrowDown className="ml-1 text-gray-500 text-xl" /></li>
              <li className="capitalize font-semibold text-base mr-7 flex items-center tracking-tighter text-red-600 hover:border-b-2 hover:border-amber-500 hover:text-amber-500 cursor-pointer group">almost finished&ensp;<span className="uppercase text-white bg-red-600 text-xs leading-3 rounded p-1.5 group-hover:bg-amber-500">sale</span> <MdKeyboardArrowDown className="ml-1 text-gray-500 text-xl" /></li>
            </ul>
          </div>
          <div className="pt-6 pl-6 pr-[6vw] h-5/6">
            <div className="h-full relative">
              <Image src={slider1} alt="slider-1" className="h-full absolute" />
              <div className="relative z-10 max-w-md pt-12 pl-16 box-content">
                <p className="font-semibold text-sm tracking-tight leading-5 text-green-900 mb-3 green-gradient w-32 rounded-md py-1 px-2 box-content">weekend discount</p>
                <p className="text-purple-950 font-bold text-5xl mb-4">Get the best quality products at the lowest prices</p>
                <p className="tracking-tight text-base mb-16">We have prepared special discounts for you on grocery products. Don&apos;t miss these opportunities...</p>
                <div className="flex">
                  <Button color="secondary" size="lg" className="capitalize font-bold mr-4 bg-purple-800 text-sm text-white">shop now</Button>
                  <div>
                    <span className="tracking-tight text-red-500 text-3xl font-bold leading-7 mr-2">$27.99</span>
                    <del className="tracking-tight leading-5 text-xl font-medium">$56.67</del>
                    <p className="tracking-tight text-xs text-gray-400">Don&apos;t miss this limited time offer.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="mb-7">
        <ul className="flex px-[6vw]">
          <li className="flex pb-7 border-b-2 border-gray-200">
            <div className="mr-2">
              <Image height={56} width={56} src={svg1} alt="svg1" />
            </div>
            <div>
              <p className="font-bold tracking-tighter">Payment only online</p>
              <p className="text-sm text-gray-500 leading-4 tracking-tighter">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit optio distinctio saepe quia.</p>
            </div>
          </li>
          <li className="flex pb-7 border-b-2 border-gray-200">
            <div className="mr-2">
              <Image height={56} width={56} src={svg2} alt="svg2" />
            </div>
            <div>
              <p className="font-bold tracking-tighter">Quality assurance</p>
              <p className="text-sm text-gray-500 leading-4 tracking-tighter">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit optio distinctio saepe quia.</p>
            </div>
          </li>
          <li className="flex pb-7 border-b-2 border-gray-200">
            <div className="mr-2">
              <Image height={56} width={56} src={svg3} alt="svg3" />
            </div>
            <div>
              <p className="font-bold tracking-tighter">Delivery from 1 hour</p>
              <p className="text-sm text-gray-500 leading-4 tracking-tighter">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit optio distinctio saepe quia.</p>
            </div>
          </li>
          <li className="flex pb-7 border-b-2 border-gray-200">
            <div className="mr-2">
              <Image height={56} width={56} src={svg4} alt="svg4" />
            </div>
            <div>
              <p className="font-bold tracking-tighter">New stocks and sales</p>
              <p className="text-sm text-gray-500 leading-4 tracking-tighter">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit optio distinctio saepe quia.</p>
            </div>
          </li>
        </ul>
      </section>

      <section className="px-[6vw]">
        <ul className="flex mb-6">
          <li className="relative w-1/3 h-56 flex items-center">
            <div className="z-10 relative capitalize mb-2 pl-4">
              <p className="text-red-300 font-medium tracking-tighter text-xs">only this week</p>
              <p className="text-2xl font-bold max-w-56 mb-4">quality eggs at an affordable price</p>
              <p className="text-sm text-gray-500 tracking-tighter leading-5 mb-5">eat on everyday</p>
              <Button className="font-bold" color="danger">Shop Now&emsp;<FaArrowRightLong /></Button>
            </div>
            <Image src={banner1} alt="b1"className="h-full absolute top-0" />
          </li>
          <li className="relative w-1/3 h-56 flex items-center">
            <div className="z-10 relative capitalize mb-2 pl-4">
              <p className="text-red-300 font-medium tracking-tighter text-xs">only this week</p>
              <p className="text-2xl font-bold max-w-72 mb-4">Snacks that nourishes our mind and body</p>
              <p className="text-sm text-gray-500 tracking-tighter leading-5 mb-5">shine this morning</p>
              <Button className="font-bold" color="danger">Shop Now&emsp;<FaArrowRightLong /></Button>
            </div>
            <Image src={banner2} alt="b2"className="h-full absolute top-0" />
          </li>
          <li className="relative w-1/3 h-56 flex items-center">
            <div className="z-10 relative capitalize mb-2 pl-4">
              <p className="text-red-300 font-medium tracking-tighter text-xs">only this week</p>
              <p className="text-2xl font-bold max-w-72 mb-4">Unbeatable quality, unbeatable prices.</p>
              <p className="text-sm text-gray-500 tracking-tighter leading-5 mb-5">only this week, don&apos;t miss</p>
              <Button className="font-bold" color="danger">Shop Now&emsp;<FaArrowRightLong /></Button>
            </div>
            <Image src={banner3} alt="b3"className="h-full absolute top-0" />
          </li>
        </ul>
      </section>

      <NewArrivals />

      <section className="px-[6vw]">
        <ul className="flex mb-6 justify-between">
          <li className="relative w-80 h-96 flex">
            <div className="z-10 relative capitalize mb-2 pl-4 pt-6">
              <p className="text-red-300 font-medium tracking-tighter text-xs">only this week</p>
              <p className="text-2xl font-bold mb-4">Provides you experienced quality products</p>
              <p className="text-sm text-gray-500 tracking-tighter leading-5 mb-5">Feed your family the best</p>
              <Button className="font-medium" color="danger" size="sm">Shop Now&emsp;<FaArrowRightLong /></Button>
            </div>
            <Image src={banner4} alt="b4"className="h-full absolute top-0" />
          </li>
          <li className="relative w-80 h-96 flex">
            <div className="z-10 relative capitalize mb-2 pl-4 pt-6">
              <p className="text-red-300 font-medium tracking-tighter text-xs">only this week</p>
              <p className="text-2xl font-bold mb-4">Shopping with us for better quality and the best price</p>
              <p className="text-sm text-gray-500 tracking-tighter leading-5 mb-5">Only this week. Don&apos;t miss...</p>
              <Button className="font-medium" color="danger" size="sm">Shop Now&emsp;<FaArrowRightLong /></Button>
            </div>
            <Image src={banner5} alt="b5"className="h-full absolute top-0" />
          </li>
          <li className="relative w-80 h-96 flex">
            <div className="z-10 relative capitalize mb-2 pl-4 pt-6">
              <p className="text-red-300 font-medium tracking-tighter text-xs">only this week</p>
              <p className="text-2xl font-bold mb-4">Get the best quality products at the lowest prices</p>
              <p className="text-sm text-gray-500 tracking-tighter leading-5 mb-5">A different kind of grocery store</p>
              <Button className="font-medium" color="danger" size="sm">Shop Now&emsp;<FaArrowRightLong /></Button>
            </div>
            <Image src={banner6} alt="b6"className="h-full absolute top-0" />
          </li>
          <li className="relative w-80 h-96 flex">
            <div className="z-10 relative capitalize mb-2 pl-4 pt-6">
              <p className="text-red-300 font-medium tracking-tighter text-xs">only this week</p>
              <p className="text-2xl font-bold mb-4">Where you get your all favorite brands under one roof</p>
              <p className="text-sm text-gray-500 tracking-tighter leading-5 mb-5">Only this week. Don’t miss...</p>
              <Button className="font-medium" color="danger" size="sm">Shop Now&emsp;<FaArrowRightLong /></Button>
            </div>
            <Image src={banner7} alt="b6"className="h-full absolute top-0" />
          </li>
        </ul>
      </section>

      <FeaturedProducts />

      <Footer />
    </main>
  );
}
