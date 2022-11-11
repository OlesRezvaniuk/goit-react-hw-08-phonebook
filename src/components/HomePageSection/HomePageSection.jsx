import { useSelector } from 'react-redux';
import {
  PageTitle,
  Container,
  LinkStyled,
  ReactText,
  LinkStyledCont,
} from './HomePageSection.styled';
import { selectorToken, selectorUserName } from 'redux/Auth/Selectors';

export const HomePageSection = () => {
  const token = useSelector(selectorToken);
  const userName = useSelector(selectorUserName);
  return (
    <section style={{ textAlign: 'center' }}>
      <Container>
        <PageTitle>
          <span style={{ color: '#3f75aa' }}>P</span>honebook
        </PageTitle>
        <img
          alt="gif"
          height="200px"
          src="https://thumbs.gfycat.com/MatureGiganticAlbertosaurus-size_restricted.gif"
        ></img>
        {token !== null ? (
          <>
            <p>
              <span style={{ fontWeight: '500', fontSize: '18px' }}>
                {userName}
              </span>
              <br />
              You are logined
            </p>
            <LinkStyledCont to="/contacts">
              <p>continue?</p>
            </LinkStyledCont>
          </>
        ) : (
          <>
            <LinkStyled to="login">Sing In</LinkStyled>
            <span style={{ color: '#81a9d0' }}>/</span>
            <LinkStyled to="register">Try now!</LinkStyled>
          </>
        )}
        <p style={{ fontWeight: '500', fontSize: '16px', marginTop: '60px' }}>
          Fast, Secure and Mobile Friendly
          <ReactText>
            {' '}
            <img
              style={{ marginRight: 5 }}
              width="15px"
              alt="react-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
            ></img>
            React Application
          </ReactText>
        </p>
        <br />
      </Container>
    </section>
  );
};
