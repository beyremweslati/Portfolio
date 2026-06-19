function TopBar() {
  return (
    <>
      <div className="flex flex-row m-12 mt-14 gap-10 text-base font-light justify-end text-[var(--orange)] tracking-widest">
        <div className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[var(--orange)] after:transition-all after:duration-300 hover:after:w-full">
          <a href="#about">ABOUT ME</a>
        </div>
        <div className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[var(--orange)] after:transition-all after:duration-300 hover:after:w-full">
          <a href="#projects">PROJECTS</a>
        </div>
        <div className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[var(--orange)] after:transition-all after:duration-300 hover:after:w-full">
          <a href="#experience">EXPERIENCE</a>
        </div>
        <div className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[var(--orange)] after:transition-all after:duration-300 hover:after:w-full">
          <a href="#contact">CONTACT</a>
        </div>
      </div>
    </>
  );
}

export default TopBar;
