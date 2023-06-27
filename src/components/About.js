import React from 'react';
import { Collapsible, CollapsibleItem } from 'react-materialize';
import { Navbar, NavItem, Icon } from 'react-materialize'
function About() {
  return (
    <div className='about'>
      <Collapsible accordion={false}>
      <CollapsibleItem header="The Film"><Icon left></Icon> 
          <p>Here you can see the player card, which consists of over 14 movie file Pokemon.</p>
        </CollapsibleItem>
        <CollapsibleItem header="Nation"><Icon left></Icon>
          <p>Japan</p>
        </CollapsibleItem>
        <CollapsibleItem header="Daliy News"><Icon left></Icon>
          <ul>
            <li><strong>Satoshi Tajiri</strong> - Author</li>
            <li><strong>Tsunekazu Ishihara </strong> - Expand the Pokemon universe</li>
          </ul>
        </CollapsibleItem>
      </Collapsible>
    </div>
  );
}

export default About;