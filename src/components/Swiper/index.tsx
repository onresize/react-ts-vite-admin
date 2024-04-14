import React from "react";
import styles from "./index.module.less";

function Swiper(props: any) {
	return (
		<div className={styles.card}>
			{/* {props.children} */}
			<div className={styles.swiperBox}>
				<div className={styles.fixed}>
					<div className={styles.aniBox}>
						<img
							className={styles.slideImgItem}
							src="https://img.alicdn.com/imgextra/i3/O1CN01Qn17bH1weZAg0sEii_!!6000000006333-0-tps-520-326.jpg"
						/>
						<img
							className={styles.slideImgItem}
							src="https://img.alicdn.com/imgextra/i3/O1CN01be0f6z24JyHtOQhAm_!!6000000007371-2-tps-512-320.png"
							data-spm-anchor-id="0.0.0.i8.42e51c4e90NuAr"
						/>
						<img
							className={styles.slideImgItem}
							src="https://img.alicdn.com/imgextra/i1/O1CN018v53jZ1QdacX9NBdn_!!6000000001999-0-tps-512-320.jpg"
						/>
						<img
							className={styles.slideImgItem}
							src="https://img.alicdn.com/imgextra/i1/O1CN018Ccoek1PMoUv65sEB_!!6000000001827-0-tps-512-320.jpg"
						/>
						<img
							className={styles.slideImgItem}
							src="https://img.alicdn.com/imgextra/i3/O1CN01FqZ1Mo1htwE7VUnm6_!!6000000004336-0-tps-512-320.jpg"
						/>
						<img
							className={styles.slideImgItem}
							src="https://img.alicdn.com/imgextra/i3/O1CN01Qn17bH1weZAg0sEii_!!6000000006333-0-tps-520-326.jpg"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Swiper;
