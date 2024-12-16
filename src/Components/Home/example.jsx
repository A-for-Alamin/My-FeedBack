import { useState } from "react";
import datas1 from "../lib/country.json";
import datas2 from "../lib2/country.json";

function Example() {
  const [isChange, setIsChange] = useState(false);

  return (
    <>
      <section>
        <button
          className="p-2 border bg-slate-400"
          onClick={() => setIsChange(!isChange)}
        >
          Country Change
        </button>
        <div>
          <ul>
            {isChange
              ? datas1
              : datas2.map((data, i) => <li key={i}>{data}</li>)}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Example;
