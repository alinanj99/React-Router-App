import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Price() {
  const { symbol } = useParams();
  const [coin, setCoin] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getCoin() {
      const apiKey = process.env.REACT_APP_API_KEY;

      const response = await fetch(`https://rest.coinapi.io/v1/exchangerate/${symbol}/?apikey=${apiKey}`);

      const data = await response.json();

      if (!response.ok) {
        setError(data.error);
        return;
      }

      const usd = data.rates.find(rate => rate.asset_id_quote === "USD");

      setCoin(usd.rate);
    }

    getCoin();
  }, [symbol]);

  if (error) return <h2>{error}</h2>;
  if (!coin) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>{symbol}/USD</h1>
      <h2>${coin}</h2>
    </div>
  );
}