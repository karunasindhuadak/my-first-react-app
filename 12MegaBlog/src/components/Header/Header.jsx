import React from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", slug: "/", active: true },
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "Signup", slug: "/signup", active: !authStatus },
    { name: "All Posts", slug: "/all-posts", active: authStatus },
    { name: "Add Post", slug: "/add-post", active: authStatus },
  ];

  return (
    <header className="bg-white border-b border-slate-200">
      <Container>
        <nav className="flex items-center h-14">
          <div className="mr-6 flex items-center">
            <Link to="/">
              <Logo />
            </Link>
          </div>

          <ul className="flex items-center gap-1 ml-auto">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="
                      px-4 py-2
                      text-sm font-medium text-slate-600
                      rounded-md
                      hover:text-slate-900
                      hover:bg-slate-100
                      transition-colors duration-200
                    "
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
          </ul>

          {authStatus && (
            <div className="ml-4">
              <LogoutBtn />
            </div>
          )}
        </nav>
      </Container>
    </header>
  );
}

export default Header;
