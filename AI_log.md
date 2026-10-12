# AI Log

## 2026-10-12 22:33:05 +02:00

**Questions and answers**

- **What could go wrong with the login test?** It navigated to `/auth/login`, but the page is served at `/login/`, so Playwright waited for an email field that was not on the error page. Both login tests were changed to use `/login/`.
- **Should I create a `const` for the venue?** It is optional for a locator used once, but a named `venues` locator makes the test easier to read when it is checked and clicked.
- **Why did the venue test say “element not found”?** The app had no venue links because the old API returned HTTP 500 (`HolidazeVenue.media` was missing on the server). The failure occurred before Playwright could click a venue.
- **Why did my classmate's similar test pass?** The test flow was similar, but her app used a different API base URL. The repository being the same does not make external API configuration or responses the same.
- **Do I have to mock the API? Can the test be like my classmate's?** No. The navigation test was kept unmocked and uses the first venue returned by the live API. This means it depends on the API being available and returning venue data.
- **Was the whole problem the API?** The old endpoint was failing, but moving to v2 also required adapting the app to v2's response format.
- **Why was login still failing after navigation passed?** The v2 login response is wrapped in `data`; the login helper returned the wrapper instead of the payload, so the app could not find the token and user name. It now returns `json.data`.
- **Should I test after changing the base URL?** Yes. The focused navigation and login tests were run, followed by the complete E2E suite.

**Changes and result:** API callers use `baseApiUrl`; venue loaders return the v2 `data` payload; venue image renderers use `media[].url`; and the login helper unwraps the v2 payload. The navigation tests use the live API without mocks. The full Playwright E2E suite passed: 15 tests.
