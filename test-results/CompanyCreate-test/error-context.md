# Test info

- Name: test
- Location: D:\Playwright automation\tests\CompanyCreate.spec.js:3:5

# Error details

```
Error: locator.click: Error: strict mode violation: locator('#claim-details').getByRole('button', { name: 'Select date' }) resolved to 4 elements:
    1) <button type="button" data-state="closed" aria-expanded="false" aria-haspopup="dialog" data-slot="popover-trigger" aria-controls="radix-«r12»" class="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria…>…</button> aka locator('div').filter({ hasText: /^Assign DateSelect date$/ }).getByRole('button')
    2) <button type="button" data-state="closed" aria-expanded="false" aria-haspopup="dialog" data-slot="popover-trigger" aria-controls="radix-«r13»" class="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria…>…</button> aka locator('div').filter({ hasText: /^Inspection DateSelect date$/ }).getByRole('button')
    3) <button type="button" data-state="closed" aria-expanded="false" aria-haspopup="dialog" data-slot="popover-trigger" aria-controls="radix-«r14»" class="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria…>…</button> aka locator('div').filter({ hasText: /^Date of AccidentSelect date$/ }).getByRole('button')
    4) <button type="button" data-state="closed" aria-expanded="false" aria-haspopup="dialog" data-slot="popover-trigger" aria-controls="radix-«r15»" class="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria…>…</button> aka locator('div').filter({ hasText: /^Report DateSelect date$/ }).getByRole('button')

Call log:
  - waiting for locator('#claim-details').getByRole('button', { name: 'Select date' })

    at D:\Playwright automation\tests\CompanyCreate.spec.js:16:85
```

# Page snapshot

