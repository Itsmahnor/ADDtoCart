import Homepage from "./Component/Home";
import MainContext from "./Store/Context";




function App() {
  return (
   <MainContext>
    <Homepage />
   </MainContext>
  );
}

export default App;
