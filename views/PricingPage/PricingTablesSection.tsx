import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import PricingCard from 'components/PricingCard';
import SectionTitle from 'components/SectionTitle';

export default function PricingTablesSection() {
  return (
    <Wrapper>
      <SectionTitle>Flexible pricing for agile teams</SectionTitle>
      <AutofitGrid>
        <PricingCard
          title="free"
          description="Give us a try for free"
          benefits={['see news', 'individual relevant']}
        >
          $0<span>/month</span>
        </PricingCard>
        <PricingCard
          title="Starter"
          description="Best for individual news creators"
          benefits={[ 'All free user benifits','Create News articles ', 'Upvote and downVote news articles in your area', 'Unlimited news topic in depth read', 'Rewards for creation and verification of news']}
          isOutlined
        >
          $29<span>/month</span>
        </PricingCard>
        <PricingCard
          title="Premium"
          description="Best for organizations"
          benefits={[
            'get regular unlimited news articles',
            'get saas product to generate personalised newsletters',
            'get free verification from team to help you be more reliable'
          ]}
        >
          $79<span>/month</span>
        </PricingCard>
      </AutofitGrid>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 8rem;
  }
`;
