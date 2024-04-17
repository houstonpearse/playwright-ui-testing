<h1 align="center">Playwright UI testing</h1>
<br />
<div align="center">
  <a href="https://playwright.dev">
    <img src="https://playwright.dev/img/playwright-logo.svg" alt="Logo" width="200" height="200">
  </a>
<h3 align="center">Playwright Testing</h3>
<p>
Playwright is a multi-language testing framework that makes Testing simple
</p>
</div>

## Overview

A PoC for the playwright testing framework using a fake testing [website](https://shop.polymer-project.org/).

Using TypeScript and nodeJS

## CICD

Tests are run on commit/PR to main branch.

A playwright report is created that can be downloaded and viewed to see which test failed/reasons ect..

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

## Playwright page object model

This PoC uses the Page Object Model testing approach which are a good approach to maintaining large testing suites.

Each Page object maps to a page or a part of the web application. This makes reusing selectors easy and helps keep tests simple and intuitive.

## Setup and Run

npx playwright install
npx playwright test
