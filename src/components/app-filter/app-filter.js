import "./app-filter.css";

const AppFilter = ({ updateFilterHandler , filter}) => {
  return (
    <div className="btn-group">
      {btnArray.map((btn) => (
        <button
          key={btn.name}
          className={`btn ${filter === btn.name ? 'btn-dark' : 'btn-outline-dark' }`}
          onClick={() => updateFilterHandler(btn.name)}
          type="button"
        >
          {btn.label}
        </button>
      ))}
      {/* <button className="btn btn-outline-dark" type="button">
        Mashxur kinolar
      </button>
      <button className="btn btn-outline-dark" type="button">
        Ko'p korilgan kinolar
      </button> */}
    </div>
  );
};

const btnArray = [
  { name: "all", label: "Barcha kinolar" },
  { name: "popular", label: "Mashxur kinolar" },
  { name: "mostViewers", label: "Ko'p ko'rilgan kinolar" },
];
export default AppFilter;
