import type { PolicyItem, PolicyScope } from "@/types/policy";
import { mockPolicies } from "@/mock";

export function getPoliciesByScope(scope: PolicyScope): PolicyItem[] {
  return mockPolicies.filter((p) => p.scope_type === scope);
}

export function getPoliciesByProvince(province: string): PolicyItem[] {
  return mockPolicies.filter(
    (p) => p.scope_type === "province" && p.province === province
  );
}

export function getAllProvinces(): string[] {
  return [
    ...new Set(
      mockPolicies
        .filter((p) => p.scope_type === "province" && p.province)
        .map((p) => p.province!)
    ),
  ].sort();
}

export function getNationalPolicies(): PolicyItem[] {
  return getPoliciesByScope("national");
}

export function getProvincePolicies(): PolicyItem[] {
  return getPoliciesByScope("province");
}
