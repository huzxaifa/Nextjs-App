"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// ✅ Define User type
type User = {
  id: number;
  firstName: string;
  lastName: string;
};

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]); // ✅ Type applied here

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.users))
      .catch((err) => console.error("Failed to fetch users", err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Users List</h1>
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user.id}>
            <Link
              href={`/user/${user.id}`}
              className="text-blue-600 hover:underline"
            >
              {user.firstName} {user.lastName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
