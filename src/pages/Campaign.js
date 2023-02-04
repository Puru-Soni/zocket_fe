import React from "react";
import { NavLink } from "react-router-dom";
import Dashboard from "./Dashboard";
import { GrAddCircle } from "react-icons/gr";
import { BsFacebook, BsGoogle, BsYoutube } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import Blueberry from "../icons/campCakes/1.png";
import chocolate from "../icons/campCakes/2.png";
import Browine from "../icons/campCakes/3.png";
import Pumpkin from "../icons/campCakes/4.png";
import Cup from "../icons/campCakes/5.png";
import { StyledCampaign } from "./Campaign.Styled";

const Campaign = () => {
	return (
		<div>
			<Dashboard />
			<StyledCampaign className="camp-container">
				<div className="camp-headers">
					<div className="camp-head">
						<h1>Your Campaigns</h1>
						<p>Check the list of campaigs you created</p>
					</div>
					<div className="create-new-camp">
						<NavLink to="/createNewCampaign">
							<GrAddCircle /> <span>Create New Campaign</span>
						</NavLink>
					</div>
				</div>
			</StyledCampaign>
			<StyledCampaign>
				<div className="camp-tabels campaign--main-body-filters">
					<div className="campaign--main-body-filters-platform">
						<label>Platform:</label>
						<select>
							<option>All Platform</option>
							<option>Facebook</option>
							<option>Youtube</option>
							<option>Google</option>
						</select>
					</div>
					<div className="campaign--main-body-filters-status">
						<label>Status:</label>
						<select>
							<option>All Status</option>
							<option>Live now</option>
							<option>Paused</option>
							<option>Exhausted</option>
						</select>
					</div>
					<div className="campaign--main-body-filters-date-range">
						<select>
							<option>Last 30 days</option>
							<option>Last 15 days</option>
							<option>Last 7 days</option>
						</select>
					</div>
				</div>
				<div className="campaign--main-body-table">
					<table>
						<thead className="thead-camp">
							<tr>
								<th>
									<input type="checkbox" />
								</th>
								<th>On/Off</th>
								<th>Campaign</th>
								<th>Date Range</th>
								<th>Clicks</th>
								<th>Budget</th>
								<th>Location</th>
								<th>Platform</th>
								<th>Status</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<input type="checkbox" />
								</td>
								<td>
									<label className="switch">
										<input type="checkbox" />
										<span className="slider round"></span>
									</label>
								</td>
								<td>
									<div className="campaign--main-body-table-rows-campaign-col">
										<img src={Blueberry} alt="cake" />
										<div>
											<p>
												<strong>Blueberry cake Campaign</strong>
											</p>
											<p>Created on 14 july</p>
										</div>
									</div>
								</td>
								<td>25 jul 2020 - 01 Aug 2020</td>
								<td>300</td>
								<td>INR 3,400</td>
								<td>Chennai</td>
								<td className="campaign--main-body-table-rows-platform-col">
									<BsFacebook />
								</td>
								<td className="campaign--main-body-table-rows-status-col">
									<p>Live now</p>
								</td>
								<td className="campaign--main-body-table-rows-actions-col">
									<button>
										<BiEditAlt />
									</button>
									<button>
										<RiDeleteBinLine />
									</button>
								</td>
							</tr>

							<tr>
								<td>
									<input type="checkbox" />
								</td>
								<td>
									<label className="switch">
										<input type="checkbox" />
										<span className="slider round"></span>
									</label>
								</td>
								<td>
									<div className="campaign--main-body-table-rows-campaign-col">
										<img src={chocolate} alt="cake" />
										<div>
											<p>
												<strong>Chocolate cake campaign</strong>
											</p>
											<p>Created on 20 Jan</p>
										</div>
									</div>
								</td>
								<td>25 Jul 2020 - 01 Aug 2020</td>
								<td>210</td>
								<td>INR 3,400</td>
								<td>Coimbatore</td>
								<td className="campaign--main-body-table-rows-platform-col">
									<BsFacebook />
								</td>
								<td className="campaign--main-body-table-rows-status-col">
									<p>Paused</p>
								</td>
								<td className="campaign--main-body-table-rows-actions-col">
									<button>
										<BiEditAlt />
									</button>
									<button>
										<RiDeleteBinLine />
									</button>
								</td>
							</tr>

							<tr>
								<td>
									<input type="checkbox" />
								</td>
								<td>
									<label className="switch">
										<input type="checkbox" />
										<span className="slider round"></span>
									</label>
								</td>
								<td>
									<div className="campaign--main-body-table-rows-campaign-col">
										<img src={Browine} alt="cake" />
										<div>
											<p>
												<strong>Browine cake campaign</strong>
											</p>
											<p>Created on 12 jan</p>
										</div>
									</div>
								</td>
								<td>25 Jul 2020 - 01 Aug 2020</td>
								<td>123</td>
								<td>INR 3,400</td>
								<td>Erode</td>
								<td className="campaign--main-body-table-rows-platform-col">
									<BsFacebook />
								</td>
								<td className="campaign--main-body-table-rows-status-col">
									<p>Exhausted</p>
								</td>
								<td className="campaign--main-body-table-rows-actions-col">
									<button>
										<BiEditAlt />
									</button>
									<button>
										<RiDeleteBinLine />
									</button>
								</td>
							</tr>

							<tr>
								<td>
									<input type="checkbox" />
								</td>
								<td>
									<label className="switch">
										<input type="checkbox" />
										<span className="slider round"></span>
									</label>
								</td>
								<td>
									<div className="campaign--main-body-table-rows-campaign-col">
										<img src={Pumpkin} alt="cake" />
										<div>
											<p>
												<strong>Pumpkin cake campaign</strong>
											</p>
											<p>Created on 28 feb</p>
										</div>
									</div>
								</td>
								<td>25 Jul 2020 - 01 Aug 2020</td>
								<td>435</td>
								<td>INR 3,400</td>
								<td>Coimbatore</td>
								<td className="campaign--main-body-table-rows-platform-col1">
									<BsYoutube />
								</td>
								<td className="campaign--main-body-table-rows-status-col">
									<p>Live now</p>
								</td>
								<td className="campaign--main-body-table-rows-actions-col">
									<button>
										<BiEditAlt />
									</button>
									<button>
										<RiDeleteBinLine />
									</button>
								</td>
							</tr>

							<tr>
								<td>
									<input type="checkbox" />
								</td>
								<td>
									<label className="switch">
										<input type="checkbox" />
										<span className="slider round"></span>
									</label>
								</td>
								<td>
									<div className="campaign--main-body-table-rows-campaign-col">
										<img src={Cup} alt="cake" />
										<div>
											<p>
												<strong>Cup cake campaign</strong>
											</p>
											<p>Created on 10 Jul</p>
										</div>
									</div>
								</td>
								<td>25 Jul 2020 - 01 Aug 2020</td>
								<td>123</td>
								<td>INR 3,400</td>
								<td>Coimbatore</td>
								<td className="campaign--main-body-table-rows-platform-col">
									<BsGoogle />
								</td>
								<td className="campaign--main-body-table-rows-status-col">
									<p>Live now</p>
								</td>
								<td className="campaign--main-body-table-rows-actions-col">
									<button>
										<BiEditAlt />
									</button>
									<button>
										<RiDeleteBinLine />
									</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</StyledCampaign>
		</div>
	);
};

export default Campaign;
