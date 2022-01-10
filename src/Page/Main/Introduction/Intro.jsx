import "./Intro.css";

function Intro() {
  return (
    <div className="background">
      <div className="bgsmall">
        <div className="big">
          <h2>
            Nasza firma oferuje najwyzszej <br />
            jakości produkty.
          </h2>
        </div>
        <div className="midium">
          <p>Nie wierz nam na słowo - sprawdź</p>
        </div>
        <div className="small">
          <a href="#offer">
            <button class="but">oferta</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Intro;
