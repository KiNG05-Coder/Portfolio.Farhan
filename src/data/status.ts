/* ============================================================
   PROJECT STATUS SYSTEM
   One consistent vocabulary used across the whole site.
   ============================================================ */

export type Status = 'working' | 'tested' | 'in-development' | 'planned';

export const statusMeta: Record<
  Status,
  { label: string; description: string }
> = {
  working: {
    label: 'Working',
    description: 'Implemented and functioning on the robot.',
  },
  tested: {
    label: 'Tested',
    description: 'Implemented and verified through testing.',
  },
  'in-development': {
    label: 'In development',
    description: 'Actively being built; not yet complete.',
  },
  planned: {
    label: 'Planned',
    description: 'Designed but not yet implemented.',
  },
};
