import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];

  constructor() { }

  addToCart(product: { name: string; price: number }) {
    this.cartItems.push(product);
    console.log(`${product.name} added to cart!`);
  }

  getCartItems(): any[] {
    return this.cartItems;
  }
}
