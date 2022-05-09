import React from "react";
import { DeleteDataPengunjung } from "../../graphql/pengunjung";

const ListItem = (props) => {
  const { nama, umur, kelamin, id } = props.data;

  const { DeletePengunjung } = DeleteDataPengunjung();

  const handelDelete = (id) => {
    DeletePengunjung({
      variables: {
        id: { _eq: id },
      },
    });
  };

  return (
    <tr key={id}>
      <td>{nama}</td>
      <td>{umur}</td>
      <td>{kelamin}</td>
      <td className="removeBorder">
        <button className="btn">Edit</button>
        <button className="btn" onClick={() => handelDelete(id)}>
          Hapus
        </button>
      </td>
    </tr>
  );
};

export default ListItem;
