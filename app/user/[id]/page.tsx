"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

// ✅ Define User type
type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
};

const UserDetailPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState<User | null>(null); // ✅ Correct type

  useEffect(() => {
    if (!id) return;
    fetch(`https://dummyjson.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.error("Failed to fetch user", err));
  }, [id]);

  if (!user) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold">User Detail</h1>
      <p className="mt-2">Name: {user.firstName} {user.lastName}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserDetailPage;
