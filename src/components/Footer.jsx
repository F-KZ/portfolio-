import { EMAIL, SOCIAL_NETWORKS } from '../lib/config';
import { SocialNetworks } from './atom/SocialNetwork';
import { Typography } from './atom/Typography';
import { DrawSection } from './draw';

export const Footer = () => {
  return (
    <div className='lg:flex lg:justify-around lg:flex-row-reverse '>
    <DrawSection/>
    <footer className="flex flex-col items-center gap-8 p-4 p-8 lg:w-[500px] ">
      <Typography variant="h2">Contact me !</Typography>
      <div className="flex flex-col items-center gap-2">
        <Typography variant="body2">
          I’ll be happy to chat with you about a potential job or a freelance
        </Typography>
        <a className="text-base underline text-primary" href={`mailto:${EMAIL}`}>
          {EMAIL}
        </a>
        <SocialNetworks socialNetworks={SOCIAL_NETWORKS} />
      </div>
    </footer>
    </div>
  );
  
};
