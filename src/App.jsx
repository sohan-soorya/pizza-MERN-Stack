import React, { useState } from "react";

function App() {
  const [size, setSize] = useState("medium");
  const [toppings, setToppings] = useState([]);

  const prices = {
    small: 5,
    medium: 8,
    large: 12,
    toppings: {
      cheese: 2,
      mushrooms: 1.5,
      paneer: 3,
    },
  };

  const handleToppingChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setToppings([...toppings, value]);
    } else {
      setToppings(toppings.filter((t) => t !== value));
    }
  };

  const calculateTotal = () => {
    let total = prices[size];
    toppings.forEach((t) => {
      total += prices.toppings[t];
    });
    return total.toFixed(2);
  };

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h1>Pizza Billing App</h1>

      <h2>Select Size:</h2>
      <label>
        <input
          type="radio"
          name="size"
          value="small"
          checked={size === "small"}
          onChange={(e) => setSize(e.target.value)}
        />
        Small (${prices.small})
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="size"
          value="medium"
          checked={size === "medium"}
          onChange={(e) => setSize(e.target.value)}
        />
        Medium (${prices.medium})
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="size"
          value="large"
          checked={size === "large"}
          onChange={(e) => setSize(e.target.value)}
        />
        Large (${prices.large})
      </label>

      <h2>Select Toppings:</h2>
      {Object.keys(prices.toppings).map((t) => (
        <label key={t}>
          <input
            type="checkbox"
            value={t}
            checked={toppings.includes(t)}
            onChange={handleToppingChange}
          />
          {t.charAt(0).toUpperCase() + t.slice(1)} (${prices.toppings[t]})
          <br />
        </label>
      ))}

      <h2>Total Price: ${calculateTotal()}</h2>
    </div>
  );
}

export default App;
