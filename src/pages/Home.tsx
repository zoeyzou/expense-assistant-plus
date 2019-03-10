import * as React from 'react';
import Card from 'src/components/Card';
import SunIcon from 'src/components/Icons/SunIcon';
import Flex from 'src/components/Flex';

type HomeProps = {};

const Home: React.FunctionComponent<HomeProps> = props => {
  return (
    <Flex flexFlow='column' padding='calc(20px + 5vh) calc(20px + 5vw)'>
      <Card>
        <SunIcon size='calc(100px + 10vh)' />
      </Card>
    </Flex>
  );
};

export default Home;
