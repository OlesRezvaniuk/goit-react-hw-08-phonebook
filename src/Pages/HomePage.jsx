import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <section style={{ textAlign: 'center' }}>
      <h1>Phonebook</h1>
      <img
        alt="gif"
        height="200px"
        src="https://thumbs.gfycat.com/MatureGiganticAlbertosaurus-size_restricted.gif"
      ></img>
      <p>Fast, Secure and Mobile Friendly React Application</p>
      <Link to="register">Try it now!</Link>
    </section>
  );
};
