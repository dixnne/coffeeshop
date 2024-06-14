import { HttpClient } from '@angular/common/http';
import { splitNsName } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoffeeshopAPIService {

  constructor(private http: HttpClient) { }

  getClients() {
    return this.http.get("https://cafe.losnarvaez.com/clients");
  }

  getEmployees() {
    return this.http.get("https://cafe.losnarvaez.com/employees");
  }

  getProducts() {
    return this.http.get("https://cafe.losnarvaez.com/products");
  }

  getSupplies() {
    return this.http.get("https://cafe.losnarvaez.com/supplies");
  }

  getSuppliers() {
    return this.http.get("https://cafe.losnarvaez.com/suppliers");
  }

  getOrders() {
    return this.http.get("https://cafe.losnarvaez.com/orders");
  }

  getClient(client: string) {
    return this.http.get("https://cafe.losnarvaez.com/clients/client_id?value=" + client);
  }

  getEmployee(employee: string) {
    return this.http.get("https://cafe.losnarvaez.com/employees/employee_id?value=" + employee);
  }

  getProduct(product: string) {
    return this.http.get("https://cafe.losnarvaez.com/products/product_id?value=" + product);
  }

  getSupply(supply: string) {
    return this.http.get("https://cafe.losnarvaez.com/supplies/supply_id?value=" + supply);
  }

  getSupplier(supplier: string) {
    return this.http.get("https://cafe.losnarvaez.com/suppliers/supplier_id?value=" + supplier);
  }

  getOrder(order: string) {
    return this.http.get("https://cafe.losnarvaez.com/orders/order_id?value=" + order);
  }

  postClient(name: string, email: string, phone: string, password: string) {
    const headers = { 'content-type': 'application/json'}  
    const body = {
      splitNsName: name,
      email: email,
      phone: phone,
      password: password
    }
    return this.http.post<any>("https://cafe.losnarvaez.com/clients", body, {"headers": headers});
  }

  postEmployee(rank: string, name: string, email: string, phone: string, password: string) {
    const headers = { 'content-type': 'application/json'}  
    const body = {
      rank: rank,
      name: name,
      email: email,
      phone: phone,
      password: password
    }
    return this.http.post<any>("https://cafe.losnarvaez.com/employees", body, {"headers": headers});
  }

  postSupplier(name: string, supply_id: number, price: number) {
    const headers = { 'content-type': 'application/json'}  
    const body = {
      name: name,
      supply_id: supply_id,
      price: price
    }
    return this.http.post<any>("https://cafe.losnarvaez.com/suppliers", body, {"headers": headers});
  }

  postSupply(name: string, quantity: number) {
    const headers = { 'content-type': 'application/json'}  
    const body = {
      name: name,
      quantity: quantity
    }
    return this.http.post<any>("https://cafe.losnarvaez.com/supply", body, {"headers": headers});
  }

  postProduct(name: string, description: string, price: number) {
    const headers = { 'content-type': 'application/json'}  
    const body = {
      name: name,
      description: description,
      price: price
    }
    return this.http.post<any>("https://cafe.losnarvaez.com/products", body, {"headers": headers});
  }

  postOrder(client_id: number, date: string, total: number) {
    const headers = { 'content-type': 'application/json'}  
    const body = {
      client_id: client_id,
      date: date,
      total: total
    }
    return this.http.post<any>("https://cafe.losnarvaez.com/orders", body, {"headers": headers});
  }

  deleteClient(id: string) { 
    return this.http.delete("https://cafe.losnarvaez.com/clients/" + id);
  }

  deleteEmployee(id: string) { 
    return this.http.delete("https://cafe.losnarvaez.com/employees/" + id);
  }

  deleteSupplier(id: string) { 
    return this.http.delete("https://cafe.losnarvaez.com/suppliers/" + id);
  }

  deleteSupply(id: string) { 
    return this.http.delete("https://cafe.losnarvaez.com/supplies/" + id);
  }

  deleteProduct(id: string) { 
    return this.http.delete("https://cafe.losnarvaez.com/products/" + id);
  }

  deleteOrder(id: string) { 
    return this.http.delete("https://cafe.losnarvaez.com/orders/" + id);
  }
}
