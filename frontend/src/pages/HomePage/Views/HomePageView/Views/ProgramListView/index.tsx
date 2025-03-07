import ProgramCard from "@components/atoms/ProgramCard";
import "./ProgramListView.scss";
import { ClockIcon } from "@assets/icons/icon-list/iconList";
import {
  useGetAllProgramsQuery,
} from "@graphql/__generated__/schema";
import dotenv from "dotenv";
// LIGNE 7 ET 9 A METTRE EN COMMENTAIRE SINON FRONT PLANTE!!
dotenv.config();
const ProgramListView = () => {
  const { loading, error, data } = useGetAllProgramsQuery({
    context: {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GRAPHQL_AUTH_TOKEN}`,
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

  // const programs: GetAllProgramsQuery = data;

  return (
    <div className="program-list-container">
      {/* <p>We have {programs.getAllPrograms.length} programs</p> */}
      {data.getAllPrograms.map((program) => (
        <ProgramCard key={program.id} program={program} />
      ))}
    </div>
  );
};

export default ProgramListView;
