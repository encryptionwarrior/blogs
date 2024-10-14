---
title: Welcome to Starlight
description: Get started building your docs site with Starlight.
template: splash
hero:
  title: |
    Welcome to Starlight with
    <span
      class="font-black text-transparent
        bg-clip-text bg-gradient-to-b
        from-yellow-700 to-yellow-400
        dark:from-yellow-800 dark:to-yellow-200"
    >
      Tailwind
    </span>
  tagline: Congrats on setting up a new Starlight project!
  image:
    file: ../../assets/houston.webp
  actions:
    - text: Example Guide
      link: /guides/example/
      icon: right-arrow
    - text: Read the Starlight docs
      link: https://starlight.astro.build
      icon: external
      variant: minimal
---

import { Card, CardGrid } from '@astrojs/starlight/components';

## Next steps

<CardGrid stagger>
	<Card title="Update content" icon="pencil">
		Edit `src/content/docs/index.mdx` to see this page change.
	</Card>
	<Card title="Add new content" icon="add-document">
		Add Markdown or MDX files to `src/content/docs` to create new pages.
	</Card>
	<Card title="Configure your site" icon="setting">
		Edit your `sidebar` and other config in `astro.config.mjs`.
	</Card>
	<Card title="Read the docs" icon="open-book">
		Learn more in [the Starlight Docs](https://starlight.astro.build/).
	</Card>
</CardGrid>