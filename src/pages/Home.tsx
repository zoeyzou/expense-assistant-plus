import * as React from 'react';
import Card from 'src/components/Card';
import SunIcon from 'src/components/Icons/SunIcon';
import Flex from 'src/components/Flex';
import WelcomeTextContainer from 'src/containers/WelcomeTextContainer';

const Home: React.FunctionComponent<{}> = () => {
  return (
    <Flex flexFlow='column' padding='calc(20px + 5vh) calc(20px + 10vw)'>
      <Card>
        <Flex flexFlow='column' padding='5vh 0 0'>
          <SunIcon size='calc(100px + 10vh)' />

          <WelcomeTextContainer />
        </Flex>
      </Card>
    </Flex>
  );
};

export default Home;
