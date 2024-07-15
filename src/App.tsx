import { example } from "./constants/example_2";
import { iterate  } from "./utils/json-render";


const App = () => {
  const a = iterate(example)
  
  console.log(a)
  
  return (
    <div className="">
      {a.map((data) => (
        <p>{data}</p>
      ))}
      {/* <p className="">a</p> */}
      {/* {JSON.stringify(a)} */}
    </div>
  )
}

export default App;