```yaml
- img
- text: AJAX International
- list:
  - listitem:
    - button "Dashboard":
      - img
      - text: Dashboard
  - listitem:
    - button "Inspections":
      - img
      - text: Inspections
  - listitem:
    - button "Users":
      - img
      - text: Users
  - listitem:
    - button "Settings":
      - img
      - text: Settings
  - listitem:
    - button "Help":
      - img
      - text: Help
- text: TM
- paragraph: Thamara Madushanka
- paragraph: thamara@digitalservices.lk
- button:
  - img
- button "Toggle Sidebar"
- main:
  - button "Toggle Sidebar":
    - img
    - text: Toggle Sidebar
  - navigation "breadcrumb":
    - list:
      - listitem: Dashboard
      - listitem: Perusal
      - listitem:
        - link "286" [disabled]
  - link "Invoices & Estimations":
    - /url: https://inv-est.digisglobal.com/?referenceNumber=AJAX_MOTOR_CLAIM-13677896-f8f6
    - button "Invoices & Estimations":
      - img
      - text: Invoices & Estimations
  - button "Upload Evidence"
  - button:
    - img
  - main:
    - text: 1 ASSIGNED 5/29/2025 User AJAX_MOTOR_CLAIM-13677896-f8f6 ASSIGNED 2025-05-29 User Perusal Status
    - combobox: ASSIGNED
    - button "Perusal" [expanded]:
      - heading "Perusal" [level=3]
      - img
    - text: Perusal ID 286 Event Code AJAX_MOTOR_CLAIM-13677896-f8f6 Value $0.00 Perusal Date 5/29/25, 5:30 AM Workflow Name Ajax Motor Claim Workflow Workflow Code AJAX_MOTOR_CLAIM_WF
    - button "Event" [expanded]:
      - heading "Event" [level=3]
      - img
    - text: Topic Auto-generated event for perusal Description Automatically created for perusal with subject ID 124 Subject WP-1998 Subject Type INDIVIDUAL Occurred At 5/29/25, 3:44 PM LOB Code AJAX_MOTOR_CLAIM
    - button "Metadata" [expanded]:
      - heading "Metadata" [level=3]
      - img
    - text: Created By Created At 5/29/25, 3:44 PM Last Updated 5/29/25, 3:44 PM
    - button:
      - img
    - tablist:
      - tab "Evidences"
      - tab "Overview" [selected]
      - tab "Audit Log"
    - tabpanel "Overview":
      - text: Incident Overview You can create a new invoice or existing invoice
      - separator
      - text: Vehicle and Claim Type Changes will update all Report form Is this a motorbike?
      - img
      - radiogroup:
        - radio "Yes, It is" [checked]:
          - img
        - text: Yes, It is
        - radio "No, It isn't Motorbike"
        - text: No, It isn't Motorbike
      - text: Claim Type
      - combobox "Claim Type": Own Damage
      - text: Claim Details Changes will update all Report form Assign Date
      - button "29/05/2025":
        - img
        - text: 29/05/2025
      - text: Inspection Date
      - button "29/05/2025":
        - img
        - text: 29/05/2025
      - text: Date of Accident
      - button "29/05/2025":
        - img
        - text: 29/05/2025
      - text: Report Date
      - button "Select date":
        - img
        - text: Select date
      - text: Insurance Company
      - combobox "Insurance Company": Select Company...
      - text: Insurer's Reference
      - textbox "ABC123"
      - text: Our Reference
      - textbox "ABC123": AJAX_MOTOR_CLAIM-13677896-f8f6
      - text: Claim Officer
      - textbox
      - text: Insured Vehicle No
      - textbox "Third Party"
      - text: Excess
      - button "S$":
        - text: S$
        - img
      - textbox "Enter excess amount"
      - text: Workshop Name
      - combobox "Workshop Name": Select workshop...
      - text: Address
      - textbox
      - text: Postal Code
      - textbox
      - text: Description of Vehicle TP Vehicle No
      - textbox
      - text: TP Claimant
      - textbox
      - text: TP Policy No
      - textbox
      - text: Policy Type
      - combobox "Policy Type": Select option...
      - text: Make
      - textbox "Enter make"
      - text: Model
      - textbox "Enter model"
      - text: Engine No
      - textbox "Enter engine number"
      - text: Chassis No
      - textbox "Enter chassis number"
      - text: Odometer
      - textbox
      - text: Insured plate number
      - textbox: WP-1998
      - text: Colour
      - textbox
      - text: Engine Capacity
      - textbox
      - text: Registration Date
      - button "Select date":
        - img
        - text: Select date
      - text: Tyre Make
      - textbox
      - text: Condition of Vehicle
      - combobox "Condition of Vehicle": Select option...
      - text: Front Side
      - textbox
      - text: Rear Side
      - textbox
      - text: Front Tyre Size
      - textbox
      - text: Rear Tyre Size
      - textbox
      - text: Footbrake
      - textbox
      - text: Handbrake
      - textbox
      - text: General Condition
      - textbox
      - text: Steering
      - textbox
      - text: Paint Work
      - textbox
      - text: COE/PARF Rebate
      - button "S$":
        - text: S$
        - img
      - textbox
      - text: Market Value
      - button "S$":
        - text: S$
        - img
      - textbox
      - img
      - text: Claim Details
      - list:
        - listitem: Assign Date
        - listitem: Inspection Date
        - listitem: Date of Accident...
      - img
      - text: Description of Vehicle
      - list:
        - listitem: TP Vehicle No
        - listitem: TP Claimant
        - listitem: TP Policy No
- region "Notifications (F8)":
  - list:
    - status:
      - text: Success Perusal created successfully
      - button:
        - img
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | test('test', async ({ page }) => {
   4 |   await page.goto('https://dev-maji-backoffice.digisglobal.com/perusal');
   5 |   await page.getByRole('textbox', { name: 'Email' }).fill('thamara@digitalservices.lk');
   6 |   await page.getByRole('textbox', { name: 'Password' }).fill('Thamara@1234');
   7 |   await page.getByRole('button', { name: 'Sign In' }).click();
   8 |   await page.getByRole('button', { name: 'Add New' }).click();
   9 |   await page.getByRole('button', { name: 'Add New Insured Car Plate' }).click();
  10 |   await page.getByRole('textbox', { name: 'Insured Car Plate Number *' }).fill('WP-1998');
  11 |   await page.getByRole('button', { name: 'Next' }).click();
  12 |   await page.getByRole('tab', { name: 'Overview' }).click();
  13 |   await page.getByRole('radio', { name: 'Yes, It is' }).click();
  14 |   await page.getByRole('combobox', { name: 'Claim Type' }).click();
  15 |   await page.getByRole('option', { name: 'Own Damage' }).click();
> 16 |   await page.locator('#claim-details').getByRole('button', { name: 'Select date' }).click();
     |                                                                                     ^ Error: locator.click: Error: strict mode violation: locator('#claim-details').getByRole('button', { name: 'Select date' }) resolved to 4 elements:
  17 |   await page.getByRole('gridcell', { name: '29' }).nth(1).click();
  18 |   await page.locator('button:has-text("Select Company...")').click();
  19 | });
```