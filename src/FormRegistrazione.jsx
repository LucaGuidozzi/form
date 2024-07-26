import { useId } from "react";
import { useForm } from "react-hook-form";
import Input from "./Input";
import Checkbox from "./Checkbox";

function FormRegistrazione() {
  const idPrefix = useId();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (dati) => {
    console.log(dati);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} noValidate>
      <h3>FormRegistrazione</h3>
      <Input
        id={idPrefix + "-nome"}
        rules={{ required: true }}
        info="nome"
        reg={register}
        error={errors.nome}
        errorMsg="Nome richiesto"
      />
      <Input
        id={idPrefix + "-email"}
        rules={{
          required: true,
          pattern:
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        }}
        info="email"
        reg={register}
        error={errors.email}
        errorMsg="Inserire una email valida"
      />
      <Input
        id={idPrefix + "-password"}
        rules={{
          required: true,
          minLength: 8,
          maxLength: 20,
        }}
        type="password"
        info="password"
        reg={register}
        error={errors.password}
        errorMsg="Inserire una password tra 8 e 20 caratteri"
      />
      <Checkbox
        reg={register}
        info="privacy"
        error={errors.privacy}
        text="E' necessario visionare e acce..."
        rules={{ required: true }}
        errorMsg="E' necessario visionare e accettare la privacy policy"
      />
      <div className="form-field-container">
        <button type="submit">Invia</button>
      </div>
    </form>
  );
}

export default FormRegistrazione;
