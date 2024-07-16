import { example } from "./constants/example_2";
import { iterate  } from "./utils/json-render";


const App = () => {
  const a = iterate(example.quiz)
  
  console.log(a)
  
  return (
    <div className="">
      {a.map((data, index) => (
        <p
          key={index}
          style={{
            paddingLeft: `${data.indent * 32}px`
          }}
        >{data.line}</p>
      ))}
    </div>
  )
}

export default App;
