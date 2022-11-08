export const LoginPage = () => {
  return (
    <>
      <h1>Log in to Phonebook</h1>

      <form>
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
        <label class="LoginForm_label__fufSi">
          <span>Password</span>
          <input
            type="password"
            name="password"
            placeholder="Your password"
            aria-label="Input for your password"
            // required=""
            // value=""
          />
        </label>
        <br />
        <button>Log in</button>
      </form>
    </>
  );
};
