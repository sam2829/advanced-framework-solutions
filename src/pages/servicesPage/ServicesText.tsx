import styles from "../../styles/ServicesText.module.css";

interface ServiceTextProps {
  title: string;
  description: string;
}

// component to render the text on services page
const ServicesText: React.FC<ServiceTextProps> = ({ title, description }) => {
  return (
    <>
      <h5 className={styles.Title}>{title}</h5>
      <p className={styles.Description}>{description}</p>
    </>
  );
};

export default ServicesText;
