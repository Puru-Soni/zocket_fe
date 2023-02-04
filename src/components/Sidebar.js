import React from "react";
import { StyledSidebar } from "./Sidebar.styled";

import zocket from "../icons/zocket.png";
import house from "../icons/house.png";
import volume from "../icons/volume.png";
import bag from "../icons/bag.png";
import profile from "../icons/user.png";
import { NavLink } from "react-router-dom";

const Links = [
	{
		to: "/",
		text: "Home",
		imageSRC: house,
	},
	{
		to: "/campaign",
		text: "Campaign",
		imageSRC: volume,
	},
	{
		to: "/products",
		text: "Products",
		imageSRC: bag,
	},
	{
		to: "/customers",
		text: "Customers",
		imageSRC: profile,
	},
];

const Sidebar = () => (
	<StyledSidebar>
		<div className="sidebar">
			<div className="logo">
				<img src={zocket} alt="zocket-icon" width={45} height={45} />
			</div>
			{Links.map((el) => (
				<NavLink key={el.text} to={el.to} className="nav-item">
					<img src={el.imageSRC} alt={el.imageSRC} />
					<p>{el.text}</p>
				</NavLink>
			))}
		</div>
	</StyledSidebar>
);

export default Sidebar;
