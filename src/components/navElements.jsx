import { Link } from 'react-router-dom';
import classnames from 'classnames';
import styled from 'styled-components';

export const NavLink = ({ to, activeClassName, ...rest }) => {
  const linkClasses = classnames('text-gray-800', 'flex', 'items-center', 'no-underline', 'px-4', 'h-full', {
    'text-black': activeClassName // Add 'text-black' class when activeClassName is provided
  });

  return (
    <Link to={to} className={linkClasses} {...rest} />
  );
};

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
@media screen and (max-width: 768px) {
	display: none;
}
`;
