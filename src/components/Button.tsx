import React from "react";

function Button({ name }: { name: string }) {
  return <button className="border px-4 py-1 rounded">{name}</button>;
}

export default Button;
