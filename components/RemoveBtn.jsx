"use client";

import {HiOutlineTrash} from "react-icons/hi"


function RemoveBtn({id}) {

    const removeTopic = async() =>{
        const confiremed = confirm('Are you sure ? ');

        if(confiremed){
            await fetch(`https://mongodbcrud-liart.vercel.app/api/topics?id=${id}`,{
                method: "DELETE",
            });
        }
    }


    return (
        <>
            <button onClick={removeTopic} className="text-red-400">
                <HiOutlineTrash size={24}/>
            </button>
        </>
    );
}

export default RemoveBtn;