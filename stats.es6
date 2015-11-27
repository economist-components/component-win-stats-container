import React, { PropTypes } from 'react';
import StatsList from '@economist/component-stats';

function StatsContainerStats({ className = 'stats-container', stats = [] }) {
  return (
    <aside className={`${className}__stats`}>
      <StatsList stats={stats} />
    </aside>
  );
}

if (process.env.NODE_ENV !== 'production') {
  StatsContainerStats.propTypes = {
    ...(StatsList.propTypes || {}),
  };
}

export default StatsContainerStats;
