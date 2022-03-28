import form from "../../form.json";
import Fieldset from "../Fieldsets";
import { useForm } from "react-hook-form";
import { FormContainer, Button } from "./style";
import { useHistory } from "react-router-dom";

function Form() {
  const { register, handleSubmit } = useForm();
  const history = useHistory();

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
        <div style={{ order: form.campos.length + 1 }}>
          <Button type="submit">Enviar</Button>
        </div>
      </FormContainer>
    </>
  );
}
export default Form;
