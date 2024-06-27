import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/todos", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch TO Do's");
    }

    const data = await res.json();
    return data; // Return the parsed JSON data
  } catch (error) {
    console.error("Error loading TO Do's: ", error);
    return { topics: [] }; // Return an empty array or handle error case
  }
};


export default async function TopicsList() {
  const { topics } = await getTopics();

  return (
    <>
      {topics.map((t) => (<div className="bg-[#E86B51] py-3 flex flex-col justify-center items-center">
        <div
          key={t._id}
          className="p-3 border border-slate-300 my-5 flex justify-between gap-5 items-start
          w-[600px] rounded-[15px] bg-[#ffffff]"
          >
          <div>
            <h2 className="font-bold text-[20px] pl-5">{t.title}</h2>
            <div className="pl-5 ">{t.description}</div>
          </div>

          <div className="flex gap-4">
            <RemoveBtn id={t._id} />
            <Link href={`/editTodo/${t._id}`}>
              <HiPencilAlt size={28} className="icon"/>
            </Link>
          </div>
        </div>
        </div>
      ))}
    </>
  );
}