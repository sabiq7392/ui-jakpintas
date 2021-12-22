import JakPintasLogo from '../../images/logo_jakpintas.png';

export default function Header() {
  return (
    <header>
      <img src={JakPintasLogo} alt="Logo JakPintas" />
      <div>
        <h1>Jakarta Peta Investasi</h1>
        <blockquote>Smart City, Smart Province, Smart Indonesia</blockquote>
      </div>
    </header>
  );
}