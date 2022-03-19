import React from 'react';
type row = any;

type cell = {
    label: string,
    key: string
};

type TableProps = {
    rows: row[],
    headCells: cell[] // rows la mang, cac phan tu co kieu row
}
function Table({ rows, headCells }: TableProps) {
    return (
        <table className='mx-auto bg-red-500'>
            <thead>
                <tr>
                    {
                        headCells.map((head, index) => (
                            <th key={index}>{head.label}</th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    rows.map((row, index) => (
                        <tr key={index}>
                            {
                                headCells.map((head, index) => (
                                    <td key={index}>{row[head.key]}</td>
                                ))
                            }
                        </tr>

                    ))
                }
            </tbody>
        </table>
    )
};

export default Table;
