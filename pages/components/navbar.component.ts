import { Page, Locator } from '@playwright/test';

export default class NavBarComponent {
  readonly page: Page;
  readonly mensOuterwearLink: Locator;
  readonly mensTshirtLink: Locator;
  readonly ladiesOuterwearLink: Locator;
  readonly ladiesTshirtLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.mensOuterwearLink = page.getByRole('link', { name: "Men's Outerwear" }).first();
    this.mensTshirtLink = page.getByRole('link', { name: "Mens's T-Shirts" }).first();
    this.ladiesOuterwearLink = page.getByRole('link', { name: 'Ladies Outerwear' }).first();
    this.ladiesTshirtLink = page.getByRole('link', { name: 'Ladies T-Shirts' }).first();
  }
}
