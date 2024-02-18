import style from "./navbar.module.css";
function Navbar() {
  return (
    <nav className={style.bg}>
      <ul className={style.ulstyle}>
        <li className={style.listyle}>
          <a>home</a> 
          <a>about</a>
          <a>contact</a>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
