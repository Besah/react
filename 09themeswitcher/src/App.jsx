// App.jsx
import "./App.css";
import { ThemeProvider } from "./components/contexts/theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card"; 

function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;