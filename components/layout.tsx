import Head from 'next/head'
import styles from '../styles/layout.module.scss'

const name = 'Hacker Stories'
export const siteTitle = 'Hacker Stories: A Coding Challenge'

//Layout component to be reused on other (future) pages.
//Props: children - any content that is put inside Layout by a page; dark mode toggle and its update function
export default function Layout({
	children, dark, setDark
}: {
	children: React.ReactNode,
	dark: boolean,
	setDark: Function
}) {
	
	return (
		<div className={`
			${(dark)?styles["dark-mode"]:styles.container}
		`}>
			<Head>
				<link rel="icon" href="/icon.png" />
				<meta
				name="description"
				content="A demonstration app meant for recruiters."
				/>
				<meta name="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
				<title>{siteTitle}</title>
			</Head>
			<header className={styles.header}>
				<div></div>
				<h1 className={styles["heading-title"]}>{name}</h1>
				<div className={`${styles["theme-switch-wrapper"]}`}>
					<label className={`${styles["theme-switch"]}`} htmlFor="checkbox">
						<input 
							type="checkbox" 
							id="checkbox" 
							onChange={()=>{
								setDark(!dark)
								localStorage.setItem( 'DarkMode', (!dark).toString() )
							}}
							checked={dark}
						/>
						<div className={`${styles["slider"]} ${styles["round"]}`}></div>
					</label>
				</div>
			</header>
			<main>{children}</main>
			<footer className={styles.footer}>
				Created with ReactJS and NextJS by Dan.
			</footer>
		</div>
  	)
}