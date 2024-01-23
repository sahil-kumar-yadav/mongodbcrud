import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi"


// first we fill fetch the data from monogodb
const getTopics = async () => {
    try {
        // by defult next js store cache so if we update the data we won't get updated data

        const res = await fetch("https://mongodbcrud-liart.vercel.app/api/topics", {
            cache: "no-store",
        });
        // check if its working or not

        if (!res.ok) {
            throw new Error("Failed to fetch topics");
        }

        return res.json();
    } catch (error) {
        console.log("Error loading topics: ", error);
    }
};


export default async function TopicsList() {
    const { topics } = await getTopics();

    return (
        <>
            {topics.map((t) => (
                <div
                    key={t._id}
                    className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
                >
                    <div key={2}>
                        <h2 className="font-bold text-2xl">{t.title}</h2>
                        <div>{t.description}</div>
                    </div>

                    <div key={2} className="flex gap-2">
                        <RemoveBtn id={t._id} />
                        <Link href={`/editTopic/${t._id}`}>
                            <HiPencilAlt size={24} />
                        </Link>
                    </div>
                </div>
            ))}
        </>
    );
}

