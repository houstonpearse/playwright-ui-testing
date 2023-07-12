# Playwright Lab

a lab exercise for the playwright testing framework using a fake testing [website](https://shop.polymer-project.org/).

## Scenario

- Open the Store page - [link](https://shop.polymer-project.org/)
- Add 2 items to the cart (Any items from Men's Outerwear; Ladies Outerwear; Men's T-Shirts; or Ladies T-Shirts). With each item please select:
  - Quantity: 2
  - Size: XL
- Go to Cart and check those items exist in Cart
- Check the value of Total Items, Total Payment is correct
- Change the value of Quantity to 4 and check for Total payment is correct
- Check that the Delete button appears for the added item
- Delete the items in the cart
- Check that cart is clear

## Setup

npm init playwright@latest
