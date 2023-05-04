import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <p>Evan Amezcua ☺ software engineer</p>
      <a href='tel:07013940013'>☏ 070 1394 0013</a>
      <a href='mailto:hello@evan.am'>✉ hello@evan.am</a>
      <p>🜨 Toyko, Japan</p>
    </div>
  );
}
