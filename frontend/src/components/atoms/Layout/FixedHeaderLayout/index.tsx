import "./FixedHeaderLayout.scss";

type FixedHeaderLayoutProps = {
  header: React.ReactNode;
  children: React.ReactNode;
};

const FixedHeaderLayout = ({ header, children }: FixedHeaderLayoutProps) => {
  return (
    <div className="fixed-header-layout">
      <div className={"fixed-header-layout__overlay"}>
        <header className="fixed-header-layout__header">{header}</header>
        <section className="fixed-header-layout__scrollable-content">
          {children}
        </section>
      </div>
    </div>
  );
};

export default FixedHeaderLayout;
