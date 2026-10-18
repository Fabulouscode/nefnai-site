export interface Photo {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export const photos = {
  conference: { src: '/photos/conference-2024.webp', width: 1630, height: 1114, alt: 'NEFNAI members and guests at the 2024 Annual General Conference in Makurdi' },
  hall: { src: '/photos/engagement-hall.webp', width: 2040, height: 1530, alt: 'Participants at a NEFNAI community engagement' },
  speaker: { src: '/photos/speaker.webp', width: 2166, height: 1482, alt: 'A NEFNAI member addressing participants at a NEFNAI event' },
  presentation: { src: '/photos/presentation.webp', width: 2012, height: 1496, alt: 'NEFNAI members making a presentation to a guest' },
  audience: { src: '/photos/members-audience.webp', width: 2126, height: 1594, alt: 'NEFNAI members and community members at an engagement' },
  registration: { src: '/photos/registration.webp', width: 2030, height: 1344, alt: 'NEFNAI members signing up participants at an outreach' },
  welfare1: { src: '/photos/welfare-presentation-1.webp', width: 1040, height: 468, alt: 'NEFNAI members presenting a welfare scheme benefit to a member’s family' },
  welfare2: { src: '/photos/welfare-presentation-2.webp', width: 960, height: 960, alt: 'A NEFNAI Special Welfare Scheme benefit being presented to a beneficiary' },
  welfare3: { src: '/photos/welfare-presentation-3.webp', width: 780, height: 1040, alt: 'A family receiving a NEFNAI Special Welfare Scheme benefit' },
  welfareFamily: { src: '/photos/welfare-family.webp', width: 1080, height: 486, alt: 'A family in Ushongo LGA supported by the NEFNAI Special Welfare Scheme' },
  tenForTen: { src: '/photos/ten-for-ten-flyer.jpg', width: 1254, height: 1254, alt: 'The Nigeria 10 for 10 Challenge flyer for local government autonomy' },
} satisfies Record<string, Photo>;
