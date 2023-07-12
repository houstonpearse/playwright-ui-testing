import { Page, Locator } from '@playwright/test';
import NavBarComponent from './components/navbar.component';

export default class HomePage {
  readonly page: Page;
  readonly cartLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartLink = page.getByRole('button', { name: 'Shopping cart' });
  }

  async navigate() {
    await this.page.goto('https://shop.polymer-project.org/');
  }

  navBarComponent(): NavBarComponent {
    return new NavBarComponent(this.page);
  }
}
