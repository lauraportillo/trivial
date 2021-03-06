// Styles
import styled from 'styled-components';

const Container = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  font-size: 14px;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 200;
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

const Item = styled.li`
  text-transform: uppercase;
  margin-left: 5px;
  margin-right: 5px;
  @media (min-width: 768px) {
    margin-left: 8px;
    margin-right: 8px;
  }

  &:hover {
    color: #fff;
    text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px green, 0 0 82px green, 0 0 92px green,
      0 0 102px green, 0 0 151px green;
    transform: scale(1.2);
    transition: all 0.1s ease-in-out;
  }
`;

const Icon = styled.a`
  color: white;
`;

const Footer = () => {
  return (
    <footer>
      <Container>
        <Item>
          <Icon
            href="https://www.linkedin.com/in/laura-portillo-rodr%C3%ADguez-21965a86/"
            target="_blank"
            rel="noopener noreferrer"
            title="linkedin"
          >
            <i className="fa fa-linkedin" alt="linkedin icon"></i>
          </Icon>
        </Item>
        <Item>
          <Icon href="https://github.com/lauraportillo" target="_blank" rel="noopener noreferrer" title="github">
            <i className="fa fa-github-alt" alt="github icon"></i>
          </Icon>
        </Item>
        <Item>
          <Icon href="https://twitter.com/LauraPo02860847" target="_blank" rel="noopener noreferrer" title="twitter">
            <i className="fa fa-twitter" alt="twitter icon"></i>
          </Icon>
        </Item>
        <Item>
          <Icon href="mailto:lauraportillo.ark@gmail.com" target="_blank" rel="noopener noreferrer" title="email">
            <i className="fa fa-envelope" alt="envelope icon"></i>
          </Icon>
        </Item>
      </Container>
    </footer>
  );
};

export default Footer;
