import { useParams } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1>UrlParameterページです</h1>
      <p>パラメータは、{id}です！</p>
    </div>
  );
};
