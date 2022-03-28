import { ContainerRadio, ContainerInput, Label } from "./style";
function Fieldset({ campo, register }) {
  return campo.type !== "select" && campo.type !== "radio" ? (
    <ContainerInput style={{ order: campo.ordem }}>
      <Label>{campo.name}: </Label>
      <input {...register(campo.name)} type={campo.type} />
    </ContainerInput>
  ) : campo.type === "select" ? (
    <div style={{ order: campo.ordem }}>
      <Label>{campo.name}: </Label>
      <select {...register(campo.name)}>
        {campo.options.map((option, index) => (
          <option value={option.value} key={index}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  ) : (
    <div style={{ order: campo.ordem }}>
      <Label>{campo.name}: </Label>
      {campo.options.map((option, index) => (
        <ContainerRadio key={index}>
          <input
            name={campo.name}
            value={option.value}
            type={campo.type}
            {...register(campo.name)}
          />
          <Label>{option.text}</Label>
        </ContainerRadio>
      ))}
    </div>
  );
}
export default Fieldset;
