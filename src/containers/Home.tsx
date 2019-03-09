import * as React from 'react';
import Card from 'src/components/Card';
import SunIcon from 'src/components/Icons/SunIcon';
import HomeWrapper from 'src/components/HomeWrapper';

type HomeProps = {};

const Home: React.FunctionComponent<HomeProps> = props => {
  return (
    <HomeWrapper>
      <Card>
        <SunIcon size='calc(100px + 10vh)' />
      </Card>
    </HomeWrapper>
  );
};

export default Home;
