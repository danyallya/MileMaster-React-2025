import CircularProgress from './view/pages/CircularProgressPage/CircularProgress';

function App() {
  return (
    <div className="App">
      <CircularProgress initialValue={50} maxValue={180} />
    </div>
  );
}

export default App;