function Footer() {
  return (
    <footer className="w-full h-20 flex justify-around items-center bg-[#fffdc5]">
      <div className="flex justify-center items-center gap-2 font-semibold">
        © 2024 <a className="hover:font-black" href="https://www.linkedin.com/in/antoniomaldonadotech/">malsebasmal.</a>
      </div>
      <div>
        <ul className="flex justify-center items-center gap-4">
          <li>
            <a className="p-1" href="https://www.linkedin.com/in/antoniomaldonadotech/">
              <img src="./github.svg" alt="github icon" />
            </a>
          </li>
          <li>
            <a className="p-1" href="https://github.com/malsebasmal">
              <img src="./linkedin.svg" alt="linkedin icon" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer