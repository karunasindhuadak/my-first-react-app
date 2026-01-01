// import { useState } from 'react'

import { useState } from "react";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)

  const [colour, setColour] = useState("black");

  return (
    <div
      className="w-screen h-screen flex flex-col justify-end items-center pb-8"
      style={{ backgroundColor: colour }}
    >
      <div className="flex flex-wrap justify-center gap-3 bg-slate-500 backdrop-blur-md p-4 rounded-3xl mx-3">
        <button
          onClick={() => setColour("red")}
          style={{ backgroundColor: "red" }}
          className="text-white font-semibold px-4 py-2 rounded-full hover:text-black"
        >
          Red
        </button>

        <button
          onClick={() =>
            setColour("green")
        }
          style={{ backgroundColor: "green" }}
          className="text-white font-semibold px-4 py-2 rounded-full"
        >
          Green
        </button>

        <button
          onClick={() =>
            setColour("blue")
        }
          style={{ backgroundColor: "blue" }}
          className="text-white font-semibold px-4 py-2 rounded-full"
        >
          Blue
        </button>

        <button
          onClick={() =>
            setColour("olive")
        }
          style={{ backgroundColor: "olive" }}
          className="text-white font-semibold px-4 py-2 rounded-full"
        >
          Olive
        </button>

        <button
          onClick={() =>
            setColour("gray")
        }
          style={{ backgroundColor: "gray" }}
          className="text-black font-semibold px-4 py-2 rounded-full"
        >
          Gray
        </button>

        <button
          onClick={() =>
            setColour("yellow")
        }
          style={{ backgroundColor: "yellow" }}
          className="text-black font-semibold px-4 py-2 rounded-full"
        >
          Yellow
        </button>

        <button
          onClick={() =>
            setColour("pink")
        }
          style={{ backgroundColor: "pink" }}
          className="text-black font-semibold px-4 py-2 rounded-full"
        >
          Pink
        </button>

        <button
          onClick={() =>
            setColour("purple")
        }
          style={{ backgroundColor: "purple" }}
          className="text-white font-semibold px-4 py-2 rounded-full"
        >
          Purple
        </button>

        <button
          onClick={() =>
            setColour("lavender")
        }
          style={{ backgroundColor: "lavender" }}
          className="text-black font-semibold px-4 py-2 rounded-full"
        >
          Lavender
        </button>

        <button
          onClick={() =>
            setColour("white")
        }
          style={{ backgroundColor: "white" }}
          className="text-black font-semibold px-4 py-2 rounded-full border border-gray-300"
        >
          White
        </button>

        <button
          onClick={() =>
            setColour("black")
        }
          style={{ backgroundColor: "black" }}
          className="text-white font-semibold px-4 py-2 rounded-full"
        >
          Black
        </button>
      </div>
    </div>
  );
}

export default App;
