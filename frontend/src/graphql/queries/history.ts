import { gql } from "@apollo/client";

export const GET_HISTORY_BY_USER_ID = gql`
    query getHistoryByUserId ($id: Float!) {
        getHistoryByUserId(id:$id){
            id
            program_id
            start_date
        }
    }
`;