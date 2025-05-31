import { useId } from "react";
import React from "react";
import "../index.css";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
  inputClassName = "",
  selectClassName = "",
}) {
  const id = useId();

  return (
    <div
      className={`w-full max-w-md mx-auto space-y-2 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-xl shadow-lg border border-blue-600 ${className}`}
    >
      <div className="amount-box">
        <label
          htmlFor={id}
          className="block text-sm font-semibold text-gray-300 mb-1"
        >
          {label}
        </label>
        <input
          id={id}
          type="number"
          className={`w-full bg-gray-700 text-white p-1 rounded-md border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${inputClassName}`}
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div
        className={`w-full bg-gray-700 text-white p-2 rounded-md border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${selectClassName}`}
      >
        <p className="label">Currency Type</p>
        <select
          className="select-field"
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisabled}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
