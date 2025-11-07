import styles from "../styles/SubHeading.module.css";

// sub heading props
interface SubHeadingProps {
  title: string;
}

// component to render sub heading anywhere on site
const SubHeading: React.FC<SubHeadingProps> = ({ title }) => {
  return <h2 className={styles.SubHeading}>{title}</h2>;
};

export default SubHeading;
