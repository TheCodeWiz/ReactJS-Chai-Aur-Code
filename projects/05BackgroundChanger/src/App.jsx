import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")
  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-20 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-black px-3 py-2 rounded-full">
          <button
          onClick={() => setColor("red")}// it expects function 
          className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
          style={{backgroundColor: "red"}}
          >Red</button>
          <button
          onClick={() => setColor("yellow")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-xl"
          style={{backgroundColor: "yellow"}}
          >Yellow</button>
          <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
          style={{backgroundColor: "blue"}}
          >Blue</button>
          <button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
          style={{backgroundColor: "green"}}
          >Green</button>
          <button
          onClick={() => setColor("magenta")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
          style={{backgroundColor: "magenta"}}
          >Magenta</button>
          <button
          onClick={() => setColor("olive")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
          style={{backgroundColor: "olive"}}
          >Olive</button>
          <button
          onClick={() => setColor("khaki")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-xl"
          style={{backgroundColor: "khaki"}}
          >khaki</button>
          <button
          onClick={() => setColor("pink")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-xl"
          style={{backgroundColor: "pink"}}
          >Pink</button>
          <button
          onClick={() => setColor("orange")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-xl"
          style={{backgroundColor: "orange"}}
          >Orange</button>
          <button
          onClick={() => setColor("maroon")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
          style={{backgroundColor: "maroon"}}
          >Maroon</button>
          <button
          onClick={() => setColor("gray")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
          style={{backgroundColor: "gray"}}
          >Gray</button>
          <button
          onClick={() => setColor("navy")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
          style={{backgroundColor: "navy"}}
          >Navy</button>
          <button
          onClick={() => setColor("aqua")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-xl"
          style={{backgroundColor: "aqua"}}
          >Aqua</button>

        </div>

      </div>{/*this was for positioning the bar */}

    </div>
  )
}

export default App
