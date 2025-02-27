import { useState } from "react";

function ImageSearch({searchText}) {
    const [input,setInput] = useState("")
    function onSubmit(e) {
        e.preventDefault();
        searchText(input);
    }
  return (
  <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
    <form className="w-full max-w-sm" onSubmit={onSubmit}>
        <div className="flex items-center border-b-2 border-teal-500 py-2"> 
        <input type="text" onChange={(e)=>{setInput(e.target.value)}} value={input} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Search Image Term" />
        <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">Search</button>
        </div>
    </form>
  </div>);
}

export default ImageSearch;
