import { test, expect } from '@playwright/test';

// simple job search flow on Naukri.com
// navigates to the naukri homepage, fills in keyword and location,
// submits the form and verifies that results are shown.

test('search a job on Naukri', async ({ page }) => {
  // close any annoying popups that open in new tabs
  page.on('popup', (popup) => popup.close());

  await page.goto('https://www.naukri.com/mnjuser/homepage');

  // on first visit a cookie banner sometimes appears
  const accept = page.locator('text=Accept All');
  if (await accept.count()) {
    await accept.click();
  }

  // fill keyword and location fields (ids observed on the site)
  await page.fill('#qsb-keyword-sugg', 'Software Engineer');
  await page.fill('#qsb-location-sugg', 'Bangalore');

  // submit the search
  await page.click('#qsb-submit');

  // wait for navigation and a list of results
  await page.waitForLoadState('networkidle');

  // verify we're on a search results page and at least one listing is visible
  await expect(page).toHaveURL(/search/);
  await expect(page.locator('.jobTuple, .job-listing, .jobCard')).toHaveCountGreaterThan(0);
});