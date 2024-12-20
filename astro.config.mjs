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
          label: "Git & Github",
          autogenerate: { directory: "git-github" },
        },
        {
          label: "Data Structure & Algorithms",
          //   link: "data-structure-algorithms",
          // autogenerate: { directory: 'Data Structure & Algorithms' },
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Table Content",
              slug: "data-structure-algorithms/table-content",
            },
            {
              label: "Pseudo Code and Flow chart",
              slug: "data-structure-algorithms/psuedo_flowchart",
            },
            {
              label: "Programming Introduction",
              slug: "data-structure-algorithms/programming_basic",
            },
            {
              label: "Bitwise Operators",
              slug: "data-structure-algorithms/bitwise_operators",
            },
            {
              label: "Basic Questions",
              slug: "data-structure-algorithms/basic_questions",
            },
            {
              label: "Pattern Questions",
              slug: "data-structure-algorithms/pattern-questions",
            },
            {
              label: "Array Basics",
              slug: "data-structure-algorithms/array_basics",
            },
            {
              label: "Array Questions",
              slug: "data-structure-algorithms/array-questions",
            },
            {
              label: "Space Time Complexity",
              slug: "data-structure-algorithms/space_time_complexity",
            },
            {
              label: "Binary Search",
              items: [
                {
                  label: "Binary Search Fundamentals",
                  slug: "data-structure-algorithms/binary/binary_search_fundamentals",
                },
                // {
                //   label: "Binary Search Questions",
                //   slug: "data-structure-algorithms/binary/binary_questions",
                // },
                {
                  label: "First and Last Position",
                  slug: "data-structure-algorithms/binary/firstandlastposition",
                },
                {
                  label: "Peak Index In Mountain Array",
                  slug: "data-structure-algorithms/binary/peakindexinmountainarray",
                },
                {
                  label: "Pivot Index In Rotated Array",
                  slug: "data-structure-algorithms/binary/pivotindexinrotatedarray",
                },
                {
                  label: "Element K Position",
                  slug: "data-structure-algorithms/binary/elementkposition",
                },
                {
                  label: "Square Root Precision",
                  slug: "data-structure-algorithms/binary/squarerootprecision",
                },
                {
                  label: "Book Allocation",
                  slug: "data-structure-algorithms/binary/bookallocation",
                },
                {
                  label: "Aggressive Cows",
                  slug: "data-structure-algorithms/binary/aggressivecows",
                },
                {
                  label: "Painter's Partition",
                  slug: "data-structure-algorithms/binary/painterspartition",
                },
              ],
            },
            {
              label: "Array Questions",
              items: [
                {
                  label: "Check Rotated Sorted Array",
                  slug: "data-structure-algorithms/array/checkrotatedsortedarray",
                },
                {
                  label: "Rotation using modulus",
                  slug: "data-structure-algorithms/array/rotationusingmodulus",
                },
              ]
            },
            {
              label: "Strings",
              items: [
                {
                  label: "String Fundamentals",
                  slug: "data-structure-algorithms/strings/fundamentals",
                },
                {
                  label: "Basic Questions",
                  slug: "data-structure-algorithms/strings/basicquestions",
                },
              ]
            },
            {
              label: "Sortings",
              items: [
                {
                  label: "Selection Sort",
                  slug: "data-structure-algorithms/sortings/selection-sort",
                },
                {
                  label: "Bubble Sort",
                  slug: "data-structure-algorithms/sortings/bubble-sort",
                },
                {
                  label: "Insertion Sort",
                  slug: "data-structure-algorithms/sortings/insertion-sort",
                },
              ],
            },
            {
              label: "2D Array",
              items: [
                {
                  label: "Introduction",
                  slug: "data-structure-algorithms/2d-array/intro",
                },
                {
                  label: "Basic Questions",
                  slug: "data-structure-algorithms/2d-array/basic-questions",
                },
                {
                  label: "Search In 2D Matrix",
                  slug: "data-structure-algorithms/2d-array/searching-2d-matrix",
                },
                {
                  label: "Binary Search In 2D Matrix",
                  slug: "data-structure-algorithms/2d-array/binary-search-2d-matrix",
                },
                {
                  label: "Spiral Order Traversal",
                  slug: "data-structure-algorithms/2d-array/spiral-order-traversal",
                },
                {
                  label: "Wave Print",
                  slug: "data-structure-algorithms/2d-array/waveprint",
                },
              ],
            },
            {
              label: "Maths",
              items: [
                {
                  label: "Fast Exponentiation",
                  slug: "data-structure-algorithms/maths/fast-exponentiation",
                },
                {
                  label: "Greatest Common Divisor",
                  slug: "data-structure-algorithms/maths/greatest-common-divisor",
                },
                {
                  label: "Insertion Sort",
                  slug: "data-structure-algorithms/maths/sieve-of-eratosthenes",
                },
              ],
            },
            {
              label: "Pointers",
              items: [
                {
                  label: "Introduction",
                  slug: "data-structure-algorithms/pointers/introduction",
                },
                {
                  label: "Pointers Array",
                  slug: "data-structure-algorithms/pointers/pointerarrays",
                },
                {
                  label: "Pointer Function",
                  slug: "data-structure-algorithms/pointers/pointerfunction",
                },
                {
                  label: "Pointer String",
                  slug: "data-structure-algorithms/pointers/pointerstrings",
                },
              ],
            },
            {
              label: "Double Pointers",
              items: [
                {
                  label: "Introduction",
                  slug: "data-structure-algorithms/doublepointers/introduction",
                },
                {
                  label: "MCQs",
                  slug: "data-structure-algorithms/doublepointers/mcqs",
                },
              ],
            },
            {
              label: "Recursion",
              items: [
                {
                  label: "Introduction",
                  slug: "data-structure-algorithms/recursion/introduction",
                },
                {
                  label: "Day-1 Questions",
                  items: [
                    {
                      label: "Factorial",
                      slug: "data-structure-algorithms/recursion/day1-questions/factorial",
                    },
                  ]
                },
              ],
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
        {
          label: "Nest Js",
          autogenerate: { directory: "nestjs" },
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
