import React, { Component } from 'react';
import Intercom from 'react-intercom';
import config from 'config:@sanity/intercom';
import styles from './IntercomTool.css';

class IntercomTool extends Component {
  render() {
    const {
      appId = false,
      email = 'No email set',
      name = 'No name set'
    } = config;
    if (!appId)
      return (
        <div className={styles.tool}>
          You need to set an Intercom Id in the plugin settings in
          config/intercom
        </div>
      );
    return (
      <div className={styles.tool}>
        <p>Use the Intercom widget in the bottom right corner to contact us.</p>
        <ul>
          Settings in config/intercom.js
          <li>appId: {appId}</li>
          <li>name: {name}</li>
          <li>email: {email}</li>
        </ul>
        <Intercom appID={appId} />
      </div>
    );
  }
}

export default IntercomTool;
