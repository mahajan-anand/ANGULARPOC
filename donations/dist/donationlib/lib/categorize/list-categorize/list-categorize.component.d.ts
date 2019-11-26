import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
export declare class CategorizeComponent implements OnInit {
    private router;
    displayedColumns: string[];
    dataSource: any;
    columnNames: {
        id: string;
        value: string;
    }[];
    constructor(router: Router);
    ngOnInit(): void;
    createTable(): void;
}
export interface Element {
    position: number;
    name: string;
    weight: number;
    symbol: string;
}
