import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Welcome from '../components/Welcome';
import About from '../components/About';
import './style.css';

const SEL = 'custom-section';
const SECTION_SEL = `.${SEL}`;

class FullPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullpages: [
        {
          page: <Welcome />
        },
        {
          page: <About />
        },
        {
          page: <About />,
        }
      ],
    };
  }

  render() {
    const { fullpages } = this.state;

    if (!fullpages.length) {
      return null;
    }

    return (
      <div className="App">
        <ReactFullpage
          debug /* Debug logging */

          // fullpage options
          licenseKey={'SCROLL_KEY'}
          navigation
          anchors={['firstPage', 'secondPage', 'thirdPage']}
          sectionSelector={SECTION_SEL}

          render={comp => (
            <ReactFullpage.Wrapper>
              {fullpages.map(({ page }) => (
                <div key={page} className={SEL}>
                  <div className="fullPageBody">{page}</div>
                </div>
              ))}
            </ReactFullpage.Wrapper>
          )}
        />
      </div>
    );
  }
}

export default FullPage