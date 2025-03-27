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
          // autogenerate: { directory: "IT Support" },
          items: [
            {
              label: "Foundations",
              items: [
                {
                  label: "Lac 01: Welcome to IT Support",
                  slug: "it-support/foundations/lacture01",
                },
                {
                  label: "Lac 02: Intro to IT",
                  slug: "it-support/foundations/lacture02",
                },
                {
                  label: "Lac 03: Intro to Hardware",
                  slug: "it-support/foundations/lacture03",
                },
              ]

            },
            {
              label: "Lacture 01",
              slug: "it-support/lacture01"

            },
          ]
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
                    {
                      label: "Power of Num",
                      slug: "data-structure-algorithms/recursion/day1-questions/power",
                    },
                  ]
                },
                {
                  label: "Day-2 Questions",
                  items: [
                    {
                      label: "Climb Stairs",
                      slug: "data-structure-algorithms/recursion/day2-questions/climbstairs",
                    },
                    {
                      label: "Fibinacci Series",
                      slug: "data-structure-algorithms/recursion/day2-questions/fibonacci",
                    },
                    {
                      label: "Say Digits",
                      slug: "data-structure-algorithms/recursion/day2-questions/saydigits",
                    },
                    {
                      label: "Walking Examples",
                      slug: "data-structure-algorithms/recursion/day2-questions/walkingexample",
                    },
                  ]
                },
                {
                  label: "Day-3 Questions",
                  items: [
                    {
                      label: "Is Sorted",
                      slug: "data-structure-algorithms/recursion/day3-questions/issorted",
                    },
                    {
                      label: "Sum Of Array Elements",
                      slug: "data-structure-algorithms/recursion/day3-questions/sum",
                    },
                    {
                      label: "Linear Serach",
                      slug: "data-structure-algorithms/recursion/day3-questions/linearsearch",
                    },
                    {
                      label: "Binary Search",
                      slug: "data-structure-algorithms/recursion/day3-questions/binarysearch",
                    },
                  ]
                },
                {
                  label: "Day-4 Questions",
                  items: [
                    {
                      label: "Reverse String",
                      slug: "data-structure-algorithms/recursion/day4-questions/reversestring",
                    },
                    {
                      label: "Check Palindrome",
                      slug: "data-structure-algorithms/recursion/day4-questions/palindromecheck",
                    },
                    {
                      label: "Exponent",
                      slug: "data-structure-algorithms/recursion/day4-questions/exponent",
                    },
                    {
                      label: "Bubble Sort",
                      slug: "data-structure-algorithms/recursion/day4-questions/bubblesort",
                    },
                    {
                      label: "Selection Sort",
                      slug: "data-structure-algorithms/recursion/day4-questions/selectionsort",
                    },
                    {
                      label: "Insertion Sort",
                      slug: "data-structure-algorithms/recursion/day4-questions/insertionsort",
                    },
                  ]
                },
                {
                  label: "Day-5 Questions",
                  items: [
                    {
                      label: "Inversion Count",
                      slug: "data-structure-algorithms/recursion/day5-questions/inversioncount",
                    },
                    {
                      label: "Merge Sort",
                      slug: "data-structure-algorithms/recursion/day5-questions/mergesort",
                    },
                  ]
                },
                {
                  label: "Day-6 Questions",
                  items: [
                    {
                      label: "Quick Sort",
                      slug: "data-structure-algorithms/recursion/day6-questions/quicksort",
                    },
                  ]
                },
                {
                  label: "Day-7 Questions",
                  items: [
                    {
                      label: "Sub Sequences",
                      slug: "data-structure-algorithms/recursion/day7-questions/subsequences",
                    },
                    {
                      label: "Sub Sets",
                      slug: "data-structure-algorithms/recursion/day7-questions/subsets",
                    },
                  ]
                },
                {
                  label: "Day-8 Questions",
                  items: [
                    {
                      label: "Keypad",
                      slug: "data-structure-algorithms/recursion/day8-questions/keypad",
                    },
                  ]
                },
                {
                  label: "Day-9 Questions",
                  items: [
                    {
                      label: "Permutation of String",
                      slug: "data-structure-algorithms/recursion/day9-questions/permutation_of_string",
                    },
                  ]
                },
                {
                  label: "Day-10 Questions",
                  items: [
                    {
                      label: "Rat In Maze",
                      slug: "data-structure-algorithms/recursion/day10-questions/rat_in_maze",
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
