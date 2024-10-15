import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Shadow Cipher",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Home",
          slug: "home",
          // items: [
          // 	// Each item here is one entry in the navigation menu.
          // 	{ label: 'Example Guide', slug: 'Home' },
          // ],
        },

        {
          label: "Computer Networking",
          autogenerate: { directory: "Computer Networking" },
        },
        {
          label: "Cyber Security",
          autogenerate: { directory: "Cyber Security" },
        },
        {
          label: "IT Security",
          autogenerate: { directory: "IT Security" },
        },
        {
          label: "IT Support",
          autogenerate: { directory: "IT Support" },
        },
        {
          label: "Operating System",
          autogenerate: { directory: "Operating System" },
        },
        {
          label: "System Administration",
          autogenerate: { directory: "System Administration" },
        },
        {
          label: "Troubleshooting and debugging",
          autogenerate: { directory: "Troubleshooting and debugging" },
        },
        {
          label: "Data Structure & Algorithms",
        //   link: "data-structure--algorithms",
          // autogenerate: { directory: 'Data Structure & Algorithms' },
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Table Content",
              slug: "data-structure--algorithms/table-content",
            },
            {
              label: "Pseudo Code and Flow chart",
              slug: "data-structure--algorithms/psuedo_flowchart",
            },
            {
              label: "Programming Introduction",
              slug: "data-structure--algorithms/programming_basic",
            },
			{
			  label: "Bitwise Operators",
			  slug: "data-structure--algorithms/bitwise_operators",
			},
            {
              label: "Basic Questions",
              slug: "data-structure--algorithms/basic_questions",
            },
            {
              label: "Pattern Questions",
              slug: "data-structure--algorithms/pattern-questions",
            },
            {
              label: "Array Basics",
              slug: "data-structure--algorithms/array_basics",
            },
            {
              label: "Array Questions",
              slug: "data-structure--algorithms/array-questions",
            },
            {
              label: "Space Time Complexity",
              slug: "data-structure--algorithms/space_time_complexity",
            },
            {
              label: "Binary Search",
			  items: [
				{
					label: "Binary Search Fundamentals",
					slug: "data-structure--algorithms/binary/binary_search_fundamentals",
				},
				{
					label: "Binary Search Questions",
					slug: "data-structure--algorithms/binary/binary_questions",
				},
			  ]
            },
          ],
        },
        {
          label: "Roadmaps",
          autogenerate: { directory: "roadmaps" },
        },
        {
          label: "sql",
          autogenerate: { directory: "sql" },
        },
      ],
      customCss: [
        // Path to your Tailwind base styles:
        "./src/tailwind.css",
      ],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
