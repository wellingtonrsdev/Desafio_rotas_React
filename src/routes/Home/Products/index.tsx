import { NavLink, Outlet } from "react-router-dom";
import './styles.css';

export default function Products() {
  return (
    <>
      <main>
        <section>
          <div className="container product-nav-container mb20">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "menu-item-category menu-active"
                  : "menu-item-category"
              }
              to="computers"
            >
              Computadores
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "menu-item-category menu-active"
                  : "menu-item-category"
              }
              to="electronics"
            >
              Eletrônicos
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "menu-item-category menu-active"
                  : "menu-item-category"
              }
              to="books"
            >
              Livros
            </NavLink>
          </div>
        </section>
      </main>
      <Outlet />
    </>
  );
}
