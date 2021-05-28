const Login = ({ handleSubmit, email, setEmail, password, setPassword }) => {
  return (
    <form onSubmit={handleSubmit} className="mt-3">
      <div className="form-group mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form-group mb-3">
        <label className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button disabled={!email || !password} className="btn btn-primary">
        Log in
      </button>
    </form>
  );
};

export default Login;

/*
In this example we a re using regular bootstrap classes. We created a form and passed some props
but it does not yet have functionalities. If you wanted to continue working on this form
you would need to import the component in another component, for example tha page you want to display it
and create the functionality.
*/
