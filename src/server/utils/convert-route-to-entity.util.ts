const mapping: Record<string, string> = {
  conferences: 'conference',
  organizations: 'organization',
  participants: 'participant',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
