import React, { useEffect } from 'react';
import styles from './style.module.scss';
import { page } from '../../App';
import { motion } from 'framer-motion';



interface MarqueeProps {
	pages: page[],
	PAGE: number,
	BLOCK: number,
}

const Marquee: React.FC<MarqueeProps> = ({BLOCK, PAGE, pages}) => {

	return (
		<motion.div
			initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}	
		>
			<section
				style={{backgroundImage: `url('backgrounds/${pages[PAGE].blocks[BLOCK].background}')`}}
				className={styles.container}
			>
				<div className={styles.main}>
					<div className={styles.headroom}></div>
					<div className={styles.head}>
						<div className={styles.headline}>
							{pages[PAGE].blocks[BLOCK].headline}
						</div>
						<div className={styles.subhead}>
							{pages[PAGE].blocks[BLOCK].subhead}
						</div>
					</div>
					<div className={styles.call}>
						<div className={styles.leftWrapper}>
							<h3 className={styles.text}>
								{pages[PAGE].blocks[BLOCK].cta}
							</h3>
						</div>
						<div className={styles.talk}>
							<div>LET'S TALK </div>
							<img src={'/arrow.svg'} alt="arrow" />
						</div>
					</div>
				</div>
			</section>
		</motion.div>
	)
}

export default Marquee;