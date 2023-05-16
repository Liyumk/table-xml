import React from "react";
import { User } from "../pages/Home";

interface Props {
  userData: User[];
}

const UserTable = ({ userData }: Props) => {
  return (
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
  );
};

export default UserTable;
