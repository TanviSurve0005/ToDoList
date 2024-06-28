"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

const TopicsList = ({ addCompletedTask }) => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/todos", {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch To Do's");
        }

        const data = await res.json();
        setTopics(data.topics);
      } catch (error) {
        console.error("Error loading To Do's: ", error);
      }
    };

    fetchTopics();
  }, []);

  const handleCheckboxChange = (task) => {
    addCompletedTask(task);
  };

  if (!topics || topics.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {topics.map((t) => (
        <div key={t._id} className="py-3 flex flex-col justify-center items-center w-[800px]">
          <div className="p-3 border border-slate-300 flex justify-between gap-5 items-start w-full rounded-[15px] bg-[#ffffff]">
            <div>
              <h2 className="font-bold text-[20px] pl-5">{t.title}</h2>
              <div className="pl-5">{t.description}</div>
            </div>

            <div className="flex gap-4 items-center">
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange(t)}
                className="form-checkbox h-6 w-6 text-green-600"
              />
              <RemoveBtn id={t._id} />
              <Link href={`/editTodo/${t._id}`}>
                <HiPencilAlt size={28} className="icon text-green-900" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TopicsList;
