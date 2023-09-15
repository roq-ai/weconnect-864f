interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Owner', 'Administrator', 'Team Member'],
  tenantName: 'Organization',
  applicationName: 'WeConnect',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Join a video conference.',
    'Leave a video conference.',
    'View the details of a video conference.',
  ],
  ownerAbilities: [
    'Manage the Organization',
    'Invite Administrators and Team Members to the Organization',
    'Remove Administrators and Team Members from the Organization',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/9afcc5e5-0759-4f80-93a1-680fa07702bf',
};
