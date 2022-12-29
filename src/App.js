import { Fragment } from 'react';
import './App.css';
import { Gymcard } from './components/gym-card';
import { Scroller } from './components/scrollable wrapper';

function App() {
  return (
    <Fragment>
    {/* <div class="horizontal-scroll">
      <div class="horizontal-scroll__item"><img src='https://api.lorem.space/image/face?w=150&amp;amp;amp;amp;' className='img' alt='dummy'></img></div>
      <div class="horizontal-scroll__item"><img src='https://loremflickr.com/320/240/dog' className='img'  alt='dummy'></img></div>
      <div class="horizontal-scroll__item"><img src='https://api.lorem.space/image/face?w=150&amp;amp;amp;amp;' alt='dummy' className='img'></img></div>
      <div class="horizontal-scroll__item"><img src='https://loremflickr.com/g/320/240/paris' className='img' alt='dummy'></img></div>
      <div class="horizontal-scroll__item"><img src='https://api.lorem.space/image/face?w=150&amp;amp;amp;amp;'  alt='dummy'className='img'></img></div>
      <div class="horizontal-scroll__item"><img src='https://loremflickr.com/320/240/brazil,rio' className='img' alt='dummy'></img></div>
      <div class="horizontal-scroll__item"><img src='https://api.lorem.space/image/face?w=150&amp;amp;amp;amp;'  alt='dummy'className='img'></img></div>
      <div class="horizontal-scroll__item"><img src='https://loremflickr.com/320/240/paris,girl/all' className='img' alt='dummy'></img></div>
      <div class="horizontal-scroll__item"><img src='https://api.lorem.space/image/face?w=150&amp;amp;amp;amp;' className='img' alt='dummy'></img></div>
      <div class="horizontal-scroll__item"><img src='https://loremflickr.com/g/320/240/paris,girl/all' className='img' alt='dummy'></img></div>
      <div class="horizontal-scroll__item"><img src='https://api.lorem.space/image/face?w=150&amp;amp;amp;amp;' className='img' alt='dummy'></img></div>
      <div class="horizontal-scroll__item"><img src='https://source.unsplash.com/random' className='img' alt='dummy'></img></div>
      <div class="horizontal-scroll__item"><img src='https://api.lorem.space/image/face?w=150&amp;amp;amp;amp;'  alt='dummy'className='img'></img></div>
      <div class="horizontal-scroll__item"><img src='https://source.unsplash.com/random' className='img' alt='dummy'></img></div>
      <div class="horizontal-scroll__item"><img src='https://api.lorem.space/image/face?w=150&amp;amp;amp;amp;'  alt='dummy'className='img'></img></div>
      <div class="horizontal-scroll__item"><img src='https://source.unsplash.com/random' className='img' alt='dummy'></img></div>
      <div class="horizontal-scroll__item"><img src='https://api.lorem.space/image/face?w=150&amp;amp;amp;amp;'  alt='dummy'className='img'></img></div>
      <div class="horizontal-scroll__item"><img src='https://source.unsplash.com/random' className='img' alt='dummy'></img></div>
      <div class="horizontal-scroll__item"><img src='https://api.lorem.space/image/face?w=150&amp;amp;amp;amp;' alt='dummy' className='img'></img></div>
      <div class="horizontal-scroll__item"><img src='https://source.unsplash.com/random' className='img' alt='dummy'></img></div>
    </div> */}
    <Scroller></Scroller>
    {/* <Gymcard></Gymcard> */}
    </Fragment>
  );
}

export default App;
