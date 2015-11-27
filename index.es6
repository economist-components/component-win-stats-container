/* eslint react/no-multi-comp: 0 */
import React, { PropTypes } from 'react';
import StatsContainerHeader from './header';
import StatsContainerStats from './stats';

function StatsContainer({ className = 'stats-container', itemType = 'Thing', title, stats = [], children }) {
  let headerEl = null;
  if (title) {
    headerEl = <StatsContainerHeader title={title} />;
  }
  return (
    <section className={className} itemScope itemType={`http://schema.org/${itemType}`}>
      {headerEl}
      <StatsContainerStats className={className} stats={stats} />
      <div className={`${className}__content`}>
        {children}
      </div>
    </section>
  );
}

function Country({ className = 'country', itemType = 'Country', title, stats = [], children }) {
  return (
    <StatsContainer
      className={className}
      itemType={itemType}
      title={title}
      stats={stats}
    >
      {children}
    </StatsContainer>
  )
}

if (process.env.NODE_ENV !== 'production') {
  const statsContainerPropTypes = {
    className: PropTypes.string,
    itemType: PropTypes.string,
    ...(StatsContainerHeader.propTypes || {}),
    ...(StatsContainerStats.propTypes || {}),
    children: PropTypes.node,
  };
  StatsContainer.propTypes = statsContainerPropTypes;
  Country.propTypes = statsContainerPropTypes;
}

export default StatsContainer;
export { Country };
