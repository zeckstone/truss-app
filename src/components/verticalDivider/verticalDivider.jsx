import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import MuiGrid from '@mui/material/Grid';
// import Divider from '@mui/material/Divider';
import {
  ReflexContainer,
  ReflexSplitter,
  ReflexElement
} from 'react-reflex';
import 'react-reflex/styles.css';

// const Grid = styled(MuiGrid)(({ theme }) => ({
//   width: '100%',
//   ...theme.typography.body2,
//   '& [role="separator"]': {
//     margin: theme.spacing(0, 2),
//   },
// }));

export default function VerticalDividerText() {
  // const content = (
  //   <div>
  //     {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
  //  Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
  //  Sed malesuada lobortis pretium. this is just testing. this is just testing. this is just testing. 
  //  this is just testing. this is just testing. this is just testing. this is just testing. 
  //  this is just testing. this is just testing. this is just testing. this is just testing. 
  //  this is just testing. this is just testing. this is just testing. this is just testing.`}
  //   </div>
  // );

  // return (
  //   <Grid container>
  //     <Grid item xs>
  //       {content}
  //     </Grid>
  //     <Divider orientation="vertical" flexItem>
  //       |
  //     </Divider>
  //     <Grid item xs>
  //       {content}
  //     </Grid>
  //   </Grid>
  // );

  return (
    <div className='wrapper'>
      <ReflexContainer orientation="vertical">

        <ReflexElement className="left-pane">
          <div className="pane-content">
            <label>
              Left Pane (resizable)
            </label>
          </div>
        </ReflexElement>

        <ReflexSplitter/>

        <ReflexElement className="right-pane"
          // minSize="200"
          // maxSize="800"
        >
          <div className="pane-content">
            <label>
              Right Pane (resizable)
              <br/>
              <br/>
              minSize = 200px
              <br/>
              maxSize = 800px
            </label>
          </div>
        </ReflexElement>

      </ReflexContainer>
    </div>
  );
}