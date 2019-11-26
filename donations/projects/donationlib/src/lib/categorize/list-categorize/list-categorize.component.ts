import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Router } from '@angular/router';

@Component({
    selector: 'lib-categorizelib',
    templateUrl: 'list-categorize.component.html',
    styles: []
})

export class CategorizeComponent implements OnInit {
    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
    dataSource: any;
    columnNames = [{
        id: "position",
        value: "No."

    }, {
        id: "name",
        value: "Name"
    },
    {
        id: "weight",
        value: "Weight"
    },
    {
        id: "symbol",
        value: "Symbol"
    }];
    constructor(private router: Router) { }

    ngOnInit() {
        this.displayedColumns = this.columnNames.map(x => x.id);
        this.createTable();
    }

    createTable() {
        let tableArr: Element[] = [{ position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
        { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
        { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
        { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
        { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
        { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' }
        ];
        this.dataSource = new MatTableDataSource(tableArr);
    }
}

export interface Element {
    position: number,
    name: string,
    weight: number,
    symbol: string
}
