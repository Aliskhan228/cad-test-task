import styled from "styled-components";

const Footer = () => {
	const FooterWrapper = styled.footer`
		text-align: center;
		padding: 3em;
		font-size: 1.5rem;

		@media (max-width: 768px) {
			font-size: 1rem;
		}
	`

  return <FooterWrapper>CAD Exchanger 2024</FooterWrapper>;
};
export default Footer;
