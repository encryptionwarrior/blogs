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
              label: "Pointers",
              items: [
                {
                  label: "Introduction",
                  slug: "data-structure-algorithms/pointers/introduction",
                },
                {
                  label: "Pointer Arrays",
                  slug: "data-structure-algorithms/pointers/pointerarrays",
                },
                {
                  label: "Pointer Strings",
                  slug: "data-structure-algorithms/pointers/pointerstrings",
                },
                {
                  label: "Pointer Functions",
                  slug: "data-structure-algorithms/pointers/pointerfunction",
                },
              ],
            },
            {
              label: "Maths",
              items: [
                {
                  label: "PSieve of Eratosthenes",
                  slug: "data-structure-algorithms/maths/sieve-of-eratosthenes",
                },
                {
                  label: "Fast Exponentiation",
                  slug: "data-structure-algorithms/maths/fast-exponentiation",
                },
                {
                  label: "Greatest Common Divisor",
                  slug: "data-structure-algorithms/maths/greatest-common-divisor",
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
                  label: "MCQ's",
                  slug: "data-structure-algorithms/doublepointers/mcqs",
                },
              ]
            },
            {
              label: "Memory Allocations",
              slug: "data-structure-algorithms/memory-allocations",
            },
            {
              label: "Macros, Arguments",
              slug: "data-structure-algorithms/macros",
            },
            {
              label: "Recursion",
              items: [
                {
                  label: "Introduction",
                  slug: "data-structure-algorithms/recursion/introduction",
                },
                {
                  label: "Day1 Questions",
                  items: [
                    {
                      label: "Factorial",
                      slug: "data-structure-algorithms/recursion/day1-questions/factorial",
                    },
                    {
                      label: "Power",
                      slug: "data-structure-algorithms/recursion/day1-questions/power",
                    },
                  ]
                },
                {
                  label: "Day2 Questions",
                  items: [
                    {
                      label: "Climb Stairs",
                      slug: "data-structure-algorithms/recursion/day2-questions/climbstairs",
                    },
                    {
                      label: "Fibonacci",
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
                  label: "Day3 Questions",
                  items: [
                    {
                      label: "Binary Search",
                      slug: "data-structure-algorithms/recursion/day3-questions/binarysearch",
                    },
                    {
                      label: "Is Sorted",
                      slug: "data-structure-algorithms/recursion/day3-questions/issorted",
                    },
                    {
                      label: "Linear Search",
                      slug: "data-structure-algorithms/recursion/day3-questions/linearsearch",
                    },
                    {
                      label: "Sum",
                      slug: "data-structure-algorithms/recursion/day3-questions/sum",
                    },
                  ]
                },
                {
                  label: "Day4 Questions",
                  items: [
                    {
                      label: "Bubble Sort",
                      slug: "data-structure-algorithms/recursion/day4-questions/bubblesort",
                    },
                    {
                      label: "Insertion Sort",
                      slug: "data-structure-algorithms/recursion/day4-questions/insertionsort",
                    },
                    {
                      label: "Selection Sort",
                      slug: "data-structure-algorithms/recursion/day4-questions/selectionsort",
                    },
                    {
                      label: "Exponent",
                      slug: "data-structure-algorithms/recursion/day4-questions/exponent",
                    },
                    {
                      label: "Check Palindrome",
                      slug: "data-structure-algorithms/recursion/day4-questions/palindromecheck",
                    },
                    {
                      label: "Reverse String",
                      slug: "data-structure-algorithms/recursion/day4-questions/reversestring",
                    },
                  ]
                },
                {
                  label: "Day5 Questions",
                  items: [
                    {
                      label: "Inversion Count",
                      slug: "data-structure-algorithms/recursion/day5-questions/inversioncount",
                    },
                    {
                      label: "Merge Sort",
                      slug: "data-structure-algorithms/recursion/day5-questions/mergesort",
                    }
                  ]
                },
                {
                  label: "Day6 Questions",
                  items: [
                    {
                      label: "Quick Sort",
                      slug: "data-structure-algorithms/recursion/day6-questions/quicksort",
                    },
                  ]
                },
                {
                  label: "Day7 Questions",
                  items: [
                    {
                      label: "Subsequences",
                      slug: "data-structure-algorithms/recursion/day7-questions/subsequences",
                    },
                    {
                      label: "Subsets",
                      slug: "data-structure-algorithms/recursion/day7-questions/subsets",
                    },
                  ]
                },
                {
                  label: "Day8 Questions",
                  items: [
                    {
                      label: "Keypad",
                      slug: "data-structure-algorithms/recursion/day8-questions/keypad",
                    },
                  ]
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
          label: "Useful Codes",
          autogenerate: { directory: "usefulcodes" },
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
