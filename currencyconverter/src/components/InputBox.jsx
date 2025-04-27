import React, { useId } from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    selectedCurrency,
    currencyOptions = [],
    amountDisabled = false
}) {

    const amountInputId = useId()

    return (
        <>
            <div>
                <label htmlFor={amountInputId}>
                    {label}
                </label>
                <input
                    id={amountInputId}
                    type="number"
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                    disabled={amountDisabled}
                />
            </div>
            <div>
                <p>Currency Type</p>
                <select
                    value={selectedCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                    {
                        currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))
                    }
                </select>
            </div>
        </>
    )
}

export default InputBox