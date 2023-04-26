import { ReactComponent as HomeLink } from '../../images/Home.svg';
import { ReactComponent as StatisticsLink } from '../../images/Statistics.svg';
import { ReactComponent as CurrencyLink } from '../../images/Currency.svg';
import { NavContainer, NavButton, Link, LinkName } from './Navigation.styled';

export const Navigation = () => {
  return (
    <NavContainer>
      <NavButton>
        <Link to="/dashboard">
          <HomeLink alt="Link to home page" />
          <LinkName>Home</LinkName>
        </Link>
      </NavButton>
      <NavButton>
        <Link to="/diagram">
          <StatisticsLink alt="Link to statistics page" />
          <LinkName>Statistics</LinkName>
        </Link>
      </NavButton>
      <NavButton>
        <Link to="/currency">
          <CurrencyLink alt="Link to currency page" />
        </Link>
      </NavButton>
    </NavContainer>
  );
};
