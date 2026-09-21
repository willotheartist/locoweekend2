import type { Metadata } from "next";
import Link from "next/link";
import { getAllArticles, getArticleHref } from "@/lib/articles";
import routes from "@/lib/watch-routes.json";
import styles from "@/components/watch/Watch.module.css";
const title = "Movies & Series: What to Watch & LocoWeekend Ratings";
const description = "Find something worth watching. Netflix guides, film and television stories, and LocoWeekend ratings that explain what earns the score.";
export const metadata: Metadata = { title, description, alternates:{canonical:"/movies-series"}, openGraph:{title,description,url:"https://locoweekend.com/movies-series",type:"website"} };
export default function MoviesSeries() {
 const articles=getAllArticles().filter(a=>a.slug in routes);
 const url="https://locoweekend.com/movies-series";
 const schema={"@context":"https://schema.org","@type":"CollectionPage",name:title,url,description,mainEntity:{"@type":"ItemList",itemListElement:articles.map((a,i)=>({"@type":"ListItem",position:i+1,name:a.title,url:`https://locoweekend.com${getArticleHref(a)}`}))}};
 return <div className="page-shell section-page">
 <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,"\\u003c")}}/>
 <header className="collection-header"><nav className="eyebrow" aria-label="Breadcrumb"><Link href="/">Home</Link> / <span aria-current="page">Movies &amp; Series</span></nav><h1>Movies &amp; Series</h1><p className="deck">Less scrolling. Better watching.</p></header>
 <p className={styles.intro}>Your evening is worth more than another half-hour of trailers. Find a series to get absorbed in, understand what makes a film work, and choose with a little more confidence. Our recommendations come with a score, the argument behind it and a reason you might disagree.</p>
 <div className={styles.directory}><section className={styles.feature}><p className="eyebrow">The streaming shelf / UK edition</p><h2>Find your next Netflix watch.</h2><p>A puzzle to untangle, a limited series to finish, or an anthology to dip into. Explore our Netflix recommendations by the kind of evening you want.</p><Link href="/movies-series/netflix">Explore the Netflix hub ↗</Link></section>
 <section className={styles.panel}><p className="eyebrow">Our judgement, explained</p><h2>A number needs a reason.</h2><p>A 5/5 is an exceptional recommendation, not a claim of perfection. A 4/5 still has something to argue about. Every rating tells you why it earned its score, where it falls short and who it suits.</p><Link href="/movies-series/how-we-rate">The LocoWeekend rating scale ↗</Link></section></div>
 <h2 className="text-3xl">From the screen desk</h2><div className={styles.cards}>{articles.map(a=><article className={styles.card} key={a.slug}><p className="eyebrow">{a.slug==="best-netflix-series"?"The shortlist / LocoWeekend rated":"Film & television / Explained"}</p><h3><Link href={getArticleHref(a)}>{a.title}</Link></h3><p>{a.excerpt}</p><Link className="read-link" href={getArticleHref(a)}>Read the story ↗</Link></article>)}</div>
 </div>;
}
