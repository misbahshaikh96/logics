import React, { useState } from "react";

export default function HeadingInput() {
  const [text, SetText] = useState("");
  return (
    <div className="flex flex-col items-center justify-center gap-4 min-h-screen ">
      <h1 className="text-3xl font-bold">{text || "Terminologies"}</h1>

      <p className="text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur qui
        quidem dicta cum voluptatibus suscipit tempore, temporibus nihil ut
        placeat id! A
      </p>
      <input
        type="text"
        value={text}
        onChange={(e) => SetText(e.target.value)}
        placeholder="type here"
        className="border border-gray-300  rounded-lg w-64 p-2 focus:outline-none focus:ring-2  focus:ring-blue-500 "
      />
      <input
        type="email"
        name="email"
        placeholder="Enter your Email"
        className="border border-gray-300  rounded-lg w-64 p-2 focus:outline-none focus:ring-2  focus:ring-blue-500 "
      />
      <input
        type="password"
        name="password"
        placeholder="Enter your Password"
        className="border border-gray-300  rounded-lg w-64 p-2 focus:outline-none focus:ring-2  focus:ring-blue-500 "
      />
      <input
        name="message"
        value={text}
        onChange={(e) => SetText(e.target.value)}
        placeholder="Write a Short message"
        className="border border-gray-300  rounded-lg w-64 p-2 focus:outline-none focus:ring-2  focus:ring-blue-500 h-33 "
      />
    </div>
  );
}
