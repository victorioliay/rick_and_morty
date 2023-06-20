import errorImg from "./error-404.jpg";

const ErrorPage = () => {
    return (
        <div>
            <img src={errorImg} alt="error404" />
        </div>
    );
}

export default ErrorPage;