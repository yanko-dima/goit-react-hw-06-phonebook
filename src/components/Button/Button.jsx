import css from './Button.module.css';

export const Button = ({ type = 'button', children }) => {
  return <button className={css.btn}>{children}</button>;
};
