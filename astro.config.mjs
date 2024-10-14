import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Shadow Cipher',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Personal',
					autogenerate: { directory: 'personal' },
				},
				{
					label: 'Computer Networking',
					autogenerate: { directory: 'Computer Networking' },
				},
				{
					label: 'Cyber Security',
					autogenerate: { directory: 'Cyber Security' },
				},
				{
					label: 'IT Security',
					autogenerate: { directory: 'IT Security' },
				},
				{
					label: 'IT Support',
					autogenerate: { directory: 'IT Support' },
				},
				{
					label: 'Operating System',
					autogenerate: { directory: 'Operating System' },
				},
				{
					label: 'System Administration',
					autogenerate: { directory: 'System Administration' },
				},
				{
					label: 'Troubleshooting and debugging',
					autogenerate: { directory: 'Troubleshooting and debugging' },
				},
				{
					label: 'Data Structure & Algorithms',
					autogenerate: { directory: 'Data Structure & Algorithms' },
				},
				{
					label: 'Roadmaps',
					autogenerate: { directory: 'roadmaps' },
				},
				{
					label: 'sql',
					autogenerate: { directory: 'sql' },
				},
			],
			customCss: [
				// Path to your Tailwind base styles:
				'./src/tailwind.css',
			  ],
		}),
		tailwind({ applyBaseStyles: false }),
	],
});
