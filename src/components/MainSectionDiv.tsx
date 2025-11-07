import styles from "../styles/MainSectionDiv.module.css";

interface Props {
  children: React.ReactNode;
}

const MainSectionDiv: React.FC<Props> = ({ children }) => {
  return <main className={styles.Main}>{children}</main>;
};

export default MainSectionDiv;
