import ChatWidget from "@/components/chatWidget/ChatWidget";
import React from "react";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-100">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-8">Welcome to Our Website</h1>
        <p className="text-lg mb-4">
          This is a demonstration of our responsive chat widget.
        </p>
        <p className="text-sm text-gray-500">
          Click the chat button in the bottom-right corner to open the widget
        </p>
      </div>

      <ChatWidget />
    </main>
  );
};

export default Home;
