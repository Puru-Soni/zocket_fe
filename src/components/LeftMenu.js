import React from "react";
import { StyledLeftMenu } from "./LeftMenu.styled";

import zocket from "../icons/zocket.png";
import house from "../icons/house.png";
import volume from "../icons/volume.png";
import bag from "../icons/bag.png";
import profile from "../icons/user.png";

const LeftMenu = () => (
	<StyledLeftMenu>
		<div className="sidebar">
			<div className="logo">
				<img src={zocket} alt="zocket-icon" width={45} height={45} />
			</div>

			<div className="nav-item">
				<img src={house} alt="home-icon" />
				<p>Home</p>
			</div>

			<div className="nav-item active">
				<img src={volume} alt="volume-icon" />
				<p>Campaign</p>
			</div>

			<div className="nav-item">
				<img src={bag} alt="bag-icon" />
				<p>Prodcuts</p>
			</div>

			<div className="nav-item">
				<img src={profile} alt="" />
				<p>Customers</p>
			</div>
		</div>
	</StyledLeftMenu>
);

export default LeftMenu;
