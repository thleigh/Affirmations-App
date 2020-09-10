import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Welcome from '../components/Welcome';
import About from '../components/About';
import Resources from '../components/Resources'
import './style.css';

const SEL = 'custom-section';
const SECTION_SEL = `.${SEL}`;

class FullPage extends React.Component {
  constructor(props) {
    console.log(props);
    super();
    this.state = {
      fullpages: [
        {
          page: <Welcome user={props.user}/>
          
        },
        {
          page: <Resources />
        },
        {
          page: <About />,
        }
      ],
    };
    this.setLatandLong = this.setLatandLong.bind(this)
  }

  setLatandLong(lat, lng) {
    this.setState({
      lat: lat,
      lng: lng
    })
  }

  render() {
    const { fullpages } = this.state;

    if (!fullpages.length) {
      return null;
    }

    return (
      <div className="App">
        <ReactFullpage

          // API KEY
          licenseKey={'SCROLL_KEY'}
          // the page names in the url set as #
          anchors={['Welcome', 'Resources', 'About']}
          sectionSelector={SECTION_SEL}
          // navigation dots on the right
          navigation
          // Scroll speed
          scrollingSpeed = {700}

          render={comp => (
            <ReactFullpage.Wrapper>
              {fullpages.map(({page}) => (
                <div className={SEL}>
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