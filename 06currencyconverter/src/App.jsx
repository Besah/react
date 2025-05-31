//src\App.jsx
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { InputBox } from "./components/index.js";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("ghs");
  const [to, setTo] = useState("krw");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);

    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  //log information added here
  // console.log("currencyInfo:", currencyInfo);
  // console.log("options:", options);


  return (
    <div
      className="w-full min-h-screen flex justify-center items-center bg-cover bg-no-repeat px-4 py-8"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/4497591/pexels-photo-4497591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
      }}
    >
      <div className="bg-[#1f1f1f]/80 relative w-full my-6 max-w-md shadow-lg">
        <div className=" mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30 ">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
            className="flex flex-col gap-2"
          >
            <div className="bg-gray-800 text-white rounded-lg p-4">
              <InputBox
                label="from"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(amount) => setAmount(amount)}
                selectedCurrency={from}
                className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6 rounded-xl shadow-lg space-y-3 border border-blue-500"
                // className="bg-zinc-900 border border-pink-600"
                inputClassName="bg-zinc-800 text-white-400"
                selectClassName="bg-zinc-800 text-white-400"
              />
            </div>
            <div className="relative flex justify-center items-center">
              <button
                className="bg-gradient-to-r from-purple-10 to-blue-600 text-white font-semibold px-4 py-2 rounded-full shadow-lg hover:scale-105 border hover:shadow-xl transition-all duration-300 ease-in-out "
                onClick={swap}
              >
                ⥮ Swap
              </button>
            </div>

            <div className="bg-gray-800 text-white rounded-lg p-4">
              <InputBox
                label="to"
                currencyOptions={options}
                amount={convertedAmount}
                onCurrencyChange={(currency) => setTo(currency)}
                selectedCurrency={to}
                amountDisabled={true}
                className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6 rounded-xl shadow-lg space-y-3 border border-blue-500"
                // className="bg-zinc-900 border border-pink-600"
                inputClassName="bg-zinc-800 text-white-400"
                selectClassName="bg-zinc-800 text-white-400"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;