const MyInput = ({
  values,
  setValue,
  border,
  name,
}: {
  values: number | undefined;
  setValue: React.Dispatch<React.SetStateAction<number | undefined>>;
  border: string;
  name: string;
}) => {
  // const { value, setValues } = useInput();
  const handleOnChange = (e: string) => {
    console.log(e);
    // setValues(e);
    // console.log(value);
    console.log("value before: ", e);
    setValue(Number(e));
    console.log("setting values: ", values);
  };
  return (
    <input
      type="number"
      id={name}
      value={
        values !== undefined
          ? String(values).length > 1 && String(values).startsWith("0")
            ? String(values).slice(1)
            : String(values)
          : ""
      }
      name={name}
      onChange={(e) => handleOnChange(e.target.value)}
      style={{ borderColor: border }}
      className={["myInput", name === "sum" ? "sumInput" : "otherInput"].join(
        " ",
      )}
    />
  );
};

export default MyInput;
