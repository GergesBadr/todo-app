import sunIcon from "../images/icon-sun.svg";
import moonIcon from "../images/icon-moon.svg";

function Header({ theme, onThemeSwitch }) {
  return (
    <div className="flex items-center justify-between">
      <h1 className="uppercase font-semibold tracking-[8px] text-white text-3xl">
        Todo
      </h1>
      <button onClick={() => onThemeSwitch()}>
        {theme === "dark" ? (
          <img src={sunIcon} alt="toggle theme" />
        ) : (
          <img src={moonIcon} alt="toggle theme" />
        )}
      </button>
    </div>
  );
}

export default Header;
