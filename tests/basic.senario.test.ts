import { test, Page, expect } from '@playwright/test';
import HomePage from '../pages/home.page';
import CatalogPage from '../pages/catalog.page';
import ItemPage from '../pages/item.page';
import CartPage from '../pages/cart.page';

test('Basic Scenario', async ({ page }) => {
  let homePage: HomePage = new HomePage(page);
  let itemPage: ItemPage = new ItemPage(page);
  let catalogPage: CatalogPage = new CatalogPage(page);
  let cartPage: CartPage = new CartPage(page);

  // start at home page
  await homePage.navigate();

  // go to catalog page
  await homePage.navBarComponent().mensOuterwearLink.click();

  // add first item
  await catalogPage.clickItem('Anvil L/S Crew Neck - Grey');
  await itemPage.selectOptions('XL', '2');
  await itemPage.addToCart();

  // go to catalog page
  await itemPage.navBarComponent().ladiesOuterwearLink.click();

  // add second item
  await catalogPage.clickItem('Ladies Modern Stretch Full Zip');
  await itemPage.selectOptions('XL', '2');
  await itemPage.addToCart();

  // click popup to navigate to cart
  await page.getByRole('link', { name: 'View Cart' }).click();

  // check items in cart
  await expect(cartPage.getCartItemLocator('Ladies Modern Stretch Full Zip', 'XL')).toBeVisible();
  await expect(cartPage.getCartItemLocator('Anvil L/S Crew Neck - Grey', 'XL')).toBeVisible();

  // check total price
  await expect(cartPage.getCartTotalLocator()).toHaveText(/127.50/);

  // update quantity of first item
  await cartPage.updateQuantity('Anvil L/S Crew Neck - Grey', 'XL', '4');
  await cartPage.updateQuantity('Ladies Modern Stretch Full Zip', 'XL', '4');

  // check total price;
  await expect(cartPage.getCartTotalLocator()).toHaveText(/255.00/);

  // check delete button is visible
  await expect(cartPage.getItemDeleteButtonLocator('Anvil L/S Crew Neck - Grey', 'XL')).toBeVisible();
  await expect(cartPage.getItemDeleteButtonLocator('Ladies Modern Stretch Full Zip', 'XL')).toBeVisible();

  // delete items
  await cartPage.getItemDeleteButtonLocator('Anvil L/S Crew Neck - Grey', 'XL').click();
  await cartPage.getItemDeleteButtonLocator('Ladies Modern Stretch Full Zip', 'XL').click();

  // check cart is clear
  await expect(cartPage.getCartEmptyLocator()).toBeVisible();
});
