import simone1 from "../assets/img/simone-1.jpg";
import simone2 from "../assets/img/simone-2.jpg";

const simoneImages = [simone1, simone2];

function Body() {
  const frames = Array.from({ length: 6 });

  return (
    <>
      <div className="film-wrapper">
        <div className="film-strip">
          {[...frames, ...frames].map((_, i) => (
            <div className="film-frame" key={i}>
              <div className="holes left">
                <div className="hole" />
                <div className="hole" />
              </div>
              <div className="frame-content">
                <img
                  src={simoneImages[i % simoneImages.length]}
                  alt={`Frame-${i}`}
                  height={800}
                  width={400}
                />
              </div>
              <div className="holes right">
                <div className="hole" />
                <div className="hole" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="invite">
        <p className="text nomes">Casamento</p>
        <p className="text nomes">Simone & Valmir</p>
        <p className="text">13/09/25</p>
        <p className="text">Sábado 19:00</p>
        <p className="text">1ª Igreja Presbiteriana Renovada</p>
        <p className="text">No Lugar Do Presente</p>
        <p className="text">Valor Em Pix: 972-112-227.00</p>
        <p className="text">Presença Terá De Ser Confirmada, Até 01/09</p>
      </div>
    </>
  );
}

export default Body;
