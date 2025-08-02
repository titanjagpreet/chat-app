"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import TextInput from "@repo/ui/TextInput";

export default function Home() {
  const router = useRouter();
  const [roomName, setRoomName] = useState("");

  const handleJoin = () => {
    if (roomName.trim()) {
      router.push(`/chat/${roomName}`);
    }
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-zinc-900 via-black to-zinc-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto text-center space-y-6 animate-fade-in">
        <h1 className="text-3xl font-bold text-white">Join a Chat Room</h1>

        <div className="gap-4 space-y-4">
          <TextInput
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
            placeholder="Enter room name..."
            className="w-72"
          />

          <button
            onClick={handleJoin}
            className="w-72 px-6 py-3 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-700 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-purple-600/40"
          >
            🚀 Join Room
          </button>
        </div>
      </div>
    </div>
  );
}

