import { ContainerRadio, ContainerInput, Label } from "./style";
function Fieldset({ field, register }) {
  return field.type !== "select" && field.type !== "radio" ? (
    <ContainerInput style={{ order: field.ordem }}>
      <Label>{field.name}: </Label>
      <input {...register(field.name)} type={field.type} />
    </ContainerInput>
  ) : field.type === "select" ? (
    <div style={{ order: field.ordem }}>
      <Label>{field.name}: </Label>
      <select {...register(field.name)}>
        {field.options.map((option, index) => (
          <option value={option.value} key={index}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  ) : (
    <div style={{ order: field.ordem }}>
      <Label>{field.name}: </Label>
      {field.options.map((option, index) => (
        <ContainerRadio key={index}>
          <input
            name={field.name}
            value={option.value}
            type={field.type}
            {...register(field.name)}
          />
          <Label>{option.text}</Label>
        </ContainerRadio>
      ))}
    </div>
  );
}
export default Fieldset;
