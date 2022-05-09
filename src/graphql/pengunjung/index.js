import { gql, useLazyQuery, useMutation, useQuery } from "@apollo/client";

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

const GET_DATA_PENGUNJUNG_ID = gql`
  query GetDataPengunjungId($_eq: Int!) {
    pengunjung(where: { id: { _eq: $_eq } }) {
      id
      kelamin
      nama
      umur
    }
  }
`;

// Get data pengunjung id

// {
//   "_eq": 12
// }

const DELETE_PENGUNJUNG = gql`
  mutation DeletePengunjung($id: Int_comparison_exp = { _eq: "" }) {
    delete_pengunjung(where: { id: $id }) {
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

export const GetDataPengunjungId = () => {
  const [CariPengunjung, { data, loading, error }] = useLazyQuery(
    GET_DATA_PENGUNJUNG_ID
  );
  return { data, loading, error, CariPengunjung };
};

export const DeleteDataPengunjung = () => {
  const [DeletePengunjung, { loading: loadingDelete }] = useMutation(
    DELETE_PENGUNJUNG,
    {
      onCompleted: (data) => {},
      onError: (error) => {
        console.log("Terjadi kesalahn pada ", error);
      },
    }
  );

  return { DeletePengunjung, loadingDelete };
};
