import { React, useState } from "react";
import { GetDataPengunjungId } from "../../graphql/pengunjung";

const PassengerInputId = () => {
  const [inputId, setInputaId] = useState("");
  const { CariPengunjung, error } = GetDataPengunjungId();

  const handleSubmit = (e) => {
    e.preventDefault();
    CariPengunjung({
      variables: {
        _eq: parseInt(inputId),
      },
    });

    setInputaId("");
  };

  if (error) return <h1>Error Maszeeh `${error}`</h1>;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="idpengunjung">Masukkan Id Pengunjung</label> <br />
        <input
          type="text"
          value={inputId}
          onChange={(e) => setInputaId(e.target.value)}
        />
        <input type="submit" value="Cari Masehh.." onClick={handleSubmit} />
      </form>

      {/* {loading
        ? console.log(data)
        : data.pengunjung.map((present, presentIdx) => (
            <p key={presentIdx}>Nama: {present.nama}</p>
          ))} */}
    </div>
  );
};

export default PassengerInputId;
