import React from "react";
import WithCard from "@/components/HOC/WithCard/index";
import Swiper from "@/components/Swiper/index";

const WrapCom = WithCard(Swiper);

const HCom = () => <h1 style={{ color: "green" }}>组件</h1>;

const SwiperSelf = () => {
	return <>{WrapCom({ children: <HCom /> })}</>;
};

export default SwiperSelf;
