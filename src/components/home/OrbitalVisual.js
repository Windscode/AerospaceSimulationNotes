import React from 'react';
import styles from './OrbitalVisual.module.css';

export default function OrbitalVisual() {
  return (
    <div className={styles.visual} aria-hidden="true">
      <div className={styles.glow} />
      <div className={styles.orbitField}>
        <span className={styles.core} />
        <span className={styles.orbitA} />
        <span className={styles.orbitB} />
        <span className={styles.orbitC} />
        <span className={styles.nodeA} />
        <span className={styles.nodeB} />
        <span className={styles.nodeC} />
      </div>
      <div className={styles.telemetryCard}>
        <div className={styles.cardHeader}>SIMULATION STACK</div>
        <div className={styles.row}><span>Orbit</span><strong>Propagating</strong></div>
        <div className={styles.row}><span>Dynamics</span><strong>Closed-loop</strong></div>
        <div className={styles.row}><span>Validation</span><strong>Cross-check</strong></div>
        <div className={styles.wave}><i /><i /><i /><i /><i /></div>
      </div>
    </div>
  );
}
