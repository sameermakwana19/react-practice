import React, { useState } from "react";
import BigCoin from "./BigCoin";

const BigApp = () => {
  const [coins, setCoins] = useState(0);

  return (
    <div className="wrapper">
      <main>
        <BigCoin setCoins={setCoins} />
      </main>
      <footer>
        Your coin balance:
        <strong>{coins}</strong>
      </footer>
    </div>
  );
};

export default BigApp;
