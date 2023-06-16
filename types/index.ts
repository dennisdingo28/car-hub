import { Dispatch, MouseEventHandler, SetStateAction } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}
export interface SearchManufacturerProps {
    selected: string,
    setSelected: Dispatch<SetStateAction<string>>;
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
export interface FilterProps {
    manufacturer?: string;
    year?: number;
    model?: string;
    limit?: number;
    fuel?: string;
}
export interface OptionProps {
    title: string;
    value: string;
}
export interface CustomFilterProps {
    title: string;
    options: Array<OptionProps>;
    setFilter: Dispatch<SetStateAction<any>>;
}
export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
    setLimit: Dispatch<SetStateAction<number>>
}
export interface SearchBarProps {
    setManufacturer: Dispatch<SetStateAction<string>>
    setModel: Dispatch<SetStateAction<string>>
}