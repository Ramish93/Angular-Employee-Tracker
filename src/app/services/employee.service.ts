import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/types/Employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private _http: HttpClient) {}

  addEmployee(data: Employee): Observable<Employee> {
    return this._http.post('http://localhost:3000/employees', data);
  }
  getEmployeeList(): Observable<any> {
    return this._http.get('http://localhost:3000/employees');
  }
}
