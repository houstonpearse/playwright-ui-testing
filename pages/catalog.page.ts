import { Page, Locator } from '@playwright/test';
import NavBarComponent from './components/navbar.component';

export default class CatalogPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async clickItem(itemName: string) {
    await this.page.getByRole('img', { name: itemName }).click();
  }

  navbarComponent(): NavBarComponent {
    return new NavBarComponent(this.page);
  }
}
