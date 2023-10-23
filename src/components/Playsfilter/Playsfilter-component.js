import React from "react";
import { Disclosure } from '@headlessui/react'
import {BiChevronUp,BiChevronDown} from 'react-icons/bi'

const Playsfilter = (props) => {
  return (
        <div className="bg-gray-100 my-4 rounded-md mx-1 " >
                <Disclosure >
        {({open}) => (
            <>
    <Disclosure.Button className="py-2 pl-2 flex items-center gap-3">
    {(open) ? <BiChevronUp/>: <BiChevronDown />  }
            <div className="bg-gray-100 p-3 mr-36 rounded-md ">
            <div className={(open) ? "text-red-500" : "text-grey-300"}>
            {props.title}   
        </ div>
            </div>
      </Disclosure.Button>
      <Disclosure.Panel >
        <div className="flex items-center flex-wrap gap-2 bg-gray-100 p-3 rounded-md pr-12">{
            props.tags.map((tag) => (
                <div className="text-red-500 border-2 border-grey-300 p-1">
                    {tag}                    
                </ div>
            ))
        }</div>
       
      </Disclosure.Panel>
            </>
        )}
    </Disclosure>
        </div>
  );
};

export default Playsfilter;