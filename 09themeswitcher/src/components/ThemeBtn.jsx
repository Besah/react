// import React from "react";
//import { useTheme } from "./contexts/theme";

// function ThemeBtn() {

//     const {themeMode, lightTheme, darkTheme} = useTheme();

//     const onChangeBtn = (e) => {
//         const darkModeStatus = e.currentTarget.checked

//         if(darkModeStatus) {
//             darkTheme()
//         } else {
//             lightTheme()
//         }
//     }
//   return (
//     <label className="relative inline-flex items-center curson-pointer">
//       <input
//         type="checkbox"
//         value=""
//         className="sr-only peer"
//         onChange={onChangeBtn}
//         checked={themeMode === "dark"}
//       />
//       <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
//       <span className="ml-3 text-sm font-medium text-gray-900">
//         Toggle Theme
//       </span>
//     </label>
//   );
// }

// export default ThemeBtn;

// ----------bootstrap styling:
import React from "react";
import { Form } from "react-bootstrap";
import useTheme from "./contexts/theme";

function ThemeBtn() {
  const { themeMode, lightTheme, darkTheme } = useTheme();

  const onChangeBtn = (e) => {
    const darkModeStatus = e.currentTarget.checked;
    if (darkModeStatus) {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  return (
    <div className="d-flex align-items-center">
      <div className="form-check form-switch custom-switch">
        <input
          className="form-check-input"
          type="checkbox"
          id="themeSwitch"
          checked={themeMode === "dark"}
          onChange={onChangeBtn}
        />
        <label className="form-check-label ms-2" htmlFor="themeSwitch">
          Toggle Theme
        </label>
      </div>
    </div>
  );
}

export default ThemeBtn;
