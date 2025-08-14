"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

function EditTopicForm({ id, title, description }) {

    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);

    const router = useRouter();

    const handelSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`https://mongodbcrud-liart.vercel.app/api/topics/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ newTitle, newDescription }),
            });

            if (!res.ok) {
                throw new Error("Failed to update topic");
            }
            router.refresh();
            router.push("/");


        } catch (error) {
            console.log(error);
        }
    }
    return (
        <form onSubmit={handelSubmit} className="flex flex-col gap-3" action="">
            <input onChange={(e) => setNewTitle(e.target.value)} value={newTitle} className="border border-slate-500 px-8 py-2" type="text" placeholder="Topic Title" />
            <input onChange={(e) => setNewDescription(e.target.value)} value={newDescription} className="border border-slate-500 px-8 py-2" type="text" placeholder="Topic Discription" />

            <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
                Update topic
            </button>
        </form>
    );
}

export default EditTopicForm;