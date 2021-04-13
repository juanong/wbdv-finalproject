import WebManager from "./components/website-manager";
import {BrowserRouter} from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
          <div>
              <WebManager/>
          </div>
      </BrowserRouter>
  );
}

export default App;
