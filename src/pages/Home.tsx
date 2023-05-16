import React, { useEffect, useState } from "react";
import { xml2js, js2xml } from "xml-js";

type User = {
  name: string;
  age: number;
  hobbies: string[];
};

const Home = () => {
  const data = [
    {
      name: "Aryan",
      age: 35,
      hobbies: ["cricket", "chess"],
    },
    {
      name: "Steve",
      age: 25,
      hobbies: ["reading", "driving"],
    },
    {
      name: "Ron",
      age: 28,
      hobbies: [],
    },
    {
      name: "Ted",
      age: 62,
      hobbies: ["running"],
    },
  ];

  const [userData, setUserData] = useState<User[]>(data);

  useEffect(() => {
    setUserData(data);
  }, [data]);

  const convertToXml = () => {
    const result = userData.map(
      (user, i) => `
      <USER name="${user.name}">
        <NAME>${user.name}</NAME>
        <AGE>${user.name}</AGE>
        <HOBBIES>${user.hobbies.join(",")}</HOBBIES>
      </USER>`
    );
    const xmlWrapper = `
    <USERDATA>
      ${result.join("")}
    </USERDATA>`;
    return xmlWrapper;
  };

  const onConvertClick = () => {
    const xmlData = convertToXml();

    // Create a blob from the xml data
    const blob = new Blob([xmlData], { type: "text/xml" });
    const url = URL.createObjectURL(blob);

    // Download link
    const link = document.createElement("a");
    link.href = url;
    link.download = "users.xml";

    // Trigger download
    link.click();

    // Clean up
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <h1 className="text-xl font-bold">User Data</h1>
      <div className="flex flex-col items-end w-8/12">
        <table className="table-fixed mt-2 w-full  border-collapse border border-slate-400 text-left rounded-sm">
          <thead className="bg-orange-50">
            <tr>
              <th className="p-2">Name</th>
              <th className="p-2">Age</th>
              <th className="p-2">Hobbies</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user, i) => (
              <tr key={user.name + i}>
                <td className="border-b border-slate-400 p-2">{user.name}</td>
                <td className="border-b border-slate-400 p-2">{user.age}</td>
                <td className="border-b border-slate-400 p-2">
                  {user.hobbies.length > 0 ? user.hobbies.join(", ") : "None"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          className="px-4 py-2 bg-blue-600 rounded-b-sm text-white"
          onClick={onConvertClick}
        >
          Convert
        </button>
      </div>
    </>
  );
};

export default Home;