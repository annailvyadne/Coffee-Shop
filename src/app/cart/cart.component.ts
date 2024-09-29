import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  // Example static cart items (you can replace this with your data source)
  ngOnInit(): void {
    this.cartItems = [
      { name: 'Cappuccino', price: 149.00, imageUrl: 'assets/img/cappuccino.png', quantity: 1 },
      { name: 'Latte', price: 139.00, imageUrl: 'assets/img/latte.png', quantity: 1 },
      { name: 'Espresso', price: 129.00, imageUrl: 'assets/img/espresso.png', quantity: 1 }
    ];
  }

  removeItem(index: number): void {
    this.cartItems.splice(index, 1);
    // Optionally: Save updated cart to local storage or another data source
  }

  increaseQuantity(index: number): void {
    this.cartItems[index].quantity += 1;
    // Optionally: Save updated cart to local storage or another data source
  }

  decreaseQuantity(index: number): void {
    if (this.cartItems[index].quantity > 1) {
      this.cartItems[index].quantity -= 1;
    } else {
      this.removeItem(index);
    }
    // Optionally: Save updated cart to local storage or another data source
  }

  get totalPrice(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
}
