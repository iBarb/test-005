import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setRates, setError } from "./ratesSlice";
import { subscribeRates } from "../../api/ratesApi";

export const useRates = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = subscribeRates(
      (data) => dispatch(setRates(data)),
      (error) => dispatch(setError(error.message))
    );

    return () => unsubscribe();
  }, [dispatch]);
};
