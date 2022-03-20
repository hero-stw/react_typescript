import React from "react";
type row = any;

type cell = {
  label: string;
  key: string;
};

type TableProps = {
  rows: row[];
  headCells: cell[]; // rows la mang, cac phan tu co kieu row
};
function Table({ rows, headCells }: TableProps) {
  return (
    <table className="mx-auto border-collapse border border-solid border-black">
      <thead>
        <tr className="border border-solid border-black">
          {headCells.map((head, index) => (
            <th className="border border-solid border-black px-4" key={index}>
              {head.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr className="border border-solid border-black" key={index}>
            {headCells.map((head, index) => (
              <td className="border border-solid border-black px-4" key={index}>
                {row[head.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
