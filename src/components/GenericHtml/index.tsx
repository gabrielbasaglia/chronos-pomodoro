import styles from './styles.module.css';

type childrenProps = {
  children: React.ReactNode;
};

export function GenericHtml({ children }: childrenProps) {
  return <div className={styles.genericHtml}>{children}</div>;
}
