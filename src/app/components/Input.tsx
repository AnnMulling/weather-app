"use client"
import { BsSearch } from "react-icons/bs";
import { cn } from "../utils/cn";


type Props = {
    className ? : string,
    value: string,
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
    onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
}

export default function Input (props: Props) {
  return (
    <form
    onSubmit={props.onSubmit}
    className={cn("flex relative items-center justify-center h-10", props.className)}>
        <input
            onChange={props.onChange}
            value={props.value}
            type="text"
            className="px-4 py-2 w-[-230px] border border-gray-300 rounded-l-md focus:outline-none  focus:border-blue-500 h-full"

        />
        <button className="px-4 py-[9px] bg-blue-500 text-white rounded-r-md focus:outline-none hover:bg-blue-600  h-full">
            <BsSearch />
        </button>
    </form>
  )
};
