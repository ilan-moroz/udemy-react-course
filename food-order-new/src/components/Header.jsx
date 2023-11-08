import logo from '../assets/logo.jpg';

const Header = () => {
  return (
    <header id='main-header'>
      <div id='title'>
        <img src={logo} alt='restaurant' />
        <h1>MorozFood</h1>
      </div>
      <nav>
        <button>Cart (0)</button>
      </nav>
    </header>
  );
};

export default Header;
