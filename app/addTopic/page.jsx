"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";


// --> after adding the topic we need to go back to home so we 
//     need to use router 
// ---> here we need client interactivity so we have to make it client component
function AddTopic() {
    // console.log("hi"); this will be displayed in console if client else in terminal
    // get data from input field and store in state 
    // make a handler

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const router = useRouter();

    const handelSubmit = async (e) => {
        // first we have to prevent the default behaviour that is refresing the page once 
        // button is clicked
        e.preventDefault();

        if (!title || !description) {
            alert("Title and description are required. ");
            return;
        }

        // code to add to our database
        try {
            const res = await fetch("http://localhost:3000/api/topics", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ title, description }),
            });

            if(res.ok){
                // router.push('/');
                router.replace("/")
            }
            else{
                throw new Error("Failed to create a topic");
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <form onSubmit={handelSubmit} className="flex flex-col gap-3" action="">
                <input onChange={(e) => setTitle(e.target.value)} value={title} className="border border-slate-500 px-8 py-2" type="text" placeholder="Topic Title" />
                <input onChange={(e) => setDescription(e.target.value)} value={description} className="border border-slate-500 px-8 py-2" type="text" placeholder="Topic Discription" />

                <button onClick={handelSubmit} className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
                    Add topic
                </button>
            </form>

        </>
    );
}

export default AddTopic;