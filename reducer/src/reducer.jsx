export const state1 = {
  loading: false,
  dog: "",
  error: "",
};
// mesaj=payload dispatch=yakala
export const reducerAA = (state1, {type,mesaj}) => {
  switch (type) {
    case "START":
      return { ...state1, loading: true };
    case "SUCCESS":
      return { ...state1, dog: mesaj, loading: false };
    case "FAIL":
      return { ...state1, error: mesaj, loading: false };
    default:
      return state1;
  }
};
