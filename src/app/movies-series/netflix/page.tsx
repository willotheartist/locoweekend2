import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/components/watch/Watch.module.css";
import { getArticleHref, getWatchHubArticles } from "@/lib/articles";
const title="Netflix: What to Watch, Series Guides & Ratings";
const description="Explore LocoWeekend’s Netflix guides: considered recommendations, scores out of five, honest caveats and links to UK title listings.";
export const metadata:Metadata={title,description,alternates:{canonical:"/movies-series/netflix"},openGraph:{title,description,url:"https://locoweekend.com/movies-series/netflix",type:"website"}};
export default function NetflixHub(){
 const url="https://locoweekend.com/movies-series/netflix";
 // Guides register themselves via watch-routes.json; the lead guide keeps its hand-written feature above.
 const FEATURED="best-netflix-series";
 const all=getWatchHubArticles("netflix");
 const guides=all.filter(a=>a.slug!==FEATURED);
 const ordered=[...all.filter(a=>a.slug===FEATURED),...guides];
 const schema=[{"@context":"https://schema.org","@type":"CollectionPage",name:title,description,url,isPartOf:{"@type":"CollectionPage","@id":"https://locoweekend.com/movies-series"},mainEntity:{"@type":"ItemList",itemListElement:ordered.map((a,i)=>({"@type":"ListItem",position:i+1,name:a.shortTitle||a.title,url:`https://locoweekend.com${getArticleHref(a)}`}))}},{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{name:"Home",item:"https://locoweekend.com/"},{name:"Movies & Series",item:"https://locoweekend.com/movies-series"},{name:"Netflix",item:url}].map((x,i)=>({"@type":"ListItem",position:i+1,...x}))}];
 return <div className="page-shell section-page"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,"\\u003c")}}/><header className="collection-header"><nav className="eyebrow" aria-label="Breadcrumb"><Link href="/">Home</Link> / <Link href="/movies-series">Movies &amp; Series</Link> / <span aria-current="page">Netflix</span></nav><h1>Netflix</h1><p className="deck">An enormous catalogue. A more considered shortlist.</p></header>
 <p className={styles.intro}>Popularity tells you what other people pressed play on. It doesn’t tell you whether a show deserves your weekend. Our Netflix guides explain the appeal, the commitment and the compromises, with a LocoWeekend rating beside each pick.</p>
 <div className={styles.directory}><section className={styles.feature}><p className="eyebrow">Start here / Five rated picks</p><h2>Best Netflix series worth your time.</h2><p>From Dark’s elaborate mystery to The Queen’s Gambit and the compact experiments of Love, Death &amp; Robots. Pick for your mood, with a clear explanation of each score.</p><Link href="/movies-series/netflix/best-series">Read the rated guide ↗</Link></section><section className={styles.panel}><h2>Choose your commitment</h2><p><Link href="/movies-series/netflix/best-series#the-queens-gambit">A limited series: The Queen’s Gambit</Link></p><p><Link href="/movies-series/netflix/best-series#dark">A demanding mystery: Dark</Link></p><p><Link href="/movies-series/netflix/best-series#love-death-robots">Something short: Love, Death &amp; Robots</Link></p><Link href="/movies-series/how-we-rate">How our ratings work ↗</Link></section></div>
 {guides.map(a=><section className={styles.panel} key={a.slug}><p className="eyebrow">{a.hubEyebrow||"Guide / LocoWeekend rated"}</p><h2><Link href={getArticleHref(a)}>{a.title}</Link></h2><p>{a.hubBlurb||a.excerpt}</p><p><Link href={getArticleHref(a)}>{a.hubCta||"Read the rated guide"} ↗</Link></p></section>)}
 <section className={styles.panel}><h2>A note on where you watch</h2><p>These guides use Netflix’s UK title listings, with the check date shown in each article. Catalogues and plan restrictions can change; follow the title link and confirm playback in your own account. A rating describes our editorial recommendation, not availability or a Netflix user score.</p><p>For the bigger picture, read <Link href="/movies-series/the-netflix-effect">The Netflix Effect</Link>, or return to <Link href="/movies-series">Movies &amp; Series</Link>.</p></section></div>;
}
