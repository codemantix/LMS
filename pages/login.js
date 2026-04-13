import { useState } from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaEye, FaEyeSlash } from 'react-icons/fa';
import Image from "next/image";
import styles from "../styles/Login.module.css";

export default function LogInPage() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // TODO: Add your actual login API call here
    alert("Login successful! (Demo)");
  };

  return (
    <div className={styles.page}>
      {/* Background logo / brand mark  */}
       <div className={styles.bgLogoWrapper}>
         <img
        src="/assets/logo.png"
        alt=""
        width={1484}
        height={1484}
        className={styles.bgLogo}
      />
       </div>
      <div className={styles.formWrapper}>
        <div className={styles.card}>
          <div className={styles.logoCenter}>
            <Image
              src="/assets/logo.png"
              alt="Logo"
              width={125}
              height={125}
            />
          </div>

          <div className={styles.headerSection}>
            <h1 className={styles.title}>Welcome Back!</h1>
            <p className={styles.subtitle}>
              Please Login to your account
            </p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputRow}>
              <Image
                src='/assets/ci_mail.png'
                alt="Mail Icon"
                width={34}
                height={34}
              />
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Email"
                className={styles.input}
              />
            </div>

            <div className={styles.inputRowRelative}>
              <Image
                src='/assets/uil_padlock.png'
                alt="Padlock Icon"
                width={34}
                height={34}
              />
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className={styles.inputPassword}
              />
              <button
                type="button"
                className={styles.eyeButton}
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>
            </div>

            <div className={styles.rememberRow}>
              <label htmlFor="remember-me" className={styles.checkboxLabel}>
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className={styles.checkbox}
                />
                <span className={styles.rememberText}>Remember me</span>
              </label>
              <Link href="/forgot-password" className={styles.forgotLink}>
                Forgot your password?
              </Link>
            </div>

            <div>
              <button type="submit" className={styles.submitBtn}>
                Login
              </button>
            </div>
          </form>

          {/* Social Buttons */}
          <div className={styles.socialSection}>
            <button type="button" className={styles.socialBtn}>
              <FcGoogle size={20} />
              <span className={styles.socialBtnText}>Sign up with Google</span>
            </button>

            <button type="button" className={styles.socialBtn}>
              <FaApple size={20} className="text-black" />
              <span className={styles.socialBtnText}>Sign up with Apple</span>
            </button>
          </div>

          {/* Register Link */}
          <p className={styles.registerText}>
            New to Codemantixe Collective?{' '}
            <Link href="/signup" className={styles.registerLink}>
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}