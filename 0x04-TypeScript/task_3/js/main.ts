/// <reference path="crud.d.ts" />
import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

const row: RowElement = {
  firstName: 'Jane',
  lastName: 'Doe'
};

const newRowID: RowID = CRUD.insertRow(row);
const updateRow: RowElement = { age: 23, ...row };

CRUD.updateRow(newRowID, updateRow);
CRUD.deleteRow(newRowID);
