import "../App.css";

function Header(props) {
  return (
    <div className="flex shopping-card">
      <div
        onClick={() => props.handleShow(false)}
        style={{ fontSize: "25px", fontWeight: "bolder", cursor: "pointer" }}
      >
        {" "}
        BOOKS APPLICATION
      </div>
      <div
        onClick={() => props.handleShow(true)}
        style={{ fontWeight: "bolder", cursor: "pointer" }}
      >
        {" "}
        Favourites
        <sup> {props.count} </sup>
      </div>
    </div>
  );
}

export default Header;
