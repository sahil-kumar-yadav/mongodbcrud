import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi"


// first we fill fetch the data from monogodb
const getTopics = async () => {
    try {
        // by defult next js store cache so if we update the data we won't get updated data
        const res = await fetch('http://localhost:3000/api/topics', { cache: "no-store" });

        // check if its working or not
        if (!res.ok) {
            throw new Error("Failed to fetch topics");
        }
        return res.json();
    } catch (error) {
        console.log("Error loading topics ", error);
    }
}

async function TopicsList() {

    const { topics } = await getTopics();
 
    return (
        <>
            {topics.map(t => (
                <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
                    <div>
                        <h2 className="font-bold text-2xl">{t.title}</h2>
                        <div>{t.description}</div>
                    </div>
                    <div className="flex gap-2">
                        {/* we need to pass id to delete  */}
                        <RemoveBtn id={t._id} />
                        {/* for id we have _id  */}
                        <Link href={`/editTopic/${t._id}`}>
                            <HiPencilAlt size={24} />
                        </Link>
                    </div>
                </div>
            ))}
        </>
    );
}

export default TopicsList;