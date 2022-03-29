import form from "../../form.json";
import Fieldset from "../Fieldsets";
import { useForm } from "react-hook-form";
import { FormContainer, Button } from "./style";
import { useHistory } from "react-router-dom";

function Form() {
  const { register, handleSubmit } = useForm();

  const history = useHistory();
  const theLastPosition = () => {
    let biggestIndex = 0;
    form.campos.forEach((item) => {
      if (item.ordem > biggestIndex) {
        biggestIndex = item.ordem;
      }
    });

    return biggestIndex + 1;
  };

  function onSubmit(data) {
    console.log(data);
    history.push("/dashboard");
  }
  return (
    <>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        {form.campos.map((campo, index) => (
          <Fieldset campo={campo} key={index} register={register} />
        ))}
        <div style={{ order: theLastPosition() }}>
          <Button type="submit">Enviar</Button>
        </div>
      </FormContainer>
    </>
  );
}
export default Form;
