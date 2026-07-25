import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav">
      <Link to="/">CRYPTO PRICES</Link>
      <Link to="/currencies">CURRENCIES</Link>
    </div>
  );
}