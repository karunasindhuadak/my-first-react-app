import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
    const data = useLoaderData()
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/Karunasindhu23")
//       .then((response) => response.json())
//       .then((data) => setData(data))
//       .catch((error) => console.error("Error fetching data", error))
//   }, []);
  return (
   <section className="flex justify-center items-center py-20 bg-gray-50">
      <div className="bg-white shadow-md hover:shadow-lg transition-all duration-300 rounded-2xl p-10 w-full max-w-md text-center border border-gray-100">
        <img
          src={data.avatar_url}
          alt="GitHub Avatar"
          className="w-32 h-32 mx-auto rounded-full border-4 border-white shadow-md"
        />

        <h2 className="text-2xl font-semibold mt-4 text-gray-900">
          @{data.login}
        </h2>
        <p className="text-sm text-gray-500 mb-8">GitHub Profile</p>

        <div className="flex justify-around text-gray-800 mb-6">
          <div>
            <p className="text-xl font-semibold">{data.followers}</p>
            <p className="text-sm text-gray-500">Followers</p>
          </div>
          <div>
            <p className="text-xl font-semibold">{data.following}</p>
            <p className="text-sm text-gray-500">Following</p>
          </div>
          <div>
            <p className="text-xl font-semibold">{data.public_repos}</p>
            <p className="text-sm text-gray-500">Repos</p>
          </div>
        </div>

        <a
          href={data.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gray-900 text-white px-6 py-2 rounded-lg text-sm hover:bg-gray-800 transition-all duration-300"
        >
          View Profile
        </a>
      </div>
    </section>
);
}

export default Github;

export const githubInfoData = async () => {
    const response = await fetch ("https://api.github.com/users/karunasindhuadak")
    return response.json();
}