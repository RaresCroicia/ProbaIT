import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import insta from '../img/insta.svg'
import twitch from '../img/twitch.svg'
import facebook from '../img/facebook.svg'

export default function Footer() {
  return (
    <MDBFooter className='text-center text-lg-left'>

      <div className='text-center p-3 text-light' style={{ backgroundColor: 'rgba(6, 17, 79, 1)' }}>
      <div>
        <a href="https://www.instagram.com/lsacbucuresti/">
            <img margin="auto" src={insta}></img>
        </a>
        <a href="https://www.twitch.tv/lsac_bucuresti">
        <img margin="auto" src={twitch}></img>
        </a>
        <a href="https://www.facebook.com/LsacBucuresti/">
        <img margin="auto" src={facebook}></img>
        </a>

      </div>
      Copyright 2022 | La muncă, nu la întins mâna.
      </div>
    </MDBFooter>
  );
}