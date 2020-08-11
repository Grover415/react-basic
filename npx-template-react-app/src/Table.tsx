import React, { Component } from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import { type } from 'os';

type TableBodyData = {
    name: string,
    job: string
}

class Table extends Component<{name: string, job: string}[]> {
    render() {        
        return (
            <table>
                <TableHeader />
                <TableBody bodyData={this.props} />
            </table>
        )
    }
}

export default Table