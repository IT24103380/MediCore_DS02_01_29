import { appRoles, normalizeAppRole } from '@/constants/auth';

export function getSalesPermissions(role?: string | null) {
  const normalizedRole = normalizeAppRole(role);

  const canRead =
    normalizedRole === appRoles.admin ||
    normalizedRole === appRoles.pharmacist ||
    normalizedRole === appRoles.cashier;

  const canSell = canRead;

  const canRefund =
    normalizedRole === appRoles.admin ||
    normalizedRole === appRoles.pharmacist;

  return {
    role: normalizedRole,
    canRead,
    canSell,
    canRefund,
  };
}