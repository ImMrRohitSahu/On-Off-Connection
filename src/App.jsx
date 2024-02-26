import { Detector } from "react-detect-offline";
import "./App.css";
import AppHeader from "./AppHeader/AppHeader";
import AuthContextProvider from "./contexts/AuthContext";
import PageRoutes from "./routes/PageRoutes";
import CheckConnection from "./CheckConnection/CheckConnection";

function App() {
  return (
    <Detector
      render={({ online }) =>
        online ? (
          <AuthContextProvider>
            <AppHeader />
            <PageRoutes />
          </AuthContextProvider>
        ) : (
          <CheckConnection/>
        )
      }
    />
  );
}

export default App;
