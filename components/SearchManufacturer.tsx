"use client"

import { useState,Fragment } from "react";
import { Combobox,Transition } from "@headlessui/react";
import { SearchManufacturerProps } from "@/types";
import Image from "next/image";
import { manufacturers } from "@/constants";

const SearchManufacturer = ({selected,setSelected}:SearchManufacturerProps) => {
    const [query,setQuery] = useState<string>("");

    const filteredManufacturers = query==="" ? [] : manufacturers.filter((item)=>(
        item.toLowerCase().replace(/\s+/g,"").includes(query.toLowerCase().replace(/\s+/g,""))
    ));

  return (
    <div className="search-manufacturer">
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative w-full">
            <Combobox.Button className="absolute top-[14px]">
                <Image src="/car-logo.svg" className="ml-4" width={20} height={20} alt="car brand logo"/>
            </Combobox.Button>
            <Combobox.Input className="search-manufacturer__input" placeholder="Volkswagen" displayValue={(manufacturer: string)=>manufacturer} onChange={(e)=>setQuery(e.target.value)}/>
            <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0" afterLeave={()=>{setQuery('')}}>
                <Combobox.Options>
                    {   
                        filteredManufacturers.map((manufacturer)=>(
                            <Combobox.Option value={manufacturer} key={manufacturer} className={({active})=>`
                            relative search-manufacturer__option ${active ? 'bg-primary-blue rounded-sm  text-white':'text-gray-900'}`}>
                                {({ active, selected }) => (
                                <div
                                  className={`${
                                    active ? 'text-white font-bold' : 'bg-white text-black'
                                  } cursor-pointer`}
                                >
                                  {manufacturer}
                                </div>
                                )}
                            </Combobox.Option>
                        ))
                    }
                 
                </Combobox.Options>
            </Transition>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer
