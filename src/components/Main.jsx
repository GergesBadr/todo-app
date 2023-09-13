function Main({ children }) {
  return (
    <main className="mx-6 -mt-36 md:-mt-44">
      <div className="max-w-[550px] md:w-[550] mx-auto relative">
        {children}
      </div>
    </main>
  );
}

export default Main;
