import { useEffect } from "react";

export const useClickOutside = (ref, handleOnClickOutside) => {
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        !ref.current ||
        ref.current.contains(event.target) ||
        event.target.classList.contains("part-of-ref")
      ) {
        return;
      }
      handleOnClickOutside(event);
    };
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [ref, handleOnClickOutside]);
};
