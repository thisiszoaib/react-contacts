import React, { useState, Fragment } from "react";

function Header({ searchContacts }) {
  const [search, setSearch] = useState(false);

  const showSearch = () => setSearch(true);

  const hideSearch = () => setSearch(false);

  return (
    <Fragment>
      <nav className="bg-indigo-600 text-white h-16 w-auto p-4 flex flex-row justify-between items-center">
        <span className="text-2xl">Contacts App</span>
        {!search && (
          <button className="flex items-center" onClick={showSearch}>
            <span className="material-icons">search</span>
          </button>
        )}
        {search && (
          <div className="flex flex-row bg-indigo-400 rounded p-2">
            <input
              className="bg-indigo-400 outline-none"
              autoFocus={true}
              onChange={searchContacts}
            ></input>
            <button className="flex items-center" onClick={hideSearch}>
              <span className="material-icons">close</span>
            </button>
          </div>
        )}
      </nav>
    </Fragment>
  );
}

export default Header;
