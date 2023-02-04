import React from "react";
import { RiVipCrownFill, RiTranslate } from "react-icons/ri";
import { TbGift } from "react-icons/tb";
import { BsBell } from "react-icons/bs";
import Cake from "../icons/cake_image.png";
import { StyledNavbar } from './Navbar.styled';

const Navbar = () => {
	return (
		<StyledNavbar>
			<div className="navbar-section">
				<p>Free trial ends in 2 days</p>
				<div className="navbar--buy-plan">
					<RiVipCrownFill />
					<p>Buy Plan</p>
				</div>
				<div className="navbar--notification-icons">
					<TbGift />
					<BsBell />
				</div>
				<div className="navbar--profile">
					<img src={Cake} alt="cake" />
					<select>
						<option  value="1">Mukund cake shop</option>
					</select>
				</div>
				<div>
					<RiTranslate />
				</div>
			</div>
		</StyledNavbar>
	);
};

export default Navbar;
