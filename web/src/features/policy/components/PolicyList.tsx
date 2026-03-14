import type { PolicyItem } from "@/types/policy";
import { PolicyCard } from "./PolicyCard";
import { EmptyState } from "@/components/shared/EmptyState";

type Props = {
  policies: PolicyItem[];
  showScope?: boolean;
  emptyTitle?: string;
  emptyDesc?: string;
};

export function PolicyList({ policies, showScope, emptyTitle, emptyDesc }: Props) {
  if (policies.length === 0) {
    return (
      <EmptyState
        title={emptyTitle ?? "暂无政策数据"}
        description={emptyDesc ?? "当前范围暂无收录的政策条目"}
      />
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {policies.map((p) => (
        <PolicyCard key={p.id} policy={p} showScope={showScope} />
      ))}
    </div>
  );
}
