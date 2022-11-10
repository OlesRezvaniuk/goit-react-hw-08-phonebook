import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const HomePage = () => {
  const token = useSelector(state => state.auth.token);
  const userName = useSelector(state => state.auth.user.name);
  return (
    <section style={{ textAlign: 'center' }}>
      <h1>Phonebook</h1>
      <img
        alt="gif"
        height="200px"
        src="https://thumbs.gfycat.com/MatureGiganticAlbertosaurus-size_restricted.gif"
      ></img>
      <p>Fast, Secure and Mobile Friendly React Application</p>
      {token !== null ? (
        <>
          <p>{userName} You are logined</p>
          <Link to="/contacts">
            <p>continue?</p>
          </Link>
        </>
      ) : (
        <>
          <Link to="login">Sing Up</Link>
          <br />
          <span>or</span>
          <br />
          <Link to="register">Try now!</Link>
        </>
      )}
    </section>
  );
};
