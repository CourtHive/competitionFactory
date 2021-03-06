import { getAppliedPolicies as getDrawAppliedPolicies } from '../../../drawEngine/governors/policyGovernor/getAppliedPolicies';
import {
  getAppliedPolicies as getTournamentAppliedPolicies,
  getEventAppliedPolicies,
} from '../policyGovernor/getAppliedPolicies';

import {
  MISSING_POLICY_TYPE,
  POLICY_NOT_FOUND,
} from '../../../constants/errorConditionConstants';

export function getPolicyDefinition({
  tournamentRecord,
  drawDefinition,
  policyType,
  event,
}) {
  if (!policyType) return { error: MISSING_POLICY_TYPE };

  if (drawDefinition) {
    const { appliedPolicies } =
      getDrawAppliedPolicies({ drawDefinition }) || {};
    const policy = appliedPolicies[policyType];
    const policyDefinition = policy && { [policyType]: policy };
    if (policyDefinition) return { policyDefinition };
  }

  if (event) {
    const { appliedPolicies } = getEventAppliedPolicies({ event }) || {};
    const policy = appliedPolicies[policyType];
    const policyDefinition = policy && { [policyType]: policy };
    if (policyDefinition) return { policyDefinition };
  }

  if (tournamentRecord) {
    const { appliedPolicies } =
      getTournamentAppliedPolicies({ tournamentRecord }) || {};
    const policy = appliedPolicies[policyType];
    const policyDefinition = policy && { [policyType]: policy };
    if (policyDefinition) return { policyDefinition };
  }

  return { error: POLICY_NOT_FOUND };
}
