import Link from "next/link";
import { Star } from "lucide-react";
import styles from "./Watch.module.css";

type Props = { score: 1 | 2 | 3 | 4 | 5; why: string; caveat: string; bestFor: string; scope: string };
const labels = { 1: "Skip", 2: "For committed fans", 3: "Worth a look", 4: "Strong recommendation", 5: "Exceptional" };
export function LocoRating({ score, why, caveat, bestFor, scope }: Props) {
  return <aside className={styles.rating} aria-label={`LocoWeekend rating: ${score} out of 5. ${scope}`}>
    <div className={styles.ratingTop}>
      <div><p className="eyebrow">LocoWeekend rating</p><strong>{labels[score]}</strong></div>
      <div><span className={styles.score}>{score}<span style={{fontSize:22}}> / 5</span></span>
        <div className={styles.stars} aria-hidden="true">{[1,2,3,4,5].map(n => <Star key={n} size={17} fill={n <= score ? "currentColor" : "none"} strokeWidth={1.5} />)}</div>
      </div>
    </div>
    <dl><dt>What we’re rating</dt><dd>{scope}</dd><dt>Why we rate it</dt><dd>{why}</dd><dt>The caveat</dt><dd>{caveat}</dd><dt>Best for</dt><dd>{bestFor}</dd></dl>
    <small>Editorial judgement, not an audience average. <Link href="/movies-series/how-we-rate">How we rate →</Link></small>
  </aside>;
}
