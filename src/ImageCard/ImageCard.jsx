import css from './ImageCard.module.css'


const ImageCard = ({ image }) => {
  const { urls, alt_description } = image;
  return (
    <div className={css.div}>
      <img
        className={css.img}
        src={urls.small}
        alt={alt_description}
      />
    </div>
  )
}

export default ImageCard