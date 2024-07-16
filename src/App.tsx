import Render from "./component/json/Render";
import { example } from "./constants/example_2";

const App = () => {  
  return (
    <div className="">
      <Render json={example} />
    </div>
  )
}

export default App;
