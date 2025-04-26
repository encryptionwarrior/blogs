import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Shadow Cipher",
      social: {
        github: "https://github.com/encryptionwarrior",
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
          label: "English Speaking",
          items: [
            {
              label: "How to speak Alone?",
              slug: "english-speaking/how-to-speak",
            }
          ]
        },
        {
          label: "Soft Skills",
          slug: "soft-skills/overview"
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
                {
                  label: "Lac 03: Building PC",
                  slug: "it-support/foundations/lacture04",
                },
                {
                  label: "Lac 03: Mobile Devices",
                  slug: "it-support/foundations/lacture05",
                },
                {
                  label: "Lac 06: Operating Systems",
                  slug: "it-support/foundations/lacture06",
                },
                {
                  label: "Lac 08: Networking",
                  slug: "it-support/foundations/lacture08",
                },
                {
                  label: "Lac 09: Software",
                  slug: "it-support/foundations/lacture09",
                },
                {
                  label: "Lac 10: Troubleshooting",
                  slug: "it-support/foundations/lacture10",
                },
                {
                  label: "Lac 11: Soft Skills",
                  slug: "it-support/foundations/lacture11",
                },
              ],
            },
            {
              label: "Operating Systems",
              items: [
                {
                  label: "Lac 01: Files & Directories",
                  slug: "it-support/operating-system/lacture01",
                },
                {
                  label: "Lac 02: Using Command Lines",
                  slug: "it-support/operating-system/lacture02",
                },
                {
                  label: "Lac 03: Using Command Lines",
                  slug: "it-support/operating-system/lacture03",
                },
                {
                  label: "Lac 04: Package and Software management",
                  slug: "it-support/operating-system/lacture04",
                },
                {
                  label: "Lac 05: Filesystems",
                  slug: "it-support/operating-system/lacture05",
                },
                {
                  label: "Lac 06: Process Management",
                  slug: "it-support/operating-system/lacture06",
                },
                {
                  label: "Lac 07: Remote System in Practice",
                  slug: "it-support/operating-system/lacture07",
                },
              ],
            },
            {
              label: "Computer Networking",
             items: [
               {
                 label: "Lac 01: Introduction to Networking",
                 slug: "it-support/networking/lacture01",
                },
                {
                  label: "Lac 02: The Network Layer",
                  slug: "it-support/networking/lacture02",
                },
                {
                  label: "Lac 03: Transport and Application Layers",
                  slug: "it-support/networking/lacture03",
                },
                {
                  label: "Lac 04:  Networking Services",
                  slug: "it-support/networking/lacture04",
                },
                {
                  label: "Lac 05:  Networking Services - Best practice and Technologies",
                  slug: "it-support/networking/lacture05",
                },
                {
                  label: "Lac 06: Connecting to the Internet",
                  slug: "it-support/networking/lacture06",
                },
                {
                  label: "Lac 07: Troubleshooting and the Future of Networking",
                  slug: "it-support/networking/lacture07",
                },
             ]

            },
            {
              label: "System Administration and IT Infrastruture Services",
             items: [
               {
                 label: "Lac 01: Network and IT Infrastructure Services",
                 slug: "it-support/system-administration/lacture01",
                },
               {
                 label: "Lac 02: Software and Platform Service",
                 slug: "it-support/system-administration/lacture02",
                },
               {
                 label: "Lac 03: What is system Administration?",
                 slug: "it-support/system-administration/lacture03",
                },
               {
                 label: "Lac 04: Data Recovery & Backups",
                 slug: "it-support/system-administration/lacture04",
                },
               {
                 label: "Lac 05: Directory Services",
                 slug: "it-support/system-administration/lacture05",
                },
             ]

            },
            {
              label: "IT Security",
             items: [
               {
                 label: "Lac 01: Understanding Security Threads",
                 slug: "it-support/it-security/lacture01",
                },
               {
                 label: "Lac 02: Pelcgbytbtl(Cryptography)",
                 slug: "it-support/it-security/lacture02",
                },
               {
                 label: "Lac 03: AAA Security",
                 slug: "it-support/it-security/lacture03",
                },
               {
                 label: "Lac 04: Company Culture for Security",
                 slug: "it-support/it-security/lacture04",
                },
               {
                 label: "Lac 05: Defence in Depth",
                 slug: "it-support/it-security/lacture05",
                },
               {
                 label: "Lac 06: Pelcgbybtl(Cryptology)",
                 slug: "it-support/it-security/lacture06",
                },
               {
                 label: "Lac 07: Securing Your Networks",
                 slug: "it-support/it-security/lacture07",
                },
             ]

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
          label: "Frameworks",
          autogenerate: { directory: "frameworks" },
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
            {
              label: "Space-Time Complexity: Recusrive Algorithms",
              slug: "data-structure-algorithms/space-time-complexity/recursive_algo",
            },
            {
              label: "OOPS concept",
             items: [
             {
              label: "Introduction Of OOPS",
              slug: "data-structure-algorithms/oops-concept/lacture01"
             },
             {
              label: "Pillars of OOPS Concept",
              slug: "data-structure-algorithms/oops-concept/lacture02"
             },
             ]
            },
            {
              label: "Linked List",
             items: [
             {
              label: "Day 01",
              items: [
                {
                  label: "Introduction",
                  slug: "data-structure-algorithms/linked-list/day01/lacture01"
                },
                {
                  label: "Singly Linked List",
                  slug: "data-structure-algorithms/linked-list/day01/lacture02"
                },
                {
                  label: "Doubly Linked List",
                  slug: "data-structure-algorithms/linked-list/day01/lacture03"
                },
                {
                  label: "Circular Linked List",
                  slug: "data-structure-algorithms/linked-list/day01/lacture04"
                },
              ],
             },
             {
              label: "Day 02",
              items: [
                {
                  label: "Reversed Linked List",
                  slug: "data-structure-algorithms/linked-list/day02/lacture01"
                },
                {
                  label: "Reversed DLL",
                  slug: "data-structure-algorithms/linked-list/day02/lacture02"
                },
                {
                  label: "Middle Of Linked List",
                  slug: "data-structure-algorithms/linked-list/day02/lacture03"
                },
              ],
             },
             {
              label: "Day 03",
              items: [
                {
                  label: "Reversed LL In K Groups",
                  slug: "data-structure-algorithms/linked-list/day03/lacture01"
                },
                {
                  label: "Check Circular List",
                  slug: "data-structure-algorithms/linked-list/day03/lacture02"
                },
              ],
             },
             {
              label: "Day 04",
              items: [
                {
                  label: "Detect Loop",
                  slug: "data-structure-algorithms/linked-list/day04/lacture01"
                },
                {
                  label: "Flyod Cycle Detection",
                  slug: "data-structure-algorithms/linked-list/day04/lacture02"
                },
                {
                  label: "Beginning Of The Loop",
                  slug: "data-structure-algorithms/linked-list/day04/lacture03"
                },
                {
                  label: "Remove Loop",
                  slug: "data-structure-algorithms/linked-list/day04/lacture04"
                },
              ],
             },
             {
              label: "Day 05",
              items: [
                {
                  label: "Remove Duplicates In Sorted",
                  slug: "data-structure-algorithms/linked-list/day05/lacture01"
                },
                {
                  label: "Remove Duplicates In UnSorted",
                  slug: "data-structure-algorithms/linked-list/day05/lacture02"
                },
                {
                  label: "Split Circular",
                  slug: "data-structure-algorithms/linked-list/day05/lacture03"
                },
              ],
             },
             {
              label: "Day 06",
              items: [
                {
                  label: "Sort In LL",
                  slug: "data-structure-algorithms/linked-list/day06/lacture01"
                },
              ],
             },
             {
              label: "Check Palindrome",
              slug: "data-structure-algorithms/linked-list/day07"
             },
             {
              label: "Add 2 Numbers Represented",
              slug: "data-structure-algorithms/linked-list/day08"
             },
             {
              label: "Clone a Linked List",
              slug: "data-structure-algorithms/linked-list/day09"
             },
             {
              label: "Merge Sort and Flatted A Linked List",
              slug: "data-structure-algorithms/linked-list/day10"
             },
             ]
            },
            {
              label: "Stack",
              items: [
                {
                  label: "Day 01",
                  items: [
                    {
                      label: "STL Implementation",
                      slug: "data-structure-algorithms/stack/day01/lacture01"
                    },
                    {
                      label: "Array Implementation",
                      slug: "data-structure-algorithms/stack/day01/lacture02"
                    },
                    {
                      label: "Linked List Implementation",
                      slug: "data-structure-algorithms/stack/day01/lacture03"
                    },
                    {
                      label: "Two Stack In An Array",
                      slug: "data-structure-algorithms/stack/day01/lacture04"
                    },
                  ]
                },
                {
                  label: "Day 02",
                  items: [
                    {
                      label: "Reverse String",
                      slug: "data-structure-algorithms/stack/day02/lacture02"
                    },
                    {
                      label: "Delete Middle Of Stack",
                      slug: "data-structure-algorithms/stack/day02/lacture02"
                    },
                    {
                      label: "Valid Parenthesis",
                      slug: "data-structure-algorithms/stack/day02/lacture03"
                    },
                    {
                      label: "Insert An Element At Bottom",
                      slug: "data-structure-algorithms/stack/day02/lacture04"
                    },
                    {
                      label: "Reverse Stack using Recursion",
                      slug: "data-structure-algorithms/stack/day02/lacture05"
                    },
                    {
                      label: "Reverse Stack using Recursion",
                      slug: "data-structure-algorithms/stack/day02/lacture05"
                    },
                    {
                      label: "Sort Stack",
                      slug: "data-structure-algorithms/stack/day02/lacture06"
                    },
                    {
                      label: "Reduntant Brackets",
                      slug: "data-structure-algorithms/stack/day02/lacture07"
                    },
                    {
                      label: "Minimum Cost to make string valid",
                      slug: "data-structure-algorithms/stack/day02/lacture08"
                    },
                  ]
                },
                {
                  label: "day 03",
                  items: [
                    {
                      label: "Next Smaller Element",
                      slug: "data-structure-algorithms/stack/day03/lacture01"
                    },
                    {
                      label: "Previous Smaller Element",
                      slug: "data-structure-algorithms/stack/day03/lacture02"
                    },
                    {
                      label: "Largest Reactange In Histogram ",
                      slug: "data-structure-algorithms/stack/day03/lacture03"
                    },
                  ]
                },
                {
                  label: "Celebrity Problem and Max Reactangle Matrix",
                  slug: "data-structure-algorithms/stack/day04"
                },
                {
                  label: "N Stack in An Array",
                  slug: "data-structure-algorithms/stack/day05"
                },
                {
                  label: "Get Min In 0(1) TC",
                  slug: "data-structure-algorithms/stack/day06"
                },
              ]
            },
            {
              label: "Queue",
              items: [
                {
                  label: "Day 01",
                  items: [
                    {
                      label: "Queue STL Implementation",
                      slug: "data-structure-algorithms/queue/day01/lacture01"
                    },
                    {
                      label: "Queue Array Implementation",
                      slug: "data-structure-algorithms/queue/day01/lacture02"
                    },
                    {
                      label: "Queue Linked List Implementation",
                      slug: "data-structure-algorithms/queue/day01/lacture03"
                    },
                    {
                      label: "Circular Queue",
                      slug: "data-structure-algorithms/queue/day01/lacture04"
                    },
                    {
                      label: "Input Restricted Queue",
                      slug: "data-structure-algorithms/queue/day01/lacture05"
                    },
                    {
                      label: "Output Restricted Queue",
                      slug: "data-structure-algorithms/queue/day01/lacture06"
                    },
                    {
                      label: "Doubly Ended Queue STL",
                      slug: "data-structure-algorithms/queue/day01/lacture07"
                    },
                    {
                      label: "Doubly Ended Queue Implementation",
                      slug: "data-structure-algorithms/queue/day01/lacture08"
                    },
                  ]
                }
              ]
            }
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
          label: "Languages",
          items: [
            {
              label: "Javascript",
              items: [
                {
                  label: "Basics",
                  slug: "languages/javascript/basics01"
                },
                {
                  label: "Basics 02",
                  slug: "languages/javascript/basics02"
                },
                {
                  label: "Basics 03",
                  slug: "languages/javascript/basics03"
                },
                {
                  label: "Advanced One",
                  slug: "languages/javascript/advanced-one"
                },
                {
                  label: "Classes and OOPs",
                  slug: "languages/javascript/classes-oops"
                },
                {
                  label: "Control Flow",
                  slug: "languages/javascript/control-flow"
                },
                {
                  label: "DOMs",
                  slug: "languages/javascript/dom"
                },
                {
                  label: "Events",
                  slug: "languages/javascript/events"
                },
                {
                  label: "Iterations",
                  slug: "languages/javascript/iterations"
                },
                {
                  label: "Closures",
                  slug: "languages/javascript/closures"
                },
              ]
            },
            {
              label: "Typescript",
              items: [
                {
                  label: "Basics",
                  slug: "languages/typescript/basics"
                },
                {
                  label: "Advanced",
                  slug: "languages/typescript/advanced"
                },
              ]
            },
            {
              label: "C",
              items: [
                {
                  label: "Lacture 01",
                  slug: "languages/c/lacture01"
                },
                {
                  label: "Lacture 02",
                  slug: "languages/c/lacture02"
                },
                {
                  label: "Lacture 03",
                  slug: "languages/c/lacture03"
                },
                {
                  label: "Lacture 04",
                  slug: "languages/c/lacture04"
                },
                {
                  label: "Lacture 05",
                  slug: "languages/c/lacture05"
                },
                {
                  label: "Lacture 06",
                  slug: "languages/c/lacture06"
                },
                {
                  label: "Lacture 07",
                  slug: "languages/c/lacture07"
                },
                {
                  label: "Lacture 08",
                  slug: "languages/c/lacture08"
                },
                {
                  label: "Lacture 09",
                  slug: "languages/c/lacture09"
                },
                {
                  label: "Lacture 10",
                  slug: "languages/c/lacture10"
                },
                {
                  label: "Lacture 11",
                  slug: "languages/c/lacture11"
                },
              ]
            },
            {
              label: "Python",
              items: [
                {
                  label: "Basics",
                  slug: "languages/python/basic"
                },
                {
                  label: "Conditionals",
                  slug: "languages/python/conditional"
                },
                {
                  label: "Loops",
                  slug: "languages/python/loops"
                },
                {
                  label: "funtions",
                  slug: "languages/python/functions"
                },
                {
                  label: "Scopes",
                  slug: "languages/python/scope"
                },
                {
                  label: "OOPs",
                  slug: "languages/python/oop"
                },
                {
                  label: "Decorators",
                  slug: "languages/python/decorators"
                },
                {
                  label: "Error Handling",
                  slug: "languages/python/error-handler"
                },
                {
                  label: "DB Sqlite",
                  slug: "languages/python/database-sqlite"
                },
                {
                  label: "Handling Apis",
                  slug: "languages/python/handling-apis"
                },
                {
                  label: "Pyhton MongoDB",
                  slug: "languages/python/python-mongodb"
                },
                {
                  label: "Vurtual PY",
                  slug: "languages/python/virtual"
                },
                {
                  label: "Jupiter Notes",
                  slug: "languages/python/jupiter_notes"
                },
              ]
            }
          ]
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
