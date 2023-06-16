"use client";

import { Hero, ShowMore } from '@/components'
import Image from 'next/image'
import {SearchBar,CustomFilter} from "../components";
import { fetchCars } from '@/utils';
import {CarCard} from '@/components';
import { fuels, manufacturers, yearsOfProduction } from '@/constants';
import { useEffect, useState } from 'react';

export default function Home() {
  const [allCars,setAllCars] = useState([]);

  const [manufacturer,setManufacturer] = useState("");
  const [model,setModel] = useState("");
  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState(2022);
  const [limit,setLimit] = useState(10);
  
  const isDataEmpty = !Array.isArray(allCars) || allCars.length<1 || !allCars;

  const getCars = async () =>{
    try{
      const result = await fetchCars({
        manufacturer:manufacturer || "",
        year:year || 2022,
        fuel:fuel || "",
        limit:limit || 10,
        model:model || ""
  
      })
      setAllCars(result);

    }catch(err){
      console.log(err);
      
    }
  
  }

  useEffect(()=>{
    getCars();
  },[fuel,year,model,manufacturer,limit])

  return (
    <main className='overflow-hidden'>
      <Hero/>
      <div className="mt-12 padding-x padding-y max-width" id='discover'>
        <div className="home__text-container">
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore the cars you might be interested in</p>
        </div>
        <div className="home__filters">
          <SearchBar setManufacturer={setManufacturer} setModel={setModel}/>
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} setFilter={setFuel}/>
            <CustomFilter title="year" options={yearsOfProduction} setFilter={setYear}/>
          </div>
        </div>

        {allCars.length>0 ? (
          <section>
            <div className="home__cars-wrapper">
              {
                allCars?.map((car)=>(
                  <CarCard car={car}/>
                ))
              }
            </div>
            
            <ShowMore pageNumber={limit/10} isNext={limit>allCars.length} setLimit={setLimit}/>
          </section>
        ): (
          <div className="home__error-container">
            <h2 className='text-black text-xl font-bold'>Oops, no results.</h2>
          </div>
        )}


      </div>
    </main>
  )
}
