# Rated watch guides: the template

Reference implementation: `src/content/articles/watch/best-horror-movies-on-netflix.mdx`.

## Start one

```bash
pnpm new:watch best-thrillers-on-netflix netflix/best-thrillers "Best Thrillers on Netflix, Ranked by How Little You'll Sleep"
```

That creates the MDX from `templates/watch-ranked-guide.mdx`, registers the URL in
`src/lib/watch-routes.json`, and marks it `draft: true`. Drafts render in `pnpm dev` and are
excluded from production builds, the sitemap and the hubs, so a half-written guide can be
pushed without going live.

Publish: fill the TODOs, `pnpm check:watch`, delete `draft: true`, push. The Netflix hub,
its ItemList schema, the sitemap and the `/articles/<slug>` redirect pick it up on their own.
Nothing else needs editing.

## The shape (don't reorder it)

1. Reader's situation, two sentences.
2. Why the search query is the wrong question. Use the target query once.
3. **Bold answer paragraph**: best overall + two mood picks. This is the citable bit for LLMs and snippets.
4. **Check-date paragraph**: "UK Netflix pages checked <date>", playback not tested, research-led.
5. Decision table: rank on the axis, quality, axis score, runtime, one-line hook. Every row anchors to its entry.
6. Score key for the axis (1 to 5 in words) and how ties are ordered.
7. Entries, counting down. Each one: `<h2 id>`, facts line, premise + links, the case for it, `<LocoRating>`, axis score + content notes + "Skip it if / Choose it for".
8. "Which one tonight" by situation.
9. FAQ rendered from the `faq` export (`<Faq items={faq} />`).
10. Sources and method, then internal links to sibling guides, the hub and how-we-rate.

## Two scores, always

Quality (`LocoRating`, 1 to 5) is separate from the ranking axis (disturbance, commitment,
bleakness, comfort, whatever the guide is about). The countdown follows the axis, never quality.
That gap is the reason the guide exists, so say it out loud in the intro and the FAQ.

## Meta fields

| Field | Used for |
| --- | --- |
| `title` / `subtitle` | H1 and deck. Title can be long and characterful. |
| `seoTitle` | `<title>` and og:title. Keyword first, 60 chars max. |
| `seoDescription` | meta description. 160 max. |
| `shortTitle` | Breadcrumb, hub ItemList. |
| `keywords` | meta keywords + JSON-LD. Primary query, variants, each title. |
| `hubEyebrow` / `hubBlurb` / `hubCta` | The card on `/movies-series/netflix`. Falls back to the excerpt. |
| `image` | Optional. Without one, `/og/<slug>` generates the share card. |
| `draft` | `true` keeps it out of production. |

Keep `meta` flat: strings, booleans, arrays of strings. The loader reads it with a regex that
stops at the first `}`, so no nested objects.

`faq` feeds both the visible FAQ and FAQPage JSON-LD. Answers are plain text plus `[label](url)` links.
`picks` feeds ItemList JSON-LD. Same order as the page; `type` is `"Movie"` or `"TVSeries"`.

## Honesty rules

- Every fact (year, runtime, certificate, cast, director) comes from a linked source on the page. No link, no fact.
- The check date is the date someone actually opened the Netflix UK listings. Re-check and bump `updatedAt` when you revise.
- Never imply a critic sat and watched everything unless they did. The template wording covers this; leave it in.
- We do not emit Review or AggregateRating schema for these ratings. They're shortlist judgements and the markup would claim more than the copy does.
- Content notes name the major concerns. They aren't a scene-by-scene classification and shouldn't pretend to be.
