import css from './ImageCard.module.css'


const ImageCard = ({ image }) => {
  const { url, alt_description } = image;
  return (
    <div className={css.div}>
      <img
        className={css.img}
        src={url.small}
        alt={alt_description}
      />
    </div>
  )
}

export default ImageCard