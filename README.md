# Education

An online version of New Brunswick's **School Improvement Indicators** document.

Reasons for being:

- more accessable
- simpler to use
- single source of truth (ie. one update and everyone's document is updated)

## Build and Run

For `single-file`, open in any web browser
For `www`, see README.md

## Site Deployment

> build-deploy.sh
> update-prod.sh

## Navigating the project

### `original-docs` directory

Contains the original document and predecessor HTML

- A useful tool for document-to-formatted-html: <https://html-online.com/editor/>

### `single-file` directory

This convention was chosed by the predecessor. One HTML file with all the CSS, Javascript, and HTML. The image assets are siblings.

### `www` directory

The framework improvement document using LitElement (lit-html) framework
