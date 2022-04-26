import React from "react";

const ListItem = (props) => {
  const { nama, umur, kelamin, id } = props.data;

  return (
    <tr key={id}>
      <td>{nama}</td>
      <td>{umur}</td>
      <td>{kelamin}</td>
      <td className="removeBorder">
        <button>Hapus</button>
      </td>
    </tr>
  );
};

export default ListItem;
