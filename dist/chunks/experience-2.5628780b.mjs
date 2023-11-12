import { j as createVNode, s as spreadAttributes, F as Fragment } from './astro.b73366f2.mjs';
import 'html-escaper';

const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="(.+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("");

				const frontmatter = {"inProgress":false,"title":"Axial3D","img_alt":"Axial3D logo","link":"https://axial3d.com","tags":["TypeScript","Vue","Java","AWS","Cypress","Jest","Figma","JIRA","3D Printing","Three.js"]};
				const file = "/Users/shanemcgrath/CODESPACE/personal_webpage/src/content/experience/experience-2.md";
				const url = undefined;
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}
				async function Content() {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;
					const contentFragment = createVNode(Fragment, { 'set:html': html });
					return contentFragment;
				}
				Content[Symbol.for('astro.needsHeadRendering')] = true;

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, images, rawContent, url };
