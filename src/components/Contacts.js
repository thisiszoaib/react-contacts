import React from "react";

function Contacts({ data }) {
  return (
    <div className="overflow-scroll" style={{ height: "calc(100vh - 64px)" }}>
      {data.map((contact) => (
        <div className="p-4 border-b-2 border-gray-100 flex flex-row justify-between align-middle">
          <div>
            <p className="text-xl">{contact.name}</p>
            <p className="text-gray-500 text-lg">{contact.phone}</p>
          </div>
          <a className="flex items-center" href={`tel:${contact.phone}`}>
            <span className="material-icons p-3 rounded-full opacity-80 shadow-md bg-green-400 hover:opacity-100 hover:shadow-lg">
              phone
            </span>
          </a>
        </div>
      ))}
    </div>
  );
}

export default Contacts;
