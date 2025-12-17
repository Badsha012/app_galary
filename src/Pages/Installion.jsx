import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Installation = () => {
  const app = useLoaderData();
  const [installed, setInstalled] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

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

  const handleInstall = () => {
    setInstalled(true);
    toast.success(`${app.title} installed successfully!`);
  };

  const handleDownload = () => {
    setDownloaded(true);
    toast.success(`${app.title} downloaded successfully!`);
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-6 space-y-8 text-center">
      <h1 className="text-4xl font-bold">{app.title}</h1>
      <img
        src={app.image}
        alt={app.title}
        className="mx-auto w-64 h-64 object-cover rounded-xl shadow-lg"
      />
      <p className="text-gray-400 mt-4">{app.description}</p>

      <div className="mt-6 flex justify-center gap-4">
        {/* Download Button */}
        <button
          onClick={handleDownload}
          disabled={downloaded}
          className={`rounded-full px-6 py-3 font-semibold text-white transition ${
            downloaded
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-emerald-500 hover:bg-emerald-600"
          }`}
        >
          {downloaded ? "Downloaded ✅" : "Download APK"}
        </button>

        {/* Install Button */}
        <button
          onClick={handleInstall}
          disabled={installed}
          className={`rounded-full px-6 py-3 font-semibold text-white transition ${
            installed
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-sky-500 hover:bg-sky-600"
          }`}
        >
          {installed ? "Installed ✅" : "Install Now"}
        </button>
      </div>

      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
      />
    </div>
  );
};

export default Installation;
