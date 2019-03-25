class GriddleDataTable extends React.Component {
    render() {
        const rows = [];

        this.props.data.map((row) => {
            rows.push(<GriddleDataTableRow row={row}/>)
        })

        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>ZIP Code</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        )
    }
}

class GriddleDataTableRow extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.row.name}</td>
                <td>{this.props.row.address}</td>
                <td>{this.props.row.email}</td>
                <td>{this.props.row.phone}</td>
                <td>{this.props.row.zipcode}</td>
            </tr>
        )
    }
}