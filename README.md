# Small Victories Default Themes v2
+ preview: https://sv-themes-staging.netlify.com

## v2 Philosophy
+ v1 Themes were designed as style-agnostic starting points for customization. v2 Themes are designed using a refined Small Victories theme language so that sites feel finished and considered with no further customization, but aren’t overstyled to the point where customizing is difficult.
+ all Themes share standardized Components, including:
  + design language
  + default files
  + class names
  + HTML structure
  + UI components
+ some themes have Components enabled by default, but any theme will be able to interpret the standard set of components
+ Themes use ~~a widely-adopted and supported framework (Bootstrap 4)~~ CSS wherever possible (as oppposed to frameworks for easy customization
+ `_sv_custom.css` files now have many more helpers included by default to make common customizations easy. For example, these might be things like:
  + changing the background color or typeface of your site
  + hiding the info link
  + changing the width/alignment of a text column
+ if I change the `theme:` setting in a site’s `_sv_settings.txt` file, SV will know what to do with content, Components, and customizations.
+ there is a workflow for deploying updates to themes
  + version number when a new site is made?
  + should updates only be for new sites going forward?

[Add theme-specific updates]

## Legacy (v1) Themes
Sites using legacy (v1) themes will stay the same.

In most cases, migrating a site will be fairly easy. You can test it by making a new (v2) site and copy all the **content** files into the new site folder.

Custom code in `_sv_custom.css` and `_sv_custom.js` may not carry over.

## Notes
+ `_sv_reset.css` – if you add this CSS file, you'll clear all default SV styles
+ prefix/namespace `sv_custom.css` starter styles with theme

<hr>

## Developing

### Dependencies
- Bootstrap CSS
- Isotope

### SCSS
- `_sv_custom_themename` files are the styles supplied in the `_sv_custom.css` file by default when creating a new theme

### Naming
- all theme classes are prefixed with `sv-`
- `sv-media-` – files have class of `sv-media-*` where `*` is the file extension or type
- `sv-block-` – these are groups of content. For example, an image will be wrapped with `<div class="sv-block sv-block-image"></div>`
- `sv-module-` – these are groups of interface components. For example, the side-navigation is `sv-module-sidenav`.

<hr>

## Themes

| Document  |  Feed | Slideshow  |  Ecomm |  Campaign |
|---|---|---|---|---|
| Logo  | Default  |   |   |   |
| Navigation-list  | Default  |   |   |   |
| Navigation-info  | No  |   |   |   |
| Table of Contents  |   |   |   |   |
| Slideshow  |   |   |   |   |
| Main content  |   |   |   |   |
| Reading column  |   |   |   |   |
| Side navigation  | Yes  |   |   |   |

### Slideshow

Files:
- `_sv_settings.txt` (default, required)
- `_sv_custom.css` (default)
- `_sv_custom.js` (default)
- `_sv_nav.txt` (default)
- `favicon.png` (default)
- `logo.jpg/png` (optional)

<hr>
## User docs (WIP)
- Integrating Bootstrap or other libraries

<hr>
## To do
