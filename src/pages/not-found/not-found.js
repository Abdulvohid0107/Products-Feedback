import { useNavigate } from "react-router-dom";
import "./not-found.scss";

export const NotFound = () => {
  const navigate = useNavigate()
  return (
    <>
    <h1 style={{ textAlign: "center" }}>
      <span style={{ color: "red" }}>404 </span>Bunday sahifa mavjud emas
    </h1>
    <button style={{ margin: "0 auto", display:"block", border:"none",borderRadius:"20px", background:"#2682d9", padding:"15px" }} onClick={() => navigate("/")}>Asosiy sahifaga o'tish</button>
    </>
  );
};
