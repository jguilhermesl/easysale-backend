export const handleErrors = (err: any, errDefaultMessage?: string) => {
  if (err.response?.data?.errors[0]?.description) {
    return err.response?.data?.errors[0].description
  }
  if (err.response?.data?.message) {
    return err.response?.data?.message
  }

  return errDefaultMessage || "Algo deu errado.";
}