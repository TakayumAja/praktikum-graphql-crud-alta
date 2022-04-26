import { gql, useMutation, useQuery } from "@apollo/client";

const GET_DATA_PENGUNJUNG = gql`
  query GetDataPengunjung {
    pengunjung {
      id
      kelamin
      nama
      umur
    }
  }
`;

const INSERT_DATA_PENGUNJUNG = gql`
  mutation InsertPengunjung($objects: [pengunjung_insert_input!] = {}) {
    insert_pengunjung(objects: $objects) {
      returning {
        id
        kelamin
        nama
        umur
      }
    }
  }
`;

export const GetDataPengunjung = () => {
  const { data, loading, error, refetch } = useQuery(GET_DATA_PENGUNJUNG);
  return { data, loading, error, refetch };
};

export const InsertDataPengunjung = () => {
  const [
    InsertPengunjung,
    { loading: loadingInsertPengunjung, error: errorInsertPengunjung },
  ] = useMutation(INSERT_DATA_PENGUNJUNG);

  return { InsertPengunjung, loadingInsertPengunjung, errorInsertPengunjung };
};
