function EmptyList() {
  return (
    <div className="bg-white dark:bg-very-dark-grayish-blue mt-5 rounded-tr-lg rounded-tl-lg text-center px-2 py-6 text-lg font-semibold text-dark-grayish-blue dark:text-light-grayish-blue">
      <p>List is empty, start adding some items now...</p>
      <img
        src="assets/images/checklist-animate.svg"
        alt="empty list illustration"
        className="w-[450px] mx-auto"
      />
    </div>
  );
}

export default EmptyList;
