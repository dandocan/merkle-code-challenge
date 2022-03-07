import '../styles/globals.scss'
import { AppProps } from 'next/app'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
	const [dark, setDark] = useState(false)
	useEffect(() => {
		setDark(localStorage.getItem( 'DarkMode' )==='true')
	}, [])
	return <Component {...pageProps} dark={dark} setDark={setDark}/>
	
}