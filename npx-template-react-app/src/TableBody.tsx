import React from "react";

const TableBody = (props: { bodyData: any[]; }) => {
    const rows = props.bodyData.map((row, index) => {
        return (
            <tr key={index}>
                <td>row.name</td>
                <td>row.job</td>
            </tr>
        )
    });
    return <tbody>{rows}</tbody>
}

export default TableBody