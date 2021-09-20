import React from 'react';
import styles from './layout.module.scss';
import { useLocation, NavLink } from 'react-router-dom';

export const pagesNames = ['Industries', 'Services', 'About Us']

export function getLink(page: string){
	return `/${page.split(' ')[0].toLowerCase()}`
}

export function getPage(pathname: string){
	if (pathname.includes('/industries'))
		return 0
	if (pathname.includes('/services'))
		return 1
	if (pathname.includes('/about'))
		return 2
	return -1
}

interface LayoutUIProps {
	showNav: boolean,
}

export const LayoutUI: React.FC<LayoutUIProps> = ({showNav}) => {
	const PAGE = getPage(useLocation().pathname)

	function linkStyle(idx: number){
		return PAGE === idx ? {color: '#ffc001'} : {}	
	}



	return (
		<section style={!showNav ? {top: '-145px'} : {top: '0px'}} className={styles.wrapper}>
			<div className={styles.layout}>
				<div className={styles.leftWrapper}>
					<nav className={styles.left}>
						<img src={'/abc_logo.svg'} alt="abc_logo" />
						<ul className={styles.menu}>
							{ pagesNames.map((page, idx, _) => (
								<li key={page} style={linkStyle(idx)}>
									<NavLink style={{textDecoration: 'none'}} to={getLink(page)}>{page}</NavLink>
								</li>
							))}
						</ul>
					</nav>
				</div>
				<div className={styles.rightWrapper}>
					<div className={styles.contact}>
						Contact Us
					</div>
				</div>
			</div>
		</section>
	)
}

export default LayoutUI;