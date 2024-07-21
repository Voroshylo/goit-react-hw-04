// import { useEffect, useState } from "react";
// import axios from 'axios'
import css from './SearchBar.module.css'


const SearchBAr = () => {
  return (
    <div className={css.div}>
      <form >
    <label className={css.label}>
      <span className={css.cpan}>
        Search
      </span>
    </label>
    < input
    className={css.input}
          placeholder='search'
          type='text'
          name='topic'/>
      </form>
    </div>
  )
}

export default SearchBAr