import "./ProgramListView.scss";
import {
  type GetAllUsersQuery,
  useGetAllUsersQuery,
} from "../../../../../../graphql/__generated__/schema";

const ProgramListView = () => {
  const { data, loading, error } = useGetAllUsersQuery();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error : {error.message}</p>;
  }

  if (!data) {
    return <p>No data available</p>;
  }

  const result: GetAllUsersQuery = data;

  console.log(
    "démonstration du retour de apollo client suite à la requête GraphQL ",
    result,
  );

  return (
    <div>
      <p>ProgramListView</p>
    </div>
  );
};

export default ProgramListView;
