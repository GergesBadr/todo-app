function Header({ theme, onThemeSwitch }) {
  return (
    <div className="flex items-center justify-between">
      <h1 className="uppercase font-semibold tracking-[8px] text-white text-3xl">
        Todo
      </h1>
      <button onClick={() => onThemeSwitch()}>
        {theme === "dark" ? (
          <img src="assets/images/icon-sun.svg" alt="toggle theme" />
        ) : (
          <img src="assets/images/icon-moon.svg" alt="toggle theme" />
        )}
      </button>
    </div>
  );
}

export default Header;
