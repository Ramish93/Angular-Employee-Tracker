import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(msg: string, action: string = 'done') {
    this._snackBar.open(msg, action, {
      duration: 5500,
      verticalPosition: 'top',
    });
  }
}
