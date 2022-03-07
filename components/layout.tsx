import Head from 'next/head'
import styles from '../styles/layout.module.scss'

const name = 'Hacker Stories'
export const siteTitle = 'Hacker Stories: A Coding Challenge'

export default function Layout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<div className={styles.container}>
			<Head>
				<link rel="icon" href="/icon.png" />
				<meta
				name="description"
				content="A demonstration app meant for recruiters."
				/>
				<meta name="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<header className={styles.header}>
				<h1 className={styles["heading-title"]}>{name}</h1>
			</header>
			<main>{children}</main>
			<footer className={styles.footer}>
				Created with ReactJS and NextJS by Dan.
			</footer>
		</div>
  	)
}