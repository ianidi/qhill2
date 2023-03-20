import React from "react";
import NumberFormat from "react-number-format";

const Numeral = ({ children, negative = false, decimals = 0 }) => {
  return (
    <React.Fragment>
      {negative && "-"}
      <NumberFormat
        value={children}
        displayType="text"
        thousandSeparator=" "
        decimalScale={
          decimals > 2 || decimals === 0 || decimals === 1 ? decimals : 2
        }
        decimalSeparator="."
        fixedDecimalScale={true}
      />
    </React.Fragment>
  );
};
export default Numeral;
