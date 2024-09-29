import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  coffeeProducts = [
    { name: 'Cappuccino', price: 149.00, image: 'assets/img/cappuccino.png' },
    { name: 'Latte', price: 139.00, image: 'assets/img/latte.png' },
    { name: 'Espresso', price: 129.00, image: 'assets/img/espresso.png' },
    { name: 'Mocha', price: 159.00, image: 'assets/img/mocha.png' },
    { name: 'Macchiato', price: 169.00, image: 'assets/img/caramel-macchiato.png' },
    { name: 'Americano', price: 119.00, image: 'assets/img/americano.png' }
  ];

  pastryProducts = [
    { name: 'Brownie', price: 149.00, image: 'assets/img/brownie.png' },
    { name: 'Croissant', price: 129.00, image: 'assets/img/croissant.png' },
    { name: 'Glazed Donut', price: 119.00, image: 'assets/img/glazed-donut.png' },
    { name: 'Garlic Bread', price: 89.00, image: 'assets/img/garlic-bread.png' },
    { name: 'Cookie', price: 159.00, image: 'assets/img/cookie.png' },
    { name: 'Cinnamon Roll', price: 149.00, image: 'assets/img/cinnamon-roll.png' }
  ];

  constructor(private cartService: CartService) { }

  addToCart(product: { name: string; price: number }) {
    this.cartService.addToCart(product);
    alert(`${product.name} added to cart!`);
  }

    toggleDetails(product: any) {
    product.showDetails = !product.showDetails;
  }
}
