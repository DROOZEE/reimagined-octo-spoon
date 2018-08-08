import React from "react";
import styled from 'styled-components';

function CompanyLogo(props) {
	return (
		<CompanyLogoStyled {...props}>
			{props.children}
		</CompanyLogoStyled>
	);
}

export default CompanyLogo;

const CompanyLogoStyled = styled.div`
	display: inline-block;
`
