import { Page, Locator } from '@playwright/test';

export default class CartPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    this.page.goto('https://shop.polymer-project.org/cart');
  }

  getItemDeleteButtonLocator(itemName: string, itemSize: string): Locator {
    return this.getCartItemLocator(itemName, itemSize).getByRole('button');
  }

  getCartItemLocator(itemName: string, itemSize: string): Locator {
    return this.page.locator('shop-cart-item').filter({ hasText: itemName }).filter({ hasText: itemSize });
  }

  getCartEmptyLocator(): Locator {
    return this.page.getByText('Your is empty');
  }

  getCartTotalLocator(): Locator {
    return this.page.getByText('Total:');
  }

  async updateQuantity(itemName: string, itemSize: string, quantity: string) {
    return this.page.locator('shop-cart-item').filter({ hasText: itemName }).filter({ hasText: itemSize }).getByRole('combobox', { name: 'Change Quantity' }).selectOption(quantity);
  }
}
