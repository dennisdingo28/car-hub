import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
}
export interface SearchManufacturerProps {
    manufacturer: string,
    setManufacturer: (manufacturer: string) =>void;
}
export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive:"fwd";
    fuel_type:"gas";
    highway_mpg: number;
    make:"toyota";
    model:"corolla";
    transmission:"a";
    year:number;
}