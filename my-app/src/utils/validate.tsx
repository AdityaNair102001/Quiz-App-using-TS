export default function validate(
  name: string,
  category: string,
  setInputError: React.Dispatch<React.SetStateAction<boolean>>,
  setHelperText: React.Dispatch<React.SetStateAction<string>>
) {
  if (name !== "" && category !== "") {
    setInputError(false);
    setHelperText("");
    return true;
  }
  setInputError(true);
  setHelperText("Please put your name & select an option");
  return false;
}
