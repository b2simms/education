
// Import LitElement base class and html helper function
import { css, html, LitElement } from "lit-element";

import "./title-page";
import "../common/accordian-section";
import "../common/domain-section";
import "../common/menu-section";

import { overviewList } from "./docs/overview";

import { sharedStyles, toggleTheme } from "../style/shared-styles";

export class MainElement extends LitElement {

	/**
	 * In the element constructor, assign default property values.
	 */
	constructor() {
		// Must call superconstructor first.
		super();
	}

	public scrollToMe(id: string) {
		const targetElement = this.shadowRoot!.getElementById(id.substr(1))
		if(targetElement) {
			targetElement.scrollIntoView();
		}
	}

	public onChangeTheme() {
		toggleTheme();
	}

	static get styles() {
		return [
		sharedStyles,
		css`
		.overview {
			margin: 0 10%;
		}

		/* move up so the anchor + menu is above the content */
		.anchor-ref {
			position: relative;
			top: -50px;
		}`];
	}

	/**
	 * Define a template for the new element by implementing LitElement's
	 * `render` function. `render` must return a lit-html TemplateResult.
	 */
	public render() {
		return html`
		<head>
			<title>New Brunswick School Improvement Indicators</title>
			<meta name="viewport" http-equiv="Content-Type" content="text/html; charset=UTF-8 width=device-width,initial-scale=1.0"/>
			<link rel="shortcut icon" type="image/x-icon" href="favicon.png">
		</head>

		<body>

			<menu-section
				@change-theme="${(e: Event) => { this.onChangeTheme() }}"></menu-section>

			<a id="anchor_section0" class="anchor-ref"></a>
			<title-page></title-page>

			<accordian-section class="overview" color="#87AFC7" .list="${overviewList}"></accordian-section>
		</body>
		`;
	}
}
customElements.define("main-element", MainElement);
