import { Outlet } from "react-router-dom";
import AuthProvider from './Contexts/AuthContext'



function App() {
  return (
    <div className="App">
      <div className="container">
        <AuthProvider>
          <Outlet />
        </AuthProvider>
      </div>
    </div>
  );
}

export default App;
