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

  getClient(id: number) {
    return this.http.get("https://cafe.losnarvaez.com/clients/client_id?value=" + id);
  }

  getClientByEmail(client: string) {
    return this.http.get("https://cafe.losnarvaez.com/clients/email?value=" + client);
  }

  getEmployeeByEmail(employee: string) {
    return this.http.get("https://cafe.losnarvaez.com/employees/email?value=" + employee);
  }

  getProduct(product: number) {
    return this.http.get("https://cafe.losnarvaez.com/products/product_id?value=" + product);
  }

  getSupply(supply: number) {
    return this.http.get("https://cafe.losnarvaez.com/supplies/supply_id?value=" + supply);
  }

  getSupplier(supplier: number) {
    return this.http.get("https://cafe.losnarvaez.com/suppliers/supplier_id?value=" + supplier);
  }

  getOrder(client: number) {
    return this.http.get("https://cafe.losnarvaez.com/orders/client_id?value=" + client);
  }

  postClient(name: string, email: string, phone: string, password: string) {
    const body = {
      name: name,
      email: email,
      phone: phone,
      password: password
    }
    return this.http.post<any>("https://cafe.losnarvaez.com/clients", body);
  }

  postEmployee(rank: string, name: string, email: string, phone: string, password: string) {
    const body = {
      rank: rank,
      name: name,
      email: email,
      phone: phone,
      password: password
    }
    return this.http.post<any>("https://cafe.losnarvaez.com/employees", body);
  }

  postSupplier(name: string, supply_id: number, price: number) {
    const body = {
      name: name,
      supply_id: supply_id,
      price: Math.round((price + Number.EPSILON) * 100) / 100
    }
    return this.http.post<any>("https://cafe.losnarvaez.com/suppliers", body);
  }

  postSupply(name: string, quantity: number) {
    const body = {
      name: name,
      quantity: quantity
    }
    return this.http.post<any>("https://cafe.losnarvaez.com/supplies", body);
  }

  postProduct(name: string, description: string, price: number) {
    const body = {
      name: name,
      description: description,
      price: Math.round((price + Number.EPSILON) * 100) / 100
    }
    return this.http.post<any>("https://cafe.losnarvaez.com/products", body);
  }

  postOrder(client_id: number, date: string, total: number) {
    const body = {
      client_id: client_id,
      date: date,
      total: total
    }
    return this.http.post<any>("https://cafe.losnarvaez.com/orders", body);
  }

  deleteClient(id: number) { 
    return this.http.delete("https://cafe.losnarvaez.com/clients/" + id);
  }

  deleteEmployee(id: number) { 
    return this.http.delete("https://cafe.losnarvaez.com/employees/" + id);
  }

  deleteSupplier(id: number) { 
    return this.http.delete("https://cafe.losnarvaez.com/suppliers/" + id);
  }

  deleteSupply(id: number) { 
    return this.http.delete("https://cafe.losnarvaez.com/supplies/" + id);
  }

  deleteProduct(id: number) { 
    return this.http.delete("https://cafe.losnarvaez.com/products/" + id);
  }

  deleteOrder(id: number) { 
    return this.http.delete("https://cafe.losnarvaez.com/orders/" + id);
  }
}
