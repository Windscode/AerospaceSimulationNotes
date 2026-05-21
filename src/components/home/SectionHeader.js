import React from 'react';
import styles from './SectionHeader.module.css';

export default function SectionHeader({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={`${styles.header} ${align === 'center' ? styles.center : ''}`}>
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
