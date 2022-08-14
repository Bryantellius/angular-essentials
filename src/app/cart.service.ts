import { Injectable } from "@angular/core";
import { Product } from "./products";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class CartService {
  items: Product[] = [];
  constructor(private http: HttpClient) {}

  public addToCart(product: Product): void {
    this.items.push(product);
  }

  public getItems(): Product[] {
    return this.items;
  }

  public removeItem(id: number): Product[] {
    this.items = this.items.filter((product) => product.id !== id);
    return this.items;
  }

  public clearCart(): Product[] {
    this.items = [];
    return this.items;
  }

  public getShippingPrices(): Observable<{ type: string; price: number }[]> {
    return this.http.get<{ type: string; price: number }[]>(
      "/assets/shipping.json"
    );
  }
}
