import css from './Button.module.css';

export const Button = ({ text }) => {
  return <button className={css.btn}>{text}</button>;
};
