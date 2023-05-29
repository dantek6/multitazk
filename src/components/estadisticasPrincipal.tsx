// import ProgressBar from "./progressBar";
import ProgressBar from "@ramonak/react-progress-bar";

const EstadisticasPrincipal = () => {
  return (
    <div className="box">
      <div className="box__content">
        <h1>Estadísticas</h1>
        <ProgressBar
          completed={50}
          bgColor="#7F8DFF"
          height="50px"
          width="100%"
          labelColor="#e80909"
        />
        <h2>Tareas y Logros</h2>
        <img src="images/icon_135.png" alt="Trophy"/>
        <img src="images/icon_336.png" alt="Trophy"/>
        <img src="images/icon_129.png" alt="Trophy"/>
      </div>
    </div>
  );
};

export default EstadisticasPrincipal;
