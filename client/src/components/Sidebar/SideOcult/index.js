import "./SideOcult.css";

export default function SideOcult(props) {
  const { titleSide, childrenSide } = props;

  return (
    <div className="sideOcult " id="sideOcult">
      <header className="s-ocult-header">
        <div>
          <i
            class="bx bx-left-arrow-alt"
            onClick={() =>
              document
                .getElementById("sideOcult")
                .classList.remove("visible-side")
            }
          ></i>{" "}
          <h1>{titleSide}</h1>
        </div>
      </header>
      {childrenSide}
    </div>
  );
}
// visible-side
