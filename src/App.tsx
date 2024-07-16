import JsonUpload from "./component/json/JsonUpload";

const App = () => {
  return (
    <div className="App" style={{ padding: '20px' }}>
      <header className="App-header">
        <h1>JSON File Upload</h1>
        <JsonUpload />
      </header>
    </div>
  );
}

export default App;
