import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // Stores all the products featched from database
  products: Object[];

  // To submit new product into database
  newName: String;
  newPrice: Number;
  newQuantity: Number;

  editProduct: any;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.productService.getAll().subscribe(data => {
      if (data['status']) {
        this.products = data['data'];
      } else {
        console.log('err');
      }
    });
  }

  newProduct() {
    const newProduct = {
      name: this.newName,
      price: this.newPrice,
      quantity: this.newQuantity
    };

    console.log(newProduct);

    this.productService.add(newProduct).subscribe(data => {
      console.log(data);
      this.products.push(data['data']);
    });

    this.newName = '';
    this.newPrice = null;
    this.newQuantity = null;

  }

  edit(product) {
    this.editProduct = product;
  }

  editSubmit() {
    this.productService.edit(this.editProduct._id, this.editProduct).subscribe(data => {
      console.log(data);
      this.editProduct = null;
    });

  }

  closeEditForm() {
    this.editProduct = null;
  }

  delete(product) {
    this.productService.delete(product._id).subscribe(data => {
      console.log(data);
      const index = this.products.indexOf(product);
      this.products.splice(index, 1);
    });
  }


}
