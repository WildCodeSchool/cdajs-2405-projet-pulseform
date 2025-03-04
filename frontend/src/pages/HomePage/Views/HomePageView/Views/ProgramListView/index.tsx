import "./ProgramListView.scss";
import {
  type GetAllProgramsQuery,
  useGetAllProgramsQuery,
} from "../../../../../../graphql/__generated__/schema";

const ProgramListView = () => {
  const { loading, error, data } = useGetAllProgramsQuery({
    context: {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJsdWNpZUBwdWxzZWZvcm0uY29tIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3NDEwNzkyNDAsImV4cCI6MTc0MTE2NTY0MH0.5BMWur395tlhNdFsiBDnQvvjcZntT75f7vhZhXk25TE",
      },
    },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error : {error.message}</p>;
  }

  if (!data) {
    return <p>No data available</p>;
  }

  const programs: GetAllProgramsQuery = data;

  console.log(
    "démonstration du retour de apollo client suite à la requête GraphQL ",
    programs,
  );

  return (
    <div>
      <p>ProgramListView</p>
      <p>We have {data.getAllPrograms.length} programs</p>
      {data.getAllPrograms.map((program) => (
        <div key={program.id}>
          <h3>{program.name}</h3>
          <p>{program.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProgramListView;
