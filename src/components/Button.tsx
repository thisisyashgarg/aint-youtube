import React from "react";

function Button({ name }: { name: string }) {
  return <button className=" px-4 py-1 rounded bg-gray-100">{name}</button>;
}

export default Button;
