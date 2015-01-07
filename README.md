=========================
vonbearsharkchronicles.com
=========================

This is a blog am I working on for my fictional persona, VonBearshark. Though I have only just begun, I plan to have this site host short, daily, general blogs, as well as more in-depth blogs about projects or tools I am working with as parts of a larger series, in addition to my full-length fiction writing pieces, many surrounding this character, VonBearshark.

The site is powered by Wintersmith, a static JS generator; templated by Jade; stylized by Stylus, a JS preprocessor, and Bootstrap (for the grid functionality); and hosted on Github Pages.

Run the application locally (port 8080) with 'wintersmith preview'.

=========================
Directory structure
=========================
```
+-- articles: ontains sub directories for all blog articles (including:)
|	+-- index.html: The HTML generated from the markdown file, as well as any multimedia files embedded in the HTML.
+-- css: Contains generated CSS, served to the client.
+-- page: Generated page info, served to client.
+-- src: Contains the main Wintersmith application.
|	+-- contents: All client-served resources are generated from this with "wintersmith build" from the src directory.
|		+-- articles: Directories for each blog post, containing markdown files for the post copy, as well as any static resources referenced by the post, such as images.
|		+-- authors: JSON files containing article author information.
|		+-- css: CSS files.
|		+-- about.md: Copy for the "About" section of the footer, generated into included HTML on build.
|		+-- archive.json: Template for the articles archive, generated into the base directory on build.
|		+-- feed.json: Template for the RSS feed, generated into feed.xml in the base directory on build.
|	+-- node modules: Installed node_modules (also referenced in package.json, in the base directory).
|	+-- plugins: Additional plugins, such as Paginator, which ships by default.
|	+-- templates: Jade templating files.
|	+-- config.json: Wintersmith configuration, including generated output location, porting, URL and title information, and package usage.
+-- archive.html: Generated archive HTML file.
+-- feed.xml: Generated XML data for the RSS feed.
+-- package.json: Installed node and application packages.
