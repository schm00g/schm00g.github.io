import { expect, test } from "@playwright/test";

test.describe("mobile version of nav", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("menu icon is shown on mobile", async ({ page, isMobile }) => {
    if (isMobile) {
      const burgerMenu = page.locator("#astronav-menu");
      await expect(burgerMenu).toBeVisible();
      const menuItems = page.locator(".astronav-toggle");
      await expect(menuItems).toHaveCount(3);
    }
  });
});

test.describe("ui test", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("website is shown correctly", async ({ page }) => {
    await expect(page).toHaveURL("http://localhost:3000/");
    await expect(page).toHaveTitle("A Very Descriptive Title");
    const metaDescription = page.locator("meta[name='description']");
    await expect(metaDescription).toHaveAttribute(
      "content",
      "A heavily optimized description full of well-researched keywords."
    );
    const html = page.locator("html");
    await expect(html).toHaveClass("scroll-smooth");
    await expect(page.getByTestId("hero")).toBeVisible();
    await expect(page.getByTestId("about")).toBeVisible();
    await expect(page.getByTestId("experience")).toBeVisible();
    await expect(page.getByTestId("contact")).toBeVisible();
    await expect(page.getByTestId("footer")).toBeVisible();
  });

  test("navbar is shown correctly and working on desktop", async ({
    page,
    isMobile,
  }) => {
    const header = page.getByTestId("header");
    if (!isMobile) {
      await expect(header).toBeVisible();
      await header.getByText("About").click();
      await expect(page).toHaveURL("http://localhost:3000/#about");
      await header.getByText("Experience").click();
      await expect(page).toHaveURL("http://localhost:3000/#experience");
      await header.getByText("Contact").click();
      await expect(page).toHaveURL("http://localhost:3000/#contact");
    }
  });
});

test.describe("testing button functionalities", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/");
  });

  test("back to top button is working", async ({ page }) => {
    const scrollY = await page.evaluate(
      () => document.documentElement.scrollHeight
    );
    await page.evaluate(() => {
      window.scrollTo(0, scrollY);
    });
    await page.getByTestId("back-to-top-button").click();
    await page.evaluate(() => {
      window.scrollTo(0, 0);
    });
  });

  test("toggle theme button is working", async ({ page, isMobile }) => {
    if (!isMobile) {
      await page.getByTestId("theme-switch").click();
      await expect(page.locator("html")).toHaveClass("scroll-smooth dark");
      await page.evaluate(() => {
        window.localStorage.setItem("theme", "dark");
      });
      await page.getByTestId("theme-switch").click();
      await expect(page.locator("html")).toHaveClass("scroll-smooth");
      await page.evaluate(() => {
        window.localStorage.removeItem("theme");
      });
    }
  });
});

test.describe("hover effect on cards", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("hover effect on cards is working", async ({ page }) => {
    await page.getByTestId("card").first().hover();
    await expect(page.locator("article").first()).toHaveClass(
      "rounded-xl bg-white p-3 shadow-lg duration-100 hover:scale-105 hover:transform hover:shadow-xl"
    );
  });
});

test.afterAll(async ({ page }) => {
  await page.close();
});

test.describe("form submission", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/");
  });

  test("submitting contact form with valid data", async ({ page }) => {
    const nameInput = page.locator("#name");
    const emailInput = page.locator("#email");
    const messageInput = page.locator("#message");
    const submitButton = page.locator("#submit-button");

    await nameInput.type("John Doe");
    await emailInput.type("john.doe@example.com");
    await messageInput.type("This is a test message.");
    await submitButton.click();

    // You may need to adjust the following assertions based on your actual form submission behavior.
    await page.waitForNavigation();
    await expect(page).toHaveURL("http://localhost:3000/thank-you"); // Assuming a thank-you page is displayed after successful form submission.
  });

  test("form validation for invalid email address", async ({ page }) => {
    const emailInput = page.locator("#email");
    const submitButton = page.locator("#submit-button");

    await emailInput.type("invalid-email");
    await submitButton.click();

    // Assuming there's a validation error message displayed for an invalid email address.
    const errorMessage = page.locator(".error-message");
    await expect(errorMessage).toBeVisible();
  });

  test("checking navigation links in the footer", async ({ page }) => {
    const aboutLink = page.getByTestId("footer-about-link");
    const privacyLink = page.getByTestId("footer-privacy-link");
    const termsLink = page.getByTestId("footer-terms-link");

    await aboutLink.click();
    await expect(page).toHaveURL("http://localhost:3000/about");

    await privacyLink.click();
    await expect(page).toHaveURL("http://localhost:3000/privacy");

    await termsLink.click();
    await expect(page).toHaveURL("http://localhost:3000/terms");
  });
});
