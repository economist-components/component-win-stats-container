import chai from 'chai';
const should = chai.should();
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';

import StatsContainer from '..';

describe('StatsContainer', () => {

  it('is compatible with React.Component', () => {
    StatsContainer.should.be.a('function');
  });

  it('renders a React element', () => {
    React.isValidElement(<StatsContainer stats={[]} />).should.equal(true);
  });

  describe('Rendering', () => {

    const renderer = createRenderer();
    it('renders a StatsContainer section with no header, stats or content', () => {
      renderer.render(
        <StatsContainer
          stats={[]}
        />, {});
      const renderOutput = renderer.getRenderOutput();
      renderOutput.type.should.equal('section');
      should.not.exist(renderOutput.props.children[0]);
      renderOutput.props.children[1].type.name.should.equal('StatsContainerStats');
      renderOutput.props.children[1].props.stats.should.deep.equal([]);
      renderOutput.props.children[2].type.should.equal('div');
      renderOutput.props.children[2].props.className.should.equal('stats-container__content');
      should.not.exist(renderOutput.props.children[2].props.children);
    });

    it('renders a StatsContainer section with a header, some stats and some content', () => {
      renderer.render(
        <StatsContainer
          title="Country Name"
          stats={[
            {
              key: 'Stat A',
              value: 'Value A',
            },
            {
              key: 'Stat B',
              value: 'Value B',
            },
          ]}
        >
          <p>Sentence one.</p>
          <p>Sentence two.</p>
        </StatsContainer>, {});
      const renderOutput = renderer.getRenderOutput();
      renderOutput.type.should.equal('section');
      renderOutput.props.children[0].type.name.should.equal('StatsContainerHeader');
      renderOutput.props.children[0].props.title.should.equal('Country Name');
      renderOutput.props.children[1].type.name.should.equal('StatsContainerStats');
      renderOutput.props.children[1].props.stats.should.deep.equal([
        {
          key: 'Stat A',
          value: 'Value A',
        },
        {
          key: 'Stat B',
          value: 'Value B',
        },
      ]);
      renderOutput.props.children[2].type.should.equal('div');
      renderOutput.props.children[2].props.className.should.equal('stats-container__content');
      renderOutput.props.children[2].props.children.should.deep.equal([
        <p>Sentence one.</p>,
        <p>Sentence two.</p>,
      ]);
    });

  });

});
