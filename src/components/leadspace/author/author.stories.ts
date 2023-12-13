/**
 * Copyright Kyndryl, Inc. 2023eadspace-author
 */

import { html } from 'lit';
import './author';
import twitterIcon from '@carbon/icons/es/logo--twitter/24';
import linkedinIcon from '@carbon/icons/es/logo--linkedin/32';
import linkIcon from '@carbon/icons/es/link/24';

export default {
  title: 'Components/Leadspace/Author',
  component: `kd-leadspace-author`,
  argTypes: {
    name: {
      control: { type: 'text' },
      description: '',
    },

    title: {
      control: { type: 'text' },
      description: '',
    },

    industry: {
      control: { type: 'text' },
      description: 'Industry',
    },

    location: {
      control: { type: 'text' },
      description: 'Location',
    },

  }, 
};


export const leadspaceAuthor = {
  args: {
    name: html`First Name Last Name`,
    title: html`Global Practice Leader, Digital Workplace Services`,
    media: html`
          <img
            src="https://s7d1.scene7.com/is/image/kyndryl/silo_man_1x1?qlt=85&wid=800&ts=1701960605966&dpr=off"
            alt="image alt text"
            class="kd-layout__aspect-ratio--1x1 kd-layout__object-fit--cover"
          />
        `,
    socialmedia: html`
            <kd-icon .icon=${linkedinIcon}></kd-icon>
            `,
    industry: html` Some Industry`,
    location: html`location`,
  },
  render: (args: any) => {
    return html`
      <kd-leadspace-author>
        
        <span slot="name">${args.name}</span>
        <span slot="title">${args.title}</span>
        <span slot="industry">${args.industry}</span>
        <span slot="location">${args.location}</span>
        <div slot="media">${args.media}</div>
        <span slot="socialmedia">${args.socialmedia}</span>
      </kd-leadspace-author>
    `;
  },
};