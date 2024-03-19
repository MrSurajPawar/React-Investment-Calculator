//Header component created by me using or refering other Jsx files
import reactImg from '../assets/investment-calculator-logo.png';

export default function Header() {
  return (
    <header id="header">
      <img src={reactImg} alt="header image" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
