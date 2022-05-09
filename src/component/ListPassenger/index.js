/** Import Fucntion Graphql */
import { GetDataPengunjung } from "../../graphql/pengunjung";

// Import Component
import ListItem from "../ListItem";

const ListPassenger = () => {
  const { data, loading, error, refetch } = GetDataPengunjung();

  if (loading) return <h1>Loading Maseeh....</h1>;
  if (error) return <h2>Something Wrong Maseeh...</h2>;

  console.log(data);

  return (
    <div style={{ margin: "1rem auto" }}>
      <table cellPadding="5px" cellSpacing="0" style={{ margin: "1rem auto " }}>
        <thead bgcolor="red">
          <tr>
            <th>Nama</th>
            <th>Umur</th>
            <th>Jenis Kelamin</th>
            <th className="removeBorder">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.pengunjung.map((present, presentIdx) => (
            <ListItem data={present} key={present.id} />
          ))}
        </tbody>
      </table>

      <button onClick={() => refetch()}>Refetching!!</button>
    </div>
  );
};

export default ListPassenger;
