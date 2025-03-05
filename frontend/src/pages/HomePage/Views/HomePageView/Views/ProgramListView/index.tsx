import "./ProgramListView.scss";
import { ClockIcon } from "@assets/icons/icon-list/iconList";
import {
  type GetAllProgramsQuery,
  useGetAllProgramsQuery,
} from "@graphql/__generated__/schema";
import dotenv from "dotenv";
// LIGNE 7 ET 9 A METTRE EN COMMENTAIRE SINON FRONT PLANTE!!!
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

  return (
    <div>
      <ClockIcon />
      <p>ProgramListView</p>
      <p>We have {programs.getAllPrograms.length} programs</p>
      {data.getAllPrograms.map((program) => (
        <div key={program.id}>{program.level}</div>
      ))}
      ;
    </div>
  );
};

export default ProgramListView;
