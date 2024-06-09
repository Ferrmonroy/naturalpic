import error404 from "../assets/img/error-404.svg";

const NotFound = () => {
  return (
    <>
      <div className="errorContainer animate__animated animate__fadeIn">
        <img src={error404} alt="404" />
        <p>¡La página que buscas no existe!</p>
      </div>
    </>
  );
};
export default NotFound;
