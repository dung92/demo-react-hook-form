import "./App.css";
import { useForm } from "react-hook-form";
import RenderTextField from "./renderTextField";

function App() {
  const { handleSubmit, errors, control } = useForm({
    mode: "onBlur",
  });
  const onSubmit = (data) => console.log(data);
  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <RenderTextField errors={errors} control={control}/>
        <button type="submit">Demo</button>
      </form>
    </div>
  );
}

export default App;
