import React from 'react'
import styled from 'styled-components';

const StyledReadyCard = styled.div`
	border: 1.5px solid #f5f5f5;
	height: 366.48580932617324px;
	width: 288.9394836425792px;
	left: 452.93951416015625px;
	top: 793.99169921875px;
	border-radius: 15px;

	:hover {
		border: 1.5px solid #0f6eff;
	}

	.profile-image {
		height: 42.49110412597656px;
		width: 42.49110412597656px;
		left: 183.12103843688965px;
		top: 446.626953125px;
		border-radius: 0px;

		border: 1.3px solid #ffffff;
	}

	.headerGroup {
		display: flex;
		flex-direction: row;
	}

	.titleGroup {
		padding-left: 8.5px;
		display: flex;
		flex-direction: column;
	}

	.title {
		color: #2b23a5;

		font-family: Gilroy-SemiBold;
		font-size: 16px;
		line-height: 23px;
		letter-spacing: 0em;
		text-align: left;
	}

	.sub-title {
		color: #767676;

		font-family: Gilroy-Medium;
		font-size: 10px;
		line-height: 20px;
		letter-spacing: 0em;
		text-align: left;
	}

	.content {
		padding-top: 10.62px;
		padding-bottom: 10.62px;
		font-family: Gilroy-Medium;
		font-size: 14px;
		line-height: 20px;
		letter-spacing: 0em;
		text-align: left;
	}

	.cardGroup {
		padding: 19.12px;
	}
`;

const ReadyCard = ({ image, content, title, profile, sub_title }) => {
  return (
		<StyledReadyCard>
			<div className="cardGroup">
				<div className="headerGroup">
					<div className="profile-image">
						<img src={profile} alt="user-profile" />
					</div>
					<div className="titleGroup">
						<div className="title">{title}</div>
						<div className="sub-title">{sub_title}</div>
					</div>
				</div>
				<div className="content">{content}</div>
				<div className="imageGroup">
					<img src={image} alt="cake" />
					<div>
						<div>
							{title}
						</div>
					</div>
				</div>
			</div>
		</StyledReadyCard>
	);
}

export default ReadyCard;