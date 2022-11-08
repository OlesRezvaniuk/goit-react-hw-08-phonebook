export const RegisterPage = () => {
  return (
    <>
      <h1>Create your account</h1>
      <form>
        <label>
          <span>Name</span>
          <input
            type="name"
            name="name"
            placeholder="Your name"
            aria-label="Input for your name"
            // required=""
            // value=""
          />
        </label>
        <br />
        <label>
          <span>Email</span>
          <input
            type="email"
            name="email"
            placeholder="Your e-mail"
            aria-label="Input for your email"
            // required=""
            // value=""
          />
        </label>
        <br />
        <label>
          <span>Password</span>
          <input
            type="password"
            name="password"
            placeholder="Should be at least 7 characters"
            aria-label="Input for your password"
            // required=""
            // value=""
          />
        </label>
        <br />
        <button>Sing Up</button>
      </form>
    </>
  );
};
