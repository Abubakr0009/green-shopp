"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Profile() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("User parse error:", error);
        localStorage.removeItem("user");
        router.replace("/signup");
      }
    } else {
      router.replace("/signup");
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.replace("/signup");
  };

  if (!user) return <p className="text-center mt-20">Loading...</p>;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold text-center text-gray-700">Profile</h2>
        <div className="mt-4">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
        <button
          onClick={handleLogout}
          className="w-full bg-red-500 text-white p-2 rounded-md mt-4 hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
