function Employee({ fname, department, description, fotoUrl, fotoAlt }) {
  return (
    <div className="about-expert">
      <div className="foto col-2">
        <img
          src={fotoUrl}
          alt={fotoAlt}
          style={{
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: 50 + "%",
            width: 193 + "px",
            height: 193 + "px",
          }}
        />
      </div>
      <div className="expert">
        <p>
          <span className="name">
            <text style={{ fontWeight: "bold" }}>
              {fname} {department} <br />
            </text>
            {description}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Employee;
