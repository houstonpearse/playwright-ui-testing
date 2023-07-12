import { Page, Locator } from '@playwright/test';
import NavBarComponent from './components/navbar.component';

export default class ItemPage {
  readonly page: Page;
  readonly quantitySelector: Locator;
  readonly sizeSelector: Locator;
  readonly addToCartButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.quantitySelector = page.getByRole('combobox', { name: 'Quantity' });
    this.sizeSelector = page.getByRole('combobox', { name: 'Size' });
    this.addToCartButton = page.getByRole('button', { name: 'Add this item to cart' });
  }

  async selectOptions(size: string, quantity: string) {
    await this.sizeSelector.selectOption(size);
    await this.quantitySelector.selectOption(quantity);
  }

  async addToCart() {
    await this.addToCartButton.click();
  }

  navBarComponent(): NavBarComponent {
    return new NavBarComponent(this.page);
  }
}
