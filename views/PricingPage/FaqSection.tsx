import styled from 'styled-components';
import Accordion from 'components/Accordion';
import SectionTitle from 'components/SectionTitle';

export default function FaqSection() {
  return (
    <Wrapper>
      <SectionTitle>Frequently asked question</SectionTitle>
      <Accordion title="What if my account does not work like I wanted to?">
        Refund for reporting an issue under a week.
      </Accordion>
      <Accordion title="Can free user create content.">
        No, its for premium users only.
      </Accordion>
      <Accordion title="Can organizations recieve newsletter.">
        Yes, organization specific news letters also exist.
      </Accordion>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 15rem;
  & > *:not(:first-child) {
    margin-top: 3rem;
  }
`;
