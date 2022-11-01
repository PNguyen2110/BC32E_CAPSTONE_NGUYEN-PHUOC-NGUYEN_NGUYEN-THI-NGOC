import { BrowserRouter } from "react-router-dom";
import { Router } from "./routers/Router";
function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Header /> */}
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
