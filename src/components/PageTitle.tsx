import styles from "../styles/PageTitle.module.css";
import image from "../images/navbar-bg.png";

// props
interface PageTitleProps {
  title: string;
  subtitle?: string;
}

// component to render a page title
const PageTitle: React.FC<PageTitleProps> = ({ title, subtitle }) => {
  return (
    <header
      className={styles.HeaderContainer}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={styles.Overlay}></div>
      <div className={styles.TitleContent}>
        <h1 className={styles.Title}>{title}</h1>
        {subtitle && <p className={styles.Text}>{subtitle}</p>}
      </div>
    </header>
  );
};

export default PageTitle;
