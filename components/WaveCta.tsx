import NextLink from 'next/link';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import SectionTitle from 'components/SectionTitle';
import { useNewsletterModalContext } from 'contexts/newsletter-modal.context';
import { media } from 'utils/media';
import WaveImage from '../public/wave.svg'
export default function WaveCta() {
  const { setIsModalOpened } = useNewsletterModalContext();

  return (
    <>
      <img src = {WaveImage}/>
      <CtaWrapper>
        <Container>
          <Title>Be amongst the ellite members join and get information that matters</Title>
          <CustomButtonGroup>
            <Button onClick={() => setIsModalOpened(true)}>
              Sign Up for early access <span>&rarr;</span>
            </Button>
            {/* <NextLink href="/features" passHref>
              <OutlinedButton transparent>
                Features <span>&rarr;</span>
              </OutlinedButton>
            </NextLink> */}
          </CustomButtonGroup>
        </Container>
      </CtaWrapper>
    </>
  );
}

const CtaWrapper = styled.div`
  background-image: linear-gradient( #fed8c8,#b1eee5);
  margin-top: -1rem;
  padding-bottom: 16rem;

  ${media('<=tablet')} {
    padding-top: 8rem;
  }
`;

const Title = styled(SectionTitle)`
  color: rgb(var(--textSecondary));
  margin-bottom: 4rem;
`;

const OutlinedButton = styled(Button)`
  border: 1px solid rgb(var(--textSecondary));
  color: rgb(var(--textSecondary));
`;

const CustomButtonGroup = styled(ButtonGroup)`
  justify-content: center;
`;
