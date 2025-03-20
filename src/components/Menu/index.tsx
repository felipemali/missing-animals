import logo from "@/assets/logoo.png";
export const Menu = () => {
  // border-b-2 border-[#887360]
  return (
    <div className="navbar fixed top-0 left-0 w-screen z-2000 bg-gradient-to-b from-gray-[#a1571799] bg-orange-500 pr-7">
      <div className="flex-1">
        <a className="text-xl text-neutral">
          <img className="w-40" src={logo} alt="" />
        </a>
      </div>
      <div className="flex items-center">
        <ul className="menu menu-horizontal px-1 gap-5">
          <li>
            {/*HOVER AQUI*/}
            <button className="btn btn-soft btn-warning text-white">
              Anunciar
            </button>
          </li>
          <li>
            <button className="btn btn-outline btn-warning text-white">
              Entrar
            </button>
          </li>
          {/* fim HOVER AQUI*/}
        </ul>
        <div className="dropdown dropdown-end ">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">Pefil</a>
            </li>
            <li>
              <a>Configurações</a>
            </li>
            <li>
              <a>Sair</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
