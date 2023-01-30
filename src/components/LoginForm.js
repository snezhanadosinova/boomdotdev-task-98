import styles from "./LoginForm.module.css";

function LoginForm() {
  return (
    <div className={styles.form}>
      <form>
        <label htmlFor="username" className={styles.label}>
          Username
        </label>
        <input type="text" name="username" className={styles.input} />
        <br />

        <label htmlFor="password" className={styles.label}>
          Password
        </label>
        <input type="password" name="password" className={styles.input} />
        <br />

        <button type="submit" className={styles.submit}>
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
