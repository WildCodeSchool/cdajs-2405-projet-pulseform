import { gql } from "@apollo/client";

export const GET_HISTORY_BY_USER_ID = gql`
    query getHistoryByUserId ($id: Float!) {
        getHistoryByUserId(id:$id){
            id
            program {
                id
                name
                total_duration
            }
            start_date
            end_date
        }
    }
`;