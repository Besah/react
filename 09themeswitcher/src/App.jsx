// import { useState, useEffect } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import { ThemeProvider } from "./components/contexts/theme";
// import ThemeBtn from "./components/ThemeBtn";

// function App() {
//   const [themeMode, setThemeMode] = useState("light");

//   const darkTheme = () => {
//     setThemeMode("dark");
//   };

//   const lightTheme = () => {
//     setThemeMode("light");
//   };

//   useEffect(() => {
//     document.querySelector("html").classList.remove("dark", "light");
//     document.querySelector("html").classList.add(themeMode);
//   }, [themeMode]);
//   return (
//     <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
//       <div className="flex flex-wrap min-h-screen items-center">
//         <div className="w-full">
//           <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
//             <ThemeBtn />
//           </div>

//           <div className="w-full max-w-sm mx-auto">
//             <Card />
//           </div>
//         </div>
//       </div>
//     </ThemeProvider>
//   );
// }

// export default App;

//Bootstrap:

import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ThemeProvider } from "./components/contexts/theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
  };

  const lightTheme = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div
        className={`min-vh-100 d-flex align-items-center ${
          themeMode === "dark" ? "bg-dark text-light" : "bg-light text-dark"
        }`}
      >
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={6} className="d-flex justify-content-end mb-3">
              <ThemeBtn />
            </Col>
            <Col xs={12} md={6}>
              <Card />
            </Col>
          </Row>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
