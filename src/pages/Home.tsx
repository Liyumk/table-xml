import { useEffect, useState } from "react";
import Button from "../components/Button";
import UserTable from "../components/UserTable";

export type User = {
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
        <UserTable userData={userData} />
        <Button onClick={onConvertClick} />
      </div>
    </>
  );
};

export default Home;
