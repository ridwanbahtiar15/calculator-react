import { useState } from "react";
// import './App.css'

function App() {
  const [value, setValue] = useState("");

  return (
    <>
      <div className="flex justify-center items-center w-full h-screen">
        <div className="w-[40%] bg-black rounded-3xl p-10">
          <div className="text-gray-50 text-right text-3xl mb-4">
            {value ? value : "0"}
          </div>
          <div className="grid grid-cols-4 gap-4">
            <button
              className="p-3 bg-gray-300 text-center text-2xl font-semibold rounded-full"
              onClick={() => setValue("")}
            >
              AC
            </button>
            <div className="p-3 bg-gray-300 text-center text-2xl font-semibold rounded-full">
              +/-
            </div>
            <button
              value="%"
              className="p-3 bg-gray-300 text-center text-2xl font-semibold rounded-full"
              onClick={() => setValue(value / 100)}
            >
              %
            </button>
            <button
              value="/"
              className="p-3 bg-amber-500 text-center text-2xl font-semibold rounded-full text-slate-50"
              onClick={(e) => setValue(value + e.target.value)}
            >
              /
            </button>
            <button
              value="7"
              className="p-3 bg-gray-600 text-center text-2xl font-semibold rounded-full text-slate-50"
              onClick={(e) => setValue(value + e.target.value)}
            >
              7
            </button>
            <button
              value="8"
              className="p-3 bg-gray-600 text-center text-2xl font-semibold rounded-full text-slate-50"
              onClick={(e) => setValue(value + e.target.value)}
            >
              8
            </button>
            <button
              value="9"
              className="p-3 bg-gray-600 text-center text-2xl font-semibold rounded-full text-slate-50"
              onClick={(e) => setValue(value + e.target.value)}
            >
              9
            </button>
            <button
              value="*"
              className="p-3 bg-amber-500 text-center text-2xl font-semibold rounded-full text-slate-50"
              onClick={(e) => setValue(value + e.target.value)}
            >
              *
            </button>
            <button
              value="4"
              className="p-3 bg-gray-600 text-center text-2xl font-semibold rounded-full text-slate-50"
              onClick={(e) => setValue(value + e.target.value)}
            >
              4
            </button>
            <button
              value="5"
              className="p-3 bg-gray-600 text-center text-2xl font-semibold rounded-full text-slate-50"
              onClick={(e) => setValue(value + e.target.value)}
            >
              5
            </button>
            <button
              value="6"
              className="p-3 bg-gray-600 text-center text-2xl font-semibold rounded-full text-slate-50"
              onClick={(e) => setValue(value + e.target.value)}
            >
              6
            </button>
            <button
              value="-"
              className="p-3 bg-amber-500 text-center text-2xl font-semibold rounded-full text-slate-50"
              onClick={(e) => setValue(value + e.target.value)}
            >
              -
            </button>
            <button
              value="1"
              className="p-3 bg-gray-600 text-center text-2xl font-semibold rounded-full text-slate-50"
              onClick={(e) => setValue(value + e.target.value)}
            >
              1
            </button>
            <button
              value="2"
              className="p-3 bg-gray-600 text-center text-2xl font-semibold rounded-full text-slate-50"
              onClick={(e) => setValue(value + e.target.value)}
            >
              2
            </button>
            <button
              value="3"
              className="p-3 bg-gray-600 text-center text-2xl font-semibold rounded-full text-slate-50"
              onClick={(e) => setValue(value + e.target.value)}
            >
              3
            </button>
            <button
              value="+"
              className="p-3 bg-amber-500 text-center text-2xl font-semibold rounded-full text-slate-50"
              onClick={(e) => setValue(value + e.target.value)}
            >
              +
            </button>
            <input
              type="button"
              className="p-3 bg-gray-600 text-center text-2xl font-semibold rounded-full text-slate-50 col-span-2"
              value="0"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <button
              value="."
              className="p-3 bg-gray-600 text-center text-2xl font-semibold rounded-full text-slate-50"
              onClick={(e) => setValue(value + e.target.value)}
            >
              .
            </button>
            <button
              className="p-3 bg-amber-500 text-center text-2xl font-semibold rounded-full text-slate-50"
              onClick={() => setValue(eval(value))}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
