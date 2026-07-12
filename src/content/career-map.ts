export const careerMap = {
  title: '20+ years across four lanes',
  intro:
    'Consulting, leadership, test architecture, and build/release/platform work overlap across the timeline. The bars show where each lane shows up, not exclusive job titles.',
  startYear: 2003,
  endYear: 2026,
  lanes: [
    {
      id: 'consulting',
      label: 'Consulting',
      color: '#f59e0b',
      spans: [
        { start: 2003, end: 2006 },
        { start: 2009, end: 2016 },
        { start: 2019, end: 2021 },
      ],
    },
    {
      id: 'leadership',
      label: 'Leadership',
      color: '#ec4899',
      spans: [
        { start: 2006, end: 2012 },
        { start: 2019, end: 2021 },
        { start: 2024, end: 2026 },
      ],
    },
    {
      id: 'test-architect',
      label: 'Test architecture',
      color: '#14b8a6',
      spans: [
        { start: 2009, end: 2021 },
        { start: 2021, end: 2026 },
      ],
    },
    {
      id: 'build-release',
      label: 'Build & Release / platform',
      color: '#6366f1',
      spans: [
        { start: 2016, end: 2019 },
        { start: 2021, end: 2026 },
      ],
    },
  ],
} as const;
