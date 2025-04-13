import Calendar from "@components/atoms/Calendar/Calendar";
import "./HistoryView.scss";

type HistoryViewType = {
  userId: number;
};

const HistoryView = ({ userId }: HistoryViewType) => {
  // get events by userID
  console.log(userId);

  return (
    <section className="user-history-view">
      <div className="user-history-view__calendar">
        <Calendar />
      </div>
      <div className="user-history-vew__week-details">
        {/* <WeekDetails /> */}
      </div>
    </section>
  );
};

export default HistoryView;
