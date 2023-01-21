import styled from 'styled-components';

export const Container = styled.div`
	background-color: #27282F;
	color: #FFF;
	min-height: 100vh;
	
`;

export const Area = styled.div`
	margin: auto;
	max-width: 980px;
	padding: 30px 0;
`;

export const Header = styled.div`
	margin: 0;
	padding: 0;
	text-align: center;
	margin-bottom: 30px;
	font-size: 30px;
`;

export const ScreenWarning = styled.div`
	text-align: center;

	.emoji {
		font-size: 50px;
		margin-bottom: 20px;
	}
`;

export const PhotoList = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 10px;

	@media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    padding-right: 10px;
    padding-left: 10px
  	}

  	@media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding-right: 10px;
    padding-left: 10px
  	}

  	@media (max-width: 425px) {
    grid-template-columns: repeat(1, 1fr);
    padding-right: 10px;
    padding-left: 10px
  	}
`;

export const UploadForm = styled.form`
	background-color: #3D3F43;
	padding: 15px;
	border-radius: 10px;
	margin-bottom: 30px;


	input[type=submit] {
		background-color: #756DF4;
		border: 0;
		color: #FFF;
		padding: 8px 16px;
		font-size: 15px;
		border-radius: 10px;
		margin: 0 20px;
		cursor: pointer;
		transition: all ease 0.5s;

		&:hover {
			background-color: #a19cf7;
		}
	
	}


`;
