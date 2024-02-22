import React, { useRef, useState, useEffect } from "react";
import logo2 from "../../../assets/img/logo-2.png";
import logo22x from "../../../assets/img/logo-2@2x.png";
import { useCreateUserMutation } from "../../../redux/customerApi";
import Loading from "../../utils/Loading";
import { useNavigate } from "react-router-dom";

function SignupUser() {
  const emailRef = useRef();
  const accountIdRef = useRef();
  const accountNameRef = useRef();
  const passowrdRef = useRef();
  const userIdRef = useRef();
  const confirmPasswordRef = useRef();
  const [error, setError] = useState();
  const [
    createUser,
    { isLoading: isCreating, isSuccess, isError, error: customerError },
  ] = useCreateUserMutation();
  const navigate = useNavigate();

  useEffect(() => {
    if (customerError && isError) {
      console.log(customerError);
      setError(customerError.data.message);
    } else {
      if (isSuccess) navigate("/signin");
    }
  }, [isSuccess, isError, customerError]);

  const handleSignup = async (e) => {
    e.preventDefault();

    const AccountId = accountIdRef.current.value;
    const userId = userIdRef.current.value;
    const AccountName = accountNameRef.current.value;
    const email = emailRef.current.value;
    const password = passowrdRef.current.value;
    const confirmPassowrd = confirmPasswordRef.current.value;

    if (AccountId === "" || AccountId == null) {
      setError("Account Id is required");
      return;
    }
    if (userId === "" || userId == null) {
      setError("User Id is required");
      return;
    }
    if (AccountName === "" || AccountName == null) {
      setError("Account name is required");
      return;
    }

    if (email === "" || email == null) {
      setError("Email is required");
      return;
    }
    if (password === "" || password == null) {
      setError("Please provide valid password");
      return;
    }

    if (password === confirmPassowrd) {
      const formData = { AccountId, userId, AccountName, email, password };
      await createUser(formData);
    } else {
      setError("Passwords do not match");
      return;
    }
  };
  return (
    <main className="w-full main main--start p-sign-up pt-20">
      <section className="sign" id="sign">
        <div className="c-grid">
          <div className="section__wrapper">
            <div className="c-section" data-align="center">
              <div className="c-section__head">
                <div className="logo logo--header">
                  <a className="logo__link" href="/">
                    <img
                      className="logo__image"
                      src={logo2}
                      srcSet={`${logo22x} 2x`}
                      alt="Logotype"
                    />
                  </a>
                </div>
              </div>
              <div className="c-section__body">
                <h5 className="c-section__title">Sign up</h5>
                <p className="c-section__desc">
                  Fill in your details below and continue signing up
                </p>
                <form className="c-form" autoComplete="off">
                  <div className="c-form__group">
                    <div>
                      <div className="c-form__field">
                        <label className="c-form__label" htmlFor="account_id">
                          User Id*
                        </label>
                        <input
                          ref={userIdRef}
                          className="c-form__input"
                          type="text"
                          name="account_id"
                          id="account_id"
                          placeholder="Type your User Id..."
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <div className="c-form__field">
                        <label className="c-form__label" htmlFor="account_id">
                          Account Id*
                        </label>
                        <input
                          ref={accountIdRef}
                          className="c-form__input"
                          type="text"
                          name="account_id"
                          id="account_id"
                          placeholder="Type your Account Id..."
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <div className="c-form__field">
                        <label className="c-form__label" htmlFor="Account_Name">
                          Account name*
                        </label>
                        <input
                          ref={accountNameRef}
                          className="c-form__input"
                          type="text"
                          name="Account_Name"
                          id="Account_Name"
                          placeholder="Type your last name..."
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="c-form__field">
                    <label className="c-form__label" htmlFor="email">
                      Email*
                    </label>
                    <input
                      ref={emailRef}
                      className="c-form__input"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Type your email address..."
                      required
                    />
                  </div>
                  <div className="c-form__group">
                    <div>
                      <div className="c-form__field">
                        <label className="c-form__label" htmlFor="password">
                          Password*
                        </label>
                        <input
                          ref={passowrdRef}
                          className="c-form__input"
                          type="password"
                          name="password"
                          id="password"
                          placeholder="Type your password..."
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <div className="c-form__field">
                        <label
                          className="c-form__label"
                          htmlFor="confirm_password"
                        >
                          Confirm password*
                        </label>
                        <input
                          ref={confirmPasswordRef}
                          className="c-form__input"
                          type="password"
                          name="confirm_password"
                          id="confirm_password"
                          placeholder="Retype your password..."
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-red-500">{error && <p> {error}</p>}</div>
                  <div className="c-form__field c-form__field--btn">
                    <div className="c-btn__wrapper">
                      {isCreating && <Loading text={"Signing up..."} />}
                      {!isCreating && (
                        <button
                          onClick={handleSignup}
                          className="c-btn"
                          data-btn-color="blue"
                          data-btn-size="full"
                          data-btn-fw="600"
                          data-btn-round="half"
                        >
                          Create account
                        </button>
                      )}
                    </div>
                  </div>
                  <p className="sign__link">
                    Already have an account? <a href="/signin">Sign in</a>
                  </p>
                  <div className="c-form__field c-form__field--info">
                    <p className="c-form__info">
                      By clicking “Create account” you agree to our
                      <a href="#">Terms of Service</a> and
                      <a href="#">Privacy Policy</a>
                    </p>
                  </div>
                </form>
              </div>
              <div className="c-section__footer">
                <p className="c-section__info">
                  Having trouble? Contact us at{" "}
                  <a href="mailto:support@prospectiq.ai">
                    support@prospectiq.ai
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SignupUser;
