import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../model/customer.model";
import {environmrnt} from "../../environments/environmrnts";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private http:HttpClient) { }
  public getCustomers():Observable<Array<Customer>>{
    return this.http.get<Array<Customer>>(environmrnt.backendHost+"/customers")
  }
  public searchCustomers(keyword : string):Observable<Array<Customer>>{
    return this.http.get<Array<Customer>>(environmrnt.backendHost+"/customers/search?keyword="+keyword)
  }
  public saveCustomers(customer : Customer):Observable<Customer>{
    return this.http.post<Customer>(environmrnt.backendHost+"/customers",customer);
  }
  public deleteCustomers(id : number){
    return this.http.delete(environmrnt.backendHost+"/customers/"+id);
  }
}
