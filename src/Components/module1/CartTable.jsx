import React from "react";

const CartTable = ({ items }) => {
  return (
    <>
      <table>
        <tbody>
          {items.map(({ id, imageSrc, title, price }) => (
            <tr key={id}>
              <td>
                <img src={imageSrc}></img>
              </td>
              <td>{title}</td>
              <td>{price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CartTable;
