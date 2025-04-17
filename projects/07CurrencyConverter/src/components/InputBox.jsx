import { useId } from 'react';
import React from 'react'


function InputBox({
    label, amount, onAmountChange, onCurrencyChange, currencyOptions = [], selectCurrency = "Inr", amountDisable = false, currencyDisable = false, className = "", // taking two inputs from the user
}) {
    const amountInputId = useId() // this hook we are using is for giving uniqueness 

    return (
        // css written in div just below using backticks i.e. `` is because we are taking css from the user also that how he wants to show his project and then injecting it into div using ${}
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}> 
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled = {amountDisable}
                    value = {amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled = {currencyDisable}
                >

                    {/* {currencyOptions.map((currency) => (
                        <option value={currency}>
                            {currency}
                        </option>
                    ))}
                    because of such loops , reacts hits so much on performance and hence whenever you loop on JSK since DOM elements are getting created using/with the help of JSX so you need to pass key i.e. this --> key = {} in option panel
                     */}

                    {/* if you want to optimize the performance in the loop in order to repeat the elements then you need to use/pass key */}

                    {/* !!!REMEMBER THE KEYS IN REACT!!! */}

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
