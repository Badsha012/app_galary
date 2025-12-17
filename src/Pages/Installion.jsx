import React from "react";
import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

const Installation = () => {
  // URL থেকে app id পাওয়া
  const { id } = useParams();

  // যদি loader ব্যবহার করো
  const apps = useLoaderData() || [];
  const app = apps.find((a) => a.id === id);

  if (!app) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <h1 className="text-3xl font-bold">App Not Found</h1>
        <p className="mt-2 text-gray-500">
          The app you are looking for does not exist in our system.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-6 space-y-8 text-center">
      <h1 className="text-4xl font-bold">{app.title}</h1>
      <img
        src={app.image}
        alt={app.title}
        className="mx-auto w-64 h-64 object-cover rounded-xl shadow-lg"
      />
      <p className="text-gray-600 mt-4">{app.description}</p>

      <div className="mt-6 flex justify-center gap-4">
        <a
          href={app.apkLink || "#"} // যদি apk download link থাকে
          className="rounded-full bg-emerald-500 px-6 py-3 font-semibold text-white hover:opacity-90 transition"
        >
          Download APK
        </a>
        <button className="rounded-full bg-sky-500 px-6 py-3 font-semibold text-white hover:opacity-90 transition">
          Install Now
        </button>
      </div>
    </div>
  );
};

export default Installation;
