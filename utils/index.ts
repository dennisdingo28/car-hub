import { CarProps,FilterProps } from "@/types";

export async function fetchCars(filters: FilterProps){
    try {
        const {manufacturer,year,model,limit,fuel} = filters;
        
        const headers: HeadersInit = {
            'X-RapidAPI-Key': '831a1881ccmsh73539fc4f76aec2p18bd45jsn33e74fa176ab',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
        }
        const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`;
        const response = await fetch(url,{  
            method:'GET',
            headers:headers,
        });
        
        const result = await response.json();
        console.log(result);
        
        return result;
    } catch (error) {
        console.log(error);
    }
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };
  
export const generateCarImageUrl = (car: CarProps,angle?: string) => {
    const url = new URL('https://cdn.imagin.studio/getImage');
    const {make,year,model} = car;
    url.searchParams.append('customer','hrjavascript-mastery');
    url.searchParams.append('make',make);
    url.searchParams.append('modelFamily',model.split(' ')[0]);
    url.searchParams.append('zoomType',"fullscreen");
    url.searchParams.append('modelYear',`${year}`);
    url.searchParams.append('angle',`${angle}`);

    return `${url}`;
}
export const updateSearchParams = (type: string,value: string) =>{
    const searchParams = new URLSearchParams(window.location.search);
    
    searchParams.set(type,value);
    const newPathname = `${window.location.pathname}?${searchParams}`;
    
    return newPathname;
}