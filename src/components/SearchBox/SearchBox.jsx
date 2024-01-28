import { useId } from "react";
import css from "./SearchBox.module.css";
// import {useState} from "react";
export const SearchBox = ({ handleChange, inputValue }) => {
  // const [inputValue, setInputValue] = useState("");
  const userId = useId();
  //     const handleChange = evt => {
  // // console.log(evt.target.value);
  //         setInputValue(evt.target.value);

  //     }
  return (
    <div className={css.divStyle}>
      <label htmlFor={userId}>Find contacts by name</label>
      <input
        className={css.input}
        type="text"
        name="userinput"
        value={inputValue}
        id={userId}
        onChange={handleChange}
      />
    </div>
  );
};
