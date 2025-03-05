import "./ProgramListView.scss";
import { ClockIcon } from "@assets/icons/icon-list/iconList";
import {
  type GetAllProgramsQuery,
  useGetAllProgramsQuery,
} from "@graphql/__generated__/schema";
import dotenv from "dotenv";

dotenv.config();
const ProgramListView = () => {
  const { loading, error, data } = useGetAllProgramsQuery({
    context: {
      headers: {
        Authorization: `Bearer ${process.env.GRAPHQL_AUTH_TOKEN}`,
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
      <ClockIcon />
      <p>ProgramListView</p>
      <p>We have {data.getAllPrograms.length} programs</p>
      {data.getAllPrograms.map((program) => (
        <div key={program.id}>{program.level}</div>
      ))}
      ;
    </div>
  );
};

export default ProgramListView;
