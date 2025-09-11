// import React, { useState } from "react";

// export default function Counter() {
//   const [count, setCount] = useState(0);
//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1 className="text-4xl font-bold">{count}</h1>
//       <div className="space-x-4 mt-5">
//         <button
//           className="bg-blue-400 px-4 py-2 text-white font-light rounded-2xl"
//           onClick={() => setCount(count < 20 ? count + 1 : count)}
//         >
//           Increase
//         </button>
//         <button
//           className="bg-blue-400 px-4 py-2 text-white font-light rounded-2xl"
//           onClick={() => setCount(count > 0 ? count - 1 : count)}
//         >
//           Decrease
//         </button>
//       </div>
//     </div>
//   );
// }
///////////////////////////////////////////////////////
import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="text-center mt-12">
      <h1 className="text-3xl font-bold">{count}</h1>
      <div className="space-x-4 mt-3">
        <button
          onClick={() => setCount(count + 1)}
          disabled={count === 20}
          className={`px-4 py-2 rounded text-white  ${
            count === 20 ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500"
          }`}
        >
          increase
        </button>
        <button
          onClick={() => setCount(count - 1)}
          disabled={count === 0}
          className={`px-4 py-2 rounded text-white ${
            count === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500"
          } `}
        >
          Decrease
        </button>
      </div>
    </div>
  );
}
//////////////////////////////////////////////////

// 4th-sep-2025
