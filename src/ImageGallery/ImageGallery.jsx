import css from './ImageGallery.module.css'
import ImageCard from '../ImageCard/ImageCard'

const ImageGallery = ({images}) => {
  return (
    <ul className={css.ul}>
      {images.map(image => (
        <li
          key={image.id}
          className={css.li}>
          <ImageCard image={image}/>
	</li>
      ))}

</ul>
  )
}

export default ImageGallery