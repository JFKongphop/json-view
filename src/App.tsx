import { example } from "./constants/example_2";
import { iterate  } from "./utils/json-render";


const App = () => {
  const a = iterate(example)
  
  console.log(a)
  
  return (
    <div className="">
      {a.map((data) => (
        <p
          style={{
            paddingLeft: `${data.indent * 32}px`
          }}
        >{data.line}</p>
      ))}
    </div>
  )
}

export default App;
