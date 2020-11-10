import React, { useEffect, useState } from "react";
import styles from '../styles/Home.module.css'

const GatheringsComponent = ({ invites }) => {
  console.log('invites: ', invites);
  return <>
  <h1>Upcoming Gatherings</h1>
  {invites && !invites.statusCode && invites.map((invite, i) => (
    <div key={i}>
    <h2>{invite.title}</h2>
    <h3>Where?</h3>
    <p>{invite.setting}</p>
    <h3>Why?</h3>
    <p>{invite.purpose}</p>
    <h3>How?</h3>
    <p>{invite.rules}</p>
    ---
    </div>
    ))
  }
  </>
};

export default GatheringsComponent
