import styles from "../../styles/ServicesImage.module.css";

// interace for props
interface ServicesImageProp {
  image: string;
  alt: string;
}

// component to render the image on services page
const ServicesImage: React.FC<ServicesImageProp> = ({ image, alt }) => {
  return (
    <>
      <img src={image} alt={alt} className={styles.Image} />
    </>
  );
};

export default ServicesImage;
