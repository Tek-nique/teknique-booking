# Tek‑Nique Booking Widget

This repository contains a single‑page static booking widget for Tek‑Nique DJ Services. The widget allows clients to select packages, add optional services, and generate a quote. It also includes a CSV download fallback if your API endpoint is not set.

## Usage

1. **Deploy via GitHub Pages**

   - Upload `index.html` (this file is already present in the repository) to the root of your repository.
   - Go to **Settings → Pages** in this repository.
   - Under **Source**, choose **Deploy from a branch**.
   - Select the `main` branch (or your default branch) and choose the root (`/`) folder. Save your changes.
   - After a minute or so, your site will be available at:

     ```
     https://<your-github-username>.github.io/teknique-booking/
     ```

2. **Embedding in Adobe Portfolio**

   Adobe Portfolio only allows iframe embeds. To embed this widget, use an `<iframe>` tag in your Portfolio’s Embed module:

   ```html
   <iframe
     src="https://<your-github-username>.github.io/teknique-booking/"
     title="Tek‑Nique DJ Booking"
     width="100%"
     height="1900"
     frameborder="0"
     loading="lazy"
     style="border:0; max-width:100%; overflow:auto;">
   </iframe>
   ```

   Adjust the `height` attribute as needed to fit the entire page.

3. **API Configuration**

   The booking form is configured via a `CONFIG` object defined near the top of the `<script>` section in `index.html`. To have the form submit inquiries to your backend, set `WEB_APP_URL` to the URL of your Google Apps Script Web App (or other endpoint) and `SECRET_KEY` to a secure secret. If left blank, submissions will not be sent to your backend; instead, the widget will display a fallback with a CSV download option.

## License

This project is provided as‑is for demonstration purposes. You are free to modify and use it for your own booking needs.
